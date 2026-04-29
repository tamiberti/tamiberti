// Decorative organic watercolor blobs inspired by the Josephine layout.
// All colors use HSL design tokens from index.css.

export const BlobPeach = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 400 300"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      fill="hsl(18 55% 82%)"
      opacity="0.85"
      d="M60,180 C20,120 70,40 160,40 C240,40 280,90 330,80 C380,70 400,140 360,200 C320,260 240,280 160,260 C100,250 90,230 60,180 Z"
    />
  </svg>
);

export const BlobMustard = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 400 300"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      fill="hsl(42 65% 65%)"
      opacity="0.7"
      d="M40,160 C30,80 130,30 220,60 C290,80 360,50 380,130 C400,210 320,260 240,250 C160,240 80,260 50,210 C40,195 35,180 40,160 Z"
    />
    <circle cx="120" cy="100" r="3" fill="hsl(42 70% 50%)" opacity="0.5" />
    <circle cx="180" cy="180" r="2" fill="hsl(42 70% 50%)" opacity="0.5" />
    <circle cx="280" cy="120" r="2.5" fill="hsl(42 70% 50%)" opacity="0.5" />
    <circle cx="320" cy="200" r="2" fill="hsl(42 70% 50%)" opacity="0.5" />
  </svg>
);

export const BlobRose = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 400 300"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      fill="hsl(350 55% 72%)"
      opacity="0.75"
      d="M80,140 C60,70 160,30 230,60 C310,90 380,80 370,170 C360,240 280,270 200,250 C140,235 90,220 80,140 Z"
    />
  </svg>
);

export const SquiggleAccent = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 30"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M5,15 Q20,2 35,15 T65,15 T95,15"
      stroke="hsl(8 60% 75%)"
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);
