import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TESTIMONIALS = [
  {
    quote: "Reinard doesn't just make things look pretty; he builds visual systems that tell a profound story. Our rebrand exceeded all expectations.",
    name: "Sarah Chen",
    role: "Brand Director",
    rotate: -3
  },
  {
    quote: "Working with Reinard felt like an extension of our own team. His attention to detail and ability to translate abstract ideas into tangible designs is unmatched.",
    name: "Marcus Williams",
    role: "Startup Founder",
    rotate: 1.5
  },
  {
    quote: "A rare mix of creative visionary and precise executor. The campaign assets he delivered set a new benchmark for our agency.",
    name: "Priya Patel",
    role: "Creative Director",
    rotate: -1
  },
  {
    quote: "The UI/UX overhaul didn't just look incredible—it significantly improved our conversion rates. Highly recommended.",
    name: "James Okafor",
    role: "Product Manager",
    rotate: 2
  }
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative overflow-hidden bg-[#E2D5C3] corkboard-texture" ref={ref}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 relative z-10">
          <div className="inline-block bg-background/90 backdrop-blur-sm px-8 py-4 rounded-lg shadow-sm border border-border rotate-[-1deg]">
            <h2 className="font-serif text-4xl font-bold text-foreground">
              Kind Words
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, rotate: testimonial.rotate - 10 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: testimonial.rotate } : {}}
              transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }}
              className="relative"
            >
              {/* The pinned note */}
              <div 
                className="bg-card p-8 shadow-md relative"
                style={{ 
                  boxShadow: "2px 4px 12px rgba(0,0,0,0.1), 0 0 40px rgba(0,0,0,0.02) inset",
                  animation: `sway ${3 + index}s infinite alternate ease-in-out` 
                }}
              >
                {/* The Pin */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="8" r="6" fill="#8B4513" />
                    <circle cx="12" cy="8" r="2" fill="#A0522D" />
                    <path d="M12 14V22" stroke="#666" strokeWidth="2" strokeLinecap="round" />
                    <ellipse cx="12" cy="22" rx="4" ry="1" fill="rgba(0,0,0,0.2)" />
                  </svg>
                </div>
                
                <p className="font-caveat text-2xl md:text-3xl text-foreground/90 leading-relaxed mb-6 mt-2">
                  "{testimonial.quote}"
                </p>
                
                <div className="border-t border-border/50 pt-4">
                  <p className="font-sans font-bold text-foreground">{testimonial.name}</p>
                  <p className="font-sans text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes sway {
          0% { transform: rotate(calc(var(--rotate, 0deg) - 1deg)); }
          100% { transform: rotate(calc(var(--rotate, 0deg) + 1deg)); }
        }
        .corkboard-texture {
          background-image: radial-gradient(#C4A484 15%, transparent 16%), radial-gradient(#C4A484 15%, transparent 16%);
          background-size: 8px 8px;
          background-position: 0 0, 4px 4px;
        }
      `}} />
    </section>
  );
}
