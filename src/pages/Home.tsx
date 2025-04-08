
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
        ctaText="Explore Our Menu"
        ctaLink="/food"
        backgroundImage="https://images.unsplash.com/photo-1606131731446-5568d87113aa?q=80&w=1200&auto=format&fit=crop"
      />

      {/* Quick Navigation */}
      <section className="py-16 bg-pitstop-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link 
              to="/food"
              className="bg-pitstop-red p-8 rounded-xl text-center text-white hover:bg-red-700 transition-colors"
            >
              <h3 className="text-2xl font-diner mb-2">Explore Food Menu</h3>
              <p className="mb-4">Discover our delicious offerings</p>
              <ArrowRight className="mx-auto" />
            </Link>
            
            <Link 
              to="/contact"
              className="bg-pitstop-blue p-8 rounded-xl text-center text-white hover:bg-blue-700 transition-colors"
            >
              <h3 className="text-2xl font-diner mb-2">Find a Store</h3>
              <p className="mb-4">Locate your nearest PitStop Feast</p>
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

      {/* About Preview */}
      <section className="py-16 bg-pitstop-lightblue/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">The PitStop Feast Story</h2>
              <p className="text-lg mb-6">
                For over two decades, PitStop Feast has been serving hungry travelers with quality food
                and excellent service on highways across the country.
              </p>
              <p className="text-lg mb-6">
                We believe that highway food doesn't have to be boring or unhealthy. That's why
                we prepare our meals with fresh ingredients daily, ensuring you get the best quality
                food whether you're on a long road trip or just passing by.
              </p>
              <Link to="/about" className="btn-secondary">
                Learn More About Us
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop" 
                alt="PitStop Feast Store" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
