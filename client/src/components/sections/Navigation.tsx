import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { useScrollProgress } from '@/hooks/useScrollProgress';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Works', href: '#works' },
  { name: 'Skills', href: '#skills' },
  { name: 'Garden', href: '#garden' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div 
        className="fixed top-0 left-0 h-1 bg-primary z-50 origin-left"
        style={{ width: `${progress * 100}%` }}
      />
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 px-6 py-3 rounded-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur-md shadow-sm border border-border/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center gap-8">
          <a 
            href="#hero" 
            onClick={(e) => scrollTo(e, '#hero')}
            className="font-serif font-bold text-xl text-foreground"
          >
            RC.
          </a>
          
          <ul className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.name} className="relative group">
                <a
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === link.href.substring(1) ? 'text-primary' : 'text-foreground/70'
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && (
                    <motion.span
                      layoutId="activeDot"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>
    </>
  );
}
