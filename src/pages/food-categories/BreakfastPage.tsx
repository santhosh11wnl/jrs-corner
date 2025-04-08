
import CategoryHeader from '../../components/CategoryHeader';
import FoodMenuItem from '../../components/FoodMenuItem';
import { Clock } from 'lucide-react';

const breakfastItems = [
  {
    id: 1,
    title: "Breakfast Bar's",
    description: "Convenient and filling breakfast bars to start your day",
    imagePath: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop",
    price: "1.79"
  },
  {
    id: 2,
    title: "Breakfast Sandwiches",
    description: "Delicious sandwiches with egg, cheese, and your choice of meat",
    imagePath: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop",
    price: "3.99"
  },
  {
    id: 3,
    title: "Breakfast Biscuit",
    description: "Flaky biscuit filled with breakfast favorites",
    imagePath: "https://images.unsplash.com/photo-1590574783916-eb7eb0b38258?q=80&w=800&auto=format&fit=crop",
    price: "3.99"
  },
  {
    id: 4,
    title: "Breakfast Burrito",
    description: "Hearty breakfast wrapped in a warm tortilla",
    imagePath: "https://images.unsplash.com/photo-1588614959060-4d144f28b207?q=80&w=800&auto=format&fit=crop",
    price: "4.99"
  },
  {
    id: 5,
    title: "Stuffed Waffle",
    description: "Waffle filled with sweet or savory ingredients",
    imagePath: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=800&auto=format&fit=crop",
    price: "3.99"
  }
];

const BreakfastPage = () => {
  return (
    <div className="py-16">
      <div className="container-custom">
        <CategoryHeader 
          title="Start Your Day Deliciously"
          description="Breakfast options to fuel your morning journey, available from 6 AM - 11 AM daily."
        />
        
        <div className="bg-pitstop-red/10 rounded-lg p-4 mb-8 flex items-center">
          <Clock className="mr-2 text-pitstop-red" size={20} />
          <p className="text-pitstop-darkblue font-medium">
            Breakfast items available from 6 AM – 11 AM daily
          </p>
        </div>
        
        <div className="space-y-8">
          {breakfastItems.map((item) => (
            <FoodMenuItem 
              key={item.id}
              title={item.title}
              description={item.description}
              imagePath={item.imagePath}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreakfastPage;
