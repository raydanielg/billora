import Image from "next/image"
import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
import { IconArrowRight } from "@tabler/icons-react"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6">
      <div className="flex w-full max-w-lg flex-col items-center gap-10 text-center">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Billora"
          width={96}
          height={96}
          priority
          className="rounded-none shadow-none"
        />

        {/* Hero Text */}
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-5xl tracking-tight">
            Billora
          </h1>
          <p className="text-muted-foreground text-xl font-medium">
            Invoice. Share. Get Paid.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
            The simplest way to create, share, and track invoices.
            Get paid faster with Billora.
          </p>
        </div>

        {/* CTA Button */}
        <Link href="/auth" className="w-full max-w-xs">
          <Button variant="cta" className="w-full text-sm font-medium gap-2">
            Get Started
            <IconArrowRight size={16} stroke={2.5} />
          </Button>
        </Link>

        {/* Dark mode hint */}
        <div className="text-muted-foreground font-mono text-xs">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}
