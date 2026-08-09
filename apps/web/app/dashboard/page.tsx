import { AppLayout } from "@workspace/ui/components/app-layout"
import { SectionCards } from "@workspace/ui/components/section-cards"
import { ChartAreaInteractive } from "@workspace/ui/components/chart-area-interactive"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import {
  IconPlus,
  IconLink,
  IconUserPlus,
  IconPackage,
  IconDotsVertical,
} from "@tabler/icons-react"

const recentInvoices = [
  { id: "INV-000124", customer: "John Enterprises", amount: "TSh 850,000", status: "Paid", due: "20 Aug 2026", created: "10 Aug 2026" },
  { id: "INV-000123", customer: "Sarah Kim", amount: "TSh 320,000", status: "Pending", due: "25 Aug 2026", created: "08 Aug 2026" },
  { id: "INV-000122", customer: "TechCorp Ltd", amount: "TSh 1,200,000", status: "Overdue", due: "05 Aug 2026", created: "01 Aug 2026" },
  { id: "INV-000121", customer: "Mike Designs", amount: "TSh 450,000", status: "Paid", due: "15 Aug 2026", created: "05 Aug 2026" },
  { id: "INV-000120", customer: "Green Stores", amount: "TSh 680,000", status: "Draft", due: "—", created: "09 Aug 2026" },
]

const recentPayments = [
  { id: "TXN-8K29M", customer: "John Enterprises", invoice: "INV-000124", amount: "TSh 850,000", method: "Mobile Money", status: "Successful", date: "10 Aug 2026" },
  { id: "TXN-7H21L", customer: "Mike Designs", invoice: "INV-000121", amount: "TSh 450,000", method: "Card", status: "Successful", date: "06 Aug 2026" },
  { id: "TXN-6G15K", customer: "TechCorp Ltd", invoice: "INV-000119", amount: "TSh 600,000", method: "Bank Transfer", status: "Pending", date: "07 Aug 2026" },
  { id: "TXN-5F08J", customer: "Sarah Kim", invoice: "INV-000118", amount: "TSh 280,000", method: "Mobile Money", status: "Successful", date: "03 Aug 2026" },
]

const statusColors: Record<string, string> = {
  Paid: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  Pending: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  Overdue: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  Draft: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
  Successful: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
}

export default function DashboardPage() {
  return (
    <AppLayout title="Dashboard">
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-6">
          {/* Greeting */}
          <div className="flex flex-col gap-4 px-6 pt-8 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-1">
              <h2 className="text-3xl font-bold tracking-tight">Good morning, Daniel</h2>
              <p className="text-base text-muted-foreground">
                Here&apos;s what&apos;s happening with your business.
              </p>
            </div>
            <Button variant="cta" className="gap-2 h-11 px-6 text-sm w-full lg:w-auto">
              <IconPlus size={20} />
              Create Invoice
            </Button>
          </div>

          {/* Summary cards */}
          <SectionCards />

          {/* Quick actions */}
          <div className="grid grid-cols-2 gap-4 px-6 lg:px-8 @xl/main:grid-cols-4">
            <Button variant="outline" className="h-auto flex-col gap-2 py-5">
              <IconPlus size={24} />
              <span className="text-sm font-medium">Create Invoice</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 py-5">
              <IconLink size={24} />
              <span className="text-sm font-medium">Payment Link</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 py-5">
              <IconUserPlus size={24} />
              <span className="text-sm font-medium">Add Customer</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 py-5">
              <IconPackage size={24} />
              <span className="text-sm font-medium">Add Item</span>
            </Button>
          </div>

          {/* Chart */}
          <div className="px-6 lg:px-8">
            <ChartAreaInteractive />
          </div>

          {/* Recent invoices + payments */}
          <div className="grid grid-cols-1 gap-6 px-6 pb-8 lg:px-8 @5xl/main:grid-cols-2">
            {/* Recent Invoices */}
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Recent Invoices</CardTitle>
                <CardDescription>Latest invoices created</CardDescription>
              </CardHeader>
              <CardContent className="px-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="pl-6">Invoice</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="pr-6"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentInvoices.map((inv) => (
                      <TableRow key={inv.id}>
                        <TableCell className="pl-6 font-medium">{inv.id}</TableCell>
                        <TableCell className="text-muted-foreground">{inv.customer}</TableCell>
                        <TableCell className="text-right font-medium tabular-nums">{inv.amount}</TableCell>
                        <TableCell>
                          <span className={`inline-flex rounded-md px-2 py-0.5 text-xs font-medium ${statusColors[inv.status] || ""}`}>
                            {inv.status}
                          </span>
                        </TableCell>
                        <TableCell className="pr-6">
                          <IconDotsVertical size={16} className="text-muted-foreground" />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Recent Payments */}
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Recent Payments</CardTitle>
                <CardDescription>Latest transactions received</CardDescription>
              </CardHeader>
              <CardContent className="px-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="pl-6">Payment</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="pr-6"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentPayments.map((pay) => (
                      <TableRow key={pay.id}>
                        <TableCell className="pl-6 font-medium">{pay.id}</TableCell>
                        <TableCell className="text-muted-foreground">{pay.customer}</TableCell>
                        <TableCell className="text-right font-medium tabular-nums">{pay.amount}</TableCell>
                        <TableCell>
                          <span className={`inline-flex rounded-md px-2 py-0.5 text-xs font-medium ${statusColors[pay.status] || ""}`}>
                            {pay.status}
                          </span>
                        </TableCell>
                        <TableCell className="pr-6">
                          <IconDotsVertical size={16} className="text-muted-foreground" />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
