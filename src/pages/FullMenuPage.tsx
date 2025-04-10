
import Hero from '../components/Hero';
import { Clock } from 'lucide-react';

const FullMenuPage = () => {
  return (
    <div>
      <Hero
        title="JR's Deli - Full Menu"
        subtitle="Explore our complete menu of delicious food and drink options"
        backgroundImage="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop"
      />

      <section id="menu" className="py-16">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">JR'S DELI MENU</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-diner text-pitstop-red mb-6">Snacks & Small Bites</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Crispitos</span>
                  <span className="text-pitstop-red font-bold">$1.79</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">BBQ Burrito</span>
                  <span className="text-pitstop-red font-bold">$1.99</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Chili Cheese</span>
                  <span className="text-pitstop-red font-bold">$1.99</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Beef & Bean</span>
                  <span className="text-pitstop-red font-bold">$1.99</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Chicken Strip's</span>
                  <span className="text-pitstop-red font-bold">$2.00 each, 3 for $5</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Potato Munchers</span>
                  <span className="text-pitstop-red font-bold">10 for $2.39</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Corndog's</span>
                  <span className="text-pitstop-red font-bold">$1.99</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Pizza Pocket's</span>
                  <span className="text-pitstop-red font-bold">$2.99</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Pizza Stick's</span>
                  <span className="text-pitstop-red font-bold">$1.99</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Chicken Wing's</span>
                  <span className="text-pitstop-red font-bold">$1.50 or 6 for $6</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Meat Pie's</span>
                  <span className="text-pitstop-red font-bold">$2.29</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Potato Wedges</span>
                  <span className="text-pitstop-red font-bold">$2.49 an order</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Sausage on a Stick</span>
                  <span className="text-pitstop-red font-bold">$2.99</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Tornados</span>
                  <span className="text-pitstop-red font-bold">$1.99</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Egg Rolls</span>
                  <span className="text-pitstop-red font-bold">$1.19</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Spring rolls</span>
                  <span className="text-pitstop-red font-bold">79¢ each, 3 for $2</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Cheese sticks</span>
                  <span className="text-pitstop-red font-bold">3 for $1.69</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Kolachi</span>
                  <span className="text-pitstop-red font-bold">$1.99</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Fried pickles</span>
                  <span className="text-pitstop-red font-bold">$2.29 an order</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-diner text-pitstop-red mb-6">Breakfast & Main Dishes</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Breakfast Bar's</span>
                  <span className="text-pitstop-red font-bold">$1.79</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Breakfast Sandwiches</span>
                  <span className="text-pitstop-red font-bold">$3.99</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Breakfast Biscuit</span>
                  <span className="text-pitstop-red font-bold">$3.99</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Mini Taco</span>
                  <span className="text-pitstop-red font-bold">$6.99</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Mini Burritos</span>
                  <span className="text-pitstop-red font-bold">$6.99</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">BBQ Sandwich</span>
                  <span className="text-pitstop-red font-bold">$4.99</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Chicken Sandwich</span>
                  <span className="text-pitstop-red font-bold">$4.99</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Nacheritos</span>
                  <span className="text-pitstop-red font-bold">$4.99</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Stuffed waffle</span>
                  <span className="text-pitstop-red font-bold">$3.99</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Breakfast burrito</span>
                  <span className="text-pitstop-red font-bold">$4.99</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Pizza</span>
                  <span className="text-pitstop-red font-bold">$3.99, 2 for $6.49</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Chicken Sandwich, Fries, 20 oz Fountain drink</span>
                  <span className="text-pitstop-red font-bold">$8.99</span>
                </li>
              </ul>

              <h3 className="text-2xl font-diner text-pitstop-red mb-6 mt-12">Happy Hours on Weekend</h3>
              <div className="bg-pitstop-red/10 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <Clock className="mr-2 text-pitstop-red" size={20} />
                  <p className="font-bold">1 PM to 3 PM on Weekends</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Corndog's</span>
                    <span className="font-bold">$0.99</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Tornados</span>
                    <span className="font-bold">$1.49</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Egg Rolls</span>
                    <span className="font-bold">$1.49</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Fountain Drinks 20 oz with Deli food</span>
                    <span className="font-bold">$1.00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FullMenuPage;
