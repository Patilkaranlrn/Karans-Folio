import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Swift Grocery App",
    description:
      "A full-stack quick-commerce grocery delivery application inspired by Blinkit and Zepto. Features include real-time product inventory, cart management, secure checkout, and live order tracking.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    gradient: "from-emerald-400/20 to-green-600/20",
    image: "linear-gradient(to bottom right, var(--color-emerald-400), var(--color-green-600))"
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="projects" ref={containerRef} className="py-32 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Showcasing my expertise in full stack development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2, 
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <Card className="group overflow-hidden border-0 shadow-2xl bg-card rounded-[2rem]">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className={`h-64 md:h-auto bg-gradient-to-br ${project.gradient} relative overflow-hidden p-8 flex items-center justify-center`}>
                    <motion.div 
                      className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-700"
                    />
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full bg-background/50 backdrop-blur-xl rounded-2xl shadow-lg flex items-center justify-center"
                    >
                      <span className="text-4xl font-bold text-foreground/20">Preview</span>
                    </motion.div>
                  </div>
                  <div className="p-10 md:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-4 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-10">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" size="lg" className="rounded-full px-8">
                        <Github className="w-5 h-5 mr-2" />
                        Code
                      </Button>
                      <Button size="lg" className="rounded-full px-8">
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}