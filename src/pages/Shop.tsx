import CategoryFilter from "@components/CategoryFilter";
import Layout from "@components/Layout";
import ProductCard from "@components/ProductCard";
import { getProductsByCategory } from "@data/products";
import React from "react";
import { useState, useEffect } from "react";

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(
    getProductsByCategory("all")
  );

  useEffect(() => {
    setFilteredProducts(getProductsByCategory(activeCategory));
  }, [activeCategory]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our selection of fresh, locally sourced fruits and vegetables
          </p>
        </div>

        <CategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
