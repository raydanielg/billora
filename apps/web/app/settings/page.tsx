"use client"

import { useState } from "react"
import { AppLayout } from "@workspace/ui/components/app-layout"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"

export default function SettingsPage() {
  const [tab, setTab] = useState("business")

  return (
    <AppLayout title="Settings">
      <div className="flex flex-1 flex-col gap-6 p-4 lg:p-6">
        <div>
          <h2 className="text-xl font-bold tracking-tight">Settings</h2>
          <p className="text-sm text-muted-foreground">Manage your business and account preferences.</p>
        </div>

        <Tabs value={tab} onValueChange={setTab} className="w-full">
          <TabsList className="flex w-full flex-wrap lg:w-auto">
            <TabsTrigger value="business">Business</TabsTrigger>
            <TabsTrigger value="invoice">Invoice</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="subscription">Subscription</TabsTrigger>
          </TabsList>

          <TabsContent value="business" className="mt-6">
            <Card className="max-w-2xl">
              <CardHeader>
                <CardTitle>Business Information</CardTitle>
                <CardDescription>Update your business details that appear on invoices.</CardDescription>
              </CardHeader>
              <CardContent>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="business-name">Business Name</FieldLabel>
                    <Input id="business-name" placeholder="ABC Solutions" />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="business-email">Email</FieldLabel>
                    <Input id="business-email" type="email" placeholder="info@abcsolutions.co.tz" />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="business-phone">Phone</FieldLabel>
                    <Input id="business-phone" placeholder="+255 712 345 678" />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="business-address">Address</FieldLabel>
                    <Input id="business-address" placeholder="123 Mlimani City, Dar es Salaam" />
                  </Field>
                  <div className="grid grid-cols-2 gap-4">
                    <Field>
                      <FieldLabel htmlFor="business-country">Country</FieldLabel>
                      <Input id="business-country" placeholder="Tanzania" />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="business-city">City</FieldLabel>
                      <Input id="business-city" placeholder="Dar es Salaam" />
                    </Field>
                  </div>
                  <Field>
                    <FieldLabel htmlFor="business-tax">Tax / VAT Number</FieldLabel>
                    <Input id="business-tax" placeholder="123-456-789" />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="business-website">Website</FieldLabel>
                    <Input id="business-website" placeholder="www.abcsolutions.co.tz" />
                  </Field>
                  <Button variant="cta">Save Changes</Button>
                </FieldGroup>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="invoice" className="mt-6">
            <Card className="max-w-2xl">
              <CardHeader>
                <CardTitle>Invoice Settings</CardTitle>
                <CardDescription>Configure your invoice numbering and defaults.</CardDescription>
              </CardHeader>
              <CardContent>
                <FieldGroup>
                  <div className="grid grid-cols-2 gap-4">
                    <Field>
                      <FieldLabel htmlFor="invoice-prefix">Invoice Prefix</FieldLabel>
                      <Input id="invoice-prefix" placeholder="INV-" />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="next-number">Next Invoice Number</FieldLabel>
                      <Input id="next-number" placeholder="000001" />
                    </Field>
                  </div>
                  <Field>
                    <FieldLabel htmlFor="default-currency">Default Currency</FieldLabel>
                    <Input id="default-currency" placeholder="Tanzanian Shilling (TZS)" />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="default-tax">Default Tax Rate (%)</FieldLabel>
                    <Input id="default-tax" placeholder="18" />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="default-terms">Default Payment Terms</FieldLabel>
                    <Input id="default-terms" placeholder="Payment is due within 7 days." />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="default-notes">Default Notes</FieldLabel>
                    <Input id="default-notes" placeholder="Thank you for your business." />
                  </Field>
                  <Button variant="cta">Save Changes</Button>
                </FieldGroup>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payments" className="mt-6">
            <Card className="max-w-2xl">
              <CardHeader>
                <CardTitle>Payment Settings</CardTitle>
                <CardDescription>Configure your payment gateway and methods.</CardDescription>
              </CardHeader>
              <CardContent>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="payment-gateway">Payment Gateway</FieldLabel>
                    <Input id="payment-gateway" placeholder="No gateway connected" disabled />
                  </Field>
                  <Button variant="outline">Connect Payment Account</Button>
                </FieldGroup>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="mt-6">
            <Card className="max-w-2xl">
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Manage your notification preferences.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  {[
                    "Email Notifications",
                    "Payment Notifications",
                    "Invoice Notifications",
                    "Reminder Notifications",
                  ].map((label) => (
                    <div key={label} className="flex items-center justify-between">
                      <span className="text-sm">{label}</span>
                      <Button variant="outline" size="sm">Enabled</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="mt-6">
            <Card className="max-w-2xl">
              <CardHeader>
                <CardTitle>Security</CardTitle>
                <CardDescription>Manage your password and security settings.</CardDescription>
              </CardHeader>
              <CardContent>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="current-password">Current Password</FieldLabel>
                    <Input id="current-password" type="password" placeholder="••••••••" />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="new-password">New Password</FieldLabel>
                    <Input id="new-password" type="password" placeholder="••••••••" />
                  </Field>
                  <Button variant="cta">Update Password</Button>
                </FieldGroup>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="subscription" className="mt-6">
            <Card className="max-w-2xl">
              <CardHeader>
                <CardTitle>Subscription</CardTitle>
                <CardDescription>Manage your plan and billing.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <p className="font-medium">Free Plan</p>
                      <p className="text-sm text-muted-foreground">Up to 10 invoices per month</p>
                    </div>
                    <Button variant="cta">Upgrade</Button>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <p className="font-medium">Pro Plan</p>
                      <p className="text-sm text-muted-foreground">Unlimited invoices, payment links, and more</p>
                    </div>
                    <Button variant="outline">Choose</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  )
}
