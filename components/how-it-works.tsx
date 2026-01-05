import { ArrowRight } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Take the Diagnostic",
      description:
        "Complete our free 30-minute diagnostic quiz to assess your current GMAT readiness across all sections.",
    },
    {
      step: "02",
      title: "Get Your Study Plan",
      description:
        "Receive a personalized roadmap with targeted practice areas and a timeline based on your target score.",
    },
    {
      step: "03",
      title: "Practice Smart",
      description: "Work through adaptive quizzes that focus on your weak areas while maintaining your strengths.",
    },
    {
      step: "04",
      title: "Ace the GMAT",
      description: "Walk into test day confident and prepared, ready to achieve your target score.",
    },
  ]

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Your Path to GMAT Success</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven four-step process that has helped thousands of students achieve their target scores
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-x-1/2 z-0" />
              )}

              <div className="relative z-10 text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-primary-foreground text-2xl font-bold mb-6 shadow-lg shadow-primary/30">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            Start Your Journey Today
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
