
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FoodLanding from "./pages/FoodLanding";
import PizzaPage from "./pages/food-categories/PizzaPage";
import ChickenPage from "./pages/food-categories/ChickenPage";
import SnacksPage from "./pages/food-categories/SnacksPage";
import BreakfastPage from "./pages/food-categories/BreakfastPage";
import BakeryPage from "./pages/food-categories/BakeryPage";
import Offers from "./pages/Offers";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

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
              <Route path="/food/pizza" element={<PizzaPage />} />
              <Route path="/food/chicken" element={<ChickenPage />} />
              <Route path="/food/snacks" element={<SnacksPage />} />
              <Route path="/food/breakfast" element={<BreakfastPage />} />
              <Route path="/food/bakery" element={<BakeryPage />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
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
