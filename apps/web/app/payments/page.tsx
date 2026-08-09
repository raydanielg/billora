import { AppLayout } from "@workspace/ui/components/app-layout"
import { Button } from "@workspace/ui/components/button"
import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import { IconCreditCard, IconPlus } from "@tabler/icons-react"

export default function PaymentsPage() {
  return (
    <AppLayout title="Payments">
      <div className="flex flex-1 flex-col gap-6 p-4 lg:p-6">
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight">Payments</h2>
            <p className="text-sm text-muted-foreground">Track all transactions and payment activity.</p>
          </div>
          <Button variant="cta" className="gap-1.5 w-full lg:w-auto">
            <IconPlus size={18} />
            Create Invoice
          </Button>
        </div>

        <Tabs defaultValue="all" className="w-full lg:w-auto">
          <TabsList className="flex w-full flex-wrap lg:w-auto">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="successful">Successful</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="failed">Failed</TabsTrigger>
            <TabsTrigger value="refunded">Refunded</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex flex-1 flex-col items-center justify-center gap-4 py-20">
          <div className="flex size-14 items-center justify-center rounded-full bg-muted">
            <IconCreditCard size={28} className="text-muted-foreground" />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold">No payments yet</h3>
            <p className="text-sm text-muted-foreground mt-1 max-w-sm">
              Payments will appear here once your customers start paying.
            </p>
          </div>
          <Button variant="cta" className="gap-1.5">
            <IconPlus size={18} />
            Create Invoice
          </Button>
        </div>
      </div>
    </AppLayout>
  )
}
