import { motion } from "framer-motion";

const skills = [
  { name: "Flutter", level: 90 },
  { name: "Dart", level: 85 },
  { name: "Firebase", level: 80 },
  { name: "UI/UX Design", level: 75 },
  { name: "State Management", level: 85 },
  { name: "REST APIs", level: 80 },
];

export const Skills = () => {
  return (
    <section className="py-20 px-4 bg-black/15">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Skills</h2>
          <p className="text-secondary/80 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-black/10 bg-white/50 backdrop-blur-sm rounded-xl p-4 hover:border-black/20 transition-colors"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-secondary/60">{skill.level}%</span>
              </div>
              <div className="h-2 bg-black/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="h-full bg-black rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};