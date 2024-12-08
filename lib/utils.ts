import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to merge class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility function to format date
export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// Utility function to parse server response
export function parseServerActionResponse<T>(response: T) {
  return JSON.parse(JSON.stringify(response));
}

// Interfaces for Shopkeeper and Product
interface Shopkeeper {
  _id: string;
  name: string;
  image: string;
}

interface Product {
  _launchAt: string;
  sold: number;
  shopkeeper: Shopkeeper;
  productname: string;
  category: string;
  _id: string;
  image: string;
  description: string;
  unsetprice:string;
  setprice:string
}

// Define a list of products as a static JavaScript object (array)
const products: Product[] = [
  {
    _launchAt: "2023-08-18T13:47:18.795Z",
    sold: 120,
    shopkeeper: {
      _id: "sk124",
      name: "Jane Smith",
      image: "https://static.lepro.com/media/catalog/product/6/1/61LhX5XAryL._AC_SL1500_.jpg",

    },
    productname: "EcoLamp",
    category: "Home & Living",
    _id: "prod1w2e3r4t5",
    image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "An eco-friendly lamp that saves energy.",
    unsetprice:"12$",
  setprice:"7$"
  },
  {
    _launchAt: "2023-09-14T22:40:06.657Z",
    sold: 200,
    shopkeeper: {
      _id: "sk125",
      name: "Emily Brown",
      image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    productname: "SmartBottle",
    category: "Fitness",
    _id: "prod7y8u9i0o",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfVVG_MfZZevJc8R4nRKMHXdmfDs1hKLSsNQ&s",
    description: "A smart water bottle with hydration tracking.",
     unsetprice:"12$",
  setprice:"7$"
  },
  // Add more products as needed
];

// Utility function to find a product by its ID
export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product._id === id);
};
