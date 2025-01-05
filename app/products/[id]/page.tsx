import { getProductById } from "@/lib/utils";
import ProductFullCard from "@/components/productfullcard";
import Navbar from "@/components/navbar";
import ProductCard, {ProductTypeCard} from '@/components/productCard';


// Adjust the pa


// This will get the dynamic parameter from the URL
const Products = async ({ params }: { params: { id: string } }) => {
  const { id } = params; // Extract the dynamic parameter 'id'

  // Fetch the product using the id
  const product = getProductById(id);

  // Handle the case where the product is not found
  if (!product) {
    return <div>Product not found (ID: {id})</div>;
  }
  

  return (
    <>
      
    <Navbar highlightedItem="home"/>
      <ProductFullCard product={product} />
      {/* frquenlty bought */}
      <p className="text-30-semibold text-left w-2/3 mx-auto ">Frequently Bought</p>
      
      {/* <ul className="mt-7 card_grid w-2/3 mx-auto">
     
          {posts?.length > 0 ? (
            posts.map((post: ProductTypeCard) => (
              <ProductCard key={post?.

_id} post={post} />
            ))
          ) : (
            <p className="no-results">No products found</p>
          )}
          
        </ul> */}
       
    </>
  );
};

export default Products;
