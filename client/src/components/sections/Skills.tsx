import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  PenTool, Monitor, Layout, Component, 
  Palette, Smartphone, MousePointer2, 
  Figma, Image as ImageIcon, Sparkles
} from 'lucide-react';

const SKILLS = [
  { name: 'UI Design', icon: Layout, level: 5, rotate: -2, x: -10, y: 10 },
  { name: 'UX Design', icon: MousePointer2, level: 4, rotate: 3, x: 10, y: -5 },
  { name: 'Branding', icon: Sparkles, level: 5, rotate: -1, x: 0, y: 15 },
  { name: 'Typography', icon: PenTool, level: 5, rotate: 4, x: -15, y: 0 },
  { name: 'Motion', icon: Monitor, level: 3, rotate: -3, x: 20, y: -10 },
  { name: 'Figma', icon: Figma, level: 5, rotate: 1, x: -5, y: -20 },
  { name: 'Graphic Design', icon: Palette, level: 4, rotate: -4, x: 15, y: 20 },
  { name: 'Mobile Apps', icon: Smartphone, level: 4, rotate: 2, x: 5, y: 5 },
  { name: 'Creative Direction', icon: Component, level: 4, rotate: -2, x: -20, y: -15 },
  { name: 'Photoshop', icon: ImageIcon, level: 5, rotate: 3, x: 10, y: 25 },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="skills" className="py-32 bg-card relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            A collection of crafts.
          </h2>
          <p className="font-caveat text-2xl text-muted-foreground">
            Tools and disciplines I use to build ideas.
          </p>
        </div>

        <motion.div 
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-4xl mx-auto"
        >
          {SKILLS.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={item}
                whileHover={{ 
                  y: -8, 
                  scale: 1.05, 
                  rotate: 0,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-background p-6 rounded-lg shadow-sm border border-border flex flex-col items-center gap-4 w-36 md:w-44 transition-shadow cursor-default"
                style={{
                  transform: `rotate(${skill.rotate}deg) translate(${skill.x}px, ${skill.y}px)`,
                }}
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground">
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="font-serif font-medium text-center">{skill.name}</h3>
                
                <div className="flex gap-1 mt-auto">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-1.5 h-1.5 rounded-full ${i < skill.level ? 'bg-primary' : 'bg-muted'}`}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      
      {/* Torn Paper Bottom Edge */}
      <div className="absolute bottom-0 w-full h-8 bg-background torn-edge translate-y-1/2 z-30" />
    </section>
  );
}
