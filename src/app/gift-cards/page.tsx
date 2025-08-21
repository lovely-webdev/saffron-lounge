"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const GiftCardsPage = () => {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('email');
  
  const presetAmounts = [25, 50, 75, 100, 150, 200];
  
  const giftCardOptions = [
    {
      id: 1,
      name: "Classic Gift Card",
      image: "/assets/img/gift-cards/card-1.webp",
      description: "Our traditional gift card with elegant design"
    },
    {
      id: 2,
      name: "Premium Gift Card",
      image: "/assets/img/gift-cards/card-2.webp",
      description: "Luxury gift card with premium finish"
    },
    {
      id: 3,
      name: "Digital Gift Card",
      image: "/assets/img/gift-cards/card-3.webp",
      description: "Instant digital delivery via email"
    }
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="et-breadcrumb bg-[#18181c] py-20 pt-52">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-el-messiri)' }}>
              Gift Cards
            </h1>
            <div className="flex items-center text-[#bdbdbd]">
              <Link href="/" className="hover:text-[#e2b279] transition-colors duration-300">Home</Link>
              <span className="mx-3">/</span>
              <span className="text-[#e2b279]">Gift Cards</span>
            </div>
          </div>
        </div>
      </div>
      
      <section className="min-h-screen bg-[#111115] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-el-messiri)' }}>
              Share the Gift of Fine Dining
            </h2>
            <p className="text-xl text-[#bdbdbd] max-w-3xl mx-auto">
              Give the perfect gift for any occasion. Our gift cards can be used for dining, 
              private events, or catering services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-el-messiri)' }}>
              </h3>
              <p className="text-[#bdbdbd] mb-6">
                The Saffron Lounge gift cards are the perfect way to share the experience of exceptional dining. 
                They can be used for meals in our restaurant, private dining events, catering services, 
                or to purchase items from our retail shop.
              </p>
              <p className="text-[#bdbdbd] mb-8">
                Available in any denomination from $25 to $500, our gift cards never expire 
                and can be used at any of our locations.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#e2b279] bg-opacity-10 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-[#e2b279]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#bdbdbd]">No expiration date</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#e2b279] bg-opacity-10 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-[#e2b279]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#bdbdbd]">Can be used for dining, events, and catering</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#e2b279] bg-opacity-10 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-[#e2b279]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#bdbdbd]">Available in physical and digital formats</p>
                </div>
              </div>
              
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/assets/img/gift-cards/gift-card-hero.webp"
                  alt="Gift Cards"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="bg-[#18181c] rounded-lg p-8 border border-[#23232a]">
              <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-el-messiri)' }}>
                Customize Your Gift Card
              </h3>
              
              <div className="mb-8">
                <h4 className="text-lg font-bold text-white mb-4">Select Gift Card Design</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {giftCardOptions.map((option) => (
                    <div 
                      key={option.id}
                      className="bg-[#111115] rounded-lg p-4 border border-[#23232a] cursor-pointer hover:border-[#e2b279] transition-all duration-300"
                    >
                      <div className="relative aspect-video rounded mb-3">
                        <Image
                          src={option.image}
                          alt={option.name}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <p className="text-white text-sm font-bold">{option.name}</p>
                      <p className="text-[#bdbdbd] text-xs">{option.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-bold text-white mb-4">Select Amount</h4>
                <div className="flex flex-wrap gap-3 mb-4">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setSelectedAmount(amount)}
                      className={`px-6 py-3 rounded-full text-lg font-bold transition-all duration-300 ${
                        selectedAmount === amount
                          ? 'bg-[#e2b279] text-[#111115]'
                          : 'bg-[#111115] text-white border border-[#23232a] hover:border-[#e2b279]'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div>
                  <label className="block text-white mb-2">Or enter custom amount:</label>
                  <input
                    type="number"
                    min="25"
                    max="500"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      if (e.target.value) setSelectedAmount(parseInt(e.target.value));
                    }}
                    placeholder="Custom amount ($25-$500)"
                    className="w-full px-4 py-3 bg-[#111115] border border-[#23232a] text-white placeholder-[#666] focus:outline-none focus:border-[#e2b279] transition-colors duration-300 rounded-md"
                  />
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-bold text-white mb-4">Delivery Method</h4>
                <div className="flex gap-4 mb-6">
                  <button
                    onClick={() => setDeliveryMethod('email')}
                    className={`px-6 py-3 rounded-full text-lg font-bold transition-all duration-300 ${
                      deliveryMethod === 'email'
                        ? 'bg-[#e2b279] text-[#111115]'
                        : 'bg-[#111115] text-white border border-[#23232a] hover:border-[#e2b279]'
                    }`}
                  >
                    Email
                  </button>
                  <button
                    onClick={() => setDeliveryMethod('mail')}
                    className={`px-6 py-3 rounded-full text-lg font-bold transition-all duration-300 ${
                      deliveryMethod === 'mail'
                        ? 'bg-[#e2b279] text-[#111115]'
                        : 'bg-[#111115] text-white border border-[#23232a] hover:border-[#e2b279]'
                    }`}
                  >
                    Mail
                  </button>
                </div>
                
                {deliveryMethod === 'mail' && (
                  <p className="text-[#bdbdbd]">
                    Physical gift cards will be mailed within 3-5 business days. 
                    Shipping is free within the continental US.
                  </p>
                )}
              </div>
              
              <button className="w-full py-4 bg-[#e2b279] text-[#111115] font-bold rounded-md hover:bg-[#d1a05a] transition-colors duration-300">
                Add to Cart - ${selectedAmount}
              </button>
            </div>
          </div>
          
          <div className="bg-[#18181c] rounded-lg p-8 md:p-12 border border-[#23232a] mb-20">
            <h3 className="text-3xl font-bold text-white mb-8 text-center" style={{ fontFamily: 'var(--font-el-messiri)' }}>
              Corporate Gift Cards
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[#bdbdbd] mb-6">
                  Perfect for employee rewards, client appreciation, or promotional giveaways. 
                  Corporate gift cards can be customized with your company logo and message.
                </p>
                <p className="text-[#bdbdbd] mb-8">
                  We offer bulk discounts for orders of 25 or more cards, 
                  and provide detailed reporting on card usage and balances.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#e2b279] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[#bdbdbd]">Custom branding options</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#e2b279] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[#bdbdbd]">Bulk ordering discounts</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#e2b279] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[#bdbdbd]">Usage reporting and management</span>
                  </li>
                </ul>
                <button className="px-8 py-4 bg-[#e2b279] text-[#111115] font-bold rounded-md hover:bg-[#d1a05a] transition-colors duration-300">
                  Contact Sales Team
                </button>
              </div>
              
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/assets/img/gift-cards/corporate.webp"
                  alt="Corporate Gift Cards"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-el-messiri)' }}>
              Frequently Asked Questions
            </h3>
            <div className="max-w-3xl mx-auto text-left">
              <div className="bg-[#18181c] rounded-lg p-6 border border-[#23232a] mb-4">
                <h4 className="text-lg font-bold text-white mb-2">Can I use my gift card for catering orders?</h4>
                <p className="text-[#bdbdbd]">
                  Yes, our gift cards can be used for catering orders placed directly with us. 
                  Simply provide the gift card number when placing your order.
                </p>
              </div>
              
              <div className="bg-[#18181c] rounded-lg p-6 border border-[#23232a] mb-4">
                <h4 className="text-lg font-bold text-white mb-2">What happens if my order total exceeds the gift card balance?</h4>
                <p className="text-[#bdbdbd]">
                  You can use your gift card for part of the payment and pay the remaining balance 
                  with another payment method. Any unused balance will remain on your gift card 
                  for future use.
                </p>
              </div>
              
              <div className="bg-[#18181c] rounded-lg p-6 border border-[#23232a]">
                <h4 className="text-lg font-bold text-white mb-2">Can I reload my gift card?</h4>
                <p className="text-[#bdbdbd]">
                  Yes, you can add additional funds to your existing gift card at any time. 
                  Visit our restaurant or contact our customer service team to reload your card.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GiftCardsPage;