
import { Phone, MessageCircle } from 'lucide-react';

interface FoodMenuItemProps {
  name: string;
  description: string;
  image: string;
  price?: string;
}

const FoodMenuItem = ({ name, description, image, price }: FoodMenuItemProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="md:flex h-full">
        <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-48 md:h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="p-4 md:w-2/3 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-diner text-pitstop-darkblue">{name}</h3>
              {price && (
                <span className="bg-pitstop-red text-white px-2 py-1 rounded font-medium text-sm">
                  ${price}
                </span>
              )}
            </div>
            <p className="text-gray-600 mt-2">{description}</p>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="tel:+15802267925" className="btn-secondary py-1.5 px-4 text-sm flex-1 md:flex-none">
              <Phone size={16} className="mr-2" /> Call Now
            </a>
            <a href="sms:+15802267925" className="btn-primary py-1.5 px-4 text-sm flex-1 md:flex-none">
              <MessageCircle size={16} className="mr-2" /> Send the order to this number from your phone
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodMenuItem;
