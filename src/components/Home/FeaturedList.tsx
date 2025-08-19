import Image from "next/image";
import { etarBellotaFont } from "@/app/etarBellotaFont";

export default function FeaturedList() {
  const items = [
    {
      title: "Fresh Products",
      icon: "/assests-main/cutlary.svg",
      description:
        "making this the first true generator on the Internet. It uses a dictionary",
    },
    {
      title: "Skilled Chefs",
      icon: "/assests-main/chef.svg",
      description:
        "making this the first true generator on the Internet. It uses a dictionary",
    },
    {
      title: "Best Bar",
      icon: "/assests-main/drinks.svg",
      description:
        "making this the first true generator on the Internet. It uses a dictionary",
    },
    {
      title: "Vegan Cuisine",
      icon: "/assests-main/coffee.svg",
      description:
        "making this the first true generator on the Internet. It uses a dictionary",
    },
  ];

  return (
    <section className="w-full bg-[#18171d] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div
              key={item.title}
              className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col items-start text-left"
            >
              {/* vertical separator on large screens */}
              {idx < items.length - 1 && (
                <span className="hidden lg:block absolute right-0 top-6 bottom-6 w-px bg-[#2a2a31]" />
              )}

              <div className="mb-6">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={42}
                  height={42}
                  className="opacity-90"
                />
              </div>

              <h3
                className={`${etarBellotaFont.variable} text-white text-xl sm:text-2xl md:text-3xl font-bold mb-4`}
                style={{ fontFamily: 'var(--font-el-messiri)' }}
              >
                {item.title}
              </h3>

              <p
                className="text-[#bdbdbd] leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-bellota), sans-serif" }}
              >
                {item.description}
              </p>

              <a
                href="#"
                className="mt-auto inline-block italic text-[#bdbdbd] hover:text-[#e2b279] transition-colors"
                style={{ fontFamily: "var(--font-bellota), sans-serif" }}
              >
                Discover More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
