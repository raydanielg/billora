import { AppLayout } from "@workspace/ui/components/app-layout"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import { IconDownload, IconFileExport } from "@tabler/icons-react"

const metrics = [
  { label: "Total Invoiced", value: "TSh 18,450,000" },
  { label: "Total Paid", value: "TSh 14,200,000" },
  { label: "Outstanding", value: "TSh 3,450,000" },
  { label: "Overdue", value: "TSh 800,000" },
  { label: "Collection Rate", value: "77%" },
  { label: "Average Invoice Value", value: "TSh 148,790" },
]

export default function ReportsPage() {
  return (
    <AppLayout title="Reports">
      <div className="flex flex-1 flex-col gap-6 p-4 lg:p-6">
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight">Reports</h2>
            <p className="text-sm text-muted-foreground">Track your business performance and revenue.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-1.5">
              <IconFileExport size={16} />
              Export CSV
            </Button>
            <Button variant="outline" className="gap-1.5">
              <IconDownload size={16} />
              Export PDF
            </Button>
          </div>
        </div>

        <Tabs defaultValue="sales" className="w-full lg:w-auto">
          <TabsList className="flex w-full flex-wrap lg:w-auto">
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="invoices">Invoices</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex flex-wrap gap-2">
          {["Today", "This Week", "This Month", "Last Month", "This Year", "Custom"].map((f, i) => (
            <Button key={f} variant={i === 2 ? "default" : "outline"} size="sm">
              {f}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 @xl/main:grid-cols-2 @5xl/main:grid-cols-3">
          {metrics.map((m) => (
            <Card key={m.label}>
              <CardHeader>
                <CardDescription>{m.label}</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums">
                  {m.value}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 @5xl/main:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Revenue</CardTitle>
              <CardDescription>Revenue over time</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Invoice Status</CardTitle>
              <CardDescription>Distribution of invoice statuses</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </AppLayout>
  )
}
