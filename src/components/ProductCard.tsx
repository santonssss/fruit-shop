import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../data/products";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { Button } from "./ui/button";
import { ShoppingCart, Plus } from "lucide-react";
import { toast } from "sonner";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
    );

    toast.success(`Added ${product.name} to cart`);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="overflow-hidden hover-trigger transition-all duration-300 hover:shadow-md h-full flex flex-col">
        <div className="relative aspect-square overflow-hidden bg-secondary/40">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-secondary/60 animate-pulse">
              <span className="sr-only">Loading...</span>
            </div>
          )}
          <img
            src={`${product.image}?auto=format&fit=crop&w=400&h=400&q=80`}
            alt={product.name}
            className={`object-cover w-full h-full transition-all duration-500 transform hover:scale-105 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          <Button
            size="icon"
            onClick={handleAddToCart}
            className="absolute bottom-2 right-2 bg-white text-foreground hover:bg-leaf hover:text-white transition-all shadow-sm hover-target rounded-full"
          >
            <Plus className="h-4 w-4" />
          </Button>
          {product.featured && (
            <Badge className="absolute top-2 left-2 bg-leaf/90 text-white">
              Featured
            </Badge>
          )}
        </div>
        <CardContent className="pt-4 pb-2 flex-grow">
          <h3 className="font-medium text-lg">{product.name}</h3>
          <p className="text-muted-foreground text-sm">{product.unit}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center pt-0 pb-4">
          <div className="text-lg font-semibold">
            ${product.price.toFixed(2)}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-sm hover:bg-leaf/10 hover:text-leaf flex gap-1 items-center"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
