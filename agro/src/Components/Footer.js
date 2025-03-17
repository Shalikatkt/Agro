import React from 'react'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';


const Footer = () => {
  return (
    <div>
      <footer className="bg-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">GrowSpace</h3>
              <p className="text-green-200">Your complete companion for all things cultivation. Track, manage, and optimize your growing journey.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-green-200 hover:text-white">About Us</Link></li>
                <li><Link href="/features" className="text-green-200 hover:text-white">Features</Link></li>
                <li><Link href="/pricing" className="text-green-200 hover:text-white">Pricing</Link></li>
                <li><Link href="/blog" className="text-green-200 hover:text-white">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2">
                <li><Link href="/forum" className="text-green-200 hover:text-white">Forum</Link></li>
                <li><Link href="/events" className="text-green-200 hover:text-white">Events</Link></li>
                <li><Link href="/marketplace" className="text-green-200 hover:text-white">Marketplace</Link></li>
                <li><Link href="/support" className="text-green-200 hover:text-white">Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Stay Connected</h4>
              <p className="text-green-200 mb-4">Subscribe to our newsletter for tips and updates.</p>
              <div className="flex">
                <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-lg w-full focus:outline-none text-gray-800" />
                <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-lg">
                  Join
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
            <p>&copy; {new Date().getFullYear()} GrowSpace. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
