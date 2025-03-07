import React, { useState } from "react";

interface ProductGalleryProps {
  image: string;
  name: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ image, name }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-xl bg-secondary/30">
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-secondary/60 animate-pulse">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      <img
        src={`${image}?auto=format&fit=crop&w=800&q=80`}
        alt={name}
        className={`w-full h-auto aspect-square object-cover transition-opacity duration-500 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setImageLoaded(true)}
      />
    </div>
  );
};

export default ProductGallery;
