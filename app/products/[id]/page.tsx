import { getProductById } from "@/lib/utils";
import ProductFullCard from "@/components/productfullcard";

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
      <ProductFullCard product={product} />
    </>
  );
};

export default Products;
