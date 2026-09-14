"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Pause, Play } from "lucide-react"
import { HomeCloseCta } from "@/components/home-close-cta"

const SLIDE_MS = 5200
const FADE_MS = 700

const slides = [
  {
    src: "/product-tour/01-signin.png",
    alt: "LawBey sign-in screen with the demo account ready",
    number: "01",
    title: "Open the workspace",
    caption: "Sign in once. The Bahamian legal research desk is waiting.",
  },
  {
    src: "/product-tour/02-question.png",
    alt: "LawBey composer with a question about paid vacation leave under the Employment Act",
    number: "02",
    title: "Ask in plain English",
    caption:
      "How much paid vacation leave does the Employment Act give an employee in The Bahamas?",
  },
  {
    src: "/product-tour/03-cited-answer.png",
    alt: "LawBey answer citing the Employment Act with a sources control",
    number: "03",
    title: "Read a grounded answer",
    caption:
      "LawBey retrieves Part IV of the Employment Act, then explains the entitlement.",
  },
  {
    src: "/product-tour/04-sources.png",
    alt: "Expanded source list showing three Employment Act files",
    number: "04",
    title: "Inspect the sources",
    caption:
      "Three Employment Act files sit under the answer. Claims you can verify.",
  },
  {
    src: "/product-tour/05-source-document.png",
    alt: "Source document modal open on Employment Act Chapter 321A",
    number: "05",
    title: "Open the Act itself",
    caption:
      "The retrieved document — Chapter 321A — with a relevance score on the excerpt.",
  },
  {
    src: "/product-tour/06-feedback.png",
    alt: "Good Response feedback tooltip on a LawBey answer",
    number: "06",
    title: "Keep the loop honest",
    caption: "Mark what landed. LawBey is a research tool, not a black box.",
  },
] as const

