import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px",
  });

  const experiences = [
    {
      company: "LRN Technologies and Content Solutions",
      role: "Full Stack Developer",
      duration: "1 year 5 months",
      description:
        "Key contributor to the Mobile Manager application and internal automation tools.",
      achievements: [
        "Worked on Mobile Manager (Admin side) using AngularJS and NodeJS.",
        "Managed data using PostgreSQL and MongoDB databases.",
        "Created 2 critical automations: Jenkins Automation and Google Firebase Automation.",
        "Successfully executed Angular Migration from version 7 to version 19 within the timeline.",
        "Achieved 100% code coverage for the whole project including frontend and backend.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            My professional journey and key contributions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              <Card className="p-8 md:p-10 border-l-4 border-l-primary relative overflow-hidden group hover:shadow-xl transition-all duration-500 bg-card/80 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-3 tracking-tight">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      {exp.role}
                    </h3>
                    <p className="text-xl text-muted-foreground mt-2 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium bg-secondary px-4 py-2 rounded-full w-fit h-fit">
                    <Calendar className="w-4 h-4" />
                    {exp.duration}
                  </div>
                </div>

                <p className="mb-8 text-lg text-muted-foreground leading-relaxed">{exp.description}</p>

                <div className="space-y-4">
                  {exp.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                      className="flex items-start gap-4 group/item"
                    >
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                      <span className="text-base">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}