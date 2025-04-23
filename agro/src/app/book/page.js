'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { FaStar, FaCheck, FaDownload, FaBookOpen, FaLeaf } from 'react-icons/fa';

export default function Book() {
  const [activeTab, setActiveTab] = useState('description');
  
  // Mock reviews
  const reviews = [
    {
      id: 1,
      name: 'Sarah J.',
      rating: 5,
      date: '2023-06-10',
      title: 'Changed my approach to gardening',
      comment: 'This book transformed my small balcony into a thriving garden. The step-by-step guides are so easy to follow, and the troubleshooting section saved my tomatoes!'
    },
    {
      id: 2,
      name: 'Michael T.',
      rating: 5,
      date: '2023-05-22',
      title: 'Perfect for beginners',
      comment: 'As someone who killed every plant I touched before, this book was a lifesaver. The explanations are clear, and the illustrations help visualize every technique.'
    },
    {
      id: 3,
      name: 'Emily R.',
      rating: 4,
      date: '2023-04-15',
      title: 'Great resource, could use more on indoor plants',
      comment: 'Fantastic overall guide with excellent advice on outdoor gardening. I wish there was a bit more focus on indoor plants, but still well worth the investment.'
    },
  ];
  
  // Calculate average rating
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  
  return (
    <>
      <NavBar />
      <div className="bg-gray-50 pt-8 pb-16">
        {/* Hero section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
              {/* Book image and purchase - Left side or top on mobile */}
              <div className="lg:col-span-2 p-8 bg-gradient-to-br from-green-700 to-green-900 text-white flex flex-col justify-between">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">The Complete Guide to Sustainable Gardening</h1>
                  <p className="text-green-100 text-lg mb-4">By Dr. Elena Richardson, PhD in Horticultural Science</p>
                  
                  <div className="flex items-center mb-6">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={`w-5 h-5 ${i < Math.round(averageRating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="ml-2 text-green-100">({reviews.length} reviews)</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="bg-white/10 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xl line-through opacity-75">$29.99</span>
                      <span className="text-3xl font-bold">$19.99</span>
                    </div>
                    <div className="text-center bg-yellow-500 text-yellow-900 font-bold py-1 px-2 rounded-full text-sm mb-3">
                      SAVE 33% - LIMITED TIME OFFER
                    </div>
                    <div className="space-y-3">
                      <button className="w-full bg-white text-green-800 hover:bg-green-100 py-3 rounded-lg font-bold transition-colors duration-300 flex items-center justify-center">
                        <FaDownload className="mr-2" /> Buy Now
                      </button>
                      <button className="w-full bg-transparent border-2 border-white text-white hover:bg-white/10 py-3 rounded-lg font-bold transition-colors duration-300">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  
                  <div className="text-sm text-green-100">
                    <p className="mb-2">Available as:</p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <FaBookOpen className="mr-1" /> PDF
                      </div>
                      <div className="flex items-center">
                        <FaBookOpen className="mr-1" /> EPUB
                      </div>
                      <div className="flex items-center">
                        <FaBookOpen className="mr-1" /> MOBI
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Book details - Right side or bottom on mobile */}
              <div className="lg:col-span-3 p-8">
                <div className="mb-6">
                  <div className="flex border-b border-gray-200">
                    <button
                      className={`pb-2 px-4 ${activeTab === 'description' ? 'border-b-2 border-green-600 text-green-600 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
                      onClick={() => setActiveTab('description')}
                    >
                      Description
                    </button>
                    <button
                      className={`pb-2 px-4 ${activeTab === 'contents' ? 'border-b-2 border-green-600 text-green-600 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
                      onClick={() => setActiveTab('contents')}
                    >
                      Contents
                    </button>
                    <button
                      className={`pb-2 px-4 ${activeTab === 'reviews' ? 'border-b-2 border-green-600 text-green-600 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
                      onClick={() => setActiveTab('reviews')}
                    >
                      Reviews
                    </button>
                  </div>
                  
                  {/* Description Tab */}
                  {activeTab === 'description' && (
                    <div className="py-6">
                      <p className="text-lg text-gray-600 mb-4">
                        Transform your garden into a sustainable paradise with this comprehensive guide to eco-friendly gardening techniques. Whether you have acres of land or just a small balcony, this book provides the knowledge and tools you need to create a thriving, environmentally responsible garden.
                      </p>
                      
                      <p className="text-lg text-gray-600 mb-6">
                        Dr. Elena Richardson draws from over 20 years of experience in horticulture to deliver practical advice for gardeners of all skill levels. Learn how to work with nature rather than against it, reduce your environmental footprint, and grow beautiful, healthy plants using organic methods.
                      </p>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3">What You'll Learn:</h3>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start">
                          <FaCheck className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <span>How to design a garden that works with your local ecosystem</span>
                        </li>
                        <li className="flex items-start">
                          <FaCheck className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <span>Water conservation techniques that save money and resources</span>
                        </li>
                        <li className="flex items-start">
                          <FaCheck className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <span>Natural pest control methods that protect beneficial insects</span>
                        </li>
                        <li className="flex items-start">
                          <FaCheck className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <span>Composting tips to turn waste into garden gold</span>
                        </li>
                        <li className="flex items-start">
                          <FaCheck className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <span>Season-by-season planting guides for continuous harvests</span>
                        </li>
                      </ul>
                      
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h4 className="font-medium text-green-800 mb-2">Bonus Materials Included:</h4>
                        <ul className="space-y-1 text-green-700">
                          <li className="flex items-center">
                            <FaLeaf className="h-4 w-4 mr-2" />
                            <span>Printable garden planning templates</span>
                          </li>
                          <li className="flex items-center">
                            <FaLeaf className="h-4 w-4 mr-2" />
                            <span>Seasonal maintenance checklists</span>
                          </li>
                          <li className="flex items-center">
                            <FaLeaf className="h-4 w-4 mr-2" />
                            <span>Access to online video tutorials</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                  
                  {/* Contents Tab */}
                  {activeTab === 'contents' && (
                    <div className="py-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-gray-900">Chapter 1: Principles of Sustainable Gardening</h4>
                          <p className="text-gray-600">Understanding ecosystems, permaculture basics, and working with nature</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-900">Chapter 2: Garden Planning and Design</h4>
                          <p className="text-gray-600">Site assessment, garden layouts, companion planting strategies</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-900">Chapter 3: Soil Health and Management</h4>
                          <p className="text-gray-600">Building fertile soil, composting techniques, mulching benefits</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-900">Chapter 4: Water Conservation</h4>
                          <p className="text-gray-600">Efficient irrigation, rainwater harvesting, drought-resistant plants</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-900">Chapter 5: Organic Pest and Disease Management</h4>
                          <p className="text-gray-600">Prevention strategies, beneficial insects, natural remedies</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-900">Chapter 6: Seasonal Planting Guides</h4>
                          <p className="text-gray-600">What to plant when, succession planting, extending the growing season</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-900">Chapter 7: Harvesting and Preserving</h4>
                          <p className="text-gray-600">Optimal harvest times, storage techniques, preserving methods</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-900">Chapter 8: Special Gardens</h4>
                          <p className="text-gray-600">Container gardening, vertical gardens, raised beds, edible landscapes</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-900">Appendices</h4>
                          <p className="text-gray-600">Plant guides, resources, troubleshooting common problems</p>
                        </div>
                      </div>
                      
                      <p className="mt-6 text-gray-700">
                        <span className="font-medium">Pages:</span> 286<br />
                        <span className="font-medium">Published:</span> 2023<br />
                        <span className="font-medium">Language:</span> English
                      </p>
                    </div>
                  )}
                  
                  {/* Reviews Tab */}
                  {activeTab === 'reviews' && (
                    <div className="py-6">
                      <div className="flex items-center mb-6">
                        <div className="flex items-baseline">
                          <span className="text-4xl font-bold text-gray-900">{averageRating.toFixed(1)}</span>
                          <span className="text-gray-500 ml-1">/ 5</span>
                        </div>
                        
                        <div className="ml-4 flex">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={`w-5 h-5 ${i < Math.round(averageRating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                          ))}
                        </div>
                        
                        <div className="ml-4 text-sm text-gray-500">
                          Based on {reviews.length} reviews
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        {reviews.map((review) => (
                          <div key={review.id} className="border-b border-gray-200 pb-6">
                            <div className="flex justify-between mb-2">
                              <span className="font-medium text-gray-900">{review.title}</span>
                              <span className="text-sm text-gray-500">
                                {new Date(review.date).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric'
                                })}
                              </span>
                            </div>
                            
                            <div className="flex items-center mb-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <FaStar key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                                ))}
                              </div>
                              <span className="ml-2 text-sm font-medium text-gray-700">{review.name}</span>
                            </div>
                            
                            <p className="text-gray-600">{review.comment}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8">
                        <Link href="#" className="inline-flex items-center text-green-600 hover:text-green-800 font-medium">
                          Write a review
                          <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Author section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 bg-gray-200 h-64 md:h-auto md:w-48 flex items-center justify-center">
                {/* Replace with actual author image */}
                <div className="text-gray-400">Author image</div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">About the Author</h2>
                <h3 className="text-xl text-gray-700 mb-4">Dr. Elena Richardson</h3>
                <p className="text-gray-600 mb-4">
                  Dr. Elena Richardson holds a PhD in Horticultural Science from Cornell University and has been researching sustainable gardening practices for over two decades. She has worked with community gardens, agricultural extensions, and home gardeners across the country to develop practical, eco-friendly growing techniques.
                </p>
                <p className="text-gray-600">
                  As a regular contributor to Gardening Today and the author of three previous books on organic growing methods, Dr. Richardson combines scientific knowledge with hands-on experience. She maintains her own one-acre demonstration garden where she tests and refines the methods described in her books.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Is this book suitable for complete beginners?</h3>
              <p className="text-gray-600">
                Absolutely! The book starts with the basics and gradually introduces more advanced concepts. Each technique is explained step-by-step with clear illustrations, making it accessible for gardeners of all experience levels.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">What format does the e-book come in?</h3>
              <p className="text-gray-600">
                When you purchase the e-book, you'll receive it in three formats: PDF (for reading on any device), EPUB (for e-readers), and MOBI (for Kindle devices). This ensures you can read it on any device you prefer.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Are the techniques applicable to all climate zones?</h3>
              <p className="text-gray-600">
                The book covers principles that work across all growing zones, with specific recommendations for adapting techniques to different climates. There are dedicated sections for hot/dry, temperate, and cool/wet regions.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">How do I access the bonus materials?</h3>
              <p className="text-gray-600">
                The e-book contains a link and access code to a special resource page where you can download all bonus materials and access the video tutorials. The templates are provided in both PDF and editable formats.
              </p>
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="bg-green-700 rounded-lg text-white p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Garden?</h2>
            <p className="text-lg md:text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Get your copy of "The Complete Guide to Sustainable Gardening" today and start growing a more beautiful, productive, and environmentally friendly garden.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-green-700 hover:bg-green-100 py-3 px-8 rounded-lg font-bold text-lg transition-colors duration-300">
                Buy Now - $19.99
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 py-3 px-8 rounded-lg font-bold text-lg transition-colors duration-300">
                Add to Cart
              </button>
            </div>
            <p className="mt-4 text-green-200 text-sm">
              30-day money-back guarantee if you're not completely satisfied
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}