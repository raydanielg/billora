import { AppLayout } from "@workspace/ui/components/app-layout"
import { Button } from "@workspace/ui/components/button"
import { IconLink, IconPlus } from "@tabler/icons-react"

export default function PaymentLinksPage() {
  return (
    <AppLayout title="Payment Links">
      <div className="flex flex-1 flex-col gap-6 p-4 lg:p-6">
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight">Payment Links</h2>
            <p className="text-sm text-muted-foreground">Create shareable links to collect payments without an invoice.</p>
          </div>
          <Button variant="cta" className="gap-1.5 w-full lg:w-auto">
            <IconPlus size={18} />
            Create Payment Link
          </Button>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-4 py-20">
          <div className="flex size-14 items-center justify-center rounded-full bg-muted">
            <IconLink size={28} className="text-muted-foreground" />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold">No payment links yet</h3>
            <p className="text-sm text-muted-foreground mt-1 max-w-sm">
              Create a payment link to get paid without creating a full invoice.
            </p>
          </div>
          <Button variant="cta" className="gap-1.5">
            <IconPlus size={18} />
            Create Payment Link
          </Button>
        </div>
      </div>
    </AppLayout>
  )
}
