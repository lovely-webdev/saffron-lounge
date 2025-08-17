"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Truffle Pasta",
      price: 24.99,
      quantity: 2,
      image: "/assets/img/menu/menu-1.webp"
    },
    {
      id: 2,
      name: "Grilled Salmon",
      price: 28.99,
      quantity: 1,
      image: "/assets/img/menu/menu-2.webp"
    },
    {
      id: 3,
      name: "Chocolate Soufflé",
      price: 12.99,
      quantity: 3,
      image: "/assets/img/menu/menu-3.webp"
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <section className="min-h-screen bg-[#111115] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Your Cart</h1>
          <div className="flex items-center justify-center text-[#bdbdbd] py-6">
            <Link href="/" className="hover:text-[#e2b279] transition-colors duration-300">Home</Link>
            <span className="mx-3">/</span>
            <span className="text-[#e2b279]">Cart</span>
          </div>
          <p className="text-xl text-[#bdbdbd] max-w-3xl mx-auto">
            Review your selected items before checkout
          </p>
        </div>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 text-[#e2b279]">
              <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Your cart is empty</h2>
            <p className="text-[#bdbdbd] mb-8">Looks like you haven't added anything to your cart yet</p>
            <Link href="/shop" className="inline-block px-8 py-4 bg-[#e2b279] text-[#111115] font-bold rounded-lg hover:bg-[#111115] hover:text-[#e2b279] border-2 border-[#e2b279] transition-all duration-300">
              Browse Menu
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-[#18181c] rounded-lg border border-[#23232a] overflow-hidden">
                <div className="border-b border-[#23232a] p-6">
                  <h2 className="text-xl font-bold text-white">Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</h2>
                </div>
                
                <div className="divide-y divide-[#23232a]">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-6 flex flex-col sm:flex-row gap-6">
                      <div className="relative w-full sm:w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex justify-between">
                          <h3 className="text-xl font-bold text-white">{item.name}</h3>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-[#bdbdbd] hover:text-[#e2b279] transition-colors duration-300"
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                        
                        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                          <div className="flex items-center border border-[#23232a] rounded-lg">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-10 h-10 flex items-center justify-center text-[#e2b279] hover:bg-[#18181c] transition-colors duration-300"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                              </svg>
                            </button>
                            <span className="w-12 text-center text-white">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-10 h-10 flex items-center justify-center text-[#e2b279] hover:bg-[#18181c] transition-colors duration-300"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                            </button>
                          </div>
                          
                          <div className="text-xl font-bold text-[#e2b279]">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/shop" className="flex-1 min-w-[200px] py-4 bg-[#18181c] text-white font-bold rounded-lg border border-[#23232a] hover:border-[#e2b279] transition-all duration-300 text-center">
                  Continue Shopping
                </Link>
                <button className="flex-1 min-w-[200px] py-4 bg-[#18181c] text-white font-bold rounded-lg border border-[#23232a] hover:border-[#e2b279] transition-all duration-300">
                  Update Cart
                </button>
              </div>
            </div>
            
            <div>
              <div className="bg-[#18181c] rounded-lg border border-[#23232a] p-6 sticky top-24">
                <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-[#bdbdbd]">Subtotal</span>
                    <span className="text-white">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#bdbdbd]">Tax</span>
                    <span className="text-white">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between pt-4 border-t border-[#23232a]">
                    <span className="text-white font-bold">Total</span>
                    <span className="text-[#e2b279] text-xl font-bold">${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <button className="w-full py-4 bg-[#e2b279] text-[#111115] font-bold rounded-lg hover:bg-[#111115] hover:text-[#e2b279] border-2 border-[#e2b279] transition-all duration-300 mb-4">
                  Proceed to Checkout
                </button>
                
                <div className="text-center">
                  <Link href="/book-a-table" className="text-[#e2b279] font-bold hover:underline">
                    Book a Table Instead
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;