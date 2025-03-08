import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { clearCart } from "../store/cartSlice";
import { Button } from "@components/ui/button";
import { ShoppingBag, ArrowLeft, Trash2 } from "lucide-react";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const totalItems = cart.items.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const subtotal = cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (cart.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <div className="h-24 w-24 mx-auto bg-secondary/50 rounded-full flex items-center justify-center mb-6">
            <ShoppingBag className="h-12 w-12 text-muted-foreground" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link to="/">
            <Button className="bg-leaf hover:bg-leaf/90 text-white">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Shopping Cart</h1>
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground"
          onClick={handleClearCart}
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Clear Cart
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {cart.items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-8">
            <Link to="/">
              <Button variant="outline" className="group">
                <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-secondary/30 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <div className="space-y-3 border-b border-border pb-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  Subtotal ({totalItems} items)
                </span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                {shipping === 0 ? (
                  <span className="text-leaf">Free</span>
                ) : (
                  <span>${shipping.toFixed(2)}</span>
                )}
              </div>

              {shipping > 0 && (
                <div className="text-sm text-muted-foreground">
                  Spend ${(50 - subtotal).toFixed(2)} more for free shipping
                </div>
              )}
            </div>

            <div className="flex justify-between py-4 border-b border-border">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>

            <Button className="w-full mt-6 bg-leaf hover:bg-leaf/90 text-white">
              Proceed to Checkout
            </Button>

            <div className="mt-4 text-center text-sm text-muted-foreground">
              Taxes calculated at checkout
            </div>

            <div className="mt-6 flex items-center justify-center space-x-4">
              <img
                src="https://placehold.co/45x30?text=Visa"
                alt="Visa"
                className="h-6"
              />
              <img
                src="https://placehold.co/45x30?text=MC"
                alt="Mastercard"
                className="h-6"
              />
              <img
                src="https://placehold.co/45x30?text=Amex"
                alt="American Express"
                className="h-6"
              />
              <img
                src="https://placehold.co/45x30?text=PayPal"
                alt="PayPal"
                className="h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
