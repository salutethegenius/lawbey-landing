type EventMap = {
  sample_prompt_clicked: { category: string }
  ask_submitted: { placement: "chip" | "composer" }
  answer_completed: { duration_bucket: string; source_count: number }
  answer_failed: { reason: "gate" | "unavailable" }
  account_prompt_viewed: { placement: "composer" }
  signup_cta_clicked: {
    placement: "composer" | "pricing" | "tour" | "faq"
    destination: "beta"
  }
  pro_waitlist_clicked: { placement: "pricing" }
  api_access_clicked: { placement: "api" }
}

export function durationBucket(ms: number): string {
  if (ms < 2000) return "0-2s"
  if (ms < 5000) return "2-5s"
  if (ms < 10000) return "5-10s"
  if (ms < 20000) return "10-20s"
  return "20s+"
}

export function trackEvent<Name extends keyof EventMap>(
  name: Name,
  properties: EventMap[Name],
) {
  if (typeof window === "undefined") return
  if (process.env.NODE_ENV !== "production") return
  if (!process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN) return
  void import("posthog-js")
    .then((mod) => {
      const posthog = mod.default
      if (typeof posthog.capture !== "function") return
      posthog.capture(name, properties)
    })
    .catch(() => {
      // analytics must never block the product
    })
}
