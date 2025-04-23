'use client';

import { useState } from 'react';
import Link from 'next/link';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { FaSearch, FaFilePdf, FaExternalLinkAlt, FaCalendarAlt, FaUser, FaUniversity } from 'react-icons/fa';

// Mock publication data
const PUBLICATIONS = [
  {
    id: 1,
    title: "Sustainable Urban Farming: A Comprehensive Analysis of Vertical Gardening Techniques",
    authors: ["Dr. Emily Parker", "Dr. James Wilson"],
    institution: "University of Agriculture",
    publicationDate: "2023-05-15",
    type: "Research Paper",
    tags: ["urban farming", "sustainability", "vertical gardening"],
    abstract: "This study examines the efficiency and sustainability of various vertical gardening techniques in urban environments, with a focus on water conservation and yield maximization.",
    doi: "10.1234/agr.2023.001",
    link: "/publications/papers/sustainable-urban-farming.pdf",
    citations: 12
  },
  {
    id: 2,
    title: "Effects of Organic Mulch on Soil Health and Plant Productivity",
    authors: ["Dr. Marcus Johnson", "Sarah Smith, MSc", "Prof. Robert Davis"],
    institution: "Institute of Sustainable Agriculture",
    publicationDate: "2023-03-22",
    type: "Research Paper",
    tags: ["soil health", "organic farming", "mulching techniques"],
    abstract: "This research investigates how different types of organic mulch affect soil microbial activity, moisture retention, and overall plant productivity in vegetable gardens.",
    doi: "10.1234/agr.2023.002",
    link: "/publications/papers/organic-mulch-effects.pdf",
    citations: 8
  },
  {
    id: 3,
    title: "Climate Change Adaptation Strategies for Small-Scale Farmers",
    authors: ["Dr. Sophia Rodriguez", "Dr. Michael Chen"],
    institution: "Global Climate Research Center",
    publicationDate: "2023-01-30",
    type: "White Paper",
    tags: ["climate change", "adaptation", "small-scale farming"],
    abstract: "This white paper presents practical adaptation strategies for small-scale farmers facing challenges due to climate change, including crop diversification and water management techniques.",
    link: "/publications/whitepapers/climate-adaptation-strategies.pdf",
    citations: 15
  },
  {
    id: 4,
    title: "Comparative Analysis of Hydroponics vs. Traditional Soil Growing Methods",
    authors: ["Prof. Thomas Anderson", "Dr. Lisa Kim"],
    institution: "Agricultural Technology Institute",
    publicationDate: "2022-11-18",
    type: "Research Paper",
    tags: ["hydroponics", "growing methods", "comparative analysis"],
    abstract: "This paper compares the resource efficiency, yield, and nutritional content of vegetables grown using hydroponic systems versus traditional soil-based methods.",
    doi: "10.1234/agr.2022.008",
    link: "/publications/papers/hydroponics-vs-soil.pdf",
    citations: 23
  },
  {
    id: 5,
    title: "Best Practices for Seed Saving and Preservation",
    authors: ["Dr. Anna Martinez"],
    institution: "Seed Conservation Alliance",
    publicationDate: "2022-09-05",
    type: "Technical Guide",
    tags: ["seed saving", "biodiversity", "preservation"],
    abstract: "This comprehensive guide outlines techniques for properly harvesting, processing, and storing seeds from various plant species to maintain genetic diversity and ensure viability.",
    link: "/publications/guides/seed-saving-practices.pdf",
    citations: 7
  },
  {
    id: 6,
    title: "The Economic Impact of Community Gardens in Urban Areas",
    authors: ["Dr. Jamal Williams", "Dr. Emma Thompson", "Prof. David Lee"],
    institution: "Urban Economics Research Center",
    publicationDate: "2022-07-12",
    type: "Research Paper",
    tags: ["community gardens", "urban economics", "food security"],
    abstract: "This study analyzes the economic benefits of community gardens in urban areas, including reduced food costs, increased property values, and community development opportunities.",
    doi: "10.1234/agr.2022.015",
    link: "/publications/papers/community-gardens-economic-impact.pdf",
    citations: 19
  },
  {
    id: 7,
    title: "Innovative Pest Management Strategies for Organic Farms",
    authors: ["Dr. Rachel Green", "Prof. Kevin Taylor"],
    institution: "Organic Farming Institute",
    publicationDate: "2022-05-28",
    type: "Technical Guide",
    tags: ["pest management", "organic farming", "biological control"],
    abstract: "This technical guide presents innovative approaches to pest management for organic farms, focusing on biological controls, companion planting, and habitat management.",
    link: "/publications/guides/organic-pest-management.pdf",
    citations: 14
  },
  {
    id: 8,
    title: "Traditional Agricultural Knowledge: Lessons from Indigenous Communities",
    authors: ["Dr. Maya Johnson", "Prof. Carlos Rodriguez", "Dr. Amara Singh"],
    institution: "Cultural Heritage Research Center",
    publicationDate: "2022-03-10",
    type: "Research Paper",
    tags: ["indigenous knowledge", "traditional agriculture", "sustainable practices"],
    abstract: "This paper documents and analyzes traditional agricultural practices from indigenous communities worldwide, highlighting sustainable techniques that can be adapted for modern farming systems.",
    doi: "10.1234/agr.2022.022",
    link: "/publications/papers/traditional-agricultural-knowledge.pdf",
    citations: 31
  }
];

// Get all unique types from publications
const getAllTypes = (publications) => {
  const types = publications.map(pub => pub.type);
  return ['All Types', ...new Set(types)];
};

