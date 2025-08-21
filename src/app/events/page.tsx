"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const EventsPage = () => {
  const events = [
    {
      id: 1,
      title: "Wine Tasting Night",
      date: "June 15, 2023",
      time: "7:00 PM - 10:00 PM",
      image: "/assets/img/events/event-1.webp",
      description: "Join us for an exclusive wine tasting experience featuring premium selections from renowned vineyards.",
      price: "$75 per person"
    },
    {
      id: 2,
      title: "Summer Garden Party",
      date: "July 8, 2023",
      time: "6:00 PM - 9:00 PM",
      image: "/assets/img/events/event-2.webp",
      description: "Celebrate summer with our garden party featuring live music, seasonal cocktails, and outdoor dining.",
      price: "$60 per person"
    },
    {
      id: 3,
      title: "Chef's Special Menu",
      date: "August 22, 2023",
      time: "8:00 PM - 11:00 PM",
      image: "/assets/img/events/event-3.webp",
      description: "Experience our chef's specially curated menu with seasonal ingredients and innovative techniques.",
      price: "$85 per person"
    }
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="et-breadcrumb bg-[#18181c] py-20 pt-52">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-el-messiri)' }}>
              Our Events
            </h1>
            <div className="flex items-center text-[#bdbdbd]">
              <Link href="/" className="hover:text-[#e2b279] transition-colors duration-300">Home</Link>
              <span className="mx-3">/</span>
              <span className="text-[#e2b279]">Events</span>
            </div>
          </div>
        </div>
      </div>
      
      <section className="min-h-screen bg-[#111115] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xl text-[#bdbdbd] max-w-3xl mx-auto text-center mb-16">
            Join us for special events and experiences that celebrate the art of fine dining
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div 
                key={event.id}
                className="bg-[#18181c] rounded-lg overflow-hidden border border-[#23232a] hover:border-[#e2b279] transition-all duration-300 group"
              >
                <div className="relative h-64">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#e2b279] transition-colors duration-300" style={{ fontFamily: 'var(--font-el-messiri)' }}>
                      {event.title}
                    </h3>
                    <span className="text-[#e2b279] font-bold">{event.price}</span>
                  </div>
                  <div className="mb-4">
                    <p className="text-[#bdbdbd] mb-2">{event.date}</p>
                    <p className="text-[#bdbdbd]">{event.time}</p>
                  </div>
                  <p className="text-[#bdbdbd] mb-6">{event.description}</p>
                  <button className="w-full py-3 bg-[#18181c] text-white border border-[#23232a] hover:bg-[#e2b279] hover:text-[#111115] hover:border-[#e2b279] transition-all duration-300 font-bold rounded-md">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsPage;