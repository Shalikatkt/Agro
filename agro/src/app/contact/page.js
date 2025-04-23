'use client';

import { useState } from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length < 10) newErrors.message = 'Message should be at least 10 characters';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form and show success message
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setSubmitSuccess(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
      
    } catch (error) {
      setErrors({ form: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="bg-white">
        {/* Header */}
        <div className="bg-green-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="max-w-3xl mx-auto text-lg text-green-100">
              Have questions or feedback? We'd love to hear from you. Our team is always ready to help with your cultivation needs.
            </p>
          </div>
        </div>
        
        {/* Contact info and form */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Contact Information */}
            <div className="md:col-span-1 bg-green-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-green-800 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FaMapMarkerAlt className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-3 text-gray-700">
                    <p className="font-medium">Address</p>
                    <p>123 Green Avenue, Gardenia Park</p>
                    <p>Plantington, FL 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FaPhone className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-3 text-gray-700">
                    <p className="font-medium">Phone</p>
                    <p>(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FaEnvelope className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-3 text-gray-700">
                    <p className="font-medium">Email</p>
                    <p>support@cultivationfield.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-lg font-medium text-green-800 mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <p>Monday - Friday: 9am - 5pm</p>
                  <p>Saturday: 10am - 2pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-2 bg-white p-8 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              {submitSuccess && (
                <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
                  Thank you for your message! We'll get back to you as soon as possible.
                </div>
              )}
              
              {errors.form && (
                <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                  {errors.form}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name *
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                          errors.name ? 'border-red-300' : ''
                        }`}
                      />
                      {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                          errors.email ? 'border-red-300' : ''
                        }`}
                      />
                      {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number (optional)
                    </label>
                    <div className="mt-1">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Subject *
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                          errors.subject ? 'border-red-300' : ''
                        }`}
                      />
                      {errors.subject && <p className="mt-2 text-sm text-red-600">{errors.subject}</p>}
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message *
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className={`shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                        errors.message ? 'border-red-300' : ''
                      }`}
                    />
                    {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white ${
                      isSubmitting
                        ? 'bg-green-400 cursor-not-allowed'
                        : 'bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Map section */}
        <div className="w-full h-96 bg-gray-300 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-600 text-lg">Google Maps integration would go here</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 