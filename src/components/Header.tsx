import React, { useState } from "react";
import {
  ShoppingCart,
  Leaf,
  Menu,
  X,
  Phone,
  Info,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const { getItemCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const itemCount = getItemCount();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: Leaf },
    { name: "About", path: "/about", icon: Info },
    { name: "Contact", path: "/contact", icon: Phone },
    { name: "FAQ", path: "/faq", icon: HelpCircle },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  // Variants
  const headerVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white shadow-soft sticky top-0 z-50 border-b border-fresh-green-light/20"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => navigate("/")}
          >
            <motion.div
              initial={{ rotate: -20, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="p-2 bg-gradient-fresh rounded-xl group-hover:scale-110 transition-transform duration-300"
            >
              <Leaf className="h-6 w-6 md:h-7 md:w-7 text-white" />
            </motion.div>
            <div>
              <h1 className="text-xl md:text-2xl font-heading font-bold text-fresh-green">
                FreshMart
              </h1>
              <p className="text-xs md:text-sm text-neutral-gray font-body hidden sm:block">
                Farm Fresh Groceries
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <motion.button
                key={item.path}
                onClick={() => navigate(item.path)}
                custom={i}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-body font-medium transition-all duration-300 hover:bg-fresh-green-light/20 ${
                  isActivePath(item.path)
                    ? "text-fresh-green bg-fresh-green-light/30"
                    : "text-neutral-gray hover:text-fresh-green"
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </motion.button>
            ))}
          </nav>

          {/* Cart and Menu */}
          <div className="flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                onClick={() => navigate("/cart")}
                className="relative border-fresh-green text-fresh-green hover:bg-fresh-green hover:text-white transition-all duration-300 shadow-soft hover:shadow-button"
              >
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="absolute -top-2 -right-2 bg-meat-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-body font-medium"
                  >
                    {itemCount}
                  </motion.span>
                )}
                <span className="ml-2 font-body hidden sm:inline">Cart</span>
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden border-fresh-green text-fresh-green hover:bg-fresh-green hover:text-white"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Slide Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Background overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black z-40 lg:hidden"
                onClick={() => setIsMenuOpen(false)}
              />
              {/* Slide menu */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.4 }}
                className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-50 lg:hidden"
              >
                <div className="flex justify-between items-center px-4 py-4 border-b border-fresh-green-light/20">
                  <h2 className="font-heading font-bold text-fresh-green text-lg">Menu</h2>
                  <Button
                    variant="ghost"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-fresh-green"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <nav className="flex flex-col space-y-2 p-4">
                  {navItems.map((item, i) => (
                    <motion.button
                      key={item.path}
                      custom={i}
                      variants={navItemVariants}
                      initial="hidden"
                      animate="visible"
                      onClick={() => {
                        navigate(item.path);
                        setIsMenuOpen(false);
                      }}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-body font-medium transition-all duration-300 text-left ${
                        isActivePath(item.path)
                          ? "text-fresh-green bg-fresh-green-light/30"
                          : "text-neutral-gray hover:text-fresh-green hover:bg-fresh-green-light/20"
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </motion.button>
                  ))}
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
