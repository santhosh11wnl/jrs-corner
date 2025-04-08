
import CategoryHeader from '../../components/CategoryHeader';
import FoodMenuItem from '../../components/FoodMenuItem';

const pizzaItems = [
  {
    id: 1,
    title: "Pepperoni Pizza",
    description: "Classic pizza topped with pepperoni slices, mozzarella cheese, and our signature tomato sauce on a crispy crust",
    imagePath: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop",
    price: "7.99"
  },
  {
    id: 2,
    title: "Cheese Pizza",
    description: "Traditional pizza with a blend of mozzarella, cheddar, and parmesan cheeses on our house-made tomato sauce and fresh dough",
    imagePath: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
    price: "6.99"
  },
  {
    id: 3,
    title: "Veggie Pizza",
    description: "Loaded with assorted vegetables including bell peppers, onions, mushrooms, and olives for a healthier option",
    imagePath: "https://images.unsplash.com/photo-1511689660979-10e8c8c3b389?q=80&w=800&auto=format&fit=crop",
    price: "8.49"
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
