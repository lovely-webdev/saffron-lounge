"use client";

import { useState } from "react";
import Link from "next/link";
import { etarBellotaFont } from "../../app/etarBellotaFont";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    consent: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className={`min-h-screen bg-[#111115] ${etarBellotaFont.variable}`}>
      {/* Hero/Breadcrumb Section */}
      <div className="et-breadcrumb bg-[#18181c] py-20 pt-52">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>
              Contact Us
            </h1>
            <div className="flex items-center text-[#bdbdbd]">
              <Link href="/" className="hover:text-[#e2b279] transition-colors duration-300">Home</Link>
              <span className="mx-3">/</span>
              <span className="text-[#e2b279]">Contact Us</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-[#18181c] rounded-lg p-8 md:p-12 border border-[#23232a]">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>
              Send Us A Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#111115] border border-[#23232a] text-white placeholder-[#666] focus:outline-none focus:border-[#e2b279] transition-colors duration-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#111115] border border-[#23232a] text-white placeholder-[#666] focus:outline-none focus:border-[#e2b279] transition-colors duration-300 rounded-md"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#111115] border border-[#23232a] text-white placeholder-[#666] focus:outline-none focus:border-[#e2b279] transition-colors duration-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#111115] border border-[#23232a] text-white placeholder-[#666] focus:outline-none focus:border-[#e2b279] transition-colors duration-300 rounded-md"
                    required
                  />
                </div>
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-[#111115] border border-[#23232a] text-white placeholder-[#666] focus:outline-none focus:border-[#e2b279] transition-colors duration-300 rounded-md resize-none"
                  required
                ></textarea>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#e2b279] bg-[#111115] border-[#23232a] rounded focus:ring-[#e2b279] focus:ring-2"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="consent" className="text-[#bdbdbd]">
                    I agree that my submitted data is being collected and stored.
                  </label>
                </div>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#e2b279] text-[#111115] font-bold rounded-md hover:bg-[#d1a05a] transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-20 bg-[#18181c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-[#111115] rounded-lg overflow-hidden border border-[#23232a]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.332792300514!2d144.9535833153168!3d-37.81627997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d0c4b5c3b1e8!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2s!4v1697020841234!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Open Hours Card */}
            <div className="bg-[#18181c] rounded-lg p-8 border border-[#23232a] text-center">
              <div className="w-16 h-16 bg-[#e2b279] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#111115]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>
                Open Hours
              </h3>
              <div className="space-y-3 text-[#bdbdbd]">
                <div>Mon-Fri: 9 AM - 6 PM</div>
                <div>Saturday: 9 AM - 4 PM</div>
                <div>Sunday: Closed</div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-[#18181c] rounded-lg p-8 border border-[#23232a] text-center">
              <div className="w-16 h-16 bg-[#e2b279] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#111115]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 12.414a4 4 0 10-1.414 1.414l4.243 4.243a1 1 0 001.414-1.414z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>
                Address
              </h3>
              <div className="space-y-3 text-[#bdbdbd]">
                <div>176 Street name. NY 7004.</div>
                <div>New York, USA</div>
                <a href="#" className="text-[#e2b279] hover:text-[#d1a05a] transition-colors duration-300 font-medium">
                  Check Location
                </a>
              </div>
            </div>

            {/* Get In Touch Card */}
            <div className="bg-[#18181c] rounded-lg p-8 border border-[#23232a] text-center">
              <div className="w-16 h-16 bg-[#e2b279] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#111115]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>
                Get In Touch
              </h3>
              <div className="space-y-3 text-[#bdbdbd]">
                <div>Telephone: +800123-4566</div>
                <div>Email: info@etar.com</div>
                <a href="#" className="text-[#e2b279] hover:text-[#d1a05a] transition-colors duration-300 font-medium">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}