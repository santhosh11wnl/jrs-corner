
import Hero from '../../components/Hero';
import FoodMenuItem from '../../components/FoodMenuItem';

const bakeryItems = [
  {
    name: "Glazed Donut",
    description: "Classic glazed donut, made fresh daily",
    price: "1.49",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Chocolate Muffin",
    description: "Rich chocolate muffin with chocolate chips",
    price: "2.49",
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Blueberry Muffin",
    description: "Moist muffin packed with juicy blueberries",
    price: "2.49",
    image: "https://images.unsplash.com/photo-1599934555255-d363ddb32e1c?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Cinnamon Roll",
    description: "Warm cinnamon roll with sweet icing",
    price: "2.99",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=800&auto=format&fit=crop"
  }
];

const BakeryPage = () => {
  return (
    <div>
      <Hero
        title="Fresh Bakery"
        subtitle="Freshly baked goods made daily, perfect for any time of day"
        backgroundImage="https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?q=80&w=1200&auto=format&fit=crop"
      />
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8">
            {bakeryItems.map((item, index) => (
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

export default BakeryPage;
