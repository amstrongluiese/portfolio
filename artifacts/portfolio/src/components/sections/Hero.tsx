import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useParallax } from '@/hooks/useParallax';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const offset = useParallax(containerRef, 0.03);

  const scrollTo = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden paper-texture pt-20"
    >
      {/* Parallax Background Elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        animate={{ x: offset.x * -1, y: offset.y * -1 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <svg className="absolute top-[20%] left-[10%] w-24 h-24 stroke-primary/30" viewBox="0 0 100 100" fill="none">
          <path d="M10 50 Q50 10 90 50 Q50 90 10 50" strokeWidth="2"/>
        </svg>
        <svg className="absolute bottom-[20%] right-[15%] w-32 h-32 stroke-accent/20" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" strokeWidth="1" strokeDasharray="4 4"/>
          <path d="M50 10 L50 90 M10 50 L90 50" strokeWidth="1" strokeDasharray="4 4"/>
        </svg>
        <svg className="absolute top-[15%] right-[20%] w-16 h-16 fill-secondary" viewBox="0 0 100 100">
          <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z"/>
        </svg>
      </motion.div>

      {/* Main Content Card */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 bg-card p-12 md:p-20 rounded-xl shadow-xl max-w-4xl mx-4 w-full text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute -top-6 -left-6 w-12 h-12 bg-accent/10 rounded-full blur-xl"
        />
        
        <p className="font-caveat text-3xl md:text-4xl text-accent mb-4 transform -rotate-2">
          Hello, I'm
        </p>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight">
          Reinard Canero
        </h1>
        
        <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Creative Designer crafting meaningful visual experiences through branding, digital design, and storytelling.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 w-full sm:w-auto relative group overflow-hidden shadow-md"
            onClick={() => scrollTo('#works')}
          >
            <span className="relative z-10">View My Works</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-border text-foreground hover:bg-secondary font-medium px-8 w-full sm:w-auto"
            onClick={() => scrollTo('#contact')}
          >
            Let's Collaborate
          </Button>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
