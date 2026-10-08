import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface DownloadBrochuresButtonProps {
  variant?: "outline" | "solid" | "hero"
  className?: string
  size?: "default" | "sm" | "lg"
}

export function DownloadBrochuresButton({
  variant = "solid",
  className,
  size = "default",
}: DownloadBrochuresButtonProps) {
  return (
    <Button
      asChild
      size={size}
      variant={variant === "outline" ? "outline" : "default"}
      className={cn(
        variant === "outline"
          ? "bg-transparent border-venue-text-light text-venue-text-light hover:bg-venue-text-light hover:text-primary"
          : variant === "hero"
            ? "min-h-12 px-8 bg-[oklch(0.93_0.04_85)] text-[oklch(0.22_0.02_60)] hover:bg-[oklch(0.88_0.05_85)]"
            : "bg-primary text-primary-foreground hover:bg-primary/90",
        className,
      )}
    >
      <Link href="/contact">Get Pricing</Link>
    </Button>
  )
}
