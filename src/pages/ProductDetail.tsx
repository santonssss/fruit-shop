import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById, getProductsByCategory, Product } from "@data/products";
import { useDispatch } from "react-redux";
import { addToCart } from "@store/cartSlice";
import { toast } from "sonner";
import BackButton from "@components/ui/backButton";
import ProductGallery from "@components/product/ProductGallery";
import ProductInfo from "@components/product/ProductInfo";
import ProductQuantity from "@components/product/ProductQuantity";
import ProductActions from "@components/product/ProductActions";
import ProductFeatures from "@components/product/ProductFeatures";
import RelatedProducts from "@components/product/RelatedProducts";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (id) {
      const productId = parseInt(id);
      const foundProduct = getProductById(productId);

      if (foundProduct) {
        setProduct(foundProduct);
        const related = getProductsByCategory(foundProduct.category)
          .filter((p) => p.id !== productId)
          .slice(0, 4);
        setRelatedProducts(related);
      } else {
        navigate("/not-found");
      }
    }
  }, [id, navigate]);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      dispatch(
        addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
        })
      );

      toast.success(
        `Added ${quantity} ${quantity === 1 ? "item" : "items"} to cart`
      );
    }
  };

  if (!product) {
    return (
      <>
        <div className="container mx-auto px-4 py-16 flex justify-center items-center">
          <div className="animate-pulse h-4 bg-secondary rounded w-48"></div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <BackButton />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ProductGallery image={product.image} name={product.name} />

          <div className="flex flex-col">
            <ProductInfo product={product} />

            <ProductQuantity
              quantity={quantity}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />

            <ProductActions handleAddToCart={handleAddToCart} />

            <ProductFeatures />
          </div>
        </div>

        <RelatedProducts products={relatedProducts} />
      </div>
    </>
  );
};

export default ProductDetail;
