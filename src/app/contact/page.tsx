"use client";

import { useState } from "react";
import { theme } from "../../app/theme";
import { etarBellotaFont } from "../../app/etarBellotaFont";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
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
        {/* Simplified Hero Section */}
        <div className="relative w-full py-16 md:py-24 bg-[#111115]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>
                CONTACT US
              </h1>
              <div className="flex items-center justify-center text-[#bdbdbd] py-6">
                <a href="/" className="hover:text-[#e2b279] transition-colors duration-300">Home</a>
                <span className="mx-3">/</span>
                <span className="text-[#e2b279]">Contact Us</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Form Section */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>SEND US A MESSAGE</h2>
                <p className="text-[#bdbdbd]">
                  Have questions or want to make a reservation? Reach out to us and our team will get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#18181c] border border-[#23232a] text-white placeholder-[#666] focus:outline-none focus:border-[#e2b279] transition-colors duration-300 rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#18181c] border border-[#23232a] text-white placeholder-[#666] focus:outline-none focus:border-[#e2b279] transition-colors duration-300 rounded-md"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#18181c] border border-[#23232a] text-white placeholder-[#666] focus:outline-none focus:border-[#e2b279] transition-colors duration-300 rounded-md"
                    required
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-[#18181c] border border-[#23232a] text-white placeholder-[#666] focus:outline-none focus:border-[#e2b279] transition-colors duration-300 rounded-md resize-none"
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
                      className="w-4 h-4 text-[#e2b279] bg-[#18181c] border-[#23232a] rounded focus:ring-[#e2b279] focus:ring-2"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="consent" className="text-[#bdbdbd]">
                      I agree that my submitted data is being collected and stored.
                    </label>
                  </div>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#e2b279] text-[#111115] font-bold rounded-md hover:bg-[#d1a05a] transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Map and Contact Information Section */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-[#18181c] border border-[#23232a] rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>Find Us</h3>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1697020841234!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Location"
                  ></iframe>
                </div>
                <p className="text-[#bdbdbd] text-sm mt-4">12th Block-A, Ribonstreet, New York, USA</p>
              </div>
              {/* Open Hours */}
              <div className="bg-[#18181c] border border-[#23232a] rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>OPEN HOURS</h3>
                <div className="space-y-3">
                  <div className="flex justify-between pb-2 border-b border-[#23232a]">
                    <span className="text-[#bdbdbd]">Sunday - Thursday</span>
                    <span className="text-white">08:00 am - 09:00 pm</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-[#23232a]">
                    <span className="text-[#bdbdbd]">Only Friday</span>
                    <span className="text-white">03:00 pm - 09:00 pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#bdbdbd]">Saturday</span>
                    <span className="text-[#e2b279] font-bold">Closed</span>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-[#18181c] border border-[#23232a] rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>ADDRESS</h3>
                <div className="space-y-3">
                  <p className="text-[#bdbdbd]">
                    12th Block-A, Ribonstreet, <br />
                    New York, USA
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-[#e2b279] hover:text-[#d1a05a] transition-colors duration-300 font-medium"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 12.414a4 4 0 10-1.414 1.414l4.243 4.243a1 1 0 001.414-1.414z" />
                      <circle cx="11" cy="11" r="8" />
                    </svg>
                    Check Location
                  </a>
                </div>
              </div>

              {/* Get in Touch */}
              <div className="bg-[#18181c] border border-[#23232a] rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>GET IN TOUCH</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="mr-4 text-[#e2b279]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <span className="text-[#bdbdbd]">(800) 216 2020</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-4 text-[#e2b279]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <span className="text-[#bdbdbd]">hello@thesaffronlounge.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }