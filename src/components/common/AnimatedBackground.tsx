'use client';

export default function AnimatedBackground() {
  return (
    <>
      {/* Fixed Background Layer */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-linear-to-br from-background via-background to-background opacity-100" />

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-secondary/10 to-accent/5 animate-gradient-shift opacity-40" />

        {/* Blob 1 - Top Left */}
        <svg
          className="absolute -top-40 -left-40 w-96 h-96 animate-float opacity-30"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="blob1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(260, 80%, 50%)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(200, 100%, 50%)" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path
            fill="url(#blob1)"
            d="M50,-30 Q100,-80 150,-30 Q180,20 150,70 Q100,120 50,70 Q20,20 50,-30 Z"
          />
        </svg>

        {/* Blob 2 - Top Right */}
        <svg
          className="absolute -top-20 -right-32 w-80 h-80 animate-float opacity-25"
          style={{animationDelay: '1s'}}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="blob2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(200, 100%, 50%)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(165, 100%, 40%)" stopOpacity="0.35" />
            </linearGradient>
          </defs>
          <path
            fill="url(#blob2)"
            d="M60,-40 Q110,-90 160,-40 Q190,10 160,80 Q110,130 60,80 Q30,10 60,-40 Z"
          />
        </svg>

        {/* Blob 3 - Bottom Left */}
        <svg
          className="absolute -bottom-40 -left-20 w-96 h-96 animate-float opacity-20"
          style={{animationDelay: '2s'}}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="blob3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(165, 100%, 40%)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(260, 80%, 50%)" stopOpacity="0.35" />
            </linearGradient>
          </defs>
          <path
            fill="url(#blob3)"
            d="M40,-20 Q90,-70 140,-20 Q170,30 140,90 Q90,140 40,90 Q10,30 40,-20 Z"
          />
        </svg>

        {/* Blob 4 - Bottom Right */}
        <svg
          className="absolute -bottom-30 -right-40 w-80 h-80 animate-float opacity-25"
          style={{animationDelay: '1.5s'}}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="blob4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(25, 90%, 55%)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(200, 100%, 50%)" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            fill="url(#blob4)"
            d="M50,-35 Q100,-85 150,-35 Q180,15 150,75 Q100,125 50,75 Q20,15 50,-35 Z"
          />
        </svg>

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(260, 80%, 50%) 1px, transparent 1px),
                            linear-gradient(to bottom, hsl(260, 80%, 50%) 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      {/* Dark Mode Adjustments */}
      <style jsx>{`
        @media (prefers-color-scheme: dark) {
          .fixed.inset-0 {
            opacity: 0.8;
          }
        }
      `}</style>
    </>
  );
}
