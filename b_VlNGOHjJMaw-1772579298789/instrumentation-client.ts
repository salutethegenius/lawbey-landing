// Funnel to create in PostHog after the Marketplace project is live:
// ask_submitted → answer_completed → account_prompt_viewed → signup_cta_clicked
// Enable "cookieless server hash mode" on the PostHog project or cookieless events are dropped.

const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST

if (process.env.NODE_ENV === "production" && token && host) {
  void import("posthog-js")
    .then((mod) => {
      mod.default.init(token, {
        api_host: host,
        defaults: "2026-05-30",
        cookieless_mode: "always",
        person_profiles: "never",
        persistence: "memory",
        autocapture: false,
        capture_pageview: "history_change",
        capture_pageleave: false,
        disable_session_recording: true,
        sanitize_properties: (properties) => {
          const next = { ...properties }
          delete next.email
          delete next.$set
          delete next.$set_once
          delete next.prompt
          delete next.question
          delete next.answer
          delete next.content
          delete next.sources
          delete next.source_title
          delete next.source_titles
          return next
        },
      })
    })
    .catch(() => {
      // analytics must never block the product
    })
}
