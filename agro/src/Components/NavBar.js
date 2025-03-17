import { useState } from 'react'
import Link from 'next/link'
import ProductDropdown from './ProductDropdown'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showProductDropdown, setShowProductDropdown] = useState(false)

  return (
    <nav className="bg-green-700 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold">
            Cultivation Field
          </Link>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden"
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
            <Link href="/publications" className="hover:text-green-200">
              Publications
            </Link>
            <div className="relative">
            <button
                className="flex items-center hover:text-green-200"
                onClick={() => setShowProductDropdown((prev) => !prev)}
>
                Products
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showProductDropdown && <ProductDropdown />}
            </div>
            <Link href="/book" className="hover:text-green-200">
              Book
            </Link>
            <Link href="/blog" className="hover:text-green-200">
              Blog
            </Link>
            <Link href="/calculator" className="hover:text-green-200">
            Date Calculator
            </Link>
            <Link href="/Calculator" className="hover:text-green-200">
              Contact Us
            </Link>
            <Link href="/register" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500">
              Register
            </Link>
            <Link href="/register" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500">
              Login
            </Link>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <Link href="/publications" className="block py-2 hover:text-green-200">
              Publications
            </Link>
            <div>
              <button
                className="flex items-center py-2 w-full hover:text-green-200"
                onClick={() => setShowProductDropdown(!showProductDropdown)}
              >
                Products
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showProductDropdown && (
                <div className="pl-4 py-2">
                  <Link href="/products/rent-your-land" className="block py-2 hover:text-green-200">
                    Rent Your Land
                  </Link>
                  <Link href="/products/buy-plants" className="block py-2 hover:text-green-200">
                    Buy Plants
                  </Link>
                  <Link href="/products/sell-harvest" className="block py-2 hover:text-green-200">
                    Sell Harvest
                  </Link>
                  <Link href="/products/lectures" className="block py-2 hover:text-green-200">
                    Lectures
                  </Link>
                  <Link href="/products/partnership" className="block py-2 hover:text-green-200">
                    Partnership
                  </Link>
                </div>
              )}
            </div>
            <Link href="/book" className="block py-2 hover:text-green-200">
              Book
            </Link>
            <Link href="/blog" className="block py-2 hover:text-green-200">
              Blog
            </Link>
            <Link href="/contact" className="block py-2 hover:text-green-200">
              Contact Us
            </Link>
            <Link href="/register" className="block py-2 hover:text-green-200">
              Register
            </Link>
            
          </div>
        )}
      </div>
    </nav>
  )
}