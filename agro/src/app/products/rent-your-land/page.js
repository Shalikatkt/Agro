'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';
import { FaMapMarkerAlt, FaRulerCombined, FaTree, FaWater, FaLeaf, FaCheckCircle, FaInfoCircle } from 'react-icons/fa';

// Mock land listings
const FEATURED_LISTINGS = [
  {
    id: 1,
    title: "Sunny Pasture",
    location: "Greenville, CA",
    size: "2.5 acres",
    price: 250,
    priceUnit: "month",
    description: "Fertile land with excellent sun exposure, ideal for growing vegetables and flowers.",
    features: ["Fenced property", "Water access", "Partial equipment storage", "Organic certified"],
    image: "/images/land1.jpg"
  },
  {
    id: 2,
    title: "Riverside Plot",
    location: "River Valley, OR",
    size: "1.8 acres",
    price: 200,
    priceUnit: "month",
    description: "Scenic land parcel next to a creek with rich soil and natural irrigation possibilities.",
    features: ["Creek access", "Partial shade", "Road access", "Previously cultivated"],
    image: "/images/land2.jpg"
  },
  {
    id: 3,
    title: "Hilltop Vineyard",
    location: "Meadow Hills, WA",
    size: "3.2 acres",
    price: 350,
    priceUnit: "month",
    description: "Gently sloping land with excellent drainage, perfect for vineyard or orchard planting.",
    features: ["Southern exposure", "Drip irrigation installed", "Tool shed", "Terraced sections"],
    image: "/images/land3.jpg"
  }
];

