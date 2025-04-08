
import Hero from '../components/Hero';
import DrinkMenuItem from '../components/DrinkMenuItem';
import { Coffee, Droplet, Beer, Zap, GlassWater } from 'lucide-react';

const drinksData = [
  {
    id: 1,
    title: "Slurpee® Drinks",
    description: "Iconic frozen beverages in fruity flavors",
    imagePath: "https://images.unsplash.com/photo-1605400752259-fd1853a8ec25?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Big Gulp® Beverages",
    description: "Oversized soft drinks with all your faves",
    imagePath: "https://images.unsplash.com/photo-1527960392543-80cd0fa46896?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Freshly Brewed Coffee",
    description: "Hot, bold, and brewed fresh all day",
    imagePath: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Energy Drinks",
    description: "Brands: Red Bull, Monster, 7-Select",
    imagePath: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Juices",
    description: "Options like orange, apple, mixed berry",
    imagePath: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Iced Teas",
    description: "Sweetened and unsweetened varieties",
    imagePath: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Bottled Water",
    description: "Stay refreshed with clean, chilled hydration",
    imagePath: "https://images.unsplash.com/photo-1564419320461-6870880221ad?q=80&w=800&auto=format&fit=crop",
  }
];

const DrinksLanding = () => {
  return (
    <div>
      <Hero
        title="Cool, Hot, Fizzy or Sweet — Refreshment for Everyone"
        subtitle="From frozen treats to fresh coffee, we've got refreshing beverages for every taste and occasion"
        ctaText="Explore Our Drinks"
        ctaLink="#drinks"
        backgroundImage="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200&auto=format&fit=crop"
      />

      <section id="drinks" className="py-16">
        <div className="container-custom">
          <h2 className="section-title text-center">Our Drinks Menu</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {drinksData.map((drink) => (
              <DrinkMenuItem
                key={drink.id}
                title={drink.title}
                description={drink.description}
                imagePath={drink.imagePath}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-pitstop-cream">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Drink Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-pitstop-lightblue/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <GlassWater className="text-pitstop-blue" size={24} />
              </div>
              <h3 className="font-diner text-xl mb-2">Cold Drinks</h3>
              <p className="text-gray-600">Refreshing beverages for hot days</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-pitstop-lightblue/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Coffee className="text-pitstop-blue" size={24} />
              </div>
              <h3 className="font-diner text-xl mb-2">Hot Drinks</h3>
              <p className="text-gray-600">Warming beverages for cold days</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-pitstop-lightblue/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Beer className="text-pitstop-blue" size={24} />
              </div>
              <h3 className="font-diner text-xl mb-2">Slushies</h3>
              <p className="text-gray-600">Frozen treats in multiple flavors</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-pitstop-lightblue/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="text-pitstop-blue" size={24} />
              </div>
              <h3 className="font-diner text-xl mb-2">Energy</h3>
              <p className="text-gray-600">Get the boost you need</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-pitstop-lightblue/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Droplet className="text-pitstop-blue" size={24} />
              </div>
              <h3 className="font-diner text-xl mb-2">Water</h3>
              <p className="text-gray-600">Stay hydrated on the go</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DrinksLanding;
