
import CategoryHeader from '../../components/CategoryHeader';
import FoodMenuItem from '../../components/FoodMenuItem';

const pizzaItems = [
  {
    id: 1,
    title: "Pizza",
    description: "Our delicious pizza with a variety of toppings - $3.99 each or 2 for $6.49",
    imagePath: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop",
    price: "3.99"
  },
  {
    id: 2,
    title: "Pizza Pocket's",
    description: "Portable pizza pouch filled with cheese and toppings",
    imagePath: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
    price: "2.99"
  },
  {
    id: 3,
    title: "Pizza Stick's",
    description: "Cheesy breadsticks with marinara dipping sauce",
    imagePath: "https://images.unsplash.com/photo-1511689660979-10e8c8c3b389?q=80&w=800&auto=format&fit=crop",
    price: "1.99"
  }
];

const PizzaPage = () => {
  return (
    <div className="py-16">
      <div className="container-custom">
        <CategoryHeader 
          title="Hot. Cheesy. Loaded with Flavor."
          description="Our pizzas are made with quality ingredients and baked fresh. Ready to satisfy your pizza cravings on the go."
        />
        
        <div className="space-y-8">
          {pizzaItems.map((item) => (
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

export default PizzaPage;
