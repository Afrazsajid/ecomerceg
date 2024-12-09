import Team from "@/components/team";
import React from "react";
import Navbar from "@/components/navbar";
import Link from "next/link";
import Image from "next/image";
import StatsSection from "@/components/stateaction";
import Videoclient from "@/components/videoclient"


// Dynamically import the VideoPlayer component (disable SSR)

const Page: React.FC = () => {


  return (
    <>
    <Navbar highlightedItem="home" query="hello"/>
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
     
    <Team/>
    <StatsSection/>
    <Videoclient/>
    </>
    
  );
};

export default Page;
