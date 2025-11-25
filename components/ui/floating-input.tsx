import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface FloatingInputProps {
  id: string
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  type?: string
  textarea?: boolean
  className?: string
}

export function FloatingInput({
  id,
  label,
  value,
  onChange,
  type = "text",
  textarea = false,
  className = "",
}: FloatingInputProps) {
  const Field = textarea ? Textarea : Input

  return (
    <div className="relative w-full">
      <Field
        id={id}
        type={textarea ? undefined : type}
        value={value}
        onChange={onChange}
        className={`peer bg-muted border-border pt-6 pb-2 ${className}`}
      />

      <label
        htmlFor={id}
        className="
          absolute left-3 top-[14px]
          text-muted-foreground pointer-events-none
          transition-all duration-200
          peer-focus:top-1 peer-focus:text-xs
          peer-valid:top-1 peer-valid:text-xs
          peer-focus:text-foreground
        "
      >
        {label}
      </label>
    </div>
  )
}
