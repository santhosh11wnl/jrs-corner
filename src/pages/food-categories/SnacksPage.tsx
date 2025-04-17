
import Hero from '../../components/Hero';
import FoodMenuItem from '../../components/FoodMenuItem';

const snackItems = [
  {
    name: "Lay's Classic",
    description: "America's favorite potato chips - perfectly crispy and salted",
    price: "1.99",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Doritos Nacho Cheese",
    description: "Bold, cheesy flavor in every crunchy triangle",
    price: "1.99",
    image: "https://images.unsplash.com/photo-1600952841320-db92ec4047ca?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Cheetos Crunchy",
    description: "Dangerously cheesy and finger-licking good",
    price: "1.99",
    image: "https://images.unsplash.com/photo-1581533940608-d2973792f168?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Fritos Original Corn Chips",
    description: "Simple, crunchy corn chips with just the right amount of salt",
    price: "1.99",
    image: "https://images.unsplash.com/photo-1613919113640-25732ec5e61f?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Ruffles Original",
    description: "Ridged potato chips perfect for dipping",
    price: "1.99",
    image: "https://images.unsplash.com/photo-1599494636225-a0656d84bce1?q=80&w=800&auto=format&fit=crop"
  }
];

const SnacksPage = () => {
  return (
    <div>
      <Hero
        title="Snacks & Chips"
        subtitle="Your favorite chips and snacks for the perfect road trip companion"
        backgroundImage="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=1200&auto=format&fit=crop"
      />
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {snackItems.map((item, index) => (
              <FoodMenuItem
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SnacksPage;
