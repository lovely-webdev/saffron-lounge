"use client";
import Image from 'next/image';
import { etarBellotaFont } from '../app/etarBellotaFont';

export default function Footer() {
  return (
    <footer className={`w-full bg-[#111115] text-[#fff] pt-0 pb-0 mt-20 ${etarBellotaFont.variable}`} style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>
      {/* Top section: Logo and Newsletter */}
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 pt-16 sm:pt-20 pb-12 sm:pb-16 border-b border-[#23232a] relative">
        <div className="flex-1 flex items-center justify-center sm:justify-start mb-8 sm:mb-0">
          <Image src="https://templates.hibotheme.com/etar/default/assets/img/logo-white.webp" alt="The Saffron Lounge Logo" width={100} height={100} className="h-20 sm:h-24 w-auto" unoptimized />
        </div>
        <div className="flex-1 flex flex-col items-center sm:items-end w-full">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-[#fff] text-center sm:text-right">Join Our Newsletter</h2>
          <form className="flex w-full max-w-sm sm:max-w-xl flex-col sm:flex-row gap-3 sm:gap-0">
            <input type="email" placeholder="Your Email Address" className="flex-1 rounded-full sm:rounded-l-full sm:rounded-r-none px-6 py-4 bg-[#18181c] text-[#fff] placeholder-[#bdbdbd] focus:outline-none text-base sm:text-lg focus:border-[#e2b279] transition-colors duration-300 border border-[#23232a]" />
            <button type="submit" className="rounded-full sm:rounded-r-full sm:rounded-l-none px-8 sm:px-10 py-4 bg-[#e2b279] text-[#11115] text-base sm:text-lg font-bold transition hover:bg-[#111115] hover:text-[#e2b279] shadow-lg mt-3 sm:mt-0 -ml-0 sm:-ml-2 border-2 border-[#e2b279]">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      {/* Middle section: Links and Info */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 border-b border-[#23232a]">
        {/* Quick Link */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-[#e2b279]">Quick Link</h3>
          <ul className="space-y-3 text-lg">
            <li className="hover:text-[#e2b279] transition-colors duration-300 cursor-pointer">View Account</li>
            <li className="hover:text-[#e2b279] transition-colors duration-300 cursor-pointer">Track Your Order</li>
            <li className="hover:text-[#e2b279] transition-colors duration-300 cursor-pointer">Offer</li>
            <li className="hover:text-[#e2b279] transition-colors duration-300 cursor-pointer">Promotions</li>
            <li className="hover:text-[#e2b279] transition-colors duration-300 cursor-pointer">Customer Reviews</li>
          </ul>
        </div>
        
        {/* Company Link */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-[#e2b279]">Company Link</h3>
          <ul className="space-y-3 text-lg">
            <li className="hover:text-[#e2b279] transition-colors duration-300 cursor-pointer">About Us</li>
            <li className="hover:text-[#e2b279] transition-colors duration-300 cursor-pointer">Shop</li>
            <li className="hover:text-[#e2b279] transition-colors duration-300 cursor-pointer">Help Center</li>
            <li className="hover:text-[#e2b279] transition-colors duration-300 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-[#e2b279] transition-colors duration-300 cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>
        
        {/* Working Hours */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-[#e2b279]">Working Hours</h3>
          <ul className="space-y-3 text-lg">
            <li><span className="text-[#e2b279] font-bold">Sunday - Thursday</span><br /><span className="text-[#bdbdbd]">08:00 am - 09:00 pm</span></li>
            <li><span className="text-[#e2b279] font-bold">Only Friday</span><br /><span className="text-[#bdbdbd]">03:00 pm - 09:00 pm</span></li>
            <li><span className="text-[#e2b279] font-bold">Saturday</span><br /><span className="text-[#bdbdbd]">Closed</span></li>
          </ul>
        </div>
        
        {/* Contacts */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-[#e2b279]">Contact Us</h3>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start gap-4 hover:text-[#e2b279] transition-colors duration-300 cursor-pointer">
              <span className="inline-flex items-center justify-center w-6 h-6 mt-1">
                <svg fill="none" stroke="#e2b279" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 1 2.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0 1 22 16.92z"/></svg>
              </span>
              <span>(800) 216 2020</span>
            </li>
            <li className="flex items-start gap-4 hover:text-[#e2b279] transition-colors duration-300 cursor-pointer">
              <span className="inline-flex items-center justify-center w-6 h-6 mt-1">
                <svg fill="none" stroke="#e2b279" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5"><rect width="20" height="16" x="2" y="4" rx="2"/><path strokeLinecap="round" strokeLinejoin="round" d="m22 6-10 7L2 6"/></svg>
              </span>
              <span>info@thesaffronlounge.com</span>
            </li>
            <li className="flex items-start gap-4 hover:text-[#e2b279] transition-colors duration-300 cursor-pointer">
              <span className="inline-flex items-center justify-center w-6 h-6 mt-1">
                <svg fill="none" stroke="#e2b279" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg>
              </span>
              <span>www.thesaffronlounge.com</span>
            </li>
            <li className="flex items-start gap-4 hover:text-[#e2b279] transition-colors duration-300 cursor-pointer">
              <span className="inline-flex items-center justify-center w-6 h-6 mt-1">
                <svg fill="none" stroke="#e2b279" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414a4 4 0 10-1.414 1.414l4.243 4.243a1 1 0 001.414-1.414z"/><circle cx="11" cy="11" r="8"/></svg>
              </span>
              <span>12th Block-A, Ribonstreet, New York, USA</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Bottom section: Copyright & Socials */}
      <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-6 sm:py-8 gap-4 sm:gap-0">
        <div className="text-[#bdbdbd] text-base sm:text-lg text-center sm:text-left">
          <span className="mr-2">&copy; {new Date().getFullYear()} <span className="text-[#e2b279] font-bold">The Saffron Lounge</span>. All rights reserved.</span>
        </div>
        <div className="flex gap-3 mt-4 sm:mt-0 items-center">
          <a href="#" aria-label="Facebook" className="w-10 h-10 flex items-center justify-center rounded-full border border-[#e2b279] bg-transparent hover:bg-[#e2b279] group transition-all duration-300">
            <svg className="w-5 h-5 text-[#e2b279] group-hover:text-[#111115] transition-all duration-30" fill="currentColor" viewBox="0 0 24 24"><path d="M2.675 0h-21.35C.595 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
          </a>
          <a href="#" aria-label="X" className="w-10 h-10 flex items-center justify-center rounded-full border border-[#e2b279] bg-transparent hover:bg-[#e2b279] group transition-all duration-300">
            <svg className="w-5 h-5 text-[#e2b279] group-hover:text-[#111115] transition-all duration-300" fill="currentColor" viewBox="0 0 24 24"><path d="M17.53 6.47a.75.75 0 0 1 1.06 1.06l-4.47 4.47 4.47 4.47a.75.75 0 0 1-1.06 1.06l-4.47-4.47-4.47 4.47a.75.75 0 0 1-1.06-1.06l4.47-4.47-4.47-4.47a.75.75 0 0 1 1.06-1.06l4.47 4.47 4.47-4.47z"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-full border-[#e2b279] bg-transparent hover:bg-[#e2b279] group transition-all duration-300">
            <svg className="w-5 h-5 text-[#e2b279] group-hover:text-[#111115] transition-all duration-300" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5zM7.5 20h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15 10.268h-3v-4.604c0-1.099-.021-2.513-1.532-2.513-1.532 0-1.767 1.197-1.767 2.434V20h-3v-9h2.881v1.233h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601V20z"/></svg>
          </a>
          <a href="#" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center rounded-full border-[#e2b279] bg-transparent hover:bg-[#e2b279] group transition-all duration-300">
            <svg className="w-5 h-5 text-[#e2b279] group-hover:text-[#111115] transition-all duration-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.71.131 4.659.425 3.678 1.406c-.981.981-1.275 2.093-1.334 3.374C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.059 1.281.353 2.393 1.334 3.374.981.981 2.093 1.275 3.374 1.334C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.281-.059 2.393-.353 3.374-1.334.981-.981 1.275-2.093 1.334-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.281-.353-2.393-1.334-3.374-.981-.981-2.093-1.275-3.374-1.334C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </a>
          <a href="#" aria-label="WhatsApp" className="w-10 h-10 flex items-center justify-center rounded-full border-[#e2b279] bg-transparent hover:bg-[#e2b279] group transition-all duration-300">
            <svg className="w-5 h-5 text-[#e2b279] group-hover:text-[#111115] transition-all duration-300" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.25-1.44l-.37-.22-3.67.96.98-3.58-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.98 2.43.02 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.22.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}