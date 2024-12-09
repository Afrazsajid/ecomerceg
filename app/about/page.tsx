import Team from "@/components/team";
import React from "react";
import Navbar from "@/components/navbar";
import Link from "next/link";
import Image from "next/image";
import StatsSection from "@/components/stateaction";
import Videoclient from "@/components/videoclient"
import { Dice1 } from "lucide-react";


// Dynamically import the VideoPlayer component (disable SSR)

const Page: React.FC = () => {


  return (
    <>
    <Navbar highlightedItem="about" query="hello"/>
      <div className="pink_container">
        <div className="text-container">
            <h2 className="mb-2 text-left sub-headingt "> About Company</h2>
            
          <h1 className="heading">About Us</h1>
          <h3 className="sub-heading mb-5">
            We know how large objects will act, but things on a small scale.
          </h3>
          <Link
            href="./"
            className={`px-8 py-3 rounded-lg bg-secondary hover:bg-blue-600`}
          >
            Get quote now
          </Link>
        </div>
        <div className="image-container hidden md:block">
          <Image
            src="/aboutgirl.png" // Replace with your image path
            alt="Description of image"
            width={700} // Adjust as needed
            height={700} // Adjust as needed
            className="rounded-lg"
          />
        </div>
      </div>
      <StatsSection/>
     
    
    
    <Videoclient/>
    <Team/>
    <div className="flex justify-center items-center gap-3 sm:gap-6 md:gap-5 flex-wrap">

        <div >
            <h2 className="sub-heading-about">Problems trying</h2>
            <h1 className="heading-about">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h1>
        </div>
        <div className="p-3">

        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics 
        </div>
    </div>
    <div className="about_container">
        <div className="text-container ml-12">
            <h2 className="mb-2 text-left sub-headingt ">work with us</h2>
            
          <h1 className="heading">Now Let’s grow Yours</h1>
          <h3 className="sub-heading mb-5">
          The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th 
          </h3>
          <Link
            href="./"
            className={`px-8 py-3 rounded-lg bg-secondary hover:bg-blue-600`}
          >
            Get quote now
          </Link>
        </div>
        <div className="image-container hidden md:block">
          <Image
            src="/aboutgirl2.png" // Replace with your image path
            alt="Description of image"
            width={800} // Adjust as needed
            height={800} // Adjust as needed
            className="rounded-lg"
          />
        </div>
      </div>
    </>
    
  );
};

export default Page;
