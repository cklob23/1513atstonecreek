import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

interface FloatingInputProps {
  id: string
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  type?: string
  required?: boolean
  textarea?: boolean
  className?: string
}

export function FloatingInput({
  id,
  label,
  value,
  onChange,
  type = "text",
  required = false,
  textarea = false,
  className = ""
}: FloatingInputProps) {

  const Field = textarea ? Textarea : Input

  return (
    <div className="relative w-full">
      <Field
        id={id}
        value={value}
        onChange={onChange}
        type={textarea ? undefined : type}
        required={required}
        className={cn(
          `
          peer bg-muted border border-border pt-6 pb-2 px-3 rounded-md text-[16px]
          min-h-12 leading-[1.2]

          ${type === "date" ? `
            /* Hide fake placeholder parts when empty (invalid state) */
            [&:invalid::-webkit-datetime-edit-text]:opacity-0
            [&:invalid::-webkit-datetime-edit-month-field]:opacity-0
            [&:invalid::-webkit-datetime-edit-day-field]:opacity-0
            [&:invalid::-webkit-datetime-edit-year-field]:opacity-0

            /* Show date normally when valid */
            [&:valid::-webkit-datetime-edit-text]:opacity-100
            [&:valid::-webkit-datetime-edit-month-field]:opacity-100
            [&:valid::-webkit-datetime-edit-day-field]:opacity-100
            [&:valid::-webkit-datetime-edit-year-field]:opacity-100

            /* Calendar icon vertical centering */
            [&::-webkit-calendar-picker-indicator]:translate-y-1/2
            [&::-webkit-calendar-picker-indicator]:relative
            [&::-webkit-calendar-picker-indicator]:top-1/2
            [&::-webkit-calendar-picker-indicator]:mr-2
            [&::-webkit-calendar-picker-indicator]:opacity-60
            [&::-webkit-calendar-picker-indicator:hover]:opacity-100
          ` : ""}

          ${textarea ? "min-h-32 h-auto" : ""}
          ${className}
        `)}
      />

      <label
        htmlFor={id}
        className="
          absolute left-3 top-[14px] text-muted-foreground pointer-events-none
          transition-all duration-200
          peer-focus:top-1 peer-focus:text-xs peer-focus:text-foreground
          peer-valid:top-1 peer-valid:text-xs
          peer-[&:valid]:text-foreground
        "
      >
        {label}
      </label>
    </div>
  )
}
