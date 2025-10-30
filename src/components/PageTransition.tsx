import { useEffect, useState } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Wave Transition Overlay */}
      <div
        className={`fixed inset-0 z-50 pointer-events-none transition-transform duration-1000 ease-in-out ${
          isTransitioning ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(21 39% 50%)" />
              <stop offset="100%" stopColor="hsl(29 45% 71%)" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            d="M0,0 L1440,0 L1440,800 Q1080,700 720,800 T0,800 Z"
            className="animate-wave-reveal"
          />
        </svg>
      </div>

      {/* Content with fade-in animation */}
      <div
        className={`transition-opacity duration-700 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ transitionDelay: '600ms' }}
      >
        {children}
      </div>
    </>
  );
};

export default PageTransition;
