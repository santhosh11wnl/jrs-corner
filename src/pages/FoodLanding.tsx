
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import FoodCard from '../components/FoodCard';
import { Menu } from 'lucide-react';

const foodCategories = [
  {
    id: 1,
    title: "Pizza",
    description: "Hot, cheesy, and loaded with flavors - our pizzas are made fresh and ready in minutes",
    imagePath: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop",
    link: "/food/pizza"
  },
  {
    id: 2,
    title: "Chicken",
    description: "Crispy, juicy, and finger-lickin' good! From wings to sandwiches, our chicken is always a hit",
    imagePath: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=800&auto=format&fit=crop",
    link: "/food/chicken"
  },
  {
    id: 4,
    title: "Breakfast",
    description: "Start your day deliciously with our breakfast options available from 6 AM - 11 AM",
    imagePath: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop",
    link: "/food/breakfast"
  },
  {
    id: 5,
    title: "Bakery",
    description: "Freshly baked, always tasty treats - from donuts to cookies, perfect with coffee",
    imagePath: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=800&auto=format&fit=crop",
    link: "/food/bakery"
  }
];

const FoodLanding = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="JR's Deli - Delicious, Ready-to-Go Food"
        subtitle="Quality ingredients, freshly prepared meals, and quick service to get you back on the road"
        backgroundImage="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop"
      />

      {/* Food Categories */}
      <section id="categories" className="py-16">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="section-title">Our Food Categories</h2>
            <Link 
              to="/full-menu" 
              className="btn-primary flex items-center"
            >
              <Menu size={18} className="mr-2" /> View Full Menu
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {foodCategories.map((category) => (
              <FoodCard
                key={category.id}
                title={category.title}
                description={category.description}
                imagePath={category.imagePath}
                link={category.link}
                large={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Special Deals Preview */}
      <section className="py-16 bg-pitstop-cream">
        <div className="container-custom">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-diner text-pitstop-red mb-4">
                  Weekend Happy Hours
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Join us on weekends from 1 PM to 3 PM for special deals on Corndogs, Tornados, Egg Rolls, and Fountain Drinks!
                </p>
                <Link to="/offers" className="btn-primary self-start">
                  View Happy Hour Deals
                </Link>
              </div>
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <img 
                  src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=800&auto=format&fit=crop" 
                  alt="Happy Hour Deals" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodLanding;
