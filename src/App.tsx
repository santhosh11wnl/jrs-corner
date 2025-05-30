import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FoodLanding from "./pages/FoodLanding";
import DrinksLanding from "./pages/DrinksLanding";
import PizzaPage from "./pages/food-categories/PizzaPage";
import ChickenPage from "./pages/food-categories/ChickenPage";
import BreakfastPage from "./pages/food-categories/BreakfastPage";
import BakeryPage from "./pages/food-categories/BakeryPage";
import Offers from "./pages/Offers";
import StoreAmenities from "./pages/StoreAmenities";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import FullMenuPage from "./pages/FullMenuPage";
import FacebookAssets from "./components/FacebookAssets";
import SnacksPage from "./pages/food-categories/SnacksPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/food" element={<FoodLanding />} />
              <Route path="/drinks" element={<DrinksLanding />} />
              <Route path="/food/pizza" element={<PizzaPage />} />
              <Route path="/food/chicken" element={<ChickenPage />} />
              <Route path="/food/snacks" element={<SnacksPage />} />
              <Route path="/food/breakfast" element={<BreakfastPage />} />
              <Route path="/food/bakery" element={<BakeryPage />} />
              <Route path="/full-menu" element={<FullMenuPage />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/store-amenities" element={<StoreAmenities />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/facebook-assets" element={<FacebookAssets />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
