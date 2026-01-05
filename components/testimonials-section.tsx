import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Harvard MBA '24",
      score: "640 → 760",
      image: "/professional-asian-woman-headshot.jpg",
      quote:
        "Ascensa's diagnostic pinpointed exactly where I needed to improve. The adaptive quizzes were game-changers for my quant section.",
    },
    {
      name: "Michael Rodriguez",
      role: "Stanford GSB '24",
      score: "580 → 720",
      image: "/professional-hispanic-man-headshot.png",
      quote:
        "I tried other prep platforms but nothing compared to Ascensa's personalized approach. The score improvement speaks for itself!",
    },
    {
      name: "Priya Sharma",
      role: "Wharton MBA '25",
      score: "620 → 740",
      image: "/professional-indian-woman-headshot.png",
      quote:
        "The real-time analytics helped me understand my patterns. I knew exactly what to focus on each week. Highly recommend!",
    },
  ]

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Success Stories</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Join Thousands of Successful Students</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real students who achieved their dream scores with Ascensa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 border-border bg-background hover:shadow-xl transition-shadow">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-border"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm font-semibold text-primary mt-1">{testimonial.score}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
