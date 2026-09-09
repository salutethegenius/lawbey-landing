import { NextResponse } from "next/server"

const FREE_COOKIE = "lb_free_ask"
const BETA_COMPLETIONS =
  process.env.OPENWEBUI_URL ?? "https://beta.lawbey.com/api/chat/completions"

type ChatMessage = {
  role: string
  content: string
}

function gateResponse() {
  return NextResponse.json({ code: "gate" }, { status: 403 })
}

export async function POST(request: Request) {
  const apiKey = process.env.OPENWEBUI_API_KEY
  const model = process.env.OPENWEBUI_MODEL ?? "gpt-4.1-mini"

  if (!apiKey) {
    return NextResponse.json({ error: "Ask is not configured." }, { status: 500 })
  }

  const alreadyUsed = request.headers
    .get("cookie")
    ?.split(";")
    .some((part) => part.trim().startsWith(`${FREE_COOKIE}=1`))

  if (alreadyUsed) {
    return gateResponse()
  }

  let messages: ChatMessage[] = []
  try {
    const body = await request.json()
    messages = Array.isArray(body?.messages) ? body.messages : []
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 })
  }

  const userMessages = messages.filter(
    (m) => m?.role === "user" && typeof m.content === "string" && m.content.trim(),
  )

  if (userMessages.length === 0) {
    return NextResponse.json({ error: "Ask a question first." }, { status: 400 })
  }

  if (userMessages.length > 1) {
    return gateResponse()
  }

  const prompt = userMessages[0].content.trim().slice(0, 4000)

  let upstream: Response
  try {
    upstream = await fetch(BETA_COMPLETIONS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [{ role: "user", content: prompt }],
        stream: true,
      }),
    })
  } catch {
    return NextResponse.json(
      { error: "LawBey is unavailable right now." },
      { status: 502 },
    )
  }

  if (!upstream.ok || !upstream.body) {
    return NextResponse.json(
      { error: "LawBey is unavailable right now." },
      { status: 502 },
    )
  }

  const response = new NextResponse(upstream.body, {
    status: 200,
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  })

  response.cookies.set(FREE_COOKIE, "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24,
    path: "/",
  })

  return response
}
