"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { etarBellotaFont } from "../app/etarBellotaFont";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`w-full bg-[#111115] text-white shadow-none fixed top-0 left-0 right-0 z-[100] border-b border-[#23232a] transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 select-none min-w-[180px]">
          <Image 
            src="/assets/img/logo-white.webp" 
            alt="Etar Logo" 
            width={48} 
            height={48} 
            className="h-12 w-auto" 
            unoptimized 
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className={`hidden md:flex gap-8 lg:gap-10 items-center ${etarBellotaFont.variable}`} style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>
          <div className="relative group flex items-center min-w-[70px] h-8">
            <button
              className={`font-normal text-[17px] leading-none flex items-center focus:outline-none transition-colors duration-200 tracking-wide ${pathname === '/' ? 'text-[#E2B279]' : 'text-white hover:text-[#E2B279]'}`}
              style={{ fontFamily: 'var(--font-etar-bellota), sans-serif', letterSpacing: '0.02em' }}
            >
              Home <span className="ml-1 text-sm">&#x25BC;</span>
            </button>
            <div className="absolute left-0 top-full mt-3 w-48 bg-[#18181c] rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-50 border border-[#23232a]">
              <Link href="/" className="block px-6 py-3 text-white hover:text-[#E2B279] text-[16px] transition" style={{fontFamily: 'var(--font-etar-bellota), sans-serif'}}>Home</Link>
            </div>
          </div>
          
          <Link
            href="/about"
            className={`transition font-normal flex items-center text-[17px] leading-none min-w-[70px] h-8 tracking-wide ${pathname === '/about' ? 'text-[#E2B279]' : 'text-white hover:text-[#E2B279]'}`}
            style={{ fontFamily: 'var(--font-etar-bellota), sans-serif', letterSpacing: '0.02em' }}
          >
            About
          </Link>
          
          {/* Menu with submenu */}
          <div className="relative group flex items-center min-w-[70px] h-8">
            <button className="hover:text-[#E2B279] transition font-normal flex items-center text-[17px] leading-none focus:outline-none tracking-wide" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif', letterSpacing: '0.02em' }}>
              Menu <span className="ml-1 text-sm">&#x25BC;</span>
            </button>
            <div className="absolute left-0 top-full mt-3 w-48 bg-[#18181c] rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-50 border border-[#23232a]">
              <Link href="/menu/restaurant" className="block px-6 py-3 text-white hover:text-[#E2B279] text-[16px] border-b border-[#23232a] last:border-b-0 transition" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>Restaurant Menu</Link>
              <Link href="/menu/cafe" className="block px-6 py-3 text-white hover:text-[#E2B279] text-[16px] transition" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>Cafe Menu</Link>
            </div>
          </div>
          
          {/* Pages with submenu */}
          <div className="relative group flex items-center min-w-[70px] h-8">
            <button className="hover:text-[#E2B279] transition font-normal flex items-center text-[17px] leading-none focus:outline-none tracking-wide" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif', letterSpacing: '0.02em' }}>
              Pages <span className="ml-1 text-sm">&#x25BC;</span>
            </button>
            <div className="absolute left-0 top-full mt-3 w-48 bg-[#18181c] rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-50 border border-[#23232a]">
              <Link href="/about" className="block px-6 py-3 text-white hover:text-[#E2B279] text-[16px] border-b border-[#23232a] last:border-b-0 transition" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>About Us</Link>
              <Link href="/team" className="block px-6 py-3 text-white hover:text-[#E2B279] text-[16px] border-b border-[#23232a] last:border-b-0 transition" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>Our Team</Link>
              <Link href="/gallery" className="block px-6 py-3 text-white hover:text-[#E2B279] text-[16px] transition" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>Gallery</Link>
            </div>
          </div>
          
          {/* Shop with submenu */}
          <div className="relative group flex items-center min-w-[70px] h-8">
            <button className="hover:text-[#E2B279] transition font-normal flex items-center text-[17px] leading-none focus:outline-none tracking-wide" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif', letterSpacing: '0.02em' }}>
              Shop <span className="ml-1 text-sm">&#x25BC;</span>
            </button>
            <div className="absolute left-0 top-full mt-3 w-48 bg-[#18181c] rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-50 border border-[#23232a]">
              <Link href="/shop/grid" className="block px-6 py-3 text-white hover:text-[#E2B279] text-[16px] border-b border-[#23232a] last:border-b-0 transition" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>Shop Grid</Link>
              <Link href="/shop/details" className="block px-6 py-3 text-white hover:text-[#E2B279] text-[16px] border-b border-[#23232a] last:border-b-0 transition" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>Shop Details</Link>
              <Link href="/cart" className="block px-6 py-3 text-white hover:text-[#E2B279] text-[16px] transition" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>Cart</Link>
            </div>
          </div>
          
          {/* Blog with submenu */}
          <div className="relative group flex items-center min-w-[70px] h-8">
            <button className="hover:text-[#E2B279] transition font-bold flex items-center text-[17px] leading-none focus:outline-none" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>
              Blog <span className="ml-1 text-sm">&#x25BC;</span>
            </button>
            <div className="absolute left-0 top-full mt-3 w-48 bg-[#18181c] rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-50 border border-[#23232a]">
              <Link href="/blog" className="block px-6 py-3 text-white hover:text-[#E2B279] text-[16px] border-b border-[#23232a] last:border-b-0 transition" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>Blog Grid</Link>
              <Link href="/blog/details" className="block px-6 py-3 text-white hover:text-[#E2B279] text-[16px] transition" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>Blog Details</Link>
            </div>
          </div>
          
          <Link
            href="/contact"
            className={`transition font-normal flex items-center text-[17px] leading-none min-w-[70px] h-8 tracking-wide ${pathname === '/contact' ? 'text-[#E2B279]' : 'text-white hover:text-[#E2B279]'}`}
            style={{ fontFamily: 'var(--font-etar-bellota), sans-serif', letterSpacing: '0.02em' }}
          >
            Contact
          </Link>
        </nav>
        
        {/* Right icons */}
        <div className="hidden md:flex items-center gap-6 ml-6">
          {/* Search */}
          <button className="w-10 h-10 rounded-full border border-[#444] flex items-center justify-center hover:border-[#E2B279] transition">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-3.5-3.5"/></svg>
          </button>
          {/* User */}
          <button className="w-10 h-10 rounded-full border border-[#444] flex items-center justify-center hover:border-[#E2B279] transition">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 8-4 8-4s8 0 8 4"/></svg>
          </button>
          {/* Cart */}
          <button className="relative w-10 h-10 rounded-full border border-[#444] flex items-center justify-center hover:border-[#E2B279] transition">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full px-1.5 py-0.5">02</span>
          </button>
        </div>
        
        {/* Mobile nav toggle */}
        <div className="md:hidden flex items-center absolute right-4 top-1/2 -translate-y-1/2 z-50">
          <button 
            onClick={toggleMobileMenu}
            className="w-10 h-10 flex flex-col items-center justify-center focus:outline-none"
          >
            <span className={`block w-7 h-0.5 bg-[#E2B279] mb-1.5 rounded transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-7 h-0.5 bg-[#E2B279] mb-1.5 rounded transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-7 h-0.5 bg-[#E2B279] rounded transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
        
        {/* Mobile menu */}
        <div 
          className={`fixed inset-0 bg-[#111115] z-40 md:hidden transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="flex flex-col h-full pt-24 pb-10">
            <nav className="flex-1 overflow-y-auto px-8">
              <div className="space-y-6">
                <div>
                  <button className="text-[#E2B279] font-bold text-2xl flex items-center w-full py-3 border-b border-[#23232a]">
                    Home <span className="ml-2 text-lg">&#x25BC;</span>
                  </button>
                  <div className="pl-4 mt-4 space-y-4">
                    <Link href="/" className="block text-white text-lg py-2 hover:text-[#E2B279]" onClick={toggleMobileMenu}>Home</Link>
                  </div>
                </div>
                
                <Link href="/about" className="text-white font-bold text-2xl block py-3 border-b border-[#23232a] hover:text-[#E2B279]" onClick={toggleMobileMenu}>
                  About
                </Link>
                
                <div>
                  <button className="text-white font-bold text-2xl flex items-center w-full py-3 border-b border-[#23232a] hover:text-[#E2B279]">
                    Menu <span className="ml-2 text-lg">&#x25BC;</span>
                  </button>
                  <div className="pl-4 mt-4 space-y-4">
                    <Link href="/menu/restaurant" className="block text-white text-lg py-2 hover:text-[#E2B279]" onClick={toggleMobileMenu}>Restaurant Menu</Link>
                    <Link href="/menu/cafe" className="block text-white text-lg py-2 hover:text-[#E2B279]" onClick={toggleMobileMenu}>Cafe Menu</Link>
                  </div>
                </div>
                
                <div>
                  <button className="text-white font-bold text-2xl flex items-center w-full py-3 border-b border-[#23232a] hover:text-[#E2B279]">
                    Pages <span className="ml-2 text-lg">&#x25BC;</span>
                  </button>
                  <div className="pl-4 mt-4 space-y-4">
                    <Link href="/about" className="block text-white text-lg py-2 hover:text-[#E2B279]" onClick={toggleMobileMenu}>About Us</Link>
                    <Link href="/team" className="block text-white text-lg py-2 hover:text-[#E2B279]" onClick={toggleMobileMenu}>Our Team</Link>
                    <Link href="/gallery" className="block text-white text-lg py-2 hover:text-[#E2B279]" onClick={toggleMobileMenu}>Gallery</Link>
                  </div>
                </div>
                
                <div>
                  <button className="text-white font-bold text-2xl flex items-center w-full py-3 border-b border-[#23232a] hover:text-[#E2B279]">
                    Shop <span className="ml-2 text-lg">&#x25BC;</span>
                  </button>
                  <div className="pl-4 mt-4 space-y-4">
                    <Link href="/shop/grid" className="block text-white text-lg py-2 hover:text-[#E2B279]" onClick={toggleMobileMenu}>Shop Grid</Link>
                    <Link href="/shop/details" className="block text-white text-lg py-2 hover:text-[#E2B279]" onClick={toggleMobileMenu}>Shop Details</Link>
                    <Link href="/cart" className="block text-white text-lg py-2 hover:text-[#E2B279]" onClick={toggleMobileMenu}>Cart</Link>
                  </div>
                </div>
                
                <div>
                  <button className="text-white font-bold text-2xl flex items-center w-full py-3 border-b border-[#23232a] hover:text-[#E2B279]">
                    Blog <span className="ml-2 text-lg">&#x25BC;</span>
                  </button>
                  <div className="pl-4 mt-4 space-y-4">
                    <Link href="/blog" className="block text-white text-lg py-2 hover:text-[#E2B279]" onClick={toggleMobileMenu}>Blog Grid</Link>
                    <Link href="/blog/details" className="block text-white text-lg py-2 hover:text-[#E2B279]" onClick={toggleMobileMenu}>Blog Details</Link>
                  </div>
                </div>
                
                <Link href="/contact" className="text-white font-bold text-2xl block py-3 border-b border-[#23232a] hover:text-[#E2B279]" onClick={toggleMobileMenu}>
                  Contact
                </Link>
              </div>
            </nav>
            
            <div className="px-8 mt-8">
              <div className="flex gap-4 justify-center">
                <button className="w-12 h-12 rounded-full border border-[#444] flex items-center justify-center hover:border-[#E2B279] transition">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-3.5-3.5"/></svg>
                </button>
                <button className="w-12 h-12 rounded-full border border-[#444] flex items-center justify-center hover:border-[#E2B279] transition">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 8-4 8-4s8 0 8 4"/></svg>
                </button>
                <button className="relative w-12 h-12 rounded-full border border-[#444] flex items-center justify-center hover:border-[#E2B279] transition">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full px-1.5 py-0.5">02</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}