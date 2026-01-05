"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
              <span className="text-primary-foreground font-bold text-xl">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-foreground tracking-tight">Ascensa</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest -mt-1">Prep</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-1 bg-muted/50 rounded-full px-2 py-1.5">
            <a
              href="#features"
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-background rounded-full transition-all"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-background rounded-full transition-all"
            >
              How it Works
            </a>
            <a
              href="#testimonials"
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-background rounded-full transition-all"
            >
              Success Stories
            </a>
            <a
              href="#pricing"
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-background rounded-full transition-all"
            >
              Pricing
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Sign In
            </Button>
            <Button className="shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-2">
              <a href="#features" className="px-4 py-2 text-muted-foreground hover:text-foreground">
                Features
              </a>
              <a href="#how-it-works" className="px-4 py-2 text-muted-foreground hover:text-foreground">
                How it Works
              </a>
              <a href="#testimonials" className="px-4 py-2 text-muted-foreground hover:text-foreground">
                Success Stories
              </a>
              <a href="#pricing" className="px-4 py-2 text-muted-foreground hover:text-foreground">
                Pricing
              </a>
              <div className="flex gap-2 mt-4 px-4">
                <Button variant="outline" className="flex-1 bg-transparent">
                  Sign In
                </Button>
                <Button className="flex-1">Start Free</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
