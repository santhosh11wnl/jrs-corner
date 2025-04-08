
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FoodCardProps {
  title: string;
  description: string;
  imagePath: string;
  link: string;
  large?: boolean;
}

const FoodCard = ({ title, description, imagePath, link, large = false }: FoodCardProps) => {
  return (
    <div className={`food-card ${large ? '' : ''}`}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imagePath} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-diner text-pitstop-darkblue mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <Link 
          to={link} 
          className="text-pitstop-red font-medium flex items-center hover:underline mt-auto"
        >
          Explore Now <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;