export function HomeProductTour() {
  const [index, setIndex] = useState(0)
  const [fading, setFading] = useState<number | null>(null)
  const [progress, setProgress] = useState(0)
  const [userPaused, setUserPaused] = useState(false)
  const [hoverPaused, setHoverPaused] = useState(false)
  const [inView, setInView] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const progressRef = useRef(0)
  const indexRef = useRef(0)
  const playing = inView && !userPaused && !hoverPaused && !reduceMotion

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduceMotion(mq.matches)
    const onChange = () => setReduceMotion(mq.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!playing) return
    let last = performance.now()
    let frame = 0

    const tick = (now: number) => {
      const next = Math.min(1, progressRef.current + (now - last) / SLIDE_MS)
      last = now
      progressRef.current = next
      setProgress(next)
      if (next >= 1) {
        goTo((indexRef.current + 1) % slides.length)
        return
      }
      frame = window.requestAnimationFrame(tick)
    }

    frame = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(frame)
  }, [playing, index])

  function goTo(nextIndex: number) {
    const currentIndex = indexRef.current
    if (nextIndex === currentIndex) return
    setFading(currentIndex)
    indexRef.current = nextIndex
    progressRef.current = 0
    setProgress(0)
    setIndex(nextIndex)
    window.setTimeout(() => setFading(null), FADE_MS)
  }

  return (
    <section
      ref={sectionRef}
      id="product"
      className="scroll-mt-24 px-6 py-24 lg:px-8"
      aria-labelledby="product-tour-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.2em] uppercase text-amber font-mono mb-4">
            Inside the workspace
          </p>
          <h2
            id="product-tour-heading"
            className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-balance"
          >
            From a question to the statute.
          </h2>
          <p className="mt-4 text-ink/55 leading-relaxed max-w-xl">
            A real LawBey session on Bahamian vacation leave — asked, cited,
            and opened. This is what grounded research looks like.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <ol className="lg:col-span-4 flex flex-col gap-1 order-2 lg:order-1">
            {slides.map((slide, i) => {
              const active = i === index
              return (
                <li key={slide.number}>
                  <button
                    type="button"
                    onClick={() => goTo(i)}
                    aria-current={active ? "step" : undefined}
                    className={`w-full text-left rounded-xl px-4 py-3.5 transition-colors duration-300 cursor-pointer ${
                      active
                        ? "bg-white border border-ink/10 shadow-[0_8px_40px_rgba(17,24,39,0.06)]"
                        : "border border-transparent hover:bg-white/60"
                    }`}
                  >
                    <div className="flex items-baseline gap-3">
                      <span
                        className={`font-mono text-[11px] tracking-wide ${
                          active ? "text-amber" : "text-ink/35"
                        }`}
                      >
                        {slide.number}
                      </span>
                      <span
                        className={`text-sm font-medium ${
                          active ? "text-ink" : "text-ink/50"
                        }`}
                      >
                        {slide.title}
                      </span>
                    </div>
                    <div
                      className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                        active ? "grid-rows-[1fr] mt-2" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p
                          className={`text-sm text-ink/55 leading-relaxed pl-8 ${
                            active ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          {slide.caption}
                        </p>
                      </div>
                    </div>
                  </button>
                </li>
              )
            })}
          </ol>

          <div className="lg:col-span-8 order-1 lg:order-2 min-w-0">
            <div
              className="relative rounded-2xl border border-ink/10 bg-white shadow-[0_24px_80px_rgba(17,24,39,0.10)] overflow-hidden"
              onMouseEnter={() => setHoverPaused(true)}
              onMouseLeave={() => setHoverPaused(false)}
            >
              <div className="flex items-center gap-3 px-4 h-11 border-b border-ink/10 bg-[#F7F3EB]">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E4DDD1]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E4DDD1]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
                </div>
                <div className="flex-1 flex justify-center">
                  <span className="font-mono text-[10px] tracking-wide uppercase text-ink/40 bg-white/70 border border-ink/10 rounded-full px-3 py-1">
                    beta.lawbey.com
                  </span>
                </div>
                {!reduceMotion && (
                  <button
                    type="button"
                    onClick={() => setUserPaused((value) => !value)}
                    className="flex h-7 w-7 items-center justify-center rounded-full text-ink/40 hover:text-ink hover:bg-white/80 transition-colors cursor-pointer"
                    aria-label={
                      userPaused ? "Play walkthrough" : "Pause walkthrough"
                    }
                  >
                    {userPaused || !playing ? (
                      <Play className="h-3.5 w-3.5" />
                    ) : (
                      <Pause className="h-3.5 w-3.5" />
                    )}
                  </button>
                )}
              </div>

              <div className="relative aspect-[1024/640] bg-white overflow-hidden">
                {slides.map((slide, i) => {
                  const active = i === index
                  const outgoing = i === fading
                  if (!active && !outgoing) return null
                  return (
                    <div
                      key={slide.src}
                      className="absolute inset-0 transition-opacity ease-out"
                      style={{
                        opacity: active ? 1 : 0,
                        transitionDuration: reduceMotion ? "0ms" : `${FADE_MS}ms`,
                        zIndex: active ? 2 : 1,
                      }}
                    >
                      <div
                        className={`h-full w-full ${active ? "animate-tour-ken" : ""}`}
                        style={{
                          animationPlayState: playing ? "running" : "paused",
                          ["--tour-ms" as string]: `${SLIDE_MS}ms`,
                        }}
                      >
                        <Image
                          src={slide.src}
                          alt={active ? slide.alt : ""}
                          width={1024}
                          height={640}
                          priority={i === 0}
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="h-[3px] bg-ink/5">
                <div
                  className="h-full bg-amber origin-left"
                  style={{ transform: `scaleX(${reduceMotion ? (index + 1) / slides.length : progress})` }}
                />
              </div>
            </div>

            <HomeCloseCta
              placement="tour"
              eyebrow="Try it"
              title="See a grounded answer on this page."
              body="Ask one free question without an account. After the answer, create a free account to save the research and continue."
            />
          </div>
        </div>
      </div>
    </section>
  )
}
