import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin } from "lucide-react";

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px",
  });

  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Academic background and qualifications
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <Card className="p-8 md:p-12 hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm group">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left">
                <div className="p-6 bg-primary/10 rounded-2xl shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <GraduationCap className="w-12 h-12 text-primary" />
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-3xl font-bold tracking-tight">
                    Engineering in Computer Science
                  </h3>
                  <p className="text-2xl text-muted-foreground font-medium">
                    Shivajirao S. Jondhale College of Engineering
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground bg-secondary/50 w-fit px-4 py-2 rounded-full mx-auto md:mx-0">
                    <MapPin className="w-4 h-4" />
                    <span>Dombivli</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}