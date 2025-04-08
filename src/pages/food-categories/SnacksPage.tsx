
import CategoryHeader from '../../components/CategoryHeader';
import FoodMenuItem from '../../components/FoodMenuItem';

const snackItems = [
  {
    id: 1,
    title: "Nachos with Cheese",
    description: "Crispy tortilla chips served with warm, gooey cheese sauce - the perfect roadtrip snack",
    imagePath: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=800&auto=format&fit=crop",
    price: "4.99"
  },
  {
    id: 2,
    title: "Popcorn",
    description: "Fresh and fluffy popcorn, lightly salted - perfect for a movie break during your journey",
    imagePath: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?q=80&w=800&auto=format&fit=crop",
    price: "3.49"
  },
  {
    id: 3,
    title: "Kettle Chips - Spicy Jalapeño",
    description: "Crunchy kettle-cooked chips with a kick of jalapeño flavor",
    imagePath: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=800&auto=format&fit=crop",
    price: "2.99"
  },
  {
    id: 4,
    title: "Cheeze Puffs",
    description: "Light, airy cheese puffs that melt in your mouth with intense cheese flavor",
    imagePath: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=800&auto=format&fit=crop",
    price: "2.99"
  },
  {
    id: 5,
    title: "Fiery Hot Potato Chips",
    description: "Thin-sliced potato chips with a spicy kick that will wake up your taste buds",
    imagePath: "https://images.unsplash.com/photo-1613919113640-25732ec5e61f?q=80&w=800&auto=format&fit=crop",
    price: "2.99"
  }
];

const SnacksPage = () => {
  return (
    <div className="py-16">
      <div className="container-custom">
        <CategoryHeader 
          title="Quick Bites for Anytime Cravings"
          description="Perfect snacks to enjoy on the road or whenever you need a little something to tide you over."
        />
        
        <div className="space-y-8">
          {snackItems.map((item) => (
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

export default SnacksPage;
