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
            appearance-none

            /* Hide Safari/Chrome forced placeholder */
            color: transparent;
            [&:focus]:color-foreground;
            [&:not(:placeholder-shown)]:color-foreground;

            /* Hide placeholder text sub-elements */
            [&::-webkit-datetime-edit]:color-transparent
            [&:focus::-webkit-datetime-edit]:color-foreground
            [&:not(:placeholder-shown)::-webkit-datetime-edit]:color-foreground

            /* Hide individual segment placeholders */
            [&::-webkit-datetime-edit-fields-wrapper]:color-transparent
            [&::-webkit-datetime-edit-text]:color-transparent
            [&::-webkit-datetime-edit-month-field]:color-transparent
            [&::-webkit-datetime-edit-day-field]:color-transparent
            [&::-webkit-datetime-edit-year-field]:color-transparent

            /* Show date when selected */
            [&:not(:placeholder-shown)::-webkit-datetime-edit-month-field]:color-foreground
            [&:not(:placeholder-shown)::-webkit-datetime-edit-day-field]:color-foreground
            [&:not(:placeholder-shown)::-webkit-datetime-edit-year-field]:color-foreground

            /* Fix icon alignment */
            [&::-webkit-calendar-picker-indicator]:relative
            [&::-webkit-calendar-picker-indicator]:top-1/2
            [&::-webkit-calendar-picker-indicator]:-translate-y-1/2
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
