import { useState } from 'react'
import Link from 'next/link'
import ProductDropdown from './ProductDropdown'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showProductDropdown, setShowProductDropdown] = useState(false)

  return (
    <nav className="bg-green-700 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold tracking-tight hover:text-green-200 transition duration-300">
            Cultivation Field
          </Link>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/publications" className="hover:text-green-200 transition duration-300 font-medium">
              Publications
            </Link>
            <div className="relative">
              <button
                className="flex items-center hover:text-green-200 transition duration-300 font-medium"
                onClick={() => setShowProductDropdown((prev) => !prev)}
              >
                Products
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showProductDropdown && <ProductDropdown />}
            </div>
            <Link href="/book" className="hover:text-green-200 transition duration-300 font-medium">
              Book
            </Link>
            <Link href="/blog" className="hover:text-green-200 transition duration-300 font-medium">
              Blog
            </Link>
            <Link href="/calculator" className="hover:text-green-200 transition duration-300 font-medium">
              Date Calculator
            </Link>
            <Link href="/contact" className="hover:text-green-200 transition duration-300 font-medium">
              Contact Us
            </Link>
            <div className="ml-2 flex space-x-3">
              <Link href="/register" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 transition duration-300 font-medium">
                Register
              </Link>
              <Link href="/login" className="bg-white text-green-700 px-4 py-2 rounded-md hover:bg-green-100 transition duration-300 font-medium">
                Login
              </Link>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-green-600 animate-fadeIn">
            <Link href="/publications" className="block py-2 hover:text-green-200 transition duration-300">
              Publications
            </Link>
            <div>
              <button
                className="flex items-center py-2 w-full hover:text-green-200 transition duration-300"
                onClick={() => setShowProductDropdown(!showProductDropdown)}
              >
                Products
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showProductDropdown && (
                <div className="pl-4 py-2 bg-green-800 rounded-md my-1">
                  <Link href="/products/rent-your-land" className="block py-2 hover:text-green-200 transition duration-300">
                    Rent Your Land
                  </Link>
                  <Link href="/products/buy-plants" className="block py-2 hover:text-green-200 transition duration-300">
                    Buy Plants
                  </Link>
                  <Link href="/products/sell-harvest" className="block py-2 hover:text-green-200 transition duration-300">
                    Sell Harvest
                  </Link>
                  <Link href="/products/lectures" className="block py-2 hover:text-green-200 transition duration-300">
                    Lectures
                  </Link>
                  <Link href="/products/partnership" className="block py-2 hover:text-green-200 transition duration-300">
                    Partnership
                  </Link>
                </div>
              )}
            </div>
            <Link href="/book" className="block py-2 hover:text-green-200 transition duration-300">
              Book
            </Link>
            <Link href="/blog" className="block py-2 hover:text-green-200 transition duration-300">
              Blog
            </Link>
            <Link href="/calculator" className="block py-2 hover:text-green-200 transition duration-300">
              Date Calculator
            </Link>
            <Link href="/contact" className="block py-2 hover:text-green-200 transition duration-300">
              Contact Us
            </Link>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <Link href="/register" className="block py-2 text-center bg-green-600 hover:bg-green-500 transition duration-300 rounded-md">
                Register
              </Link>
              <Link href="/login" className="block py-2 text-center bg-white text-green-700 hover:bg-green-100 transition duration-300 rounded-md">
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}