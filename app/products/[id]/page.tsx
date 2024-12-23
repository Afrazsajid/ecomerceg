import { getProductById } from "@/lib/utils";
import ProductFullCard from "@/components/productfullcard";
import Navbar from "@/components/navbar";
import ProductCard, {ProductTypeCard} from '@/components/productCard';


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
        image: "https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?cs=srgb&dl=pexels-pixabay-279906.jpg&fm=jpg",
      },
      productname: "SuperWidget",
      category: "Electronics",
      _id: "prod12345",
      image: "https://upload.wikimedia.org/wikipedia/en/0/09/Widget_Coverart.png",
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
      productname: "EcoLamp",
      category: "Home & Living",
      _id: "prod1w2e3r4t5",
      image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "An eco-friendly lamp that saves energy.",
    },
    {
      _launchAt: "2024-02-15T08:30:00Z",
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
    },
  ];

  return (
    <>
    <Navbar highlightedItem="products"/>
      <ProductFullCard product={product} />
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
