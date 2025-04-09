
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import FoodCard from '../components/FoodCard';
import { ArrowRight } from 'lucide-react';

const topPicksOfDay = [
  {
    id: 1,
    title: "Pepperoni Pizza",
    description: "Hot and fresh pepperoni pizza ready in minutes",
    imagePath: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop",
    link: "/food/pizza"
  },
  {
    id: 2,
    title: "Chicken Wings",
    description: "Crispy and juicy wings with your choice of sauce",
    imagePath: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=800&auto=format&fit=crop",
    link: "/food/chicken"
  },
  {
    id: 3,
    title: "Breakfast Burrito",
    description: "Start your day with our hearty breakfast burrito",
    imagePath: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop",
    link: "/food/breakfast"
  }
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Fuel Your Journey, Satisfy Your Hunger"
        subtitle="Delicious food and quality fuel for travelers on the go. Stop by for a quick bite or a full meal at any of our convenient highway locations."
        backgroundImage="https://images.unsplash.com/photo-1606131731446-5568d87113aa?q=80&w=1200&auto=format&fit=crop"
      />

      {/* Quick Navigation */}
      <section className="py-16 bg-pitstop-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Link 
              to="/food"
              className="bg-pitstop-red p-8 rounded-xl text-center text-white hover:bg-red-700 transition-colors"
            >
              <h3 className="text-2xl font-diner mb-2">Food Menu</h3>
              <p className="mb-4">Discover our delicious offerings</p>
              <ArrowRight className="mx-auto" />
            </Link>
            
            <Link 
              to="/drinks"
              className="bg-pitstop-blue p-8 rounded-xl text-center text-white hover:bg-blue-700 transition-colors"
            >
              <h3 className="text-2xl font-diner mb-2">Drinks Menu</h3>
              <p className="mb-4">Refresh with our beverage selection</p>
              <ArrowRight className="mx-auto" />
            </Link>
            
            <Link 
              to="/store-amenities"
              className="bg-pitstop-blue p-8 rounded-xl text-center text-white hover:bg-blue-700 transition-colors"
            >
              <h3 className="text-2xl font-diner mb-2">Store Amenities</h3>
              <p className="mb-4">Explore our store features</p>
              <ArrowRight className="mx-auto" />
            </Link>
            
            <Link 
              to="/offers"
              className="bg-pitstop-darkblue p-8 rounded-xl text-center text-white hover:bg-blue-900 transition-colors"
            >
              <h3 className="text-2xl font-diner mb-2">Special Offers</h3>
              <p className="mb-4">Check out our latest deals</p>
              <ArrowRight className="mx-auto" />
            </Link>
          </div>
        </div>
      </section>

      {/* Top Picks of the Day */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title text-center">Top Picks of the Day</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topPicksOfDay.map((item) => (
              <FoodCard
                key={item.id}
                title={item.title}
                description={item.description}
                imagePath={item.imagePath}
                link={item.link}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/food" className="btn-primary">
              View Full Menu <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