export default function RentYourLand() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    landType: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    console.log("Form submitted:", formData);
    // Show success message
    setSubmitted(true);
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        landType: '',
        message: ''
      });
      setSubmitted(false);
    }, 5000);
  };

  return (
    <>
      <NavBar />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="absolute inset-0 opacity-20 bg-pattern"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Rent Your Land for Agriculture</h1>
            <p className="text-xl text-green-100 mb-8">
              Transform your unused land into income while supporting sustainable farming practices and local food production.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#list-land" className="bg-white text-green-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-bold transition-colors shadow-lg">
                List Your Land
              </a>
              <a href="#find-land" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-bold transition-colors">
                Find Land to Rent
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* How It Works */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Landowners */}
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">1</div>
              <h3 className="text-xl font-bold mb-3 text-green-800">For Landowners</h3>
              <p className="text-gray-700 mb-4">List your unused land, set your terms, and connect with trusted farmers looking for space to grow.</p>
              <ul className="text-left space-y-2 text-gray-600">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Generate passive income from unused land</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Support local agriculture and sustainability</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Potential tax benefits for agricultural use</span>
                </li>
              </ul>
            </div>
            
            {/* Farmers */}
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">2</div>
              <h3 className="text-xl font-bold mb-3 text-green-800">For Farmers</h3>
              <p className="text-gray-700 mb-4">Find affordable land for cultivation without the high cost of purchasing property.</p>
              <ul className="text-left space-y-2 text-gray-600">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Access to land without major investment</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Flexible lease terms to match growing seasons</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Expand your growing capacity and reach</span>
                </li>
              </ul>
            </div>
            
            {/* Our Role */}
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">3</div>
              <h3 className="text-xl font-bold mb-3 text-green-800">Our Role</h3>
              <p className="text-gray-700 mb-4">We facilitate the connection and provide the resources to make the partnership successful.</p>
              <ul className="text-left space-y-2 text-gray-600">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Secure platform for finding the right match</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Standardized agreements and templates</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Support throughout the rental period</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Listings */}
      <div id="find-land" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Available Land for Rent</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Browse our curated selection of lands available for agricultural use. Each listing is verified for quality and suitability.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_LISTINGS.map((listing) => (
              <div key={listing.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-300 relative">
                  {/* Placeholder for images */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <span>Land Image</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{listing.title}</h3>
                    <div className="text-green-600 font-bold">${listing.price}/{listing.priceUnit}</div>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <FaMapMarkerAlt className="mr-1" />
                    <span>{listing.location}</span>
                    <span className="mx-2">•</span>
                    <FaRulerCombined className="mr-1" />
                    <span>{listing.size}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{listing.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {listing.features.map((feature, index) => (
                        <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                          <FaLeaf className="mr-1" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href={`/products/rent-your-land/${listing.id}`}
                    className="inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition-colors duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              href="/products/rent-your-land/listings"
              className="inline-block bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white py-3 px-8 rounded-lg font-semibold transition-colors duration-300"
            >
              View All Listings
            </Link>
          </div>
        </div>
      </div>
      
      {/* List Your Land Section */}
      <div id="list-land" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-green-50 rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-center mb-2">List Your Land</h2>
              <p className="text-center text-gray-600 mb-8">
                Start the process of listing your land by providing some basic information below.
              </p>
              
              {submitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6">
                  <strong className="font-bold">Thank you!</strong>
                  <span className="block sm:inline"> Your information has been submitted successfully. We'll contact you soon to discuss the next steps.</span>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="landType" className="block text-sm font-medium text-gray-700 mb-1">
                      Land Type *
                    </label>
                    <select
                      id="landType"
                      name="landType"
                      required
                      value={formData.landType}
                      onChange={handleChange}
                      className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    >
                      <option value="">Select Land Type</option>
                      <option value="residential">Residential Backyard</option>
                      <option value="vacant">Vacant Lot</option>
                      <option value="farm">Farm Land</option>
                      <option value="orchard">Existing Orchard</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Tell us about your land (size, location, features) *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      required
                      className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-medium text-gray-700">
                      I agree to the terms and conditions *
                    </label>
                    <p className="text-gray-500">
                      Your information will only be used to contact you about your land listing.
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Submit Listing
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">What types of land can I list?</h3>
              <p className="text-gray-600">
                You can list almost any type of land that's suitable for growing - from large farm parcels to small urban backyards. The land should have adequate sunlight, water access, and be legally available for the proposed use.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">How much can I earn from renting my land?</h3>
              <p className="text-gray-600">
                Rental rates vary based on location, size, soil quality, water access, and available infrastructure. Urban areas typically command higher rates than rural locations. Our listing process will help you determine a fair market rate.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">What are the lease terms?</h3>
              <p className="text-gray-600">
                Lease terms are flexible and agreed upon between landowners and farmers. Most agricultural leases run on a seasonal or annual basis, often with options to renew. We provide standard templates that can be customized to your situation.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">What about insurance and liability?</h3>
              <p className="text-gray-600">
                We recommend that all parties carry appropriate insurance. Typically, the farmer obtains liability insurance for their activities, while the landowner maintains their property insurance. Our agreements include standard liability clauses.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 flex-shrink-0"></div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Michael T.</h3>
                  <p className="text-gray-600 text-sm">Landowner, California</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "My five-acre plot was sitting unused for years. Now it's generating $1,200 monthly in rental income, and I love seeing it transformed into a productive vegetable farm."
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 flex-shrink-0"></div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Sarah J.</h3>
                  <p className="text-gray-600 text-sm">Urban Farmer, Oregon</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Finding affordable land was my biggest obstacle to starting my flower farm. Through this platform, I found three perfect parcels that allowed me to scale my business without huge upfront costs."
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 flex-shrink-0"></div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">David & Elena R.</h3>
                  <p className="text-gray-600 text-sm">Landowners, Washington</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "We inherited farmland but had no experience in agriculture. Renting it out has preserved our family's agricultural legacy while providing income and connecting us with the local farming community."
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="max-w-2xl mx-auto text-green-100 mb-8">
            Whether you have land to share or are looking for space to grow, take the first step today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#list-land" className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-colors shadow-lg">
              List Your Land
            </a>
            <a href="#find-land" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-bold transition-colors">
              Find Land to Rent
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
} 