
import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Location data
const location = {
  id: 1,
  name: "JR's Corner Ardmore",
  address: "1500 SAM NOBLE PARKWAY, ARDMORE, OK 73401-7154",
  phone: "+1 (580) 226-7925",
  hours: "5am to 12am",
  amenities: ["Restaurant", "Gas Station", "Convenience Store", "Clean Restrooms", "ATM", "Air Tower"],
  coordinates: [-97.1376, 34.1742] as [number, number] // Explicitly typed as tuple
};

const Contact = () => {
  const mapContainer = React.useRef<HTMLDivElement>(null);
  const map = React.useRef<mapboxgl.Map | null>(null);

  React.useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map - replace with your Mapbox token
    mapboxgl.accessToken = 'pk.eyJ1IjoiY29kZXRyYWluZXIiLCJhIjoiY2xtbHRwaDlvMGFrZzJrcGR5ZjdvcXY2ZiJ9.SLD75G7ClA6wWRJH7HvzDQ';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: location.coordinates,
      zoom: 15
    });

    // Add marker for the location
    new mapboxgl.Marker({ color: '#E63946' })
      .setLngLat(location.coordinates)
      .setPopup(new mapboxgl.Popup().setHTML(`<strong>${location.name}</strong><br>${location.address}`))
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div>
      <section id="locations" className="py-16">
        <div className="container-custom">
          <h2 className="section-title text-center">Our Location</h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-diner text-pitstop-darkblue mb-4">
                  {location.name}
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex">
                    <MapPin size={20} className="text-pitstop-red mr-3 mt-1 flex-shrink-0" />
                    <p>{location.address}</p>
                  </div>
                  <div className="flex">
                    <Phone size={20} className="text-pitstop-red mr-3 mt-1 flex-shrink-0" />
                    <p>{location.phone}</p>
                  </div>
                  <div className="flex">
                    <Clock size={20} className="text-pitstop-red mr-3 mt-1 flex-shrink-0" />
                    <p>{location.hours}</p>
                  </div>
                  <div className="flex">
                    <Mail size={20} className="text-pitstop-red mr-3 mt-1 flex-shrink-0" />
                    <p>jrsardmore@gmail.com</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2">Amenities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {location.amenities.map((amenity, index) => (
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
                    href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
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
                <div ref={mapContainer} className="h-full w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
