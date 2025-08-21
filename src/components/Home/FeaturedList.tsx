import Image from "next/image";
import Link from "next/link";
import { etarBellotaFont } from "@/app/etarBellotaFont";

export default function FeaturedList() {
  const items = [
    {
      title: "Fresh Products",
      icon: "/assests-main/cutlary.svg",
      description:
        "making this the first true generator on the Internet. It uses a dictionary",
      link: "/menu/restaurant"
    },
    {
      title: "Skilled Chefs",
      icon: "/assests-main/chef.svg",
      description:
        "making this the first true generator on the Internet. It uses a dictionary",
      link: "/team"
    },
    {
      title: "Best Bar",
      icon: "/assests-main/drinks.svg",
      description:
        "making this the first true generator on the Internet. It uses a dictionary",
      link: "/menu/cafe"
    },
    {
      title: "Vegan Cuisine",
      icon: "/assests-main/coffee.svg",
      description:
        "making this the first true generator on the Internet. It uses a dictionary",
      link: "/menu/restaurant"
    },
  ];

  return (
    <section className="w-full bg-[#18171d] py-12 md:py-20 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute left-0 top-1/4 w-32 h-32 opacity-10 hidden lg:block">
        <Image
          src="/assests-main/shape-1.webp"
          alt="Decorative shape"
          width={128}
          height={128}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="absolute right-0 bottom-1/4 w-32 h-32 opacity-10 hidden lg:block">
        <Image
          src="/assests-main/shape-3.webp"
          alt="Decorative shape"
          width={128}
          height={128}
          className="object-contain w-full h-full"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div
              key={item.title}
              className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col items-start text-left bg-[#111115] rounded-lg border border-[#23232a] hover:border-[#e2b279] transition-all duration-300 group"
            >
              {/* vertical separator on large screens */}
              {idx < items.length - 1 && (
                <span className="hidden lg:block absolute right-0 top-6 bottom-6 w-px bg-[#2a2a31] group-hover:bg-[#e2b279] transition-colors duration-300" />
              )}

              <div className="mb-6">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={42}
                  height={42}
                  className="opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              <h3
                className={`${etarBellotaFont.variable} text-white text-xl sm:text-2xl md:text-3xl font-bold mb-4 group-hover:text-[#e2b279] transition-colors duration-300`}
                style={{ fontFamily: 'var(--font-el-messiri)' }}
              >
                {item.title}
              </h3>

              <p
                className="text-[#bdbdbd] leading-relaxed mb-4 group-hover:text-white transition-colors duration-300"
                style={{ fontFamily: "var(--font-bellota), sans-serif" }}
              >
                {item.description}
              </p>

              <Link
                href={item.link}
                className="mt-auto inline-block italic text-[#bdbdbd] hover:text-[#e2b279] transition-colors group-hover:text-[#e2b279] duration-300"
                style={{ fontFamily: "var(--font-bellota), sans-serif" }}
              >
                Discover More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}