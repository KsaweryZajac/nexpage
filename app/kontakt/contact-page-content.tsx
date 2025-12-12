"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"

export default function ContactPageContent() {
  const searchParams = useSearchParams()
  const hasInitialized = useRef(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    package: "",
    addons: [] as string[],
    budgetRange: [500, 10000],
    budgetUnclear: false,
    message: "",
    privacy: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (hasInitialized.current) return

    setIsMounted(true)
    const packageParam = searchParams.get("package")
    console.log("[v0] Package parameter from URL:", packageParam)
    if (packageParam) {
      console.log("[v0] Setting package to:", packageParam)
      setFormData((prev) => ({
        ...prev,
        package: packageParam,
      }))
      hasInitialized.current = true
    }
  }, [searchParams])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.privacy) return
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handlePackageChange = (value: string) => {
    setFormData({
      ...formData,
      package: value,
    })
  }

  const handleAddonChange = (value: string) => {
    setFormData((prev) => {
      const isChecked = prev.addons.includes(value)
      return {
        ...prev,
        addons: isChecked
          ? prev.addons.filter(addon => addon !== value)
          : [...prev.addons, value],
      }
    })
  }

  const getAddonsLabel = () => {
    if (formData.addons.length === 0) {
      return "Keine"
    }
    if (formData.addons.length === 4) {
      return "Alle Zusatzpakete"
    }
    const labels: { [key: string]: string } = {
      support: "Support & Wartung",
      domain: "Domain & Hosting",
      migration: "Content Migration",
      notfall: "Notfall-Support",
    }
    return formData.addons.map(addon => labels[addon] || addon).join(" + ")
  }

  const handleBudgetRangeChange = (value: number[]) => {
    setFormData({
      ...formData,
      budgetRange: value,
      budgetUnclear: false,
    })
  }

  const handleBudgetUnclearChange = () => {
    setFormData({
      ...formData,
      budgetUnclear: !formData.budgetUnclear,
    })
  }

  const handlePrivacyChange = (checked: boolean) => {
    setFormData({
      ...formData,
      privacy: checked,
    })
  }

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden px-6 py-12 sm:py-20 lg:px-16 2xl:px-32">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 animate-gradient" />
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div
              className="absolute -bottom-24 right-1/3 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
              style={{ animationDelay: "1.5s" }}
            />
          </div>
          <div className="relative mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
              <span style={{ color: 'lab(37 -0.11 -6.13)' }}>Kontaktieren Sie uns</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              Wir freuen uns auf Ihre Anfrage! Erzählen Sie uns von Ihrem Projekt und wir melden uns schnellstmöglich
              bei Ihnen.
            </p>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-16 2xl:px-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="fade-in">
                <h2 className="text-2xl font-bold text-foreground">Kontaktformular</h2>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 border-2 focus:border-primary transition-colors"
                      placeholder="Ihr vollständiger Name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-Mail-Adresse *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 border-2 focus:border-primary transition-colors"
                      placeholder="ihre@email.at"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefonnummer</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2 border-2 focus:border-primary transition-colors"
                      placeholder="+43 123 456789"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Unternehmen</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-2 border-2 focus:border-primary transition-colors"
                      placeholder="Ihr Unternehmensname"
                    />
                  </div>
                  <div>
                    <Label htmlFor="package">Interessiertes Paket</Label>
                    <Select value={formData.package} onValueChange={handlePackageChange}>
                      <SelectTrigger className="mt-2 border-2 focus:border-primary transition-colors">
                        <SelectValue placeholder="Wählen Sie ein Paket (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basis">Basis - ab € 799</SelectItem>
                        <SelectItem value="standard">Standard - ab € 1.199</SelectItem>
                        <SelectItem value="premium">E-Commerce - ab € 1.199</SelectItem>
                        <SelectItem value="individuell">Individuelles Angebot</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="mb-3 block">Zusatzpakete (optional)</Label>
                    <div className="rounded-lg border-2 border-muted p-4">
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <Checkbox
                            id="support"
                            checked={formData.addons.includes("support")}
                            onCheckedChange={() => handleAddonChange("support")}
                          />
                          <Label htmlFor="support" className="text-xs font-normal cursor-pointer flex-1">
                            Support & Wartung (ab 40€/Monat)
                          </Label>
                        </div>
                        <div className="flex items-center gap-3">
                          <Checkbox
                            id="domain"
                            checked={formData.addons.includes("domain")}
                            onCheckedChange={() => handleAddonChange("domain")}
                          />
                          <Label htmlFor="domain" className="text-xs font-normal cursor-pointer flex-1">
                            Domain & Hosting (ab 20€/Monat)
                          </Label>
                        </div>
                        <div className="flex items-center gap-3">
                          <Checkbox
                            id="migration"
                            checked={formData.addons.includes("migration")}
                            onCheckedChange={() => handleAddonChange("migration")}
                          />
                          <Label htmlFor="migration" className="text-xs font-normal cursor-pointer flex-1">
                            Content Migration (ab 149€)
                          </Label>
                        </div>
                        <div className="flex items-center gap-3">
                          <Checkbox
                            id="notfall"
                            checked={formData.addons.includes("notfall")}
                            onCheckedChange={() => handleAddonChange("notfall")}
                          />
                          <Label htmlFor="notfall" className="text-xs font-normal cursor-pointer flex-1">
                            Notfall-Support (ab 70€/Stunde)
                          </Label>
                        </div>
                      </div>
                      <div className="pt-3 border-t border-muted">
                        <p className="text-xs font-medium text-foreground">
                          Ausgewählt: {getAddonsLabel()}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-end gap-3">
                      <div className="flex-1">
                        <Label htmlFor="budget" className={formData.budgetUnclear ? "text-muted-foreground" : ""}>Budget-Spanne: {isMounted ? `€${formData.budgetRange[0].toLocaleString()} - ${formData.budgetRange[1] > 50000 ? "€50.000+" : `€${formData.budgetRange[1].toLocaleString()}`}` : "€500 - €10.000"}</Label>
                        <div className={`mt-4 px-2 ${formData.budgetUnclear ? "opacity-50 pointer-events-none" : ""}`}>
                          <Slider
                            value={formData.budgetRange}
                            onValueChange={handleBudgetRangeChange}
                            min={0}
                            max={50000.0001}
                            step={500}
                            className="w-full"
                            disabled={formData.budgetUnclear}
                          />
                        </div>
                        <div className="mt-3 flex justify-between text-xs text-muted-foreground">
                          <span>€0</span>
                          <span>€50.000+</span>
                        </div>
                      </div>
                      <Button
                        type="button"
                        variant={formData.budgetUnclear ? "default" : "outline"}
                        onClick={handleBudgetUnclearChange}
                        className={`h-10 ${formData.budgetUnclear ? "bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary" : ""}`}
                      >
                        Unklar
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">Nachricht *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 min-h-[150px] border-2 focus:border-primary transition-colors"
                      placeholder="Erzählen Sie uns von Ihrem Projekt..."
                    />
                  </div>
                  <div className="flex items-start gap-2 rounded-lg border-2 border-muted p-4 bg-muted/20">
                    <Checkbox
                      id="privacy"
                      checked={formData.privacy}
                      onCheckedChange={handlePrivacyChange}
                      required
                      className="mt-1 flex-shrink-0"
                    />
                    <span className="text-xs leading-relaxed font-normal flex-1">
                      <label htmlFor="privacy" className="cursor-pointer">
                        Ich bestätige, dass meine Angaben korrekt sind und stimme der Verarbeitung meiner Daten gemäß der{" "}
                        <Link
                          href="/datenschutz"
                          target="_blank"
                          className="text-blue-500 hover:text-blue-600 underline underline-offset-2 transition-colors"
                        >
                          Datenschutzerklärung
                        </Link>
                        {" "}zu *
                      </label>
                    </span>
                  </div>



                  <div className="text-sm text-muted-foreground">* Pflichtfelder</div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={!formData.privacy}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all hover:scale-105 hover:shadow-xl group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Nachricht senden
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  {submitted && (
                    <div className="rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20 p-4 text-sm text-foreground animate-in fade-in slide-in-from-bottom-2">
                      Vielen Dank für Ihre Nachricht! Wir melden uns in Kürze bei Ihnen.
                    </div>
                  )}
                </form>
              </div>

              <div className="space-y-6 fade-in">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Direktkontakt</h2>
                  <p className="mt-2 text-muted-foreground leading-relaxed">Sie können uns auch direkt erreichen:</p>
                </div>

                <Card className="group border-2 transition-all hover:shadow-xl hover:scale-105">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">E-Mail</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="mailto:info@NexPage.at"
                      className="text-muted-foreground hover:text-primary transition-colors font-medium"
                    >
                      info@NexPage.at
                    </a>
                  </CardContent>
                </Card>

                <Card className="group border-2 transition-all hover:shadow-xl hover:scale-105">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-teal-400 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">Telefon</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="tel:+43660"
                      className="text-muted-foreground hover:text-primary transition-colors font-medium"
                    >
                      +43 660
                    </a>
                    <p className="mt-2 text-sm text-muted-foreground">Mo-Fr: 9:00 - 17:00 Uhr</p>
                  </CardContent>
                </Card>

                <Card className="group border-2 transition-all hover:shadow-xl hover:scale-105">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">Standort</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      NexPage.at
                      <br />
                      Wien
                      <br />
                      Österreich
                    </p>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden border-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
                  <CardHeader className="relative">
                    <CardTitle className="text-lg">
                      <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
                        Kostenlose Beratung
                      </span>
                    </CardTitle>
                    <CardDescription>
                      Wir bieten Ihnen ein unverbindliches Erstgespräch an, in dem wir Ihr Projekt besprechen und Ihnen
                      eine erste Einschätzung geben können.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
