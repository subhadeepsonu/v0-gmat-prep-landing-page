import { Linkedin, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-background">Ascensa</span>
                <span className="text-[10px] text-background/50 uppercase tracking-widest -mt-1">Prep</span>
              </div>
            </div>
            <p className="text-sm text-background/60 max-w-sm leading-relaxed">
              Empowering students worldwide to achieve their dream GMAT scores with AI-powered, personalized learning.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-background">Product</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Free Diagnostic
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Question Bank
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-background">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition">
                  GMAT Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Study Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Score Calculator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  MBA Rankings
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-background">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">© 2025 Ascensa Prep. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-primary transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
