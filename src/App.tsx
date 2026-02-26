import { BackgroundGradientAnimation } from "@/src/components/ui/background-gradient-animation";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1B28] overflow-hidden">
      <main className="relative min-h-screen w-full">
        <BackgroundGradientAnimation 
          containerClassName="absolute inset-0 z-0"
          gradientBackgroundStart="#0B1B28"
          gradientBackgroundEnd="#0B1B28"
          firstColor="11, 27, 40"   // #0B1B28
          secondColor="0, 107, 83"  // #006B53
          thirdColor="50, 233, 105" // #32E969
          fourthColor="2, 220, 194" // #02DCC2
          fifthColor="0, 160, 0"    // #00A000
          pointerColor="50, 233, 105" // #32E969 (Bright Green)
          size="140%"
          blendingValue="soft-light"
        >
          {/* Content removed as requested */}
          <div className="relative z-10 flex min-h-screen items-center justify-center">
            {/* Empty container to maintain layout if needed, but no text */}
          </div>
        </BackgroundGradientAnimation>
      </main>

      {/* Background Texture Overlay */}
      <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.02] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
    </div>
  );
}

