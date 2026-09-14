import { ImageResponse } from "next/og"

export const alt = "LawBey — Ask anything about Bahamian law."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

async function loadFont(
  family: string,
  axis: string,
  text: string,
): Promise<ArrayBuffer> {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:${axis}&text=${encodeURIComponent(text)}`,
    { headers: { "User-Agent": "Mozilla/5.0" } },
  ).then((res) => res.text())

  const match = css.match(/src: url\(([^)]+)\)/)
  if (!match?.[1]) {
    throw new Error(`Could not load font ${family}`)
  }

  return fetch(match[1]).then((res) => res.arrayBuffer())
}

export default async function Image() {
  const headline = "Ask anything about Bahamian law."
  const sub = "LawBey retrieves real statutes and cases, then explains them."
  const wordmarkText = "LawBey"
  const fontText = `${headline}${sub}${wordmarkText}BAHAMIAN LEGAL RESEARCH`

  let fonts: { name: string; data: ArrayBuffer; weight: 400 | 600; style: "normal" | "italic" }[] = []
  try {
    const [cormorantSemi, cormorantItalic, barlow, dmMono] = await Promise.all([
      loadFont("Cormorant Garamond", "wght@600", fontText),
      loadFont("Cormorant Garamond", "ital,wght@1,400", "Bey"),
      loadFont("Barlow", "wght@400", fontText),
      loadFont("DM Mono", "wght@400", "BAHAMIAN LEGAL RESEARCH"),
    ])
    fonts = [
      { name: "Cormorant", data: cormorantSemi, weight: 600, style: "normal" },
      { name: "CormorantItalic", data: cormorantItalic, weight: 400, style: "italic" },
      { name: "Barlow", data: barlow, weight: 400, style: "normal" },
      { name: "DMMono", data: dmMono, weight: 400, style: "normal" },
    ]
  } catch {
    fonts = []
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#F0EBE1",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            opacity: 0.35,
          }}
        >
          {Array.from({ length: 22 }).map((_, i) => (
            <div
              key={i}
              style={{
                height: 28,
                width: "100%",
                borderBottom: "1px solid rgba(17,24,39,0.04)",
              }}
            />
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0 80px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 40 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 7,
                width: 56,
              }}
            >
              <div style={{ height: 4, width: "78%", background: "rgba(17,24,39,0.15)", borderRadius: 4 }} />
              <div style={{ height: 4, width: "88%", background: "rgba(17,24,39,0.15)", borderRadius: 4 }} />
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ height: 5, width: "86%", background: "#C8922A", borderRadius: 4 }} />
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 99,
                    background: "#C8922A",
                    marginLeft: -4,
                  }}
                />
              </div>
              <div style={{ height: 4, width: "70%", background: "rgba(17,24,39,0.12)", borderRadius: 4 }} />
              <div style={{ height: 4, width: "58%", background: "rgba(17,24,39,0.08)", borderRadius: 4 }} />
            </div>
            <div style={{ display: "flex", fontSize: 52, letterSpacing: -1, lineHeight: 1 }}>
              <span style={{ fontFamily: "Cormorant", fontWeight: 600, color: "#111827" }}>
                Law
              </span>
              <span
                style={{
                  fontFamily: "CormorantItalic",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "#C8922A",
                }}
              >
                Bey
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              fontFamily: "DMMono",
              fontSize: 16,
              letterSpacing: "0.22em",
              color: "#C8922A",
              marginBottom: 22,
            }}
          >
            BAHAMIAN LEGAL RESEARCH
          </div>

          <div
            style={{
              display: "flex",
              fontFamily: "Cormorant",
              fontSize: 64,
              fontWeight: 600,
              color: "#111827",
              textAlign: "center",
              lineHeight: 1.12,
              letterSpacing: -1.2,
              maxWidth: 980,
            }}
          >
            Ask anything about Bahamian law.
          </div>

          <div
            style={{
              display: "flex",
              fontFamily: "Barlow",
              fontSize: 26,
              color: "rgba(17,24,39,0.55)",
              marginTop: 20,
              textAlign: "center",
              maxWidth: 720,
            }}
          >
            LawBey retrieves real statutes and cases, then explains them.
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 40,
              width: 640,
              background: "#FFFFFF",
              border: "1px solid rgba(17,24,39,0.1)",
              borderRadius: 18,
              padding: "18px 22px",
              boxShadow: "0 8px 40px rgba(17,24,39,0.06)",
            }}
          >
            <div
              style={{
                display: "flex",
                fontFamily: "Barlow",
                fontSize: 22,
                color: "rgba(17,24,39,0.35)",
              }}
            >
              Ask about Bahamian law…
            </div>
            <div
              style={{
                display: "flex",
                width: 40,
                height: 40,
                borderRadius: 99,
                background: "#C8922A",
              }}
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts,
    },
  )
}
