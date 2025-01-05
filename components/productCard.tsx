"use client";

import { cn, formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { Skeleton } from "@/components/ui/skeleton";
import { useCart } from "@/app/context/cartcontext";

// types.ts or within your component file
export type ProductTypeCard = {
  launchAt: string; // Assuming ISO date string format
  sold: number; // Number of items sold
  seller: {
    // Shopkeeper's unique identifier
    name: string;
    image: string; // Shopkeeper's name
  }; // Name of the shopkeeper
  productname: string; // Product name
  category: string; // Product category

  slug: {
    current:string,
    _type: string
  };// Unique identifier
  image: string; // URL for the image
  description: string; // Description of the product
};

const ProductCard = ({ post }: { post: ProductTypeCard }) => {
  const {
    launchAt,
    sold,
    seller,
    productname,
    category,

    slug,
    image,
    description,
  } = post;

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(post.slug.current); // Add the product to the cart
    alert(`Product added to the cart! ${post.productname}`);
  };

  return (
    <li className="product-card group">
      <div className="flex-between">
        <p className="product_card_date">{formatDate(launchAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{sold}</span>
        </div>
      </div>
      <Link href={`/products/${slug.current}`}>
        <img src={image} alt="placeholder" className="product-card_img" />
        <p className="product-card_desc">{description}</p>
      </Link>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user`}>
            <p className="text-16-medium line-clamp-1">{seller?.name}</p>
          </Link>
          <Link href={`/product/${slug.current}`}>
            <h3 className="text-26-semibold line-clamp-1">{productname}</h3>
          </Link>
        </div>
        <Link href={`/user`}>
          <Image
            src={seller?.image}
            alt={seller?.name}
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="product-card_btn" asChild onClick={handleAddToCart}>
          <Link href={`/products/${slug.current}`}>Add to cart</Link>
        </Button>
      </div>
    </li>
  );
};

export const productCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4].map((index: number) => (
      <li key={cn("skeleton", index)}>
        <Skeleton className="product-card_skeleton" />
      </li>
    ))}
  </>
);

export default ProductCard;
