import { Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-6 animate-fade-up">
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent text-sm font-medium mb-4">
            Flutter Developer
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            Building beautiful mobile experiences
          </h1>
          <p className="text-lg md:text-xl text-secondary/80 max-w-2xl mx-auto">
            I craft elegant and performant mobile applications using Flutter and Dart,
            focusing on clean code and exceptional user experiences.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover-card glass-card"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover-card glass-card"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="p-3 rounded-full hover-card glass-card"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};