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
      icon: "🌱",
      color: "bg-emerald-50",
      textColor: "text-emerald-800",
      borderColor: "border-emerald-200"
    },
    {
      title: "Seasonal Calendar",
      description: "Know when to plant, prune, and harvest based on your location",
      icon: "🗓️",
      color: "bg-amber-50",
      textColor: "text-amber-800",
      borderColor: "border-amber-200"
    },
    {
      title: "Community Exchange",
      description: "Share seeds, cuttings, and knowledge with local gardeners",
      icon: "🤝",
      color: "bg-blue-50",
      textColor: "text-blue-800",
      borderColor: "border-blue-200"
    },
    {
      title: "Expert Advice",
      description: "Get personalized tips from horticulture professionals",
      icon: "👩‍🌾",
      color: "bg-purple-50",
      textColor: "text-purple-800",
      borderColor: "border-purple-200"
    }
  ];

  return (
    <div className="font-sans">
      <Head>
        <title>Agro - Your Gardening Companion</title>
        <meta name="description" content="Transform your gardening experience with Agro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section with Sliding Gallery */}
      <div className="relative">
        <div className="relative h-[80vh] md:h-screen max-h-screen overflow-hidden">
          {/* Gallery slides */}
          <div className="h-full relative">
            {galleryItems.map((item, index) => (
              <div 
                key={item.id}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentSlide 
                    ? 'opacity-100 transform scale-100' 
                    : 'opacity-0 transform scale-105 pointer-events-none'
                }`}
              >
                {/* Gallery Images with overlay */}
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
                </div>
                
                {/* Content overlay */}
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-white">
                    <div className="max-w-2xl">
                      <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">{item.title}</h2>
                      <p className="text-xl md:text-2xl mb-8 drop-shadow-sm">{item.description}</p>
                      <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Gallery Controls */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
              {galleryItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white w-8' 
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={prevSlide}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Cultivate With Confidence</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">Everything you need to grow beautiful, healthy plants - all in one place.</p>
          </div>
          
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-500 text-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Cultivation Journey?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">Join thousands of gardeners who are growing healthier, more productive plants with Agro's intelligent gardening companion.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-white text-green-700 px-10 py-4 rounded-full font-medium text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start For Free
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              Watch Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
