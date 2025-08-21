"use client";

import React from 'react';
import Link from 'next/link';

const PrivacyPolicyPage = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="et-breadcrumb bg-[#18181c] py-20 pt-52">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-el-messiri)' }}>
              Privacy Policy
            </h1>
            <div className="flex items-center text-[#bdbdbd]">
              <Link href="/" className="hover:text-[#e2b279] transition-colors duration-300">Home</Link>
              <span className="mx-3">/</span>
              <span className="text-[#e2b279]">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
      
      <section className="min-h-screen bg-[#111115] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-[#18181c] rounded-lg p-8 md:p-12 border border-[#23232a]">
            <p className="text-[#bdbdbd] mb-8">
              Last updated: June 1, 2023
            </p>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-el-messiri)' }}>
                  1. Information We Collect
                </h2>
                <p className="text-[#bdbdbd] mb-4">
                  We collect information that you provide directly to us when you:
                </p>
                <ul className="list-disc list-inside text-[#bdbdbd] space-y-2 ml-4">
                  <li>Make a reservation or place an order</li>
                  <li>Create an account or update your profile</li>
                  <li>Subscribe to our newsletter or marketing communications</li>
                  <li>Participate in surveys, contests, or promotional activities</li>
                  <li>Contact us for customer support</li>
                </ul>
                <p className="text-[#bdbdbd] mt-4">
                  The information we collect may include your name, email address, phone number, 
                  mailing address, payment information, dietary preferences, and special occasion dates.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-el-messiri)' }}>
                  2. How We Use Your Information
                </h2>
                <p className="text-[#bdbdbd] mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-[#bdbdbd] space-y-2 ml-4">
                  <li>Process and fulfill your reservations and orders</li>
                  <li>Send you confirmations and updates about your bookings</li>
                  <li>Personalize your dining experience</li>
                  <li>Improve our services and website functionality</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-el-messiri)' }}>
                  3. Information Sharing and Disclosure
                </h2>
                <p className="text-[#bdbdbd] mb-4">
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share your information with:
                </p>
                <ul className="list-disc list-inside text-[#bdbdbd] space-y-2 ml-4">
                  <li>Service providers who assist us in operating our business</li>
                  <li>Payment processors to complete transactions</li>
                  <li>Law enforcement or regulatory authorities when required by law</li>
                  <li>Third parties in connection with a business transaction</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-el-messiri)' }}>
                  4. Data Security
                </h2>
                <p className="text-[#bdbdbd]">
                  We implement appropriate technical and organizational measures to protect 
                  your personal information against unauthorized access, alteration, disclosure, 
                  or destruction. However, no method of transmission over the Internet or 
                  electronic storage is 100% secure.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-el-messiri)' }}>
                  5. Your Rights
                </h2>
                <p className="text-[#bdbdbd] mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-[#bdbdbd] space-y-2 ml-4">
                  <li>Access and receive a copy of your personal information</li>
                  <li>Correct or update inaccurate personal information</li>
                  <li>Delete your personal information</li>
                  <li>Object to or restrict the processing of your personal information</li>
                  <li>Withdraw your consent to marketing communications</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-el-messiri)' }}>
                  6. Cookies and Tracking Technologies
                </h2>
                <p className="text-[#bdbdbd]">
                  We use cookies and similar tracking technologies to enhance your experience 
                  on our website. You can control cookies through your browser settings, 
                  but disabling cookies may affect your ability to use certain features of our site.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-el-messiri)' }}>
                  7. Changes to This Policy
                </h2>
                <p className="text-[#bdbdbd]">
                  We may update this Privacy Policy from time to time. We will notify you 
                  of any changes by posting the new policy on this page and updating the 
                  "Last updated" date. We encourage you to review this policy periodically.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-el-messiri)' }}>
                  8. Contact Us
                </h2>
                <p className="text-[#bdbdbd] mb-4">
                  If you have questions about this Privacy Policy or our privacy practices, 
                  please contact us at:
                </p>
                <div className="text-[#bdbdbd]">
                  <p className="mb-2">The Saffron Lounge</p>
                  <p className="mb-2">12th Block-A, Ribonstreet, Australia</p>
                  <p className="mb-2">Email: privacy@saffronlounge.com</p>
                  <p>Phone: (800) 216-2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;