
import { Phone, MessageCircle } from 'lucide-react';

interface DrinkMenuItemProps {
  title: string;
  description: string;
  imagePath: string;
  price?: string;
}

const DrinkMenuItem = ({ title, description, imagePath, price }: DrinkMenuItemProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="md:flex h-full">
        <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
          <img 
            src={imagePath} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="p-4 md:w-2/3 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-diner text-pitstop-darkblue">{title}</h3>
              {price && (
                <span className="bg-pitstop-red text-white px-2 py-1 rounded font-medium text-sm">
                  ${price}
                </span>
              )}
            </div>
            <p className="text-gray-600 mt-2">{description}</p>
            {title === "Fountain Drinks 20 oz" && (
              <p className="text-pitstop-red mt-2 font-medium">Special: $1.00 with Deli food during Happy Hours!</p>
            )}
          </div>
          
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="tel:+15551234567" className="btn-secondary py-1.5 px-4 text-sm flex-1 md:flex-none">
              <Phone size={16} className="mr-2" /> Call Now
            </a>
            <a href="https://wa.me/15551234567" className="btn-primary py-1.5 px-4 text-sm flex-1 md:flex-none">
              <MessageCircle size={16} className="mr-2" /> Message Restaurant
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkMenuItem;
