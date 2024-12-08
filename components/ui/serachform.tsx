//  className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"


import Form from 'next/form'
import Searchreset from "@/components/searchformrest"
import {Search} from "lucide-react";
 
export default function Page({ query }: { query?: string }) {
  console.log("Query value:", query);
  
 
 
  return (
    <Form action="/" scroll={false} className='search-form'>
      <input name="query" 
      defaultValue={query}
      className='search-input'
      placeholder='search products'
    />
    <div className=' flex gap-1'> 
      
   {/* <Searchreset/> */}
   {query && <Searchreset />
   }
      
      <button type='submit' className='search-btn'><Search className='size-5'/></button>
      </div>
     
    </Form>
  )
}