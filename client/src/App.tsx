import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { useLenis } from "@/hooks/useLenis";

import { 
  LoadingScreen,
  Navigation,
  Hero,
  About,
  Skills,
  Portfolio,
  Garden,
  Testimonials,
  Experience,
  Contact,
  Footer
} from "@/components/sections";

const queryClient = new QueryClient();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize smooth scrolling
  useLenis();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
        
        <div className={isLoading ? "h-screen overflow-hidden" : ""}>
          <Navigation />
          <main>
            <Hero />
            <About />
            <Skills />
            <Portfolio />
            <Garden />
            <Testimonials />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </div>

        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
