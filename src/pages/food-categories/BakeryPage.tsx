
import CategoryHeader from '../../components/CategoryHeader';
import FoodMenuItem from '../../components/FoodMenuItem';

const bakeryItems = [
  {
    id: 1,
    title: "Donuts",
    description: "Assorted flavors including glazed, chocolate, and sprinkled - baked fresh daily",
    imagePath: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop",
    price: "1.49"
  },
  {
    id: 2,
    title: "Muffins",
    description: "Choose from blueberry, chocolate chip, or bran - perfect with coffee or tea",
    imagePath: "https://images.unsplash.com/photo-1607958996333-41215ca520e2?q=80&w=800&auto=format&fit=crop",
    price: "2.49"
  },
  {
    id: 3,
    title: "Croissants",
    description: "Buttery and soft with a flaky exterior - plain or chocolate-filled options available",
    imagePath: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop",
    price: "2.99"
  },
  {
    id: 4,
    title: "Brownies",
    description: "Rich and fudgy chocolate brownies with a perfectly crisp top",
    imagePath: "https://images.unsplash.com/photo-1589375890993-7b4d5cd8cea3?q=80&w=800&auto=format&fit=crop",
    price: "2.99"
  },
  {
    id: 5,
    title: "Cookies",
    description: "Choose from chocolate chip, oatmeal raisin, or sugar cookies - baked to perfection",
    imagePath: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=800&auto=format&fit=crop",
    price: "1.99"
  }
];

const BakeryPage = () => {
  return (
    <div className="py-16">
      <div className="container-custom">
        <CategoryHeader 
          title="Freshly Baked, Always Tasty"
          description="Our bakery items are made fresh daily. Perfect with coffee or as a sweet treat anytime!"
        />
        
        <div className="space-y-8">
          {bakeryItems.map((item) => (
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

export default BakeryPage;
