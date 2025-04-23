'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { FaSearch, FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';

// Mock blog data
const BLOG_POSTS = [
  {
    id: 1,
    title: 'Top 10 Urban Gardening Tips for Small Spaces',
    excerpt: 'Discover innovative techniques to grow a flourishing garden even with limited space in your urban home or apartment.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus vel laoreet condimentum...',
    image: '/images/blog/urban-garden.jpg',
    author: 'Maria Rodriguez',
    date: '2023-06-15',
    category: 'Urban Gardening',
    tags: ['small spaces', 'urban', 'containers', 'vertical gardening'],
    readTime: 5
  },
  {
    id: 2,
    title: 'Sustainable Pest Control: Natural Solutions for Your Garden',
    excerpt: 'Learn how to keep pests away from your precious plants using environmentally friendly and chemical-free methods.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus vel laoreet condimentum...',
    image: '/images/blog/pest-control.jpg',
    author: 'David Kim',
    date: '2023-05-28',
    category: 'Pest Control',
    tags: ['organic', 'sustainability', 'insects', 'natural remedies'],
    readTime: 7
  },
  {
    id: 3,
    title: 'Seasonal Guide: What to Plant in Summer',
    excerpt: 'A comprehensive guide to the best vegetables, herbs, and flowers to plant during the summer months in different climate zones.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus vel laoreet condimentum...',
    image: '/images/blog/summer-planting.jpg',
    author: 'Sarah Johnson',
    date: '2023-05-10',
    category: 'Seasonal Guides',
    tags: ['summer', 'vegetables', 'planting calendar', 'heat-resistant'],
    readTime: 6
  },
//   {
//     id: 4,
//     title: 'Composting 101: Turn Kitchen Waste into Garden Gold',
//     excerpt: 'The ultimate beginner's guide to starting your own compost pile and enriching your soil with nutrient-rich organic matter.',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus vel laoreet condimentum...',
//     image: '/images/blog/composting.jpg',
//     author: 'Michael Chen',
//     date: '2023-04-22',
//     category: 'Sustainability',
//     tags: ['compost', 'soil health', 'recycling', 'organic'],
//     readTime: 8
//   },
  {
    id: 5,
    title: 'Medicinal Herbs: Growing Your Own Natural Pharmacy',
    excerpt: 'Explore the world of medicinal herbs and learn how to cultivate, harvest, and use these powerful plants for natural remedies.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus vel laoreet condimentum...',
    image: '/images/blog/medicinal-herbs.jpg',
    author: 'Emma Watson',
    date: '2023-04-05',
    category: 'Medicinal Plants',
    tags: ['herbs', 'natural remedies', 'health', 'medicinal'],
    readTime: 10
  },
  {
    id: 6,
    title: 'The Art of Bonsai: Creating Living Miniature Trees',
    excerpt: 'Dive into the ancient Japanese art of bonsai and learn the techniques to grow, shape, and maintain these beautiful miniature trees.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus vel laoreet condimentum...',
    image: '/images/blog/bonsai.jpg',
    author: 'Takashi Yamamoto',
    date: '2023-03-18',
    category: 'Ornamental',
    tags: ['bonsai', 'Japanese', 'trees', 'art'],
    readTime: 9
  }
];

// Get all unique categories from posts
const getAllCategories = (posts) => {
  const categories = posts.map(post => post.category);
  return ['All', ...new Set(categories)];
};

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const categories = getAllCategories(BLOG_POSTS);
  
  // Filter posts based on search query and selected category
  useEffect(() => {
    let result = [...BLOG_POSTS];
    
    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter(post => post.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    setFilteredPosts(result);
  }, [searchQuery, selectedCategory]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Search is already handled by the useEffect
  };
  
  return (
    <>
      <NavBar />
      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="bg-green-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Cultivation Field Blog</h1>
            <p className="max-w-3xl mx-auto text-lg text-green-100">
              Insights, tips, and inspiration for your gardening journey. From urban farming to sustainable practices.
            </p>
          </div>
        </div>
        
        {/* Search and filter section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Search */}
            <form onSubmit={handleSearch} className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-green-500 focus:border-green-500"
                  placeholder="Search articles, topics, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>
            
            {/* Category filter */}
            <div className="w-full md:w-auto">
              <div className="inline-block">
                <label htmlFor="category" className="sr-only">Category</label>
                <select
                  id="category"
                  className="block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 rounded-md"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Results count */}
          <div className="mt-6 text-sm text-gray-500">
            Showing {filteredPosts.length} of {BLOG_POSTS.length} articles
          </div>
        </div>
        
        {/* Blog posts grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-900">No matching articles found</h3>
              <p className="mt-2 text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <div className="bg-gray-200 h-full w-full flex items-center justify-center">
                      <span className="text-gray-400">Image placeholder</span>
                    </div>
                    {/* Uncomment this when you have actual images */}
                    {/* <Image
                      src={post.image}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="object-center"
                    /> */}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        <FaTag className="mr-1 h-3 w-3" />
                        {post.category}
                      </span>
                      <span className="ml-2 text-sm text-gray-500">{post.readTime} min read</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <Link href={`/blog/${post.id}`} className="hover:text-green-600 transition-colors duration-300">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <FaUser className="mr-1 h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <FaCalendarAlt className="mr-1 h-3 w-3" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <Link href={`/blog/${post.id}`} className="text-green-600 hover:text-green-800 font-medium inline-flex items-center transition-colors duration-300">
                        Read more
                        <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination placeholder */}
          <div className="mt-12 flex justify-center">
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-green-50 text-sm font-medium text-green-600">
                1
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                2
              </a>
              <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
        
        {/* Subscribe section */}
        <div className="bg-green-700 text-white py-16 mt-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Join our newsletter to receive the latest articles, gardening tips, and exclusive content directly in your inbox.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-r-md font-medium text-white transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-sm mt-3 text-green-200">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 