"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CVEnglish } from "@/components/cv-english"
import { CVArabic } from "@/components/cv-arabic"
import { Printer } from "lucide-react"

export function CVPage() {
  const [language, setLanguage] = useState<"en" | "ar">("en")

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-muted">
      {/* Controls - Hidden when printing */}
      <div className="print:hidden sticky top-0 z-50 bg-background border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">🌐 Language:</span>
            <div className="flex rounded-lg overflow-hidden border border-border">
              <button
                onClick={() => setLanguage("en")}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  language === "en"
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-foreground hover:bg-muted"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage("ar")}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  language === "ar"
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-foreground hover:bg-muted"
                }`}
              >
                العربية
              </button>
            </div>
          </div>
          <Button onClick={handlePrint} className="gap-2">
            <Printer className="w-4 h-4" />
            <span className="hidden sm:inline">{language === "en" ? "Print CV" : "طباعة السيرة الذاتية"}</span>
          </Button>
        </div>
      </div>

      {/* CV Content */}
      <div className="print:bg-white">{language === "en" ? <CVEnglish /> : <CVArabic />}</div>
    </div>
  )
}
