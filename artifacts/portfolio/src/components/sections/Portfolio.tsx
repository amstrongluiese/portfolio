import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

import proj1 from '@/assets/images/project-1.png';
import proj2 from '@/assets/images/project-2.png';
import proj3 from '@/assets/images/project-3.png';
import proj4 from '@/assets/images/project-4.png';
import proj5 from '@/assets/images/project-5.png';
import proj6 from '@/assets/images/project-6.png';

const PROJECTS = [
  {
    id: 'botanica',
    title: 'Botanica Tea Co.',
    category: 'Brand Identity',
    image: proj1,
    height: 'h-[400px]',
    tags: ['Branding', 'Packaging', 'Logo'],
    description: 'A complete brand identity redesign for a premium organic tea company emphasizing their natural sourcing and artisanal blending process.',
  },
  {
    id: 'serenity',
    title: 'Serenity Wellness App',
    category: 'UI/UX Design',
    image: proj2,
    height: 'h-[500px]',
    tags: ['Product Design', 'Mobile App', 'UX Research'],
    description: 'A meditation and mental wellness application designed to provide a calm, frictionless experience for users seeking daily mindfulness.',
  },
  {
    id: 'culture',
    title: 'Culture Magazine',
    category: 'Editorial Design',
    image: proj3,
    height: 'h-[450px]',
    tags: ['Print', 'Typography', 'Layout'],
    description: 'Quarterly editorial layout for a contemporary arts and culture magazine, focusing on bold typography and striking photography pairings.',
  },
  {
    id: 'forest',
    title: 'Forest Skincare',
    category: 'Packaging Design',
    image: proj4,
    height: 'h-[400px]',
    tags: ['Packaging', '3D Render', 'Art Direction'],
    description: 'Sustainable luxury skincare packaging utilizing recycled materials and a minimalist design system inspired by forest flora.',
  },
  {
    id: 'bloom',
    title: 'Bloom Festival',
    category: 'Campaign Visuals',
    image: proj5,
    height: 'h-[550px]',
    tags: ['Motion', 'Campaign', 'Poster'],
    description: 'Vibrant, dynamic visual identity for an independent music and arts festival, translated across digital and physical touchpoints.',
  },
  {
    id: 'studio',
    title: 'Studio Collective',
    category: 'Visual Identity',
    image: proj6,
    height: 'h-[350px]',
    tags: ['Branding', 'Web Design', 'Strategy'],
    description: 'A flexible, warm identity system for a creative coworking space, designed to adapt to various sub-brands and community events.',
  }
];

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="works" className="py-32 bg-background relative" ref={ref}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Selected Works
          </h2>
          <p className="font-caveat text-2xl text-muted-foreground">
            A glimpse into my recent projects.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="break-inside-avoid relative group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative bg-card p-3 rounded-sm shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
                {/* Image Container */}
                <div className={`relative w-full ${project.height} overflow-hidden bg-muted`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      className="text-white"
                    >
                      <p className="font-caveat text-xl text-white/80 mb-1">{project.category}</p>
                      <h3 className="font-serif text-2xl font-bold">{project.title}</h3>
                      <div className="flex gap-2 mt-3 flex-wrap">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-xs px-2 py-1 bg-white/20 backdrop-blur-sm rounded-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
                {/* Paper Tape */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-secondary/60 backdrop-blur-md rotate-1 z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" className="font-serif">
            View All Projects
          </Button>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-background w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/80 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>

              <div className="w-full h-64 md:h-96 relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                  <div>
                    <p className="font-caveat text-2xl text-primary mb-2">{selectedProject.category}</p>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">{selectedProject.title}</h2>
                  </div>
                  <Button className="gap-2 shrink-0">
                    Visit Project <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground font-sans">
                  <p className="text-xl leading-relaxed text-foreground/80 mb-8">
                    {selectedProject.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 border-t border-border pt-8">
                    <div>
                      <h4 className="font-serif text-xl font-bold text-foreground mb-3">The Challenge</h4>
                      <p>Creating a cohesive visual language that stands out in a crowded market while remaining true to the brand's core values and target demographic expectations.</p>
                    </div>
                    <div>
                      <h4 className="font-serif text-xl font-bold text-foreground mb-3">The Solution</h4>
                      <p>Implemented a comprehensive design system utilizing bespoke typography, a refined color palette, and targeted art direction to elevate the brand's positioning.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
