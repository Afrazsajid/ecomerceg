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
  const posts: ProductTypeCard[] = [
    {
      _launchAt: "2024-01-01T12:00:00Z",
      sold: 150,
      shopkeeper: {
        _id: "sk123",
        name: "John Doe",
        image: "https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?cs=srgb&dl=pexels-pixabay-279906.jpg&fm=jpgdl=pexels-pixabay-279906.jpg&fm=jpg",
      },
      productname: "Stool",
      category: "Furniture",
      _id: "prod12345",
      image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      description: "A high-quality widget designed for tech enthusiasts.",
    },
    {
      _launchAt: "2023-11-20T10:00:00Z",
      sold: 85,
      shopkeeper: {
        _id: "sk124",
        name: "Jane Smith",
        image: "https://static.lepro.com/media/catalog/product/6/1/61LhX5XAryL._AC_SL1500_.jpg",
      },
      productname: "Camera",
      category: "Electronics",
      _id: "prod1w2e3r4x2",
      image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "A Stylish picture taking camera",
    },
    {
      _launchAt: "2023-11-20T10:00:00Z",
      sold: 85,
      shopkeeper: {
        _id: "sk124",
        name: "Jane Smith",
        image: "https://static.lepro.com/media/catalog/product/6/1/61LhX5XAryL._AC_SL1500_.jpg",
      },
      productname: "MakeUp set",
      category: "fashion",
      _id: "prod1w2e3r4l2",
      image: "https://xphotography.ca/wp-content/uploads/2023/04/flat-lay-with-cosmetics-and-flowers-2021-09-24-20-27-42-utc.jpg",
      description: "A make up set prefect for teen age",
    },
    
  ];

  return (
    <>
      
    <Navbar highlightedItem="home"/>
      <ProductFullCard product={product} />
      {/* frquenlty bought */}
      <p className="text-30-semibold text-left w-2/3 mx-auto ">Frequently Bought</p>
      
      <ul className="mt-7 card_grid w-2/3 mx-auto">
     
          {posts?.length > 0 ? (
            posts.map((post: ProductTypeCard) => (
              <ProductCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No products found</p>
          )}
          
        </ul>
       
    </>
  );
};

export default Products;
