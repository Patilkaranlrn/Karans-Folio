import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Mail, ArrowDown, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const appleEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

  return (
    <section ref={containerRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, oklch(0.95 0.05 250) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, oklch(0.95 0.05 300) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, oklch(0.95 0.05 250) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <motion.div 
        style={{ y, opacity, scale }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: appleEase }}
          >
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8">
              Hi, I'm{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
                Karan
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="text-2xl md:text-4xl text-muted-foreground mb-10 font-medium tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: appleEase }}
          >
            Full Stack Software Developer
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: appleEase }}
          >
            Crafting elegant solutions with modern technologies. Passionate about
            building scalable applications and exploring the latest in web development.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.7, ease: appleEase }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="group rounded-full px-8 h-14 text-lg bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get In Touch
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("projects")}
              className="rounded-full px-8 h-14 text-lg backdrop-blur-xl bg-background/30 border-foreground/10 hover:bg-background/50 transition-all duration-300"
            >
              View My Work
            </Button>
          </motion.div>

          <motion.div
            className="flex gap-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1, ease: appleEase }}
          >
            {[
              { href: "https://github.com/Patilkaran7000", Icon: Github },
              { href: "https://www.linkedin.com/in/karan-patil-8a0a3222b", Icon: Linkedin },
              { href: "mailto:patil.karan7000@gmail.com", Icon: Mail },
              { href: "tel:+919370797431", Icon: Phone },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-full bg-secondary/50 backdrop-blur-md border border-border/50 hover:border-foreground/20 hover:bg-secondary transition-all duration-300"
              >
                <item.Icon className="w-6 h-6 text-foreground/80" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2, ease: "easeInOut" }}
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground/50" />
      </motion.div>
    </section>
  );
}