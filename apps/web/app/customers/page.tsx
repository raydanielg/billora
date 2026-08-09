import { AppLayout } from "@workspace/ui/components/app-layout"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { IconUsers, IconPlus, IconSearch } from "@tabler/icons-react"

export default function CustomersPage() {
  return (
    <AppLayout title="Customers">
      <div className="flex flex-1 flex-col gap-6 p-4 lg:p-6">
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight">Customers</h2>
            <p className="text-sm text-muted-foreground">Manage your customers and track their activity.</p>
          </div>
          <Button variant="cta" className="gap-1.5 w-full lg:w-auto">
            <IconPlus size={18} />
            Add Customer
          </Button>
        </div>

        <div className="relative w-full lg:w-72">
          <IconSearch size={16} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search customers..." className="pl-9" />
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-4 py-20">
          <div className="flex size-14 items-center justify-center rounded-full bg-muted">
            <IconUsers size={28} className="text-muted-foreground" />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold">No customers yet</h3>
            <p className="text-sm text-muted-foreground mt-1 max-w-sm">
              Add your first customer to start sending invoices.
            </p>
          </div>
          <Button variant="cta" className="gap-1.5">
            <IconPlus size={18} />
            Add Customer
          </Button>
        </div>
      </div>
    </AppLayout>
  )
}
