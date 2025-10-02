import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrolltoTop";
import { AnimatePresence, motion } from "framer-motion";

const queryClient = new QueryClient();

// ✅ Create a wrapper to handle AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation();

  const pageTransition = {
    initial:{ opacity: 0, filter : 'blur(10px)' },
    animate :{ opacity: 1, filter: 'blur(0px)' },
    exit :{ opacity: 0, filter: 'blur(10px)' },
    transition: { duration: 0.8 }
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div {...pageTransition}>
              <Index />
            </motion.div>
          }
        />
        <Route
          path="/cart"
          element={
            <motion.div {...pageTransition}>
              <Cart />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div {...pageTransition}>
              <About />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div {...pageTransition}>
              <Contact />
            </motion.div>
          }
        />
        <Route
          path="/faq"
          element={
            <motion.div {...pageTransition}>
              <FAQ />
            </motion.div>
          }
        />
        <Route
          path="/privacy"
          element={
            <motion.div {...pageTransition}>
              <Privacy />
            </motion.div>
          }
        />
        <Route
          path="/terms"
          element={
            <motion.div {...pageTransition}>
              <Terms />
            </motion.div>
          }
        />
        <Route
          path="*"
          element={
            <motion.div {...pageTransition}>
              <NotFound />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
