
import Hero from '../../components/Hero';
import FoodMenuItem from '../../components/FoodMenuItem';

const breakfastItems = [
  {
    name: "Breakfast Burrito",
    description: "Scrambled eggs, cheese, potatoes, and your choice of bacon or sausage wrapped in a flour tortilla",
    price: "4.99",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e7d48?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Breakfast Sandwich",
    description: "Egg and cheese with your choice of bacon, sausage, or ham on a toasted English muffin",
    price: "3.99",
    image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Pancake Stack",
    description: "Three fluffy pancakes served with butter and maple syrup",
    price: "5.99",
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Breakfast Platter",
    description: "Two eggs any style, choice of meat, hash browns, and toast",
    price: "7.99",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=800&auto=format&fit=crop"
  }
];

const BreakfastPage = () => {
  return (
    <div>
      <Hero
        title="Breakfast Menu"
        subtitle="Start your day right with our delicious breakfast options"
        backgroundImage="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=1200&auto=format&fit=crop"
      />
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8">
            {breakfastItems.map((item, index) => (
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

export default BreakfastPage;
