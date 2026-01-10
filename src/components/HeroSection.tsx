import { ArrowRight, BookOpen, Calculator, Lightbulb } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden py-20 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Student Info Badge */}
            <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-3 px-5 py-3 rounded-xl bg-primary/10 border border-primary/20">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold text-lg">S</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Srushti G Joshi</p>
                  <p className="text-xs text-muted-foreground">USN: 01FE24BAR014</p>
                </div>
              </div>
              <div className="hidden sm:block h-8 w-px bg-border" />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="flex h-2 w-2 rounded-full bg-accent" />
                Course Code: 25EMAB202
              </div>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Linear Algebra
              <span className="block text-primary">for Engineers</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              A comprehensive guide to mastering linear algebra concepts essential for mechanical engineering. 
              From matrix operations to eigenvalue analysis, build the mathematical foundation for real-world engineering applications.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2 group">
                Start Learning
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <BookOpen className="h-4 w-4" />
                View Syllabus
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary font-serif">5</p>
                <p className="text-sm text-muted-foreground">Chapters</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-accent font-serif">4+</p>
                <p className="text-sm text-muted-foreground">Lab Assessments</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-secondary font-serif">25+</p>
                <p className="text-sm text-muted-foreground">Practice Problems</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative hidden lg:block">
            <div className="relative bg-card border border-border rounded-2xl p-8 shadow-lg">
              {/* Matrix Visualization */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Calculator className="h-6 w-6 text-primary" />
                  <h3 className="font-serif text-xl font-semibold">Key Concepts</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "📐", title: "Spring-Mass Systems", desc: "Static equilibrium" },
                    { icon: "🔺", title: "Truss Analysis", desc: "Force distribution" },
                    { icon: "🤖", title: "Robot Kinematics", desc: "2R & 3R arms" },
                    { icon: "📊", title: "Least Squares", desc: "Data fitting" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-lg bg-muted/50 border border-border/50 transition-all hover:bg-muted hover:shadow-sm"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <h4 className="font-medium text-sm mt-2">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Engineering Applications</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Learn how matrices solve real mechanical systems, from structural analysis to robotics control.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-xl bg-secondary/20 border border-secondary/30 flex items-center justify-center animate-float">
              <span className="font-mono text-sm font-bold text-secondary">Ax = b</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center animate-float" style={{ animationDelay: "1.5s" }}>
              <span className="font-mono text-xs font-bold text-accent">λv = Av</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
