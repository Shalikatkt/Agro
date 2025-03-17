import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryItems = [
    {
      id: 1,
      image: "/images/gallery1.jpg", 
      title: "Urban Gardening",
      description: "Transform your balcony into a green paradise"
    },
    {
      id: 2,
      image: "/images/gallery2.jpg",
      title: "Organic Vegetables",
      description: "Grow your own healthy food at home"
    },
    {
      id: 3,
      image: "/images/gallery4.jpg",
      title: "Medicinal Herbs",
      description: "Discover the healing power of plants"
    },
    {
      id: 4,
      image: "/images/gallery3.jpg",
      title: "Hydroponics",
      description: "Modern solutions for limited spaces"
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => 
        prevSlide === galleryItems.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [galleryItems.length]);

  // Manual navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide(prevSlide => 
      prevSlide === galleryItems.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide(prevSlide => 
      prevSlide === 0 ? galleryItems.length - 1 : prevSlide - 1
    );
  };

  const features = [
    {
      title: "Plant Tracking",
      description: "Monitor growth, watering schedules, and health of your plants",
      icon: "🌱"
    },
    {
      title: "Seasonal Calendar",
      description: "Know when to plant, prune, and harvest based on your location",
      icon: "🗓️"
    },
    {
      title: "Community Exchange",
      description: "Share seeds, cuttings, and knowledge with local gardeners",
      icon: "🤝"
    },
    {
      title: "Expert Advice",
      description: "Get personalized tips from horticulture professionals",
      icon: "👩‍🌾"
    }
  ];

  return (
    <div>
      {/* Hero Section with Sliding Gallery */}
      <div className="relative">
        <div className="relative h-96 md:h-screen max-h-screen overflow-hidden">
          {/* Gallery slides */}
          <div className="h-full relative">
            {galleryItems.map((item, index) => (
              <div 
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                {/* Gallery Images */}
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="object-cover"
                  />
                </div>
                
                {/* Content overlay */}
                <div className="absolute inset-0 bg-opacity-40 flex items-center">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                    
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">{item.title}</h2>
                    <p className="text-xl md:text-2xl mb-8">{item.description}</p>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium text-lg">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Gallery Controls */}
            <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2">
              {galleryItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white w-10 h-10 rounded-full flex items-center justify-center"
              aria-label="Previous slide"
            >
              &lt;
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white w-10 h-10 rounded-full flex items-center justify-center"
              aria-label="Next slide"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Cultivate With Confidence</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-green-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Cultivation Journey?</h2>
          <p className="text-xl mb-8">Join thousands of gardeners who are growing healthier, more productive plants.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-medium text-lg hover:bg-gray-100">
              Start For Free
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium text-lg hover:bg-white hover:bg-opacity-10">
              Watch Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
