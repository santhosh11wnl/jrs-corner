
import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  overlayColor?: string;
  ctaText?: string;
  ctaLink?: string;
}

const Hero = ({ 
  title, 
  subtitle, 
  backgroundImage,
  overlayColor = 'bg-black/50',
  ctaText,
  ctaLink
}: HeroProps) => {
  return (
    <div className="relative h-[400px] md:h-[500px] flex items-center">
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
          {ctaText && ctaLink && (
            <a 
              href={ctaLink}
              className="btn-primary"
            >
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
