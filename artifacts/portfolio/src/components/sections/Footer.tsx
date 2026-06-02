import { ArrowUp } from 'lucide-react';
import { FaLinkedin, FaBehance, FaDribbble, FaInstagram } from 'react-icons/fa';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <p className="font-serif font-bold text-xl mb-1">RC.</p>
          <p className="font-sans text-sm text-muted-foreground">
            Crafted with love — Reinard Canero © {new Date().getFullYear()}
          </p>
          <p className="font-sans text-sm text-muted-foreground">Poet ni Luiese</p>
        </div>

        <div className="flex items-center gap-6 text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors"><FaLinkedin className="w-5 h-5" /></a>
          <a href="#" className="hover:text-primary transition-colors"><FaBehance className="w-5 h-5" /></a>
          <a href="#" className="hover:text-primary transition-colors"><FaDribbble className="w-5 h-5" /></a>
          <a href="#" className="hover:text-primary transition-colors"><FaInstagram className="w-5 h-5" /></a>
        </div>

        <button 
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors group"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>

      </div>
      
      {/* Decorative leaf */}
      <svg className="absolute bottom-0 right-10 w-24 h-24 stroke-primary/10 fill-none" viewBox="0 0 100 100">
        <path d="M50 100 Q60 50 100 10 Q60 30 50 100" strokeWidth="2" />
        <path d="M50 100 Q40 50 0 10 Q40 30 50 100" strokeWidth="2" />
      </svg>
    </footer>
  );
}
