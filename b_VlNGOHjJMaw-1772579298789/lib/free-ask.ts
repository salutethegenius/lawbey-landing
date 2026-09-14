import { FREE_ASK_TTL_MS, FREE_USED_KEY } from "@/lib/constants"

const LEGACY_FREE_USED_KEY = "lawbey_free_used"

export function readFreeAskUsed(): boolean {
  try {
    if (localStorage.getItem(LEGACY_FREE_USED_KEY) === "1") {
      localStorage.removeItem(LEGACY_FREE_USED_KEY)
      localStorage.setItem(FREE_USED_KEY, String(Date.now()))
      return true
    }

    const raw = localStorage.getItem(FREE_USED_KEY)
    if (!raw) return false
    const usedAt = Number(raw)
    if (!Number.isFinite(usedAt) || Date.now() - usedAt >= FREE_ASK_TTL_MS) {
      localStorage.removeItem(FREE_USED_KEY)
      return false
    }
    return true
  } catch {
    return false
  }
}

export function markFreeAskUsed() {
  try {
    localStorage.removeItem(LEGACY_FREE_USED_KEY)
    localStorage.setItem(FREE_USED_KEY, String(Date.now()))
  } catch {
    // ignore quota / private-mode failures
  }
}
