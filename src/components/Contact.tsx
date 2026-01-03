import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, MapPin, Linkedin, Phone } from "lucide-react";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px",
  });

  const appleEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 80% 20%, oklch(0.7 0.2 250) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 80%, oklch(0.7 0.2 300) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, oklch(0.7 0.2 250) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: appleEase }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: appleEase }}
          className="max-w-5xl mx-auto"
        >
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-xl border-border/50 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  href: "mailto:patil.karan7000@gmail.com",
                  icon: Mail,
                  label: "Email",
                  text: "patil.karan7000@gmail.com",
                },
                {
                  href: "tel:+919370797431",
                  icon: Phone,
                  label: "Phone",
                  text: "+91 9370797431",
                },
                {
                  href: "https://github.com/Patilkaran7000",
                  icon: Github,
                  label: "GitHub",
                  text: "@Patilkaran7000",
                },
                {
                  href: "https://www.linkedin.com/in/karan-patil-8a0a3222b",
                  icon: Linkedin,
                  label: "LinkedIn",
                  text: "Connect with me",
                },
              ].map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.label !== "Email" && item.label !== "Phone" ? "_blank" : undefined}
                  rel={item.label !== "Email" && item.label !== "Phone" ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: "backOut" }}
                  className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl border border-border/50 hover:border-primary/50 hover:bg-secondary/50 transition-all group cursor-pointer"
                >
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                      {item.label}
                    </h3>
                    <p className="text-muted-foreground text-sm break-all">
                      {item.text}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                onClick={() =>
                  window.open("mailto:patil.karan7000@gmail.com", "_blank")
                }
                className="group rounded-full px-8 h-12 text-base"
              >
                Send Me a Message
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </Button>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}