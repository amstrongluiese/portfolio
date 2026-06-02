import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import portraitImg from '@/assets/images/portrait.png';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Images/Collage Side */}
          <div className="relative h-[600px] flex items-center justify-center">
            {/* Background Doodles */}
            <svg className="absolute w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              {isInView && (
                <>
                  <motion.path 
                    d="M50 100 Q150 50 250 150 T400 100" 
                    fill="none" 
                    stroke="var(--color-primary)" 
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                </>
              )}
            </svg>

            {/* Main Polaroid */}
            <motion.div
              initial={{ y: 50, opacity: 0, rotate: -10 }}
              animate={isInView ? { y: 0, opacity: 1, rotate: -3 } : {}}
              transition={{ duration: 0.8, type: "spring" }}
              className="polaroid-frame relative z-10 w-64 md:w-80"
            >
              <div className="aspect-[3/4] bg-muted relative overflow-hidden">
                <img 
                  src={portraitImg} 
                  alt="Reinard Canero" 
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="font-caveat text-xl text-center mt-4 text-foreground/80">In the studio, 2024</p>
              
              {/* Tape */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-secondary/80 backdrop-blur-sm -rotate-2" />
            </motion.div>

            {/* Sticky Note 1 */}
            <motion.div
              initial={{ x: 50, opacity: 0, rotate: 20 }}
              animate={isInView ? { x: 0, opacity: 1, rotate: 6 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute top-1/4 right-4 md:-right-4 sticky-note z-20 w-48"
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-accent/30 backdrop-blur-sm rotate-3" />
              <p>Based in San Francisco</p>
            </motion.div>

            {/* Sticky Note 2 */}
            <motion.div
              initial={{ x: -50, opacity: 0, rotate: -20 }}
              animate={isInView ? { x: 0, opacity: 1, rotate: -8 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute bottom-1/4 left-0 md:-left-8 sticky-note z-20 w-56 !bg-[#E8F3E8]"
            >
              <p>Design Philosophy:<br/>Beauty with purpose.</p>
            </motion.div>
          </div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              The person behind the pixels.
            </h2>
            
            <div className="w-12 h-1 bg-primary rounded-full" />
            
            <div className="space-y-4 font-sans text-lg text-muted-foreground leading-relaxed">
              <p>
                I believe that the best design isn't just seen—it's felt. My approach blends analytical thinking with an organic, handcrafted aesthetic to create digital experiences that resonate on a human level.
              </p>
              <p>
                With over a decade of experience across brand identity, UI/UX, and art direction, I've helped startups find their voice and established brands rediscover their soul.
              </p>
              <p>
                When I'm not pushing pixels, you'll find me sketching in my notebook, tending to my overly ambitious indoor garden, or searching for the perfect cup of coffee.
              </p>
            </div>
            
            <div className="pt-6 border-t border-border mt-8">
              <h3 className="font-serif text-xl font-medium mb-4">Core Passions</h3>
              <ul className="flex flex-wrap gap-3">
                {['Typography', 'Visual Storytelling', 'Botany', 'Film Photography'].map((passion) => (
                  <li key={passion} className="px-4 py-2 bg-secondary/50 rounded-full text-sm font-medium text-secondary-foreground border border-secondary-foreground/10">
                    {passion}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Torn Paper Bottom Edge */}
      <div className="absolute bottom-0 w-full h-8 bg-card torn-edge translate-y-1/2 z-30" />
    </section>
  );
}
