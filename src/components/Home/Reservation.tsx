import React, { useState } from 'react';
import { theme } from '../../app/theme';
import { etarBellotaFont } from '../../app/etarBellotaFont';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    persons: '2',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Reservation data:', formData);
    alert('Reservation request submitted!');
  };

  return (
    <section className={`${theme.spacing.sectionPadding} bg-[#111115] ${etarBellotaFont.variable}`}>
      <div className="max-w-full mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>Book A Table</h2>
            <p className="text-xl text-[#bdbdbd] mb-8">
              Reserve your table now and experience an unforgettable culinary journey with our exquisite dishes and exceptional service.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e2b279] bg-opacity-10 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#e2b279]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414a4 4 0 0 0-1.414 1.414l4.243 4.243a1 1 0 0 0 1.414-1.414z" />
                    <circle cx="11" cy="11" r="8" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>Location</h3>
                  <p className="text-[#bdbdbd]">12th Block-A, Ribonstreet, Australia</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e2b279] bg-opacity-10 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#e2b279]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>Working Hours</h3>
                  <p className="text-[#bdbdbd]">Sunday - Thursday: 08:00 am - 09:00 pm</p>
                  <p className="text-[#bdbdbd]">Only Friday: 03:00 pm - 09:00 pm</p>
                  <p className="text-[#bdbdbd]">Saturday: Closed</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e2b279] bg-opacity-10 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#e2b279]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>Contact</h3>
                  <p className="text-[#bdbdbd]">Phone: (800) 216 2020</p>
                  <p className="text-[#bdbdbd]">Email: info@etar.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#18181c] p-8 rounded-lg border border-[#23232a]">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-white text-lg mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#111115] border border-[#23232a] rounded-lg text-white focus:outline-none focus:border-[#e2b279] transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white text-lg mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#111115] border border-[#23232a] rounded-lg text-white focus:outline-none focus:border-[#e2b279] transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white text-lg mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#111115] border border-[#23232a] rounded-lg text-white focus:outline-none focus:border-[#e2b279] transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="persons" className="block text-white text-lg mb-2">Number of Persons</label>
                  <select
                    id="persons"
                    name="persons"
                    value={formData.persons}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#111115] border border-[#23232a] rounded-lg text-white focus:outline-none focus:border-[#e2b279] transition-colors duration-300"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num} className="bg-[#111115]">
                        {num} Person{num > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="block text-white text-lg mb-2">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#111115] border border-[#23232a] rounded-lg text-white focus:outline-none focus:border-[#e2b279] transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-white text-lg mb-2">Time</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#111115] border border-[#23232a] rounded-lg text-white focus:outline-none focus:border-[#e2b279] transition-colors duration-300"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-white text-lg mb-2">Special Request</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#111115] border border-[#23232a] rounded-lg text-white focus:outline-none focus:border-[#e2b279] transition-colors duration-300"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-[#e2b279] text-[#111115] font-bold text-xl rounded-lg hover:bg-[#111115] hover:text-[#e2b279] border-2 border-[#e2b279] transition-all duration-300"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;