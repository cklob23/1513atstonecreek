"use client"

import type { CSSProperties, Ref } from "react"
import { cn } from "@/lib/utils"

type ResponsiveImageProps = {
  src: string
  alt: string
  className?: string
  sizes?: string
  loading?: "eager" | "lazy"
  fetchPriority?: "high" | "low" | "auto"
  onLoad?: () => void
  onError?: () => void
  imgRef?: Ref<HTMLImageElement>
  style?: CSSProperties
}

function stemFromSrc(src: string) {
  const file = src.split("/").pop() || src
  return file.replace(/\.[^.]+$/, "")
}

export function optimizedSources(src: string) {
  const stem = stemFromSrc(src)
  return {
    w800: `/opt/${stem}-800.webp`,
    w1600: `/opt/${stem}-1600.webp`,
  }
}

export function ResponsiveImage({
  src,
  alt,
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
  loading = "lazy",
  fetchPriority,
  onLoad,
  onError,
  imgRef,
  style,
}: ResponsiveImageProps) {
  const { w800, w1600 } = optimizedSources(src)

  return (
    <picture>
      <source type="image/webp" srcSet={`${w800} 800w, ${w1600} 1600w`} sizes={sizes} />
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={cn(className)}
        style={style}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        onLoad={onLoad}
        onError={onError}
      />
    </picture>
  )
}
