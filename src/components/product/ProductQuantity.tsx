import React from "react";
import { Button } from "@components/ui/button";
import { Minus, Plus } from "lucide-react";

interface ProductQuantityProps {
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
}

const ProductQuantity: React.FC<ProductQuantityProps> = ({
  quantity,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <div className="mt-8">
      <h3 className="font-medium mb-2">Quantity</h3>
      <div className="flex items-center space-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={decreaseQuantity}
          disabled={quantity <= 1}
        >
          <Minus className="h-4 w-4" />
        </Button>

        <span className="text-lg font-medium w-8 text-center">{quantity}</span>

        <Button variant="outline" size="icon" onClick={increaseQuantity}>
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ProductQuantity;
