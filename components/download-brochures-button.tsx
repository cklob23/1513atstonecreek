import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface DownloadBrochuresButtonProps {
    variant?: "outline" | "solid"
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
                    : "bg-primary text-primary-foreground hover:bg-primary/90",
                className,
            )}
        >
            <Link href="/contact">Get Pricing Brochures</Link>
        </Button>
    )
}
