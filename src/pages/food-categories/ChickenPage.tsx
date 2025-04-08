
import CategoryHeader from '../../components/CategoryHeader';
import FoodMenuItem from '../../components/FoodMenuItem';

const chickenItems = [
  {
    id: 1,
    title: "Chicken Wings",
    description: "Juicy, all-white meat wings tossed in your choice of sauce: BBQ, Buffalo, or Plain",
    imagePath: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=800&auto=format&fit=crop",
    price: "7.99"
  },
  {
    id: 2,
    title: "Spicy Chicken Wings",
    description: "For heat lovers - our wings tossed in a fiery sauce that brings the perfect level of spice",
    imagePath: "https://images.unsplash.com/photo-1608039755401-742074f0548d?q=80&w=800&auto=format&fit=crop",
    price: "8.49"
  },
  {
    id: 3,
    title: "Chicken Sandwich",
    description: "Crispy chicken fillet with lettuce, tomato, and mayo in a soft bun. Perfect for a quick meal",
    imagePath: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=800&auto=format&fit=crop",
    price: "6.99"
  },
  {
    id: 4,
    title: "Chicken Pops",
    description: "Bite-sized and crunchy chicken pieces - perfect for sharing or as a quick snack",
    imagePath: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800&auto=format&fit=crop",
    price: "5.49"
  }
];

const ChickenPage = () => {
  return (
    <div className="py-16">
      <div className="container-custom">
        <CategoryHeader 
          title="Crispy, Juicy, and Finger-Lickin' Good!"
          description="From wings to sandwiches, our chicken options are sure to satisfy your cravings."
        />
        
        <div className="space-y-8">
          {chickenItems.map((item) => (
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

export default ChickenPage;
