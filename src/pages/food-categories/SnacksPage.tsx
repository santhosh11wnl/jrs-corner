
import CategoryHeader from '../../components/CategoryHeader';
import FoodMenuItem from '../../components/FoodMenuItem';

const snackItems = [
  {
    id: 1,
    title: "Crispitos",
    description: "Crispy tortilla filled with seasoned meat and cheese",
    imagePath: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=800&auto=format&fit=crop",
    price: "1.79"
  },
  {
    id: 2,
    title: "Corndog's",
    description: "Hot dog on a stick, dipped in corn batter and deep fried",
    imagePath: "https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?q=80&w=800&auto=format&fit=crop",
    price: "1.99"
  },
  {
    id: 3,
    title: "Pizza Pocket's",
    description: "Portable pizza pouch filled with cheese and toppings",
    imagePath: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
    price: "2.99"
  },
  {
    id: 4,
    title: "Pizza Stick's",
    description: "Cheesy breadsticks with marinara dipping sauce",
    imagePath: "https://images.unsplash.com/photo-1569696034145-2feeb0b23fb3?q=80&w=800&auto=format&fit=crop",
    price: "1.99"
  },
  {
    id: 5,
    title: "Chicken Wing's",
    description: "Crispy wings - individual or 6 for $6",
    imagePath: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=800&auto=format&fit=crop",
    price: "1.50"
  },
  {
    id: 6,
    title: "Meat Pie's",
    description: "Savory pastry filled with seasoned meat",
    imagePath: "https://images.unsplash.com/photo-1619740455993-9e612b1f42e3?q=80&w=800&auto=format&fit=crop",
    price: "2.29"
  },
  {
    id: 7,
    title: "Potato Wedges",
    description: "Seasoned potato wedges, crispy on the outside",
    imagePath: "https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=800&auto=format&fit=crop",
    price: "2.49"
  },
  {
    id: 8,
    title: "Sausage on a Stick",
    description: "Juicy sausage served on a convenient stick",
    imagePath: "https://images.unsplash.com/photo-1602030638412-bb8dcc0bc8b0?q=80&w=800&auto=format&fit=crop",
    price: "2.99"
  },
  {
    id: 9,
    title: "Tornados",
    description: "Rolled tortilla filled with savory ingredients",
    imagePath: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop",
    price: "1.99"
  },
  {
    id: 10,
    title: "Egg Rolls",
    description: "Crispy wrapped rolls with vegetable and meat filling",
    imagePath: "https://images.unsplash.com/photo-1568690559366-1e6171815b4b?q=80&w=800&auto=format&fit=crop",
    price: "1.19"
  },
  {
    id: 11,
    title: "Spring Rolls",
    description: "Light and crispy rolls - 3 for $2",
    imagePath: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=800&auto=format&fit=crop",
    price: "0.79"
  },
  {
    id: 12,
    title: "Cheese Sticks",
    description: "Mozzarella cheese sticks - 3 for $1.69",
    imagePath: "https://images.unsplash.com/photo-1548340748-6d98e4c1bf77?q=80&w=800&auto=format&fit=crop",
    price: "0.60"
  },
  {
    id: 13,
    title: "Kolachi",
    description: "Sweet or savory pastry filled with various ingredients",
    imagePath: "https://images.unsplash.com/photo-1568671424836-051230f50245?q=80&w=800&auto=format&fit=crop",
    price: "1.99"
  },
  {
    id: 14,
    title: "Fried Pickles",
    description: "Crispy battered pickle slices",
    imagePath: "https://images.unsplash.com/photo-1642958802055-417ae888fbe2?q=80&w=800&auto=format&fit=crop",
    price: "2.29"
  },
  {
    id: 15,
    title: "Potato Munchers",
    description: "Bite-sized potato snacks - 10 for $2.39",
    imagePath: "https://images.unsplash.com/photo-1623238913321-177e0c9152a7?q=80&w=800&auto=format&fit=crop",
    price: "2.39"
  },
  {
    id: 16,
    title: "Nacheritos",
    description: "Loaded nachos with cheese and toppings",
    imagePath: "https://images.unsplash.com/photo-1582169296194-e4d644c48063?q=80&w=800&auto=format&fit=crop",
    price: "4.99"
  }
];

const SnacksPage = () => {
  return (
    <div className="py-16">
      <div className="container-custom">
        <CategoryHeader 
          title="JR's Deli - Quick Bites and Snacks"
          description="From Crispitos to Nacheritos, we have a wide variety of snacks to satisfy any craving."
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
