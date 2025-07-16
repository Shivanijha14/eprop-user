'use client';

import Link from 'next/link';
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
} from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              {[
                'Apartments In Gurgaon',
                'Apartments In Pune',
                'Apartments In Navi Mumbai',
                'Apartments In Noida',
                'Apartments In Bangalore',
                'Apartments In Hyderabad',
                'Apartments In Delhi',
                'Commercial Properties In Delhi',
                'Commercial Properties In Noida',
                'Commercial Properties In Gurgaon',
                'Commercial Spaces In Pune',
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Explore Used Items */}
          <div>
            <h3 className="text-base font-semibold mb-4">Explore Used Items</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Used Fridge For Sale</li>
              <li>Used Washing Machine For Sale</li>
              <li>Used Mobile Phone For Sale</li>
              <li>Used Laptops For Sale</li>
              <li>Used Auto mobile For Sale</li>
              <li>Used Furniture For Sale</li>
              <li>Used Sofas For Sale</li>
              <li>Explore All Used Items</li>
            </ul>
          </div>

          {/* Queries */}
          <div>
            <h3 className="text-base font-semibold mb-4">Queries</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Home Loan Queries</li>
              <li>Personal Loan Queries</li>
              <li>Home Construction Queries</li>
              <li>Home Renovation Queries</li>
              <li>Home Buy Queries</li>
              <li>Home Sell Queries</li>
              <li>NRI Real Estate Queries</li>
              <li>Interior Design Queries</li>
              <li>Interior Decor Queries</li>
              <li>Broker Guide Qusries</li>
            </ul>
          </div>

          {/* User Space */}
          <div>
            <h3 className="text-base font-semibold mb-4">User Space</h3>
            <ul className="space-y-2 text-gray-300">
              <li>My Account</li>
              <li>My Properties</li>
              <li>My Items For Sale</li>
              <li>My Wallet</li>
              <li>Transfer Rent</li>
              <li>Help & Support Center</li>
            </ul>
          </div>

          {/* Official */}
          <div>
            <h3 className="text-base font-semibold mb-4">Official</h3>
            <ul className="space-y-2 text-gray-300">
              <li>About Eproperty</li>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Refund Policy</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>User Agreement</li>
              <li>Media Centre</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Download + Contact Row */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 text-sm">
          {/* Download App */}
          <div className="space-y-3">
            <p className="font-semibold">Download Our App</p>
            <p className="text-gray-400">Available For All Devices</p>
            <div className="flex gap-4">
              <img
                src="/assets/images/googleplay.png"
                alt="Google Play"
                className="h-10"
              />
              <img
                src="/assets/images/appstore.png"
                alt="App Store"
                className="h-10"
              />
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <p className="font-semibold">Connect With Us</p>
            <p>
              Call Us: <span className="text-gray-300">+011-123456</span>
            </p>
            <p>
              Write To Us: <span className="text-gray-300">connect@epropertylimited.com</span>
            </p>
            <p>
              Visit Us: <span className="text-gray-300">A64, 3rd Floor, Sector 63, Noida, Uttar Pradesh, 201301</span>
            </p>
            <div className="flex gap-3 mt-2">
              <FiFacebook className="text-gray-400 hover:text-white" />
              <FiTwitter className="text-gray-400 hover:text-white" />
              <FiInstagram className="text-gray-400 hover:text-white" />
              <FiLinkedin className="text-gray-400 hover:text-white" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-xs mt-8 pt-4 border-t border-gray-700">
          Copyright © {currentYear} By Eproperty. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
