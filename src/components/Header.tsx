import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Badge } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import CartItem from "./CartItem";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartItemsCount = cart.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold tracking-tight text-foreground flex items-center"
            >
              <span className="text-leaf mr-1">Harvest</span>
              <span>Mart</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <ThemeToggle />

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="relative button-hover border-none"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {cartItemsCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-leaf text-white">
                      {cartItemsCount}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md p-0 border-l">
                <div className="flex flex-col h-full">
                  <div className="p-4 border-b">
                    <h2 className="text-lg font-semibold">Your Cart</h2>
                  </div>

                  <div className="flex-1 overflow-auto px-4 py-2">
                    {cart.items.length === 0 ? (
                      <div className="flex flex-col items-center justify-center h-64 text-center">
                        <ShoppingCart className="h-12 w-12 text-muted-foreground mb-4" />
                        <h3 className="text-lg font-medium">
                          Your cart is empty
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Add some fresh items to get started
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4 mt-2">
                        {cart.items.map((item) => (
                          <CartItem key={item.id} item={item} />
                        ))}
                      </div>
                    )}
                  </div>

                  {cart.items.length > 0 && (
                    <div className="border-t p-4 bg-secondary/50">
                      <div className="flex justify-between mb-4">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="font-medium">
                          ${totalPrice.toFixed(2)}
                        </span>
                      </div>
                      <Button className="w-full bg-leaf hover:bg-leaf/90 text-leaf-foreground">
                        Checkout
                      </Button>
                      <Link to="/cart">
                        <Button variant="outline" className="w-full mt-2">
                          View Cart
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>

            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden animate-fade-in bg-background border-b">
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              to="/"
              className="text-foreground/80 hover:text-foreground transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-foreground/80 hover:text-foreground transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="text-foreground/80 hover:text-foreground transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-foreground/80 hover:text-foreground transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
