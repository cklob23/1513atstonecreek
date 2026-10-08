"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CtaBand } from "@/components/cta-band"
import { ResponsiveImage } from "@/components/responsive-image"
import { galleryAlt, galleryImages, type GalleryImageItem } from "@/lib/gallery-data"

const PAGE_SIZE = 24

function GalleryTile({
  item,
  index,
  onOpen,
  onFail,
}: {
  item: GalleryImageItem
  index: number
  onOpen: () => void
  onFail: (src: string) => void
}) {
  const [ready, setReady] = useState(false)
  const imgRef = useRef<HTMLImageElement | null>(null)

  const markReady = useCallback(() => setReady(true), [])
  const markFailed = useCallback(() => onFail(item.src), [item.src, onFail])

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setReady(true)
    }, 2500)
    return () => window.clearTimeout(timeoutId)
  }, [item.src])

  const revealDelay = `${Math.min(index, 11) * 80}ms`

  return (
    <button
      type="button"
      onClick={onOpen}
      className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-80 w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      {!ready && (
        <div
          className="absolute inset-0 gallery-placeholder gallery-shadow-sweep"
          style={{ animationDelay: `${index * 200}ms` }}
        />
      )}
      {ready && <div className="absolute inset-0 gallery-placeholder gallery-sweep-exit" />}
      <ResponsiveImage
        src={item.src}
        alt={galleryAlt(item)}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading={index < 6 ? "eager" : "lazy"}
        onLoad={markReady}
        onError={markFailed}
        imgRef={imgRef}
        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 gallery-photo-reveal`}
        style={{ animationDelay: revealDelay }}
      />
      <div className="absolute inset-0 bg-transparent group-hover:bg-venue-hover-overlay transition-colors duration-300" />
    </button>
  )
}

export function Gallery() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const [failed, setFailed] = useState<Set<string>>(new Set())
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const closeRef = useRef<HTMLButtonElement | null>(null)
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const lastFocusRef = useRef<HTMLElement | null>(null)

  const available = useMemo(
    () => galleryImages.filter((item) => !failed.has(item.src)),
    [failed],
  )

  const visibleImages = available.slice(0, visibleCount)
  const hasMore = visibleCount < available.length
  const lightboxItem = lightboxIndex !== null ? available[lightboxIndex] : null

  const handleFail = useCallback((src: string) => {
    setFailed((current) => {
      if (current.has(src)) return current
      const next = new Set(current)
      next.add(src)
      return next
    })
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
    lastFocusRef.current?.focus()
  }, [])

  const showPrev = useCallback(() => {
    setLightboxIndex((current) => {
      if (current === null || available.length === 0) return current
      return (current - 1 + available.length) % available.length
    })
  }, [available.length])

  const showNext = useCallback(() => {
    setLightboxIndex((current) => {
      if (current === null || available.length === 0) return current
      return (current + 1) % available.length
    })
  }, [available.length])

  useEffect(() => {
    if (lightboxIndex === null) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        closeLightbox()
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        showPrev()
      }
      if (event.key === "ArrowRight") {
        event.preventDefault()
        showNext()
      }
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener("keydown", onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.setTimeout(() => closeRef.current?.focus(), 0)

    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [lightboxIndex, closeLightbox, showPrev, showNext])

  return (
    <>
      <section id="gallery" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">Real weddings at 1513</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our venue through the eyes of couples who celebrated their day with us
            </p>
          </div>

          {visibleImages.length === 0 ? (
            <p className="text-center text-foreground/80 py-16">
              Photos are unavailable right now. Please check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleImages.map((item, index) => (
                <GalleryTile
                  key={item.src}
                  item={item}
                  index={index % PAGE_SIZE}
                  onFail={handleFail}
                  onOpen={() => {
                    lastFocusRef.current = document.activeElement as HTMLElement
                    const fullIndex = available.findIndex((entry) => entry.src === item.src)
                    setLightboxIndex(fullIndex)
                  }}
                />
              ))}
            </div>
          )}

          {hasMore && (
            <div className="flex flex-col items-center gap-3 mt-12">
              <p className="text-muted-foreground text-sm">
                Showing {visibleImages.length} of {available.length} photos
              </p>
              <Button
                type="button"
                size="lg"
                onClick={() => setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, available.length))}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Show more
              </Button>
            </div>
          )}
        </div>
      </section>

      <CtaBand />

      {lightboxItem && lightboxIndex !== null && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={galleryAlt(lightboxItem)}
          className="fixed inset-0 z-[80] bg-black/90 flex items-center justify-center p-4"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-zoom-out"
            aria-label="Close photo"
            onClick={closeLightbox}
          />
          <button
            ref={closeRef}
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 min-h-12 min-w-12 rounded-full bg-white text-black flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label="Close"
          >
            <X size={22} />
          </button>
          <button
            type="button"
            onClick={showPrev}
            className="absolute left-3 md:left-6 z-10 min-h-12 min-w-12 rounded-full bg-white text-black flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label="Previous photo"
          >
            <ChevronLeft size={24} />
          </button>
          <figure className="relative z-10 max-w-6xl w-full">
            <ResponsiveImage
              src={lightboxItem.src}
              alt={galleryAlt(lightboxItem)}
              sizes="90vw"
              loading="eager"
              className="max-h-[82vh] w-full object-contain mx-auto"
            />
            <figcaption className="mt-4 text-center text-white text-sm">{galleryAlt(lightboxItem)}</figcaption>
          </figure>
          <button
            type="button"
            onClick={showNext}
            className="absolute right-3 md:right-6 z-10 min-h-12 min-w-12 rounded-full bg-white text-black flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label="Next photo"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </>
  )
}
