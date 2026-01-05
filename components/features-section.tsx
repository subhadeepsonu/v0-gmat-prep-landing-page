import { Card } from "@/components/ui/card"
import { Brain, BarChart3, Zap, Users, Target, Clock, BookOpen, Award } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Free Diagnostic Quiz",
      description:
        "Start with our comprehensive diagnostic to identify your strengths and pinpoint exact areas for improvement.",
      color: "bg-orange-500/10 text-orange-600",
    },
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description:
        "Our adaptive algorithm learns your patterns and serves questions that maximize your score improvement.",
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description:
        "Track your progress with detailed performance metrics, score predictions, and personalized insights.",
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      icon: Target,
      title: "Personalized Study Plan",
      description: "Get adaptive quizzes and study schedules tailored to your skill level and target score.",
      color: "bg-green-500/10 text-green-600",
    },
    {
      icon: Clock,
      title: "Timed Practice",
      description: "Build test-day stamina with realistic timed quizzes that mirror the actual GMAT experience.",
      color: "bg-pink-500/10 text-pink-600",
    },
    {
      icon: BookOpen,
      title: "Expert Content",
      description: "Practice with 5,000+ questions designed by GMAT experts that mirror actual test difficulty.",
      color: "bg-cyan-500/10 text-cyan-600",
    },
    {
      icon: Award,
      title: "Score Guarantee",
      description: "Improve your score by 50+ points or get your money back. We're that confident.",
      color: "bg-amber-500/10 text-amber-600",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join thousands of students, share strategies, and get answers from our expert instructors.",
      color: "bg-indigo-500/10 text-indigo-600",
    },
  ]

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Features</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Everything You Need to Succeed</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tools designed to maximize your GMAT score and get you into your dream business school
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="group p-6 border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 bg-background"
              >
                <div
                  className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
