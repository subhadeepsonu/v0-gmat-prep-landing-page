import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-br from-foreground to-foreground/90 rounded-3xl p-12 lg:p-16">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />

          <div className="relative z-10 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-background">Ready to Master the GMAT?</h2>
            <p className="text-xl text-background/80 max-w-2xl mx-auto">
              Start with our free diagnostic quiz and discover your personalized path to a 700+ score
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-background/70">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Free diagnostic included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Score guarantee</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/30 group"
              >
                Start Free Diagnostic
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg border-background/20 text-background hover:bg-background/10 bg-transparent"
              >
                View Pricing Plans
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
