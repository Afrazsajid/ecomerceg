import Image from 'next/image';

export default function Home() {
  return (<>
  <div className="pink_container">
    <div className="text-container">
      <h1 className="heading">New Collection</h1>
    <h3 className="sub-heading">We know how large objects will act, 
  but things on a small scale.</h3>
  </div>
  <div className='image-container'><Image
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
