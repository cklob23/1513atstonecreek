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
          appearance-none

          ${type === "date" ? `
  [&::-webkit-datetime-edit]:text-foreground
  [&::-webkit-datetime-edit]:opacity-100
  [&::-webkit-datetime-edit-fields-wrapper]:p-0
  [&::-webkit-datetime-edit-text]:text-foreground
  [&::-webkit-datetime-edit-day-field]:text-foreground
  [&::-webkit-datetime-edit-month-field]:text-foreground
  [&::-webkit-datetime-edit-year-field]:text-foreground
  [&::-webkit-calendar-picker-indicator]:opacity-60
  [&::-webkit-calendar-picker-indicator]:hover:opacity-100
` : ""}

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
          peer-valid:top-1 peer-valid:text-xs
        "
            >
                {label}
            </label>
        </div>
    )
}
