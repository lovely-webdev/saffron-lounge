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
    <section className="w-full bg-[#18171d] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <div key={item.title} className="relative px-8 py-12">
              {/* vertical separator on large screens */}
              {idx < items.length - 1 && (
                <span className="hidden lg:block absolute right-0 top-8 bottom-8 w-px bg-[#2a2a31]" />
              )}

              <div className="flex flex-col items-start text-left">
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
                  className={`${etarBellotaFont.variable} text-white text-2xl md:text-3xl font-bold mb-4`}
                  style={{ fontFamily: "var(--font-etar-bellota), sans-serif" }}
                >
                  {item.title}
                </h3>

                <p className="text-[#bdbdbd] leading-relaxed pr-2">
                  {item.description}
                </p>

                <a
                  href="#"
                  className="mt-6 inline-block italic text-[#bdbdbd] hover:text-[#e2b279] transition-colors"
                >
                  Discover More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
