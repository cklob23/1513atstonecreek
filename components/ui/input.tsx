import * as React from "react"
import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        `
        peer
        w-full
        rounded-md
        border border-input
        bg-muted
        text-base
        px-3
        pt-6
        pb-2
        h-12
        shadow-xs
        transition
        outline-none

        placeholder-transparent

        focus-visible:border-ring
        focus-visible:ring-ring/50
        focus-visible:ring-[3px]

        disabled:pointer-events-none
        disabled:opacity-50

        autofill:shadow-[inset_0_0_0px_1000px_rgb(249,245,242)]
        autofill:text-foreground
        `,
        className
      )}
      {...props}
    />
  )
}

export { Input }
