import Image from 'next/image';
import Link from 'next/link';
import Navbar from "@/components/navbar"
import {ProductTypeCard} from '@/components/productCard';
import ProductCard from "@/components/productCard"
import EditorPick from '@/components/editorpick';







export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts: ProductTypeCard[] = [
    {
      _launchAt: "2024-01-01T12:00:00Z",
      sold: 150,
      shopkeeper: {
        _id: "sk123",
        name: "John Doe",
        image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
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
    <Navbar highlightedItem="home" query={query}/>
      <div className="pink_container">
        <div className="text-container">
          <h1 className="heading">New Collection</h1>
          <h3 className="sub-heading mb-5">
            We know how large objects will act, but things on a small scale.
          </h3>
          <Link
            href="./"
            className={`px-6 py-3 rounded-lg bg-secondary hover:bg-blue-600`}
          >
            Home
          </Link>
        </div>
        <div className="image-container hidden md:block">
          <Image
            src="/girlshoping.png" // Replace with your image path
            alt="Description of image"
            width={700} // Adjust as needed
            height={700} // Adjust as needed
            className="rounded-lg"
          />
        </div>
      </div>
     
      <section className="section_container">
        <p className="text-30-semibold text-center">
          {query ? `Search results for "${query}"` : "Best seller"}
        </p>
        <p className="text-10-semibold text-center">
          {query ? `get any product from us` : "Get your best with best price"}
        </p>
        

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: ProductTypeCard) => (
              <ProductCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No products found</p>
          )}
          
        </ul>
      </section>
      <EditorPick/>
        
    </>
  );
}




  
  