// Get all unique tags from publications
const getAllTags = (publications) => {
  const tagsArray = publications.flatMap(pub => pub.tags);
  return ['All Tags', ...new Set(tagsArray)];
};

export default function Publications() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedTag, setSelectedTag] = useState('All Tags');
  const [sortBy, setSortBy] = useState('date');
  const [filteredPublications, setFilteredPublications] = useState(PUBLICATIONS);
  
  const publicationTypes = getAllTypes(PUBLICATIONS);
  const publicationTags = getAllTags(PUBLICATIONS);
  
  // Filter and sort publications
  const filterAndSortPublications = () => {
    let result = [...PUBLICATIONS];
    
    // Filter by type
    if (selectedType !== 'All Types') {
      result = result.filter(pub => pub.type === selectedType);
    }
    
    // Filter by tag
    if (selectedTag !== 'All Tags') {
      result = result.filter(pub => pub.tags.includes(selectedTag));
    }
    
    // Filter by search query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(pub => 
        pub.title.toLowerCase().includes(query) ||
        pub.abstract.toLowerCase().includes(query) ||
        pub.authors.some(author => author.toLowerCase().includes(query)) ||
        pub.institution.toLowerCase().includes(query)
      );
    }
    
    // Sort results
    result.sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.publicationDate) - new Date(a.publicationDate);
      } else if (sortBy === 'citations') {
        return b.citations - a.citations;
      } else if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
    
    setFilteredPublications(result);
  };
  
  // Handle filter changes
  const handleSearch = (e) => {
    e.preventDefault();
    filterAndSortPublications();
  };
  
  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    setTimeout(filterAndSortPublications, 0);
  };
  
  const handleTagChange = (e) => {
    setSelectedTag(e.target.value);
    setTimeout(filterAndSortPublications, 0);
  };
  
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setTimeout(filterAndSortPublications, 0);
  };
  
  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  return (
    <>
      <NavBar />
      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="bg-green-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Research Publications</h1>
            <p className="max-w-3xl mx-auto text-lg text-green-100">
              Explore our collection of research papers, white papers, and technical guides on agriculture, sustainability, and gardening techniques.
            </p>
          </div>
        </div>
        
        {/* Search and filter section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <form onSubmit={handleSearch} className="space-y-4 md:space-y-0 md:flex md:items-end md:space-x-4">
              <div className="flex-1">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearch className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="search"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="Search by title, author, or keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                  Type
                </label>
                <select
                  id="type"
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 rounded-md sm:text-sm"
                  value={selectedType}
                  onChange={handleTypeChange}
                >
                  {publicationTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="tag" className="block text-sm font-medium text-gray-700 mb-1">
                  Topic
                </label>
                <select
                  id="tag"
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 rounded-md sm:text-sm"
                  value={selectedTag}
                  onChange={handleTagChange}
                >
                  {publicationTags.map((tag, index) => (
                    <option key={index} value={tag}>{tag}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">
                  Sort By
                </label>
                <select
                  id="sort"
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 rounded-md sm:text-sm"
                  value={sortBy}
                  onChange={handleSortChange}
                >
                  <option value="date">Publication Date</option>
                  <option value="citations">Citations</option>
                  <option value="title">Title</option>
                </select>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          
          {/* Results count */}
          <div className="mt-6 text-sm text-gray-500">
            Showing {filteredPublications.length} of {PUBLICATIONS.length} publications
          </div>
        </div>
        
        {/* Publications list */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {filteredPublications.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-gray-900">No matching publications found</h3>
              <p className="mt-2 text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredPublications.map((publication) => (
                <div key={publication.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {publication.title}
                      </h3>
                      
                      <div className="flex flex-wrap items-center text-sm text-gray-600 mb-2">
                        <span className="flex items-center mr-4 mb-2 md:mb-0">
                          <FaUser className="mr-1 h-3 w-3" />
                          {publication.authors.join(', ')}
                        </span>
                        <span className="flex items-center mr-4 mb-2 md:mb-0">
                          <FaUniversity className="mr-1 h-3 w-3" />
                          {publication.institution}
                        </span>
                        <span className="flex items-center mb-2 md:mb-0">
                          <FaCalendarAlt className="mr-1 h-3 w-3" />
                          {formatDate(publication.publicationDate)}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {publication.type}
                        </span>
                        {publication.tags.map((tag, index) => (
                          <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <p className="text-gray-600 mb-4">
                        {publication.abstract}
                      </p>
                      
                      <div className="flex flex-wrap items-center text-sm gap-4">
                        {publication.doi && (
                          <span className="text-gray-500">
                            DOI: {publication.doi}
                          </span>
                        )}
                        <span className="text-gray-500">
                          Citations: {publication.citations}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-4 md:mt-0 md:ml-6 flex md:flex-col items-center md:items-end gap-3">
                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        <FaFilePdf className="mr-2" />
                        PDF
                      </a>
                      
                      {publication.doi && (
                        <a
                          href={`https://doi.org/${publication.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                          <FaExternalLinkAlt className="mr-2" />
                          View Online
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination placeholder */}
          <div className="mt-8 flex justify-center">
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
        
        {/* Submit publication section */}
        <div className="bg-green-700 text-white py-16 mt-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Submit Your Research</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Are you a researcher or academic working in agriculture, sustainability, or related fields? Submit your paper for consideration in our publication collection.
            </p>
            <Link href="/submit-publication" className="inline-block bg-white text-green-700 hover:bg-green-100 py-3 px-8 rounded-lg font-bold transition-colors duration-300">
              Submit Paper
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 