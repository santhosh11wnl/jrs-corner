
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
  overlayColor?: string;
}

const Hero = ({ 
  title, 
  subtitle, 
  ctaText, 
  ctaLink, 
  backgroundImage,
  overlayColor = 'bg-black/50'
}: HeroProps) => {
  return (
    <div className="relative h-[500px] md:h-[600px] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className={`absolute inset-0 ${overlayColor} z-10`}></div>
      
      <div className="container-custom relative z-20 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-diner mb-4 drop-shadow-lg">
            {title}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-pitstop-cream">
            {subtitle}
          </p>
          <Link
            to={ctaLink}
            className="btn-primary text-lg"
          >
            {ctaText}
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
