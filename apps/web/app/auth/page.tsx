"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import { LoginForm } from "@workspace/ui/components/login-form"
import { RegisterForm } from "@workspace/ui/components/register-form"
import { ForgotPasswordForm } from "@workspace/ui/components/forgot-password-form"

type Tab = "login" | "register" | "forgot"

export default function AuthPage() {
  const [tab, setTab] = useState<Tab>("login")

  return (
    <div className="flex min-h-svh">
      {/* Branding Panel */}
      <div className="relative hidden flex-1 flex-col justify-between overflow-hidden p-12 lg:flex">
        <Image
          src="/auth-bg.jpg"
          alt=""
          fill
          priority
          sizes="50vw"
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/25 to-primary/50" />
        <div className="relative z-10 flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Billora"
            width={40}
            height={40}
            priority
            className="rounded-none"
          />
          <span className="font-bold text-xl text-white">Billora</span>
        </div>

        <div className="relative z-10 flex flex-col gap-6">
          <h2 className="max-w-md text-3xl font-bold leading-tight text-white">
            Invoice. Share. Get Paid.
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-white/80">
            The simplest way to create, share, and track invoices.
            Get paid faster with Billora.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-2 text-xs text-white/60">
          <span>&copy; {new Date().getFullYear()} Billora. All rights reserved.</span>
        </div>
      </div>

      {/* Form Panel */}
      <div className="flex flex-1 flex-col items-center justify-center gap-8 p-6">
        {/* Mobile logo */}
        <div className="flex flex-col items-center gap-2 lg:hidden">
          <Image
            src="/logo.png"
            alt="Billora"
            width={56}
            height={56}
            priority
            className="rounded-none"
          />
          <h1 className="font-bold text-xl tracking-tight">Billora</h1>
          <p className="text-muted-foreground text-sm">Invoice. Share. Get Paid.</p>
        </div>

        <Tabs
          value={tab}
          onValueChange={(v) => setTab(v as Tab)}
          className="w-full max-w-sm"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="mt-6">
            <LoginForm />
            <div className="mt-4 text-center text-sm">
              <button
                type="button"
                onClick={() => setTab("forgot")}
                className="text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
              >
                Forgot your password?
              </button>
            </div>
          </TabsContent>

          <TabsContent value="register" className="mt-6">
            <RegisterForm />
          </TabsContent>

          <TabsContent value="forgot" className="mt-6">
            <ForgotPasswordForm />
            <div className="mt-4 text-center text-sm">
              <button
                type="button"
                onClick={() => setTab("login")}
                className="text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
              >
                Back to login
              </button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
