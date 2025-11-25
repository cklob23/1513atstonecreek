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
                placeholder=" "  // <-- REQUIRED for floating-label to work reliably
                className={cn(
                    `
                    peer bg-muted border border-border pt-6 pb-2 px-3 rounded-md h-12 text-[16px]
                    appearance-none
                    
                    ${textarea ? "min-h-32 h-auto" : ""}

                    ${
                        type === "date"
                            ? `
                        appearance-none

                        /* Hide default mm/dd/yyyy placeholder */
                        color: transparent;
                        [&:focus]:color-foreground;
                        [&:not(:placeholder-shown)]:color-foreground;

                        /* Hide internal placeholder fields */
                        [&::-webkit-datetime-edit]:color-transparent
                        [&::-webkit-datetime-edit-text]:color-transparent
                        [&::-webkit-datetime-edit-month-field]:color-transparent
                        [&::-webkit-datetime-edit-day-field]:color-transparent
                        [&::-webkit-datetime-edit-year-field]:color-transparent

                        /* Show real value when selected */
                        [&:not(:placeholder-shown)::-webkit-datetime-edit-month-field]:color-foreground
                        [&:not(:placeholder-shown)::-webkit-datetime-edit-day-field]:color-foreground
                        [&:not(:placeholder-shown)::-webkit-datetime-edit-year-field]:color-foreground
                        [&:focus::-webkit-datetime-edit]:color-foreground

                        /* Center calendar icon */
                        [&::-webkit-calendar-picker-indicator]:relative
                        [&::-webkit-calendar-picker-indicator]:top-1/2
                        [&::-webkit-calendar-picker-indicator]:-translate-y-1/2
                        [&::-webkit-calendar-picker-indicator]:mr-2
                        [&::-webkit-calendar-picker-indicator]:opacity-60
                        [&::-webkit-calendar-picker-indicator:hover]:opacity-100
                        `
                            : ""
                    }
                    `,
                    className
                )}
            />

            <label
                htmlFor={id}
                className="
                    absolute left-3 top-[14px] text-muted-foreground pointer-events-none
                    transition-all duration-200

                    peer-focus:top-1 peer-focus:text-xs peer-focus:text-foreground
                    peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs
                "
            >
                {label}
            </label>
        </div>
    )
}
