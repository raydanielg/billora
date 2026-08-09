import { cn } from "@workspace/ui/lib/utils"
import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import { IconMail } from "@tabler/icons-react"

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Reset your password</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Enter your email below and we'll send you a link to reset your password
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <div className="relative">
            <IconMail size={16} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input id="email" type="email" placeholder="m@example.com" required className="pl-9" />
          </div>
        </Field>
        <Field>
          <Button type="submit" variant="cta" className="w-full">Send reset link</Button>
        </Field>
        <FieldDescription className="text-center">
          Remember your password?{" "}
          <a href="#" className="underline underline-offset-4">
            Back to login
          </a>
        </FieldDescription>
      </FieldGroup>
    </form>
  )
}
