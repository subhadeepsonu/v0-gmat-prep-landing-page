"use client"

import { BookOpen, Brain, ChevronRight, Clock, Flame, LineChart, Trophy, Zap } from "lucide-react"

export default function DashboardPreview() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Dashboard Preview</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Your Personal GMAT Command Center</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track progress, identify weaknesses, and watch your score climb with our intuitive dashboard
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Glow effect behind laptop */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-3xl transform scale-110 -z-10" />

          {/* Laptop frame */}
          <div className="relative bg-foreground rounded-t-2xl p-3 shadow-2xl">
            {/* Screen bezel dots */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="flex-1 flex justify-center">
                <div className="w-20 h-1 bg-muted/20 rounded-full" />
              </div>
            </div>

            {/* Dashboard content */}
            <div className="bg-background rounded-lg overflow-hidden">
              <div className="p-6 lg:p-8">
                {/* Dashboard header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground">Welcome back, Sarah</h3>
                    <p className="text-muted-foreground text-sm">Your GMAT journey continues. 12 days streak!</p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
                    <Flame className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-semibold text-green-700">On Track for 720+</span>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Trophy className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-xs text-muted-foreground">Current Score</span>
                    </div>
                    <p className="text-3xl font-bold text-foreground">685</p>
                    <p className="text-xs text-green-600 mt-1">+45 from start</p>
                  </div>

                  <div className="bg-muted/50 border border-border rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-xs text-muted-foreground">Questions Solved</span>
                    </div>
                    <p className="text-3xl font-bold text-foreground">847</p>
                    <p className="text-xs text-muted-foreground mt-1">+32 this week</p>
                  </div>

                  <div className="bg-muted/50 border border-border rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                        <Clock className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="text-xs text-muted-foreground">Study Time</span>
                    </div>
                    <p className="text-3xl font-bold text-foreground">42h</p>
                    <p className="text-xs text-muted-foreground mt-1">This month</p>
                  </div>

                  <div className="bg-muted/50 border border-border rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                        <Zap className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-xs text-muted-foreground">Accuracy</span>
                    </div>
                    <p className="text-3xl font-bold text-foreground">78%</p>
                    <p className="text-xs text-green-600 mt-1">+5% this week</p>
                  </div>
                </div>

                {/* Progress section */}
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="bg-muted/30 border border-border rounded-xl p-5">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <LineChart className="w-4 h-4 text-primary" />
                        Section Progress
                      </h4>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-foreground">Quantitative Reasoning</span>
                          <span className="text-sm font-bold text-primary">82%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-primary to-primary/70 h-full rounded-full transition-all"
                            style={{ width: "82%" }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-foreground">Verbal Reasoning</span>
                          <span className="text-sm font-bold text-primary">76%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-primary to-primary/70 h-full rounded-full"
                            style={{ width: "76%" }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-foreground">Data Insights</span>
                          <span className="text-sm font-bold text-primary">68%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-primary to-primary/70 h-full rounded-full"
                            style={{ width: "68%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/30 border border-border rounded-xl p-5">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <Brain className="w-4 h-4 text-primary" />
                        Recommended Today
                      </h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-background border border-border rounded-lg hover:border-primary/50 transition cursor-pointer group">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                            <span className="text-lg">🔢</span>
                          </div>
                          <div>
                            <p className="font-medium text-foreground text-sm">Problem Solving Quiz</p>
                            <p className="text-xs text-muted-foreground">15 questions • 25 min</p>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-background border border-border rounded-lg hover:border-primary/50 transition cursor-pointer group">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                            <span className="text-lg">📖</span>
                          </div>
                          <div>
                            <p className="font-medium text-foreground text-sm">Reading Comprehension</p>
                            <p className="text-xs text-muted-foreground">10 questions • 20 min</p>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-primary/5 border border-primary/20 rounded-lg hover:border-primary/50 transition cursor-pointer group">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <span className="text-lg">⚡</span>
                          </div>
                          <div>
                            <p className="font-medium text-foreground text-sm">Weak Area Focus</p>
                            <p className="text-xs text-muted-foreground">Data Sufficiency • 12 min</p>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-primary transition" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Laptop base */}
          <div className="relative">
            <div className="h-5 bg-gradient-to-b from-muted-foreground to-muted-foreground/80 rounded-b-xl mx-8" />
            <div className="h-2 bg-gradient-to-b from-muted-foreground/60 to-muted-foreground/40 rounded-b-2xl mx-16" />
          </div>

          {/* Floating elements around laptop */}
          <div className="absolute -left-4 lg:-left-12 top-1/4 animate-float hidden md:block">
            <div className="bg-background border border-border rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Achievement</p>
                  <p className="font-bold text-foreground text-sm">Quiz Master!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 lg:-right-12 top-1/2 animate-float-delayed hidden md:block">
            <div className="bg-background border border-border rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12">
                  <svg className="w-12 h-12 transform -rotate-90">
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      className="text-muted"
                    />
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeDasharray="125.6"
                      strokeDashoffset="31.4"
                      className="text-primary"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">75%</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Weekly Goal</p>
                  <p className="font-bold text-foreground text-sm">Almost there!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
