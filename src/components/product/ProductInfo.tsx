import React from "react";
import { Product } from "../../data/products";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <div>
      <span className="text-sm font-medium text-leaf capitalize">
        {product.category}
      </span>
      <h1 className="text-3xl md:text-4xl font-bold mt-2">{product.name}</h1>

      <div className="mt-4 flex items-baseline">
        <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
        <span className="ml-2 text-muted-foreground">per {product.unit}</span>
      </div>

      <div className="mt-8 space-y-4">
        <h3 className="font-medium">Description</h3>
        <p className="text-muted-foreground leading-relaxed">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;
