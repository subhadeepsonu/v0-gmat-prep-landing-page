import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, Target, TrendingUp } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/20" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm text-primary animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span className="font-medium">Free Diagnostic Quiz Available</span>
            <ArrowRight className="w-4 h-4" />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight animate-slide-up">
            Ace the GMAT with <span className="gradient-text">Smart Prep</span>
          </h1>

          <p
            className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Experience personalized GMAT preparation with AI-powered diagnostics, adaptive quizzes, and real-time
            progress tracking.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Button
              size="lg"
              className="h-14 px-8 text-lg shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all hover:scale-105 group"
            >
              Start Free Diagnostic
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg group hover:bg-muted bg-transparent">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          <div
            className="flex flex-wrap justify-center gap-6 pt-6 text-sm text-muted-foreground animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
              Instant score analysis
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
              Personalized study plan
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="absolute left-8 top-1/2 -translate-y-1/2 animate-float">
            <div className="bg-background border border-border rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Score Increase</p>
                  <p className="font-bold text-foreground">+120 pts</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute right-8 top-1/3 animate-float-delayed">
            <div className="bg-background border border-border rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Target Score</p>
                  <p className="font-bold text-foreground">750+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
