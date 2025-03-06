export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  unit: string;
  featured?: boolean;
}

export const categories = [
  { id: "all", name: "All Products" },
  { id: "fruits", name: "Fruits" },
  { id: "vegetables", name: "Vegetables" },
  { id: "organic", name: "Organic" },
  { id: "exotic", name: "Exotic" },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Fresh Apples",
    price: 2.99,
    category: "fruits",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
    description:
      "Crisp and juicy apples freshly picked from local orchards. Perfect for snacking, baking, or adding to your favorite salad.",
    unit: "lb",
    featured: true,
  },
  {
    id: 2,
    name: "Organic Bananas",
    price: 1.99,
    category: "fruits",
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224",
    description:
      "Sweet and nutritious organic bananas. Grown without synthetic pesticides or fertilizers.",
    unit: "bunch",
    featured: true,
  },
  {
    id: 3,
    name: "Avocados",
    price: 3.49,
    category: "fruits",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578",
    description:
      "Creamy, ripe avocados perfect for guacamole, toast, or adding to salads and sandwiches.",
    unit: "each",
  },
  {
    id: 4,
    name: "Fresh Broccoli",
    price: 2.49,
    category: "vegetables",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
    description:
      "Nutritious broccoli florets rich in vitamins and minerals. Perfect for stir-fries, roasting, or steaming.",
    unit: "head",
    featured: true,
  },
  {
    id: 5,
    name: "Carrots",
    price: 1.79,
    category: "vegetables",
    image:
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fycm90fGVufDB8fDB8fHww",
    description:
      "Sweet and crunchy carrots, perfect for snacking, salads, or cooking.",
    unit: "lb",
  },
  {
    id: 6,
    name: "Organic Spinach",
    price: 4.99,
    category: "organic",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb",
    description:
      "Tender organic spinach leaves packed with nutrients. Ideal for salads, smoothies, or sautéing.",
    unit: "bunch",
  },
  {
    id: 7,
    name: "Dragon Fruit",
    price: 6.99,
    category: "exotic",
    image:
      "https://plus.unsplash.com/premium_photo-1667051230160-5906f5683a59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHJhZ29uZnJ1aXR8ZW58MHx8MHx8fDA%3D",
    description:
      "Vibrant dragon fruit with sweet, seed-speckled pulp. A tropical delicacy rich in antioxidants.",
    unit: "each",
    featured: true,
  },
  {
    id: 8,
    name: "Red Bell Peppers",
    price: 2.29,
    category: "vegetables",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83",
    description:
      "Sweet and crunchy red bell peppers, perfect for salads, roasting, or stuffing.",
    unit: "each",
  },
  {
    id: 9,
    name: "Organic Strawberries",
    price: 5.99,
    category: "organic",
    image: "https://images.unsplash.com/photo-1518635017498-87f514b751ba",
    description:
      "Sweet and juicy organic strawberries. Perfect for desserts, smoothies, or enjoying fresh.",
    unit: "pint",
  },
  {
    id: 10,
    name: "Lemons",
    price: 0.99,
    category: "fruits",
    image: "https://images.unsplash.com/photo-1590502593747-42a996133562",
    description:
      "Bright and zesty lemons, perfect for adding flavor to drinks, dishes, and desserts.",
    unit: "each",
  },
  {
    id: 11,
    name: "Fresh Kale",
    price: 3.29,
    category: "vegetables",
    image: "https://images.unsplash.com/photo-1524179091875-bf99a9a6af57",
    description:
      "Nutrient-packed kale leaves, perfect for salads, smoothies, or crispy kale chips.",
    unit: "bunch",
  },
  {
    id: 12,
    name: "Star Fruit",
    price: 4.49,
    category: "exotic",
    image: "https://images.unsplash.com/photo-1527176930608-09cb256ab504",
    description:
      "Sweet and tangy star fruit with a unique star shape when sliced. Refreshing and exotic.",
    unit: "each",
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "all") return products;
  return products.filter((product) => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.featured);
};
