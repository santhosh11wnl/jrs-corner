
import React from 'react';
import Hero from '../components/Hero';
import { Fuel, Wind, CreditCard, Utensils, Droplet, Banknote } from 'lucide-react';

const StoreAmenities = () => {
  return (
    <div>
      <Hero
        title="Full Service Highway Oasis"
        subtitle="Premium fuel options, clean facilities, and everything you need for your journey"
        backgroundImage="https://images.unsplash.com/photo-1545522908-85f4ddfb9839?q=80&w=1200&auto=format&fit=crop"
      />

      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Fuel Options</h2>
          
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-16">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <Fuel size={28} className="text-pitstop-red mr-3" />
                <h3 className="text-2xl font-diner text-pitstop-darkblue">Valero Fuel</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-pitstop-cream p-6 rounded-lg">
                  <h4 className="text-xl font-diner mb-3 text-pitstop-darkblue">Regular</h4>
                  <p className="text-gray-700">87 Octane</p>
                </div>
                
                <div className="bg-pitstop-cream p-6 rounded-lg">
                  <h4 className="text-xl font-diner mb-3 text-pitstop-darkblue">Medium</h4>
                  <p className="text-gray-700">89 Octane</p>
                </div>
                
                <div className="bg-pitstop-cream p-6 rounded-lg">
                  <h4 className="text-xl font-diner mb-3 text-pitstop-darkblue">Premium</h4>
                  <p className="text-gray-700">93 Octane</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-pitstop-lightblue p-6 rounded-lg">
                  <div className="flex items-center">
                    <Droplet size={24} className="text-pitstop-darkblue mr-3" />
                    <h4 className="text-xl font-diner text-pitstop-darkblue">Diesel</h4>
                  </div>
                  <p className="text-gray-700 mt-3">High-quality diesel fuel for trucks and diesel vehicles</p>
                </div>
                
                <div className="bg-pitstop-lightblue p-6 rounded-lg">
                  <div className="flex items-center">
                    <Fuel size={24} className="text-pitstop-darkblue mr-3" />
                    <h4 className="text-xl font-diner text-pitstop-darkblue">Gasoline</h4>
                  </div>
                  <p className="text-gray-700 mt-3">Clean, efficient gasoline for all vehicles</p>
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="section-title text-center mb-12">Additional Amenities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <Droplet size={48} className="mx-auto text-pitstop-red mb-4" />
              <h3 className="text-xl font-diner mb-3 text-pitstop-darkblue">Diesel</h3>
              <p className="text-gray-600">Premium diesel for all your trucking needs</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <Fuel size={48} className="mx-auto text-pitstop-red mb-4" />
              <h3 className="text-xl font-diner mb-3 text-pitstop-darkblue">Gasoline</h3>
              <p className="text-gray-600">Quality gasoline for all types of vehicles</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <Wind size={48} className="mx-auto text-pitstop-red mb-4" />
              <h3 className="text-xl font-diner mb-3 text-pitstop-darkblue">Air Tower</h3>
              <p className="text-gray-600">Free air for your tires</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <Banknote size={48} className="mx-auto text-pitstop-red mb-4" />
              <h3 className="text-xl font-diner mb-3 text-pitstop-darkblue">ATM</h3>
              <p className="text-gray-600">24/7 access to cash</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="relative h-12 w-12 mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="text-pitstop-red" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 9h.01M16 9h.01M12 12a4 4 0 0 1-4 4h-.01M12 12a4 4 0 0 0 4 4h.01M3 10v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1M4 10V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4M5 21h14a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-diner mb-3 text-pitstop-darkblue">Public Restroom</h3>
              <p className="text-gray-600">Clean facilities for your comfort</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <Utensils size={48} className="mx-auto text-pitstop-red mb-4" />
              <h3 className="text-xl font-diner mb-3 text-pitstop-darkblue">Quick Service Restaurant</h3>
              <p className="text-gray-600">Fresh food available daily</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center col-span-1 md:col-span-2 lg:col-span-3">
              <CreditCard size={48} className="mx-auto text-pitstop-red mb-4" />
              <h3 className="text-xl font-diner mb-3 text-pitstop-darkblue">ValeroPay+ Accepted</h3>
              <p className="text-gray-600">Use ValeroPay+ for purchases at our location</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StoreAmenities;
