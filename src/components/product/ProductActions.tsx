import React from "react";
import { Button } from "@components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductActionsProps {
  handleAddToCart: () => void;
}

const ProductActions: React.FC<ProductActionsProps> = ({ handleAddToCart }) => {
  return (
    <div className="mt-8 flex items-center space-x-4">
      <Button
        className="bg-leaf hover:bg-leaf/90 text-white px-8 button-hover"
        size="lg"
        onClick={handleAddToCart}
      >
        <ShoppingCart className="h-5 w-5 mr-2" />
        Add to Cart
      </Button>

      <Button variant="outline" size="lg">
        Buy Now
      </Button>
    </div>
  );
};

export default ProductActions;
