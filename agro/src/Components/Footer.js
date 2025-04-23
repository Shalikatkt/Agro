import React from 'react'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="bg-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AgroSpace</h3>
              <p className="text-green-200 mb-4">Your complete companion for sustainable cultivation. Track, manage, and optimize your growing journey with expert guidance.</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-white hover:text-green-200"><FaFacebook size={20} /></a>
                <a href="#" className="text-white hover:text-green-200"><FaTwitter size={20} /></a>
                <a href="#" className="text-white hover:text-green-200"><FaInstagram size={20} /></a>
                <a href="#" className="text-white hover:text-green-200"><FaPinterest size={20} /></a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/growing-guides" className="text-green-200 hover:text-white">Growing Guides</Link></li>
                <li><Link href="/plant-library" className="text-green-200 hover:text-white">Plant Library</Link></li>
                <li><Link href="/seasonal-calendar" className="text-green-200 hover:text-white">Seasonal Calendar</Link></li>
                <li><Link href="/about-us" className="text-green-200 hover:text-white">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2">
                <li><Link href="/gardeners-forum" className="text-green-200 hover:text-white">Gardeners Forum</Link></li>
                <li><Link href="/workshops" className="text-green-200 hover:text-white">Workshops & Events</Link></li>
                <li><Link href="/seed-exchange" className="text-green-200 hover:text-white">Seed Exchange</Link></li>
                <li><Link href="/expert-advice" className="text-green-200 hover:text-white">Expert Advice</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Stay Connected</h4>
              <p className="text-green-200 mb-4">Subscribe for seasonal growing tips and exclusive content.</p>
              <div className="flex">
                <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-lg w-full focus:outline-none text-gray-800" />
                <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-lg transition duration-300">
                  Join
                </button>
              </div>
              <p className="text-xs text-green-300 mt-2">We respect your privacy and will never share your information.</p>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 flex justify-between flex-wrap text-green-200">
            <p>&copy; {new Date().getFullYear()} AgroSpace. All rights reserved.</p>
            <div className="space-x-4 mt-2 md:mt-0">
              <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white">Terms of Use</Link>
              <Link href="/contact" className="hover:text-white">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

