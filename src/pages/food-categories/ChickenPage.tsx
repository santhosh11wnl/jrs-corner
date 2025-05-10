
import Hero from '../../components/Hero';
import FoodMenuItem from '../../components/FoodMenuItem';

const chickenItems = [
  {
    name: "Fried Chicken Basket",
    description: "4 pieces of our crispy fried chicken with a side of fries",
    price: "8.99",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Chicken Tenders",
    description: "5 breaded chicken tenders with your choice of dipping sauce",
    price: "7.99",
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Buffalo Wings",
    description: "8 spicy buffalo wings served with ranch or blue cheese dressing",
    price: "9.99",
    image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?q=80&w=800&auto=format&fit=crop"
  }
];

const ChickenPage = () => {
  return (
    <div>
      <Hero
        title="Fried Chicken"
        subtitle="Crispy, juicy fried chicken that hits the spot every time"
        backgroundImage="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=1200&auto=format&fit=crop"
      />
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8">
            {chickenItems.map((item, index) => (
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

export default ChickenPage;
