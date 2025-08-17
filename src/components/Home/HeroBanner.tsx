import Image from "next/image";
import { etarBellotaFont } from "@/app/etarBellotaFont";

export default function HeroBanner() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-24 lg:py-36"
      style={{
        backgroundColor: '#18171d',
        backgroundImage: "url('/assests-main/hero-bg-shape.webp')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Left side image */}
      <div className="hidden lg:block absolute left-12 bottom-40 z-20 animate-float">
        <Image
          src="/assests-main/hero-img-1.webp"
          alt="Side Dish"
          width={240}
          height={240}
          className="rounded-2xl shadow-2xl object-cover w-[240px] h-[240px] border-4 border-[#18171d]"
        />
      </div>

      {/* Right side image */}
      <div className="hidden lg:block absolute right-12 top-40 z-20 animate-float-delayed">
        <Image
          src="/assets/img/gallery/gallery-2.webp"
          alt="Side Dish"
          width={200}
          height={200}
          className="rounded-2xl shadow-2xl object-cover w-[200px] h-[200px] border-4 border-[#18171d]"
        />
      </div>

      <div className="relative z-20 w-full max-w-[1400px] mx-auto flex flex-col items-center justify-center min-h-screen px-4 py-20 sm:py-24">
        {/* Headline and main image */}
        <div className="relative w-full flex flex-col items-center justify-center">
          <h1 className={`font-bold text-white text-center leading-tight relative z-30 ${etarBellotaFont.variable}`}>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-4 animate-fade-down" style={{letterSpacing: '-0.04em', fontWeight: 900}}>
              Aesthetic
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 animate-fade-down-delayed" style={{letterSpacing: '-0.04em', fontWeight: 900}}>
              Joy Of
            </span>
          </h1>

          {/* Main hero image with DELICIOUS text overlay */}
          <div className="relative flex items-center justify-center w-full mt-4 mb-4 px-4 animate-fade-up">
            <div className="relative w-full max-w-[900px]">
              <Image
                src="/assets/img/hero/hero-img-3.webp"
                alt="Hero Main"
                width={900}
                height={500}
                className="rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.5)] border-[12px] border-[#18171d] object-cover w-full aspect-[16/9]"
                priority
              />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[60px] xs:text-[80px] sm:text-[120px] md:text-[150px] lg:text-[180px] xl:text-[200px] text-[#e2b279] font-black leading-none tracking-[-0.08em] pointer-events-none select-none mix-blend-overlay opacity-95 whitespace-nowrap animate-fade font-playfair">
                DE<span className="text-white">LICIO</span>US
              </span>
            </div>
          </div>

          <h2 className={`block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-6 tracking-tight text-white text-center animate-fade-up-delayed ${etarBellotaFont.variable}`} style={{letterSpacing: '-0.04em', fontWeight: 900}}>
            Cuisine & Drinks
          </h2>
        </div>

        {/* Circular Book Now text and button */}
        <div className="absolute right-8 bottom-8 z-40">
          <div className="relative w-28 h-28 lg:w-36 lg:h-36 flex items-center justify-center">
            <Image
              src="/assets/img/hero/text-2.webp"
              alt="Book Now Circle"
              width={144}
              height={144}
              className="w-full h-full animate-spin-slow opacity-90"
              priority
            />
            <a
              href="/book-a-table"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-full bg-[#e2b279] text-[#18171d] text-xl lg:text-2xl font-bold shadow-xl hover:bg-white hover:scale-110 hover:shadow-2xl transition-all duration-300"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        .animate-fade-down {
          animation: fadeDown 1s ease-out forwards;
        }
        .animate-fade-down-delayed {
          animation: fadeDown 1s ease-out forwards;
          animation-delay: 0.3s;
        }
        .animate-fade-up {
          animation: fadeUp 1s ease-out forwards;
          animation-delay: 0.6s;
        }
        .animate-fade-up-delayed {
          animation: fadeUp 1s ease-out forwards;
          animation-delay: 0.9s;
        }
        .animate-fade {
          animation: fade 1s ease-out forwards;
          animation-delay: 1.2s;
        }
        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
