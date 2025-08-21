import React from 'react';
import Link from 'next/link';

interface BreadcrumbProps {
  title: string;
  items: { label: string; href?: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, items }) => {
  return (
    <div className="et-breadcrumb bg-[#18181c] py-20 pt-52">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-el-messiri)' }}>
            {title}
          </h1>
          <div className="flex items-center text-[#bdbdbd]">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                {item.href ? (
                  <Link 
                    href={item.href} 
                    className="hover:text-[#e2b279] transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-[#e2b279]">{item.label}</span>
                )}
                {index < items.length - 1 && <span className="mx-3">/</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;