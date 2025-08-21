"use client";

import React from 'react';
import RestaurantMenu from '../../components/Menu/RestaurantMenu';
import MenuShowcase from '../../components/Home/MenuShowcase';
import Reservation from '../../components/Home/Reservation';
import { etarBellotaFont } from '../../app/etarBellotaFont';

const RestaurantMenuPage = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="et-breadcrumb bg-[#18181c] py-20 pt-52">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-el-messiri)' }}>
              Restaurant Menu
            </h1>
            <div className="flex items-center text-[#bdbdbd]">
              <a href="/" className="hover:text-[#e2b279] transition-colors duration-300">Home</a>
              <span className="mx-3">/</span>
              <span className="text-[#e2b279]">Restaurant Menu</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Menu Showcase Section */}
      <MenuShowcase />
      
      {/* Reservation Section */}
      <Reservation />
      
      {/* Full Menu Section */}
      <RestaurantMenu />
    </>
  );
};

export default RestaurantMenuPage;