import { motion } from "framer-motion";
import { Github, Mail, Heart, Linkedin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <p className="text-sm text-muted-foreground flex items-center gap-2 justify-center md:justify-start">
              Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" />{" "}
              by Karan Patil
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex gap-4"
          >
            <motion.a
              href="https://github.com/Patilkaran7000"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full border border-border hover:border-primary transition-colors cursor-pointer"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/karan-patil-8a0a3222b"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full border border-border hover:border-primary transition-colors cursor-pointer"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:patil.karan7000@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full border border-border hover:border-primary transition-colors cursor-pointer"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="tel:+919370797431"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full border border-border hover:border-primary transition-colors cursor-pointer"
            >
              <Phone className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}