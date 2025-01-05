import Image from 'next/image';
import Link from 'next/link';
import Navbar from "@/components/navbar"
import {ProductTypeCard} from '@/components/productCard';
import ProductCard from "@/components/productCard"
import EditorPick from '@/components/editorpick';
import FeaturedProducts from '@/components/feturedproducts';
import Shirtsection from '@/components/3rdsectionshirt';
import { client } from '@/sanity/lib/client';
import { PRODUCTS_Query } from '@/sanity/lib/quries';
import { getProductById } from '@/lib/utils';







export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  let params = { search:query || null}

  const posts = await client.fetch(PRODUCTS_Query,params)


  // console.log(posts)






  

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
            href="category"
            className={`px-8 py-4 rounded-lg bg-green-600 hover:bg-blue-600 text-white font-bold text-[23px]`}
          >
            Shop Now
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
              <ProductCard key={post?.

slug.current} post={post} />
            ))
          ) : (
            <p className="no-results">No products found</p>
          )}
          
        </ul>
      </section>
      <EditorPick/>


      {/* 3rd section */}
      <Shirtsection/>
      

        <FeaturedProducts/>

        
    </>
  );
}




  
  

