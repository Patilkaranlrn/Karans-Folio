import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Database,
  GitBranch,
  Container,
  Sparkles,
  Code2,
  Server,
} from "lucide-react";

const skills = [
  {
    category: "Version Control",
    icon: GitBranch,
    items: ["Git", "GitHub Copilot"],
  },
  {
    category: "CI/CD",
    icon: Server,
    items: ["Jenkins"],
  },
  {
    category: "Databases",
    icon: Database,
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "DevOps",
    icon: Container,
    items: ["Docker"],
  },
  {
    category: "AI & Innovation",
    icon: Sparkles,
    items: ["AI Prompt Engineering"],
  },
  {
    category: "Development",
    icon: Code2,
    items: ["Full Stack Development"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            A diverse toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <Card className="p-8 h-full bg-secondary/30 border-0 hover:bg-secondary/50 transition-colors duration-300 backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-background rounded-xl shadow-sm">
                      <Icon className="w-6 h-6 text-foreground" />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight">
                      {skill.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-background/50 text-muted-foreground rounded-md text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}