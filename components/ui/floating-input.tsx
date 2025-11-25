import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

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
        className={`peer bg-muted border border-border pt-6 pb-2 px-3 rounded-md h-12 text-[16px]
          ${!textarea ? "block w-full" : ""}
          appearance-none

          ${
            type === "date"
              ? `
              appearance-none

              /* Hide browser placeholder */
              [&::-webkit-datetime-edit-year-field]:text-transparent
              [&::-webkit-datetime-edit-month-field]:text-transparent
              [&::-webkit-datetime-edit-day-field]:text-transparent
              [&::-webkit-datetime-edit-text]:text-transparent

              /* When value exists, show text */
              has-[value]:[&::-webkit-datetime-edit-year-field]:text-foreground
              has-[value]:[&::-webkit-datetime-edit-month-field]:text-foreground
              has-[value]:[&::-webkit-datetime-edit-day-field]:text-foreground
              has-[value]:[&::-webkit-datetime-edit-text]:text-foreground

              /* Calendar icon alignment */
              [&::-webkit-calendar-picker-indicator]:mt-[4px]
              [&::-webkit-calendar-picker-indicator]:opacity-70
              hover:[&::-webkit-calendar-picker-indicator]:opacity-100
            `
              : ""
          }

          ${textarea ? "min-h-32 h-auto" : ""}
          ${className}
        `}
      />

      <label
        htmlFor={id}
        className="
          absolute left-3 top-[14px] text-muted-foreground pointer-events-none
          transition-all duration-200
          peer-focus:top-1 peer-focus:text-xs peer-focus:text-foreground
          peer-[value]:top-1 peer-[value]:text-xs
        "
      >
        {label}
      </label>
    </div>
  )
}
