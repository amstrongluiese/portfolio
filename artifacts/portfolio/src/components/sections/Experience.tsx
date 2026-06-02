import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const MILESTONES = [
  {
    year: '2019',
    title: 'Started the Creative Journey',
    description: 'First freelance design projects, building a foundation in layout and visual hierarchy.'
  },
  {
    year: '2020',
    title: 'Brand Studio',
    description: 'Joined a boutique branding agency, honing craft in identity design and brand strategy.'
  },
  {
    year: '2021',
    title: 'Digital Product Design',
    description: 'Expanded into UI/UX, launching digital products for startups with a focus on user-centric experiences.'
  },
  {
    year: '2023',
    title: 'Creative Direction',
    description: 'Led visual identity and art direction for 20+ brands and comprehensive marketing campaigns.'
  },
  {
    year: '2025',
    title: 'Full-Stack Creative',
    description: 'Running an independent creative practice, overseeing projects from conceptualization to execution.'
  }
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (pathRef.current && containerRef.current) {
      const length = pathRef.current.getTotalLength();
      
      gsap.set(pathRef.current, {
        strokeDasharray: length,
        strokeDashoffset: length
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1
        }
      });

      tl.to(pathRef.current, {
        strokeDashoffset: 0,
        ease: "none"
      });
    }

    itemsRef.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(item, 
          { opacity: 0, y: 50 },
          {
            opacity: 1, 
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="experience" className="py-32 bg-background relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 max-w-4xl relative">
        <div className="text-center mb-24">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Journey
          </h2>
          <p className="font-caveat text-2xl text-muted-foreground">
            Growing and evolving over time.
          </p>
        </div>

        <div className="relative">
          {/* The Vine SVG */}
          <div className="absolute top-0 bottom-0 left-[20px] md:left-1/2 md:-translate-x-1/2 w-[40px] z-0">
            <svg ref={svgRef} className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <path 
                ref={pathRef}
                d="M20 0 Q40 100 20 200 T20 400 Q0 500 20 600 T20 800 Q40 900 20 1000" 
                fill="none" 
                stroke="var(--color-primary)" 
                strokeWidth="4"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          {/* Milestones */}
          <div className="space-y-24 relative z-10">
            {MILESTONES.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={milestone.year}
                  ref={el => itemsRef.current[index] = el}
                  className={`flex flex-col md:flex-row gap-8 items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="md:w-1/2 flex pl-16 md:pl-0">
                    <div className={`bg-card p-6 rounded-lg shadow-sm border border-border relative ${isEven ? 'md:mr-12' : 'md:ml-12'}`}>
                      {/* Leaf marker */}
                      <div className={`absolute top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center -left-14 ${isEven ? 'md:-right-[4.25rem] md:left-auto' : 'md:-left-[4.25rem]'}`}>
                         <svg viewBox="0 0 24 24" className="w-6 h-6 fill-primary">
                           <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" className="hidden"/>
                           <path d="M12 2C8 2 4 6 4 12c0 2.21.89 4.21 2.34 5.66L12 12V2z" fill="var(--color-accent)"/>
                           <path d="M12 2c4 0 8 4 8 10 0 2.21-.89 4.21-2.34 5.66L12 12V2z" fill="var(--color-primary)"/>
                         </svg>
                      </div>

                      <span className="font-caveat text-3xl text-primary block mb-2">{milestone.year}</span>
                      <h3 className="font-serif text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                      <p className="font-sans text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
