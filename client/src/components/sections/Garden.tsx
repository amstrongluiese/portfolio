import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const PILLS = [
  { label: 'Branding', x: '10%', y: '20%' },
  { label: 'UI/UX', x: '70%', y: '15%' },
  { label: 'Typography', x: '25%', y: '60%' },
  { label: 'Illustration', x: '80%', y: '50%' },
  { label: 'Motion', x: '15%', y: '85%' },
  { label: 'Creative Direction', x: '50%', y: '75%' },
  { label: 'Photography', x: '65%', y: '85%' },
];

export function Garden() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="garden" className="py-32 relative overflow-hidden bg-gradient-to-b from-background to-[#E8F3E8] paper-texture" ref={ref}>
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            A Garden of Creativity
          </h2>
          <p className="font-caveat text-2xl text-muted-foreground">
            Where ideas take root and grow.
          </p>
        </div>

        <div className="relative h-[600px] w-full flex items-center justify-center">
          {/* Main Tree Illustration */}
          <svg viewBox="0 0 800 600" className="w-full h-full max-w-3xl overflow-visible">
            {/* Trunk */}
            <motion.path 
              d="M400 600 Q380 400 400 200 M400 450 Q450 350 550 250 M400 350 Q300 250 200 150 M450 280 Q500 200 600 100 M350 200 Q300 150 250 50" 
              fill="none" 
              stroke="var(--color-primary)" 
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
            
            {/* Interactive Leaves */}
            {[
              { cx: 400, cy: 200 },
              { cx: 550, cy: 250 },
              { cx: 200, cy: 150 },
              { cx: 600, cy: 100 },
              { cx: 250, cy: 50 },
              { cx: 450, cy: 150 },
              { cx: 350, cy: 100 },
              { cx: 500, cy: 50 }
            ].map((pos, i) => (
              <motion.g 
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 2 + (i * 0.2) }}
                className="cursor-pointer group"
                whileHover={{ scale: 1.5 }}
              >
                <circle cx={pos.cx} cy={pos.cy} r="20" fill="var(--color-secondary)" className="opacity-50 group-hover:opacity-80 transition-opacity" />
                <path d={`M${pos.cx} ${pos.cy} Q${pos.cx+15} ${pos.cy-15} ${pos.cx+30} ${pos.cy} Q${pos.cx+15} ${pos.cy+15} ${pos.cx} ${pos.cy}`} fill="var(--color-primary)" />
                <path d={`M${pos.cx} ${pos.cy} Q${pos.cx-15} ${pos.cy-15} ${pos.cx-30} ${pos.cy} Q${pos.cx-15} ${pos.cy+15} ${pos.cx} ${pos.cy}`} fill="var(--color-accent)" />
              </motion.g>
            ))}
          </svg>

          {/* Floating Pills */}
          {PILLS.map((pill, i) => (
            <motion.div
              key={pill.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { 
                opacity: 1, 
                y: [0, -10, 0],
              } : {}}
              transition={{ 
                opacity: { duration: 0.8, delay: 1 + (i * 0.2) },
                y: { repeat: Infinity, duration: 4 + i, ease: "easeInOut" }
              }}
              className="absolute bg-background/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-border/50 text-sm font-medium text-foreground whitespace-nowrap"
              style={{ left: pill.x, top: pill.y }}
            >
              {pill.label}
            </motion.div>
          ))}

          {/* Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-primary/40"
              initial={{ 
                x: Math.random() * 800 - 400, 
                y: Math.random() * 600 - 300,
                opacity: 0
              }}
              animate={isInView ? {
                y: [null, Math.random() * -100 - 50],
                x: [null, Math.random() * 100 - 50],
                opacity: [0, 1, 0]
              } : {}}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Torn edge */}
      <div className="absolute bottom-0 w-full h-8 bg-background torn-edge translate-y-1/2 z-30" />
    </section>
  );
}
