import React from "react";
import { categories } from "../data/products";
import { Button } from "./ui/button";

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeCategory === category.id ? "default" : "outline"}
          className={`
            px-4 py-2 rounded-full text-sm transition-all
            ${
              activeCategory === category.id
                ? "bg-leaf text-white hover:bg-leaf/90 dark:bg-leaf/90 dark:hover:bg-leaf/80"
                : "hover:text-leaf hover:border-leaf/50 dark:border-border dark:hover:border-leaf/50"
            }
          `}
          onClick={() => onCategoryChange(category.id)}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
