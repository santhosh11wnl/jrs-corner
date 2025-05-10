
import Hero from '../../components/Hero';
import FoodMenuItem from '../../components/FoodMenuItem';

const pizzaItems = [
  {
    name: "Pepperoni Pizza",
    description: "Classic pepperoni pizza with our signature sauce and mozzarella cheese",
    price: "12.99",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Meat Lovers",
    description: "Pepperoni, ham, bacon and Italian sausage with mozzarella on our classic sauce",
    price: "14.99",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Veggie Supreme",
    description: "Mushrooms, bell peppers, onions, black olives, and tomatoes on our classic sauce",
    price: "13.99",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop"
  }
];

const PizzaPage = () => {
  return (
    <div>
      <Hero
        title="Fresh Pizza"
        subtitle="Hot and fresh pizza made to order, ready in minutes"
        backgroundImage="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200&auto=format&fit=crop"
      />
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8">
            {pizzaItems.map((item, index) => (
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

export default PizzaPage;
