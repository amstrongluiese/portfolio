import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsVisible(false);
        setTimeout(onComplete, 800); // Wait for exit animation
      }
    });

    if (svgRef.current) {
      const paths = svgRef.current.querySelectorAll('path, circle, line');
      gsap.set(paths, { strokeDasharray: 1000, strokeDashoffset: 1000, opacity: 0 });
      
      tl.to(paths, {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: "power2.inOut"
      });
    }

    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
      delay: 0.2
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={containerRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background paper-texture"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="relative w-64 h-64">
            <svg
              ref={svgRef}
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full stroke-primary stroke-[2px]"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Abstract plant/doodle */}
              <path d="M100 180 Q110 140 90 100 T100 20" />
              <path d="M100 140 Q130 130 140 100 Q110 110 100 140" />
              <path d="M95 110 Q60 100 50 70 Q80 80 95 110" />
              <circle cx="140" cy="90" r="4" fill="currentColor" className="stroke-none" />
              <circle cx="45" cy="65" r="3" fill="currentColor" className="stroke-none" />
              <circle cx="100" cy="15" r="5" fill="currentColor" className="stroke-none" />
              
              {/* Small stars */}
              <path d="M160 40 L160 50 M155 45 L165 45" />
              <path d="M30 130 L30 140 M25 135 L35 135" />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
