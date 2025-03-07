import React, { useState, useEffect } from "react";
import Banner from "@components/Banner";
import ProductCard from "@components/ProductCard";
import CategoryFilter from "@components/CategoryFilter";
import { getProductsByCategory, getFeaturedProducts } from "../data/products";
import { ArrowRight } from "lucide-react";
import { Button } from "@components/ui/button";
import { Link } from "react-router-dom";

const Index: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(
    getProductsByCategory("all")
  );
  const featuredProducts = getFeaturedProducts();

  useEffect(() => {
    setFilteredProducts(getProductsByCategory(activeCategory));
  }, [activeCategory]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <>
      <Banner />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <p className="text-muted-foreground mt-2">
              Our hand-picked selection of premium fresh produce
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link to="/products">
              <Button variant="outline" className="group">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-leaf font-medium text-sm">
              Fresh Selection
            </span>
            <h2 className="text-3xl font-bold mt-2">Shop by Category</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Browse our carefully curated selection of the freshest fruits and
              vegetables, sourced directly from trusted farms and growers
            </p>
          </div>

          <CategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-leaf/10 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-leaf font-medium text-sm">
                  Why Choose Us
                </span>
                <h2 className="text-3xl font-bold mt-2">
                  Farm to Table, Every Day
                </h2>
                <p className="text-muted-foreground mt-4">
                  We work directly with local farmers to bring you the freshest
                  produce possible. Our fruits and vegetables are harvested at
                  peak ripeness and delivered to your door within hours.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-leaf mr-2"></div>
                    <span>Locally sourced, sustainable produce</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-leaf mr-2"></div>
                    <span>Picked at peak ripeness for maximum flavor</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-leaf mr-2"></div>
                    <span>Fast delivery, maintaining freshness</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-leaf mr-2"></div>
                    <span>Supporting small-scale farmers</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button className="bg-leaf hover:bg-leaf/90 text-white">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative min-h-[300px] md:min-h-0">
                <img
                  src="https://images.unsplash.com/photo-1485637701894-09ad422f6de6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWVycyUyMG1hcmtldHxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Farmers Market"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
