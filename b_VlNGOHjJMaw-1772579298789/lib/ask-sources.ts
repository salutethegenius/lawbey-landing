export type AnswerSource = {
  name: string
  url?: string
  excerpt?: string
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null
}

function asString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value.trim() : undefined
}

function excerptFrom(value: unknown): string | undefined {
  if (typeof value === "string") return asString(value.slice(0, 280))
  if (Array.isArray(value) && typeof value[0] === "string") {
    return asString(value[0].slice(0, 280))
  }
  return undefined
}

function normalizeSource(value: unknown): AnswerSource | null {
  if (typeof value === "string") {
    const name = asString(value)
    return name ? { name } : null
  }

  const record = asRecord(value)
  if (!record) return null

  const nested = asRecord(record.source)
  const metadata = Array.isArray(record.metadata)
    ? asRecord(record.metadata[0])
    : asRecord(record.metadata)

  const name =
    asString(record.name) ??
    asString(record.title) ??
    asString(nested?.name) ??
    asString(nested?.id) ??
    asString(metadata?.source) ??
    asString(metadata?.name)

  if (!name) return null

  const url =
    asString(record.url) ??
    asString(nested?.url) ??
    asString(metadata?.url)

  const excerpt =
    excerptFrom(record.document) ??
    excerptFrom(record.content) ??
    excerptFrom(record.excerpt) ??
    excerptFrom(nested?.excerpt)

  return { name, url, excerpt }
}

function collectRawSources(parsed: unknown): unknown[] {
  const record = asRecord(parsed)
  if (!record) return []

  const buckets: unknown[] = []
  if (Array.isArray(record.sources)) buckets.push(...record.sources)
  if (record.type === "sources" && Array.isArray(record.data)) {
    buckets.push(...record.data)
  }

  const event = asRecord(record.event)
  if (Array.isArray(event?.data)) buckets.push(...event.data)
  if (Array.isArray(event?.sources)) buckets.push(...event.sources)

  const choices = Array.isArray(record.choices) ? record.choices : []
  const delta = asRecord(asRecord(choices[0])?.delta)
  if (Array.isArray(delta?.sources)) buckets.push(...delta.sources)

  return buckets
}

export function sourcesFromSsePayload(parsed: unknown): AnswerSource[] {
  const seen = new Set<string>()
  const next: AnswerSource[] = []
  for (const item of collectRawSources(parsed)) {
    const source = normalizeSource(item)
    if (!source || seen.has(source.name)) continue
    seen.add(source.name)
    next.push(source)
  }
  return next
}

export function mergeSources(
  current: AnswerSource[],
  incoming: AnswerSource[],
): AnswerSource[] {
  if (incoming.length === 0) return current
  const seen = new Set(current.map((source) => source.name))
  const next = [...current]
  for (const source of incoming) {
    if (seen.has(source.name)) continue
    seen.add(source.name)
    next.push(source)
  }
  return next
}
