import Image from "next/image";
import { etarBellotaFont } from "@/app/etarBellotaFont";

export default function HeroBanner() {
  return (
    <section
      className="herobanner relative w-full min-h-screen overflow-hidden flex items-center justify-center pt-20 pb-20"
      style={{
        background: `url('/assests-main/hero-bg-shape.webp') center center / cover no-repeat, #000000`,
      }}
    >
      {/* Girl Image (left, vertically centered) */}
      <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-20">
        <Image
          src="/assests-main/hero-img-1.webp"
          alt="Girl"
          width={260}
          height={320}
          className="rounded-2xl shadow-2xl object-cover border-4 border-[#18171d]"
        />
      </div>
      {/* Dish Image (right, vertically centered) */}
      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-20">
        <Image
          src="/assests-main/recipe-1.webp"
          alt="Dish"
          width={180}
          height={140}
          className="rounded-2xl shadow-2xl object-cover border-4 border-[#18171d]"
        />
      </div>
      {/* Headings */}
      <span className={`hero-aesthetic absolute top-16 left-12 z-30 text-white ${etarBellotaFont.variable}`} style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>Aesthetic</span>
      <span className={`hero-joyof absolute top-24 right-16 z-30 text-white ${etarBellotaFont.variable}`} style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>Joy Of</span>
      {/* DELICIOUS Text (centered, above chef image) */}
      <span className={`hero-delicious absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 select-none ${etarBellotaFont.variable}`} style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>
       DE<span className="text-white">LICIO</span>US
      </span>
      {/* Chef Image (center, above DELICIOUS) */}
      <div className="relative z-30 flex flex-col items-center justify-center min-h-[60vh] pt-16">
        <Image
          src="/assests-main/hero-img-2.webp"
          alt="Chef Serving"
          width={700}
          height={400}
          className="rounded-3xl shadow-2xl border-[8px] border-[#18171d] object-cover w-full max-w-2xl mx-auto"
          priority
        />
        {/* Cuisine & Drinks */}
        <span className={`hero-cuisine block mt-8 text-white text-center z-30 ${etarBellotaFont.variable}`} style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>Cuisine & Drinks</span>
      </div>
      {/* Book Now Circle */}
      <div className="absolute right-8 bottom-8 z-40 flex flex-col items-center">
        <Image
          src="/assets/img/hero/text-2.webp"
          alt="Book Now Circle"
          width={120}
          height={120}
          className="animate-spin-slow opacity-90"
          priority
        />
        <a
          href="/book-a-table"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-[#e2b279] text-[#18171d] text-xl font-bold shadow-xl hover:bg-white hover:scale-110 hover:shadow-2xl transition-all duration-300"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
      <style jsx global>{`
       .herobanner{
    padding: 10%;
}
 .herobanner .hero-aesthetic {
     font-family: "Playfair Display", serif;  /* elegant serif */

 font-size: 120px;
    padding-top: 3%;
    padding-left: 8%;
}

.herobanner .hero-joyof {
    z-index: 99;
    padding-right: 24%;
    padding-top: 9%;
    font-size: 65px;
    position: absolute;
}

.herobanner .hero-cuisine {
    font-size: 75px;
    line-height: 1.1;
    font-weight: 600 !important;
}
.hero-delicious {
    font-size: 220px;
    display: block;
    letter-spacing: -0.05px;
    text-align: center;
    -webkit-text-fill-color: #E2B279;
    -webkit-text-stroke: #fff;
    margin-top: 4%;
}
.hero-delicious span {
    font: 900 clamp(3rem, 16vw, 14rem) / 1 "Abril Fatface", serif;
    letter-spacing: 0.06em;
    background: url(/path/your-photo.jpg) center / cover no-repeat;
    -webkit-background-clip: text !important;
    background-clip: text;
    -webkit-text-fill-color: transparent !important;
    text-transform: uppercase;
    -webkit-text-stroke: 2px rgba(255, 255, 255, .3) !important;
}
        @media (max-width: 1199px) {
          .hero-aesthetic { font-size: 80px; }
          .hero-joyof { font-size: 44px; }
          .hero-delicious { font-size: 128px; }
          .hero-delicious span { font-size: 128px; }
          .hero-cuisine { font-size: 40px; }
        }
        @media (max-width: 991px) {
          .hero-aesthetic { font-size: 54px; left: 4vw; top: 4vw; }
          .hero-joyof { font-size: 28px; right: 4vw; top: 10vw; }
          .hero-delicious { font-size: 72px; }
          .hero-delicious span { font-size: 72px; }
          .hero-cuisine { font-size: 26px; }
        }
        @media (max-width: 767px) {
          .hero-aesthetic { font-size: 34px; left: 2vw; top: 2vw; }
          .hero-joyof { font-size: 18px; right: 2vw; top: 8vw; }
          .hero-delicious { font-size: 38px; }
          .hero-delicious span { font-size: 38px; }
          .hero-cuisine { font-size: 18px; }
        }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 15s linear infinite; }
      `}</style>
    </section>
  );
}
