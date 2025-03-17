import React from 'react'

export default function Testino() {
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Community Says</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold">JD</div>
                <div className="ml-4">
                  <h4 className="font-semibold">Jane Doe</h4>
                  <p className="text-gray-500 text-sm">Urban Gardener</p>
                </div>
              </div>
              <p className="text-gray-600">"GrowSpace transformed my apartment balcony into a thriving mini-farm. The plant tracking features have saved my herbs countless times!"</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold">MS</div>
                <div className="ml-4">
                  <h4 className="font-semibold">Mark Smith</h4>
                  <p className="text-gray-500 text-sm">Homestead Farmer</p>
                </div>
              </div>
              <p className="text-gray-600">"The seasonal calendar is incredibly accurate. I've increased my vegetable yield by 30% by following the personalized guidance."</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold">LR</div>
                <div className="ml-4">
                  <h4 className="font-semibold">Lisa Rodriguez</h4>
                  <p className="text-gray-500 text-sm">Plant Enthusiast</p>
                </div>
              </div>
              <p className="text-gray-600">"The community exchange feature connected me with local gardeners. I've learned so much and even started a neighborhood garden project!"</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
