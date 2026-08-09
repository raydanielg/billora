import { AppLayout } from "@workspace/ui/components/app-layout"
import { Button } from "@workspace/ui/components/button"
import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import { IconBox, IconPlus } from "@tabler/icons-react"

export default function ItemsPage() {
  return (
    <AppLayout title="Items">
      <div className="flex flex-1 flex-col gap-6 p-4 lg:p-6">
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight">Items</h2>
            <p className="text-sm text-muted-foreground">Manage your products and services for invoices.</p>
          </div>
          <Button variant="cta" className="gap-1.5 w-full lg:w-auto">
            <IconPlus size={18} />
            Add Item
          </Button>
        </div>

        <Tabs defaultValue="all" className="w-full lg:w-auto">
          <TabsList className="flex w-full lg:w-auto">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex flex-1 flex-col items-center justify-center gap-4 py-20">
          <div className="flex size-14 items-center justify-center rounded-full bg-muted">
            <IconBox size={28} className="text-muted-foreground" />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold">No items yet</h3>
            <p className="text-sm text-muted-foreground mt-1 max-w-sm">
              Add products or services to use in your invoices.
            </p>
          </div>
          <Button variant="cta" className="gap-1.5">
            <IconPlus size={18} />
            Add Item
          </Button>
        </div>
      </div>
    </AppLayout>
  )
}
