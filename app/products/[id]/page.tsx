import { client } from "@/sanity/lib/client";
import { PRODUCTS_Query } from "@/sanity/lib/quries";
import ProductFullCard from "@/components/productfullcard";
import Navbar from "@/components/navbar";
import ProductCard, { ProductTypeCard } from '@/components/productCard';

const Products = async ({ params }: { params: { id: string } }) => {
  const { id } = params; // Extract the dynamic parameter 'id'

  // Fetch the product using the id
  const posts = await client.fetch(PRODUCTS_Query, { search: id });
  const fposts = await client.fetch(PRODUCTS_Query, { search: posts[0].category });

  // Handle the case where the product is not found
  if (!posts || posts.length === 0) {
    return <div>Product not found (ID: {id})</div>;
  }

  return (
    <>
      <Navbar highlightedItem="home" />
      <ProductFullCard product={posts[0]} />
      
      {/* Frequently Bought */}
      <p className="text-30-semibold text-left w-2/3 mx-auto">Frequently Bought</p>

      <ul className="mt-7 card_grid w-2/3 mx-auto">
        {fposts.length > 0 ? (
          fposts.map((post: ProductTypeCard) => (
            <ProductCard key={post?.slug.current} post={post} />
          ))
        ) : (
          <p className="no-results">No products found</p>
        )}
      </ul>
    </>
  );
};

export default Products;
