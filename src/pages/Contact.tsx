
import { useState } from 'react';
import Hero from '../components/Hero';
import { toast } from 'sonner';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

// Mock locations data
const locations = [
  {
    id: 1,
    name: "Highway 95 North",
    address: "1234 Highway 95 North, Cityville, ST 12345",
    phone: "(555) 123-4567",
    hours: "Open 24/7",
    amenities: ["Restaurant", "Gas Station", "Convenience Store", "Clean Restrooms"]
  },
  {
    id: 2,
    name: "Interstate 80 Exit 42",
    address: "5678 Interstate 80, Townsburg, ST 67890",
    phone: "(555) 987-6543",
    hours: "Open 24/7",
    amenities: ["Restaurant", "Gas Station", "Convenience Store", "Truck Parking"]
  },
  {
    id: 3,
    name: "Route 66 Classic",
    address: "9012 Historic Route 66, Oldtown, ST 34567",
    phone: "(555) 456-7890",
    hours: "Open 24/7",
    amenities: ["Restaurant", "Gas Station", "Convenience Store", "EV Charging"]
  }
];

const Contact = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locationId = parseInt(e.target.value);
    const location = locations.find(loc => loc.id === locationId);
    if (location) {
      setSelectedLocation(location);
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      <Hero
        title="Find a PitStop Feast Near You"
        subtitle="With locations across major highways, we're never far away when you need quality food and fuel"
        ctaText="View Locations"
        ctaLink="#locations"
        backgroundImage="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop"
      />

      <section id="locations" className="py-16">
        <div className="container-custom">
          <h2 className="section-title text-center">Our Locations</h2>
          
          <div className="max-w-xl mx-auto mb-12">
            <label htmlFor="location-select" className="block text-sm font-medium text-gray-700 mb-2">
              Select a Location
            </label>
            <select
              id="location-select"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pitstop-red"
              value={selectedLocation.id}
              onChange={handleLocationChange}
            >
              {locations.map(location => (
                <option key={location.id} value={location.id}>
                  {location.name}
                </option>
              ))}
            </select>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-diner text-pitstop-darkblue mb-4">
                  {selectedLocation.name}
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex">
                    <MapPin size={20} className="text-pitstop-red mr-3 mt-1 flex-shrink-0" />
                    <p>{selectedLocation.address}</p>
                  </div>
                  <div className="flex">
                    <Phone size={20} className="text-pitstop-red mr-3 mt-1 flex-shrink-0" />
                    <p>{selectedLocation.phone}</p>
                  </div>
                  <div className="flex">
                    <Clock size={20} className="text-pitstop-red mr-3 mt-1 flex-shrink-0" />
                    <p>{selectedLocation.hours}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2">Amenities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedLocation.amenities.map((amenity, index) => (
                      <span 
                        key={index} 
                        className="bg-pitstop-lightblue/30 text-pitstop-darkblue px-3 py-1 rounded-full text-sm"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6">
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(selectedLocation.address)}`}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="btn-primary"
                  >
                    <MapPin size={16} className="mr-2" />
                    Get Directions
                  </a>
                </div>
              </div>
              
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <div className="bg-gray-200 h-full w-full">
                  {/* In a real implementation, this would be a Google Map or similar */}
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <MapPin size={48} className="mx-auto text-pitstop-red mb-2" />
                      <p className="text-gray-600">Map would be displayed here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-pitstop-cream">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="section-title text-center">Contact Us</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pitstop-red"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pitstop-red"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pitstop-red"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pitstop-red"
                  required
                ></textarea>
              </div>
              
              <div>
                <button type="submit" className="btn-primary w-full py-3">
                  Send Message
                </button>
              </div>
            </form>
            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md flex">
                <Phone size={24} className="text-pitstop-red mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Call Us</h4>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md flex">
                <Mail size={24} className="text-pitstop-red mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email Us</h4>
                  <p className="text-gray-600">info@pitstopfeast.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
