import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, Mail } from 'lucide-react';
import { FaLinkedin, FaBehance, FaDribbble } from 'react-icons/fa';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const airplaneRef = useRef<SVGSVGElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset after a while
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-secondary/30 relative overflow-hidden paper-texture">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text & Socials */}
          <div className="relative z-10">
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
              Let's Make Something Beautiful.
            </h2>
            <p className="font-sans text-lg text-muted-foreground mb-12 max-w-md">
              Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from you.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:hello@reinardcanero.design" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center shadow-sm border border-border group-hover:border-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-sans font-medium text-lg">hello@reinardcanero.design</span>
              </a>
              
              <div className="flex gap-4 pt-4">
                <a href="#" className="w-12 h-12 rounded-full bg-background flex items-center justify-center shadow-sm border border-border hover:text-primary hover:border-primary transition-colors">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-background flex items-center justify-center shadow-sm border border-border hover:text-primary hover:border-primary transition-colors">
                  <FaBehance className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-background flex items-center justify-center shadow-sm border border-border hover:text-primary hover:border-primary transition-colors">
                  <FaDribbble className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Sticky note */}
            <div className="absolute -bottom-20 -right-10 sticky-note w-48 hidden md:block z-0">
              <p>Currently available for new projects!</p>
            </div>
          </div>

          {/* Right: The Notebook Form */}
          <div className="relative z-10">
            <div className="bg-[#F5F0E6] rounded-r-2xl rounded-l-md shadow-xl border-l-[12px] border-l-[#8B4513] p-8 md:p-12 relative overflow-hidden">
              {/* Ruled lines pattern */}
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#999 1px, transparent 1px)', backgroundSize: '100% 2rem', marginTop: '4rem' }} />
              
              <h3 className="font-caveat text-3xl text-foreground mb-8 relative">Drop a line...</h3>
              
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-20 text-center relative"
                  >
                    <div className="sticky-note !rotate-0 w-full max-w-xs mx-auto">
                      <p className="text-3xl mb-4">Message received!</p>
                      <p className="text-xl">I'll be in touch soon.</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, x: 20 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 relative"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="name" className="sr-only">Name</Label>
                      <Input 
                        id="name" 
                        placeholder="Your name" 
                        required 
                        className="bg-transparent border-0 border-b border-border/50 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary shadow-none font-caveat text-2xl placeholder:text-muted-foreground/60"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="sr-only">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Your email" 
                        required 
                        className="bg-transparent border-0 border-b border-border/50 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary shadow-none font-caveat text-2xl placeholder:text-muted-foreground/60"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="sr-only">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell me about your project..." 
                        required 
                        className="min-h-[120px] bg-transparent border-0 border-b border-border/50 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary shadow-none font-caveat text-2xl placeholder:text-muted-foreground/60 resize-none leading-8"
                      />
                    </div>
                    
                    <div className="pt-4 flex justify-end">
                      <Button 
                        type="submit" 
                        size="lg" 
                        disabled={isSubmitting}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 relative overflow-hidden group"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        <motion.svg 
                          ref={airplaneRef}
                          animate={isSubmitting ? { x: 50, y: -50, opacity: 0 } : { x: 0, y: 0, opacity: 1 }}
                          className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2"
                        >
                          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                        </motion.svg>
                      </Button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
              
              {/* Page curl effect */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[rgba(0,0,0,0.1)] to-transparent" style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }} />
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#F5F0E6] shadow-[-2px_-2px_5px_rgba(0,0,0,0.05)]" style={{ clipPath: 'polygon(100% 0, 0 100%, 0 0)' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
