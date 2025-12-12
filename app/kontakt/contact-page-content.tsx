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
import { PageHeader } from "@/components/page-header"

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
      <PageHeader 
        title="Kontakt" 
        description="Wir freuen uns auf Ihre Anfrage! Erzählen Sie uns von Ihrem Projekt und wir melden uns schnellstmöglich bei Ihnen."
      />
      <main>
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="opacity-0 animate-fade-in">
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Schreiben Sie uns</h2>
                  <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                    Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Contact Information Group */}
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-semibold text-gray-900 mb-2 block">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all"
                        placeholder="Max Mustermann"
                      />
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="email" className="text-sm font-semibold text-gray-900 mb-2 block">
                          E-Mail-Adresse *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all"
                          placeholder="max@beispiel.at"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-sm font-semibold text-gray-900 mb-2 block">
                          Telefon <span className="text-gray-400 font-normal">(optional)</span>
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all"
                          placeholder="+43 123 456 7890"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-sm font-semibold text-gray-900 mb-2 block">
                        Unternehmen <span className="text-gray-400 font-normal">(optional)</span>
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all"
                        placeholder="Ihr Firmenname"
                      />
                    </div>
                  </div>

                  {/* Project Details Group */}
                  <div className="pt-8 border-t border-gray-200 space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900">Projektdetails</h3>

                    <div>
                      <Label htmlFor="package" className="text-sm font-semibold text-gray-900 mb-2 block">
                        Gewünschtes Paket <span className="text-gray-400 font-normal">(optional)</span>
                      </Label>
                      <Select value={formData.package} onValueChange={handlePackageChange}>
                        <SelectTrigger className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all">
                          <SelectValue placeholder="Paket auswählen" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basis">Basis-Paket – ab € 799</SelectItem>
                          <SelectItem value="standard">Standard-Paket – ab € 1.199</SelectItem>
                          <SelectItem value="premium">E-Commerce-Paket – ab € 1.199</SelectItem>
                          <SelectItem value="individuell">Individuelles Angebot</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-sm font-semibold text-gray-900 mb-3 block">
                        Zusatzleistungen <span className="text-gray-400 font-normal">(optional)</span>
                      </Label>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all cursor-pointer">
                          <Checkbox
                            id="support"
                            checked={formData.addons.includes("support")}
                            onCheckedChange={() => handleAddonChange("support")}
                            className="mt-0.5"
                          />
                          <div className="flex-1">
                            <Label htmlFor="support" className="text-sm font-medium text-gray-900 cursor-pointer">
                              Support & Wartung
                            </Label>
                            <p className="text-xs text-gray-500 mt-0.5">ab € 40/Monat</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all cursor-pointer">
                          <Checkbox
                            id="domain"
                            checked={formData.addons.includes("domain")}
                            onCheckedChange={() => handleAddonChange("domain")}
                            className="mt-0.5"
                          />
                          <div className="flex-1">
                            <Label htmlFor="domain" className="text-sm font-medium text-gray-900 cursor-pointer">
                              Domain & Hosting
                            </Label>
                            <p className="text-xs text-gray-500 mt-0.5">ab € 20/Monat</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all cursor-pointer">
                          <Checkbox
                            id="migration"
                            checked={formData.addons.includes("migration")}
                            onCheckedChange={() => handleAddonChange("migration")}
                            className="mt-0.5"
                          />
                          <div className="flex-1">
                            <Label htmlFor="migration" className="text-sm font-medium text-gray-900 cursor-pointer">
                              Content-Migration
                            </Label>
                            <p className="text-xs text-gray-500 mt-0.5">ab € 149 einmalig</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all cursor-pointer">
                          <Checkbox
                            id="notfall"
                            checked={formData.addons.includes("notfall")}
                            onCheckedChange={() => handleAddonChange("notfall")}
                            className="mt-0.5"
                          />
                          <div className="flex-1">
                            <Label htmlFor="notfall" className="text-sm font-medium text-gray-900 cursor-pointer">
                              Notfall-Support
                            </Label>
                            <p className="text-xs text-gray-500 mt-0.5">ab € 70/Stunde</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <Label className="text-sm font-semibold text-gray-900">
                          Budget-Rahmen
                        </Label>
                        <span className="text-sm font-medium text-blue-600">
                          {isMounted
                            ? formData.budgetUnclear
                              ? "Noch unklar"
                              : `€${formData.budgetRange[0].toLocaleString()} – ${formData.budgetRange[1] > 50000 ? "€50.000+" : `€${formData.budgetRange[1].toLocaleString()}`}`
                            : "€500 – €10.000"}
                        </span>
                      </div>
                      <div
                        className={`p-5 rounded-lg border border-gray-200 bg-gray-50 transition-opacity ${formData.budgetUnclear ? "opacity-40" : ""}`}
                      >
                        <Slider
                          value={formData.budgetRange}
                          onValueChange={handleBudgetRangeChange}
                          min={0}
                          max={50000.0001}
                          step={500}
                          className="w-full"
                          disabled={formData.budgetUnclear}
                        />
                        <div className="mt-3 flex justify-between text-xs text-gray-500">
                          <span>€0</span>
                          <span>€50.000+</span>
                        </div>
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleBudgetUnclearChange}
                        className={`mt-3 w-full sm:w-auto ${formData.budgetUnclear ? "bg-blue-600 text-white hover:bg-blue-700 border-blue-600" : ""}`}
                      >
                        {formData.budgetUnclear ? "Budget ist unklar ✓" : "Budget noch unklar"}
                      </Button>
                    </div>
                  </div>

                  {/* Message Group */}
                  <div className="pt-8 border-t border-gray-200 space-y-6">
                    <div>
                      <Label htmlFor="message" className="text-sm font-semibold text-gray-900 mb-2 block">
                        Ihre Nachricht *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="min-h-[140px] sm:min-h-[180px] text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all resize-none"
                        placeholder="Beschreiben Sie Ihr Projekt, Ihre Ziele und spezielle Anforderungen..."
                      />
                      <p className="mt-2 text-xs text-gray-500">Je mehr Details Sie angeben, desto besser können wir Sie beraten.</p>
                    </div>

                    <div className="flex items-start gap-3 p-5 rounded-lg bg-gray-50 border border-gray-200">
                      <Checkbox
                        id="privacy"
                        checked={formData.privacy}
                        onCheckedChange={handlePrivacyChange}
                        required
                        className="mt-0.5 flex-shrink-0"
                      />
                      <Label htmlFor="privacy" className="text-sm text-gray-700 leading-relaxed cursor-pointer">
                        Ich habe die{" "}
                        <Link
                          href="/datenschutz"
                          target="_blank"
                          className="text-blue-600 hover:text-blue-700 underline underline-offset-2 font-medium"
                        >
                          Datenschutzerklärung
                        </Link>
                        {" "}zur Kenntnis genommen und stimme der Verarbeitung meiner Daten zu. *
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={!formData.privacy}
                      className="w-full h-12 sm:h-14 text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:brightness-110 text-white transition-all duration-300 hover:shadow-lg group disabled:opacity-50 disabled:cursor-not-allowed border-0"
                    >
                      <span className="font-semibold">Nachricht senden</span>
                      <Send className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Button>

                    {submitted && (
                      <div className="p-5 rounded-lg bg-blue-50 border-2 border-blue-200 shadow-sm animate-fade-in">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-0.5">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Nachricht erfolgreich gesendet!</h4>
                            <p className="text-sm text-gray-600 mt-1">
                              Vielen Dank für Ihre Anfrage. Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <p className="text-xs text-gray-500 text-center">* Pflichtfelder</p>
                  </div>
                </form>
              </div>

              <div className="space-y-6 opacity-0 animate-fade-in animate-delay-200">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Direktkontakt</h2>
                  <p className="mt-2 text-gray-600 leading-relaxed">Sie können uns auch direkt erreichen:</p>
                </div>

                <Card className="group border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg text-gray-900">E-Mail</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="mailto:info@NexPage.at"
                      className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                    >
                      info@NexPage.at
                    </a>
                  </CardContent>
                </Card>

                <Card className="group border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-purple-500 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg text-gray-900">Telefon</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="tel:+43660"
                      className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                    >
                      +43 660
                    </a>
                    <p className="mt-2 text-sm text-gray-500">Mo-Fr: 9:00 - 17:00 Uhr</p>
                  </CardContent>
                </Card>

                <Card className="group border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg text-gray-900">Standort</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      NexPage.at
                      <br />
                      Wien
                      <br />
                      Österreich
                    </p>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden border border-gray-200 bg-gradient-to-br from-blue-50 to-purple-50">
                  <CardHeader className="relative">
                    <CardTitle className="text-lg">
                      <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                        Kostenlose Beratung
                      </span>
                    </CardTitle>
                    <CardDescription className="text-gray-600">
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
