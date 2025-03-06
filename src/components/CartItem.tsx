import React from "react";
import { CartItem as CartItemType } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../store/cartSlice";
import { Button } from "./ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeFromCart(item.id));
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="flex gap-4 p-3 bg-background rounded-lg border animate-scale-in">
      <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden bg-secondary/40">
        <img
          src={`${item.image}?auto=format&fit=crop&w=100&h=100&q=80`}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col">
        <Link
          to={`/product/${item.id}`}
          className="font-medium hover:text-leaf transition-colors"
        >
          {item.name}
        </Link>

        <div className="text-sm text-muted-foreground mb-2">
          ${item.price.toFixed(2)}
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7 rounded-full p-0"
              onClick={decreaseQuantity}
            >
              <Minus className="h-3 w-3" />
            </Button>

            <span className="w-6 text-center">{item.quantity}</span>

            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7 rounded-full p-0"
              onClick={increaseQuantity}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>

          <div className="flex items-center">
            <span className="font-medium mr-2">
              ${(item.price * item.quantity).toFixed(2)}
            </span>

            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 text-muted-foreground hover:text-destructive"
              onClick={handleRemove}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
