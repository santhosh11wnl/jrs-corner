import Hero from '../components/Hero';
import { Phone, MessageCircle, Clock } from 'lucide-react';

const offerItems = [
  {
    id: 1,
    title: "Pizza + Wings Combo",
    description: "Get a cheese pizza and 6 wings for a special price. Perfect for sharing!",
    imagePath: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop",
    price: "12.99",
    regularPrice: "15.98",
    expires: "Valid through May 31, 2025"
  },
  {
    id: 2,
    title: "Breakfast Deal",
    description: "Any breakfast sandwich + regular coffee for one low price",
    imagePath: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop",
    price: "5.99",
    regularPrice: "7.48",
    expires: "Available 6-11 AM daily"
  },
  {
    id: 3,
    title: "Family Meal Deal",
    description: "2 large pizzas, 12 wings, and 4 drinks - perfect for the whole family",
    imagePath: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
    price: "29.99",
    regularPrice: "36.95",
    expires: "Valid everyday"
  },
  {
    id: 4,
    title: "Road Trip Bundle",
    description: "2 sandwiches, 2 bags of chips, 2 cookies, and 2 drinks",
    imagePath: "https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=800&auto=format&fit=crop",
    price: "14.99",
    regularPrice: "18.96",
    expires: "Valid through June 30, 2025"
  }
];

const happyHourItems = [
  {
    id: 1,
    title: "Corndog's",
    price: "0.99",
    description: "Available during Happy Hours on weekend from 1PM to 3PM"
  },
  {
    id: 2,
    title: "Tornados",
    price: "1.49",
    description: "Available during Happy Hours on weekend from 1PM to 3PM"
  },
  {
    id: 3,
    title: "Egg Rolls",
    price: "1.49",
    description: "Available during Happy Hours on weekend from 1PM to 3PM"
  },
  {
    id: 4,
    title: "Fountain Drinks 20 oz",
    price: "1.00",
    description: "With Deli food purchase, during Happy Hours on weekend from 1PM to 3PM"
  }
];

const Offers = () => {
  return (
    <div>
      <Hero
        title="Special Deals & Offers"
        subtitle="Save more with our combos and special offers designed for hungry travelers"
        backgroundImage="https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=1200&auto=format&fit=crop"
      />

      <section id="happy-hour" className="py-16 bg-pitstop-cream">
        <div className="container-custom">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8">
            <h2 className="text-3xl md:text-4xl font-diner text-pitstop-red mb-6 text-center">
              Happy Hours on Weekend
            </h2>
            <div className="text-center mb-6">
              <span className="bg-pitstop-darkblue text-white py-2 px-4 rounded-full font-medium">
                1PM to 3PM on Weekends
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {happyHourItems.map((item) => (
                <div key={item.id} className="bg-pitstop-lightblue/10 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-diner text-pitstop-darkblue mb-2">{item.title}</h3>
                  <p className="text-pitstop-red font-bold text-2xl mb-2">${item.price}</p>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex justify-center">
              <a href="tel:+15551234567" className="btn-primary">
                <Phone size={16} className="mr-2" /> Call to Order
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="offers" className="py-16">
        <div className="container-custom">
          <h2 className="section-title text-center">Current Promotions</h2>
          
          <div className="space-y-8 mt-10">
            {offerItems.map((offer) => (
              <div key={offer.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-pitstop-lightblue">
                <div className="md:flex h-full">
                  <div className="md:w-1/3 h-64 md:h-auto relative overflow-hidden">
                    <div className="absolute top-0 left-0 bg-pitstop-red text-white py-1 px-4 font-semibold">
                      SAVE ${(Number(offer.regularPrice) - Number(offer.price)).toFixed(2)}
                    </div>
                    <img 
                      src={offer.imagePath} 
                      alt={offer.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3 flex flex-col">
                    <h3 className="text-2xl font-diner text-pitstop-darkblue mb-2">{offer.title}</h3>
                    <p className="text-gray-600 mb-4">{offer.description}</p>
                    
                    <div className="mt-auto">
                      <div className="flex items-center gap-4 mb-4">
                        <div>
                          <span className="text-xl font-bold text-pitstop-red">${offer.price}</span>
                          <span className="text-gray-500 line-through ml-2">${offer.regularPrice}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock size={16} className="mr-1" />
                          {offer.expires}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-3">
                        <a href="tel:+15551234567" className="btn-secondary py-2 px-6 flex-1 md:flex-none">
                          <Phone size={16} className="mr-2" /> Call to Order
                        </a>
                        <a href="sms:+15551234567" className="btn-primary py-2 px-6 flex-1 md:flex-none">
                          <MessageCircle size={16} className="mr-2" /> Send the order to this number from your phone
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;
