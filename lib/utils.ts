import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { client } from "@/sanity/lib/client"; // Import the Sanity client
import { PRODUCTS_Query } from "@/sanity/lib/quries"; 

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
  slug: string;
  name: string;
  image: string;
}

interface Product {
  launchAt: string;
  sold: number;
  shopkeeper: Shopkeeper;
  productname: string;
  category: string;
  slug: {
    current:string;
    _type:string;
  };
  image: string;
  description: string;
  unsetprice:string;
  setprice:string
}

// Define a list of products as a static JavaScript object (array)
const products: Product[] = [
  {
    launchAt: "2023-08-18T13:47:18.795Z",
    sold: 120,
    shopkeeper: {
      slug: "sk124",
      name: "Jane Smith",
      image: "https://static.lepro.com/media/catalog/product/6/1/61LhX5XAryL._AC_SL1500_.jpg",
    },
    productname: "EcoLamp",
    category: "Home & Living",
    slug: {
      current: "prod1w2e3r4t5",
      _type: "string"
    },
    image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "An eco-friendly lamp that saves energy.",
    unsetprice: "12$",
    setprice: "7$"
  },
  {
    launchAt: "2023-09-14T22:40:06.657Z",
    sold: 200,
    shopkeeper: {
      slug: "sk125",
      name: "Emily Brown",
      image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    productname: "SmartBottle",
    category: "Fitness",
    slug: {
      current: "prod7y8u9i0o",
      _type: "string"
    },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfVVG_MfZZevJc8R4nRKMHXdmfDs1hKLSsNQ&s",
    description: "A smart water bottle with hydration tracking.",
    unsetprice: "12$",
    setprice: "7$"
  },
  {
    launchAt: "2024-01-01T12:00:00Z",
    sold: 150,
    shopkeeper: {
      slug: "sk123",
      name: "John Doe",
      image: "https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?cs=srgb&dl=pexels-pixabay-279906.jpg&fm=jpgdl=pexels-pixabay-279906.jpg&fm=jpg",
    },
    productname: "Stool",
    category: "Furniture",
    slug: {
      current: "prod12345",
      _type: "string"
    },
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    description: "A high-quality widget designed for tech enthusiasts.",
    unsetprice: "12$",
    setprice: "7$"
  },
  {
    launchAt: "2024-01-01T12:00:00Z",
    sold: 150,
    shopkeeper: {
      slug: "sk123",
      name: "John Doe",
      image: "https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?cs=srgb&dl=pexels-pixabay-279906.jpg&fm=jpgdl=pexels-pixabay-279906.jpg&fm=jpg",
    },
    productname: "Vita",
    category: "Shirts",
    slug: {
      current: "prod1234yt5",
      _type: "string"
    },
    image: "https://res.cloudinary.com/dvbc6ctqu/image/upload/v1734727783/shop-hero-2-png-picture-1_mzdvop.png",
    description: "A high-quality Shirt designed for pakistani to feel cold",
    unsetprice: "12$",
    setprice: "3$"
  },
  {
    launchAt: "2023-11-20T10:00:00Z",
    sold: 85,
    shopkeeper: {
      slug: "sk124",
      name: "Jane Smith",
      image: "https://static.lepro.com/media/catalog/product/6/1/61LhX5XAryL._AC_SL1500_.jpg",
    },
    productname: "Camera",
    category: "Electronics",
    slug: {
      current: "prod1w2e3r4x2",
      _type: "string"
    },
    image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "A Stylish picture taking camera",
    unsetprice: "12$",
    setprice: "7$"
  },
  {
    launchAt: "2023-11-20T10:00:00Z",
    sold: 85,
    shopkeeper: {
      slug: "sk124",
      name: "Jane Smith",
      image: "https://static.lepro.com/media/catalog/product/6/1/61LhX5XAryL._AC_SL1500_.jpg",
    },
    productname: "MakeUp set",
    category: "Fashion",
    slug: {
      current: "prod1w2e3r4l2",
      _type: "string"
    },
    image: "https://xphotography.ca/wp-content/uploads/2023/04/flat-lay-with-cosmetics-and-flowers-2021-09-24-20-27-42-utc.jpg",
    description: "A make up set prefect for teen age",
    unsetprice: "14$",
    setprice: "7$"
  },
  {
    launchAt: "2024-12-22T10:00:00Z",
    sold: 120,
    shopkeeper: {
      slug: "sk001",
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    productname: "Wireless Headphones",
    category: "Tech Accessories",
    slug: {
      current: "prod1a2b3c4d5e6",
      _type: "string"
    },
    image: "https://images.unsplash.com/photo-1612465289702-7c84b5258fde?q=80&w=1873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Immerse yourself in crystal-clear audio with our wireless headphones, featuring noise cancellation, long-lasting battery, and a sleek, lightweight design perfect for all-day comfort.",
    unsetprice: "59$",
    setprice: "49$"
  },
  {
    launchAt: "2024-12-18T10:00:00Z",
    sold: 85,
    shopkeeper: {
      slug: "sk002",
      name: "Alice Johnson",
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    productname: "Modern Table Lamp",
    category: "Home Decor",
    slug: {
      current: "prod2e3f4g5h6i7",
      _type: "string"
    },
    image: "https://images.unsplash.com/photo-1613776822564-8859412fc09b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0",
    description: "Brighten up your room with this elegant table lamp, featuring a contemporary design, energy-efficient lighting, and premium materials that add style and functionality to your space.",
    unsetprice: "45$",
    setprice: "35$"
  },
  {
    launchAt: "2024-12-15T10:00:00Z",
    sold: 150,
    shopkeeper: {
      slug: "sk003",
      name: "Michael Davis",
      image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    productname: "Leather Backpack",
    category: "Fashion",
    slug: {
      current: "prod3j4k5l6m7n",
      _type: "string"
    },
    image: "https://images.unsplash.com/photo-1474376962954-d8a681cc53b2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Stay organized and stylish with this durable leather backpack, featuring multiple compartments, high-quality craftsmanship, and a timeless design for daily use or travel.",
    unsetprice: "120$",
    setprice: "95$"
  },
  {
    launchAt: "2023-10-15T14:30:00Z",
    sold: 350,
    shopkeeper: {
      slug: "sk126",
      name: "Laura Green",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    productname: "Building Blocks",
    category: "Toys",
    slug: {
      current: "building-blocks",
      _type: "string"
    },
    image: "https://m.media-amazon.com/images/I/71mnsQS0n1L._AC_SL1500_.jpg",
    description: "Colorful building blocks for kids to enhance their creativity.",
    unsetprice: "25$",
    setprice: "15$"
  },
  {
    launchAt: "2023-11-05T09:00:00Z",
    sold: 500,
    shopkeeper: {
      slug: "sk127",
      name: "Daniela Lee",
      image: "",
    },
    productname: "Toy Train Set",
    category: "Toys",
    slug: {
      current: "toy-train-set",
      _type: "string"
    },
    image: "https://m.media-amazon.com/images/I/81zdnJiVGbL.jpg",
    description: "A complete toy train set for kids, featuring tracks and engine.",
    unsetprice: "40$",
    setprice: "30$"
  },
  {
    launchAt: "2023-12-10T11:20:00Z",
    sold: 150,
    shopkeeper: {
      slug: "sk128",
      name: "Chris Black",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    productname: "Remote Control Car",
    category: "Toys",
    slug: {
      current: "prod45678",
      _type: "string"
    },
    image: "https://m.media-amazon.com/images/I/71M0R2x-LUL._AC_SL1500_.jpg",
    description: "A fast remote control car with 360-degree rotation capabilities.",
    unsetprice: "35$",
    setprice: "25$"
  },
  {
    launchAt: "2021-12-10T11:20:00Z",
    sold: 150,
    shopkeeper: {
      slug: "sk128",
      name: "Chris Black",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    productname: "Chicken Cloth",
    category: "Clothing",
    slug: {
      current: "prod4567tre",
      _type: "string"
    },
    image: "https://5.imimg.com/data5/ANDROID/Default/2022/10/EA/TK/WD/37987103/product-jpeg-500x500.jpg",
    description: "A fine tune made with love pure desi chicken cloth.",
    unsetprice: "15$",
    setprice: "11$"
  }
];


// Assuming products are categorized using the categoryIndex
const categoryIndex: { [key: string]: Product[] } = products.reduce((acc: { [key: string]: Product[] }, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }
  acc[product.category].push(product);
  return acc;
}, {});

// Utility function to find products by category
export const getProductsByCategory = (category: string): Product[] => {
  if(category==="All"){
    return products
  }
  return categoryIndex[category] || []; // Returns an empty array if the category is not found
};

// Utility function to find a product by its ID
// Import the query for fetching products

// Utility function to find a product by its ID
export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.slug.current === id);
};



