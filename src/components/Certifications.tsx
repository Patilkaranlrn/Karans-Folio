import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { BadgeCheck, Brain, ShieldCheck, Database } from "lucide-react";

const certifications = [
  {
    title: "IoT Training Workshop",
    icon: BadgeCheck,
  },
  {
    title: "Cyber Security Internship",
    icon: ShieldCheck,
  },
  {
    title: "MySQL Bootcamp",
    icon: Database,
  },
  {
    title: "The Ultimate MySQL Bootcamp",
    icon: Database,
  },
];

const strengths = [
  "Strong ownership mindset",
  "Enterprise application development",
  "Problem-solving and debugging",
  "Cross-functional collaboration",
  "AI-assisted development workflows",
  "Scalable architecture understanding",
  "Fast learner with adaptability to modern technologies",
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 bg-secondary/20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Certifications & Strengths
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Continuous learning backed by enterprise execution and delivery ownership
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 bg-card/70 backdrop-blur-sm border-border/50">
            <h3 className="text-2xl font-bold tracking-tight mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                    <span>{item.title}</span>
                  </motion.div>
                );
              })}
            </div>
          </Card>

          <Card className="p-8 bg-card/70 backdrop-blur-sm border-border/50">
            <h3 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-2">
              <Brain className="w-6 h-6 text-primary" />
              Additional Strengths
            </h3>
            <div className="space-y-3">
              {strengths.map((strength, index) => (
                <motion.div
                  key={strength}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="text-muted-foreground"
                >
                  {strength}
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
