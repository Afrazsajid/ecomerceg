import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (<>
  <div className="pink_container">
    <div className="text-container">
      <h1 className="heading  ">New Collection  </h1>
    <h3 className="sub-heading mb-5">We know how large objects will act, 
  but things on a small scale.</h3>
  <Link href="./"
            className={`px-6 py-3 rounded-lg bg-secondary hover:bg-blue-600 `}
          >
            Home
          </Link>

  </div>
  <div className='image-container hidden md:block'><Image
          src="/girlshoping.png" // Replace with your image path
          alt="Description of image"
          width={700} // Adjust as needed
          height={700} // Adjust as needed
          className="rounded-lg"
        /></div>
  
  </div>
  </>
    
  );
}
