import { AppLayout } from "@workspace/ui/components/app-layout"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import { IconFileInvoice, IconPlus, IconSearch } from "@tabler/icons-react"

export default function InvoicesPage() {
  return (
    <AppLayout title="Invoices">
      <div className="flex flex-1 flex-col gap-6 p-4 lg:p-6">
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight">Invoices</h2>
            <p className="text-sm text-muted-foreground">Create, send and track your invoices.</p>
          </div>
          <Button variant="cta" className="gap-1.5 w-full lg:w-auto">
            <IconPlus size={18} />
            Create Invoice
          </Button>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <Tabs defaultValue="all" className="w-full lg:w-auto">
            <TabsList className="flex w-full flex-wrap lg:w-auto">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="draft">Draft</TabsTrigger>
              <TabsTrigger value="sent">Sent</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="paid">Paid</TabsTrigger>
              <TabsTrigger value="overdue">Overdue</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="relative w-full lg:w-72">
            <IconSearch size={16} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search invoice number or customer..." className="pl-9" />
          </div>
        </div>

        {/* Empty state */}
        <div className="flex flex-1 flex-col items-center justify-center gap-4 py-20">
          <div className="flex size-14 items-center justify-center rounded-full bg-muted">
            <IconFileInvoice size={28} className="text-muted-foreground" />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold">No invoices yet</h3>
            <p className="text-sm text-muted-foreground mt-1 max-w-sm">
              Create your first invoice and start getting paid.
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
