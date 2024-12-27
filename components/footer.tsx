"use client";
import Searchfrom from "@/components/ui/serachform"
import { FaFacebook, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer relative mt-72 bg-footerBg text-footerText bg-primary-100 text-white">

      {/* Parallax Animation */}
      <div className="absolute left-0 top-[-300px] h-[300px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-repeat-x bg-[url('https://i.ibb.co/nQM4PGJ/arbres.png')] animate-parallax"></div>
        <div className="absolute inset-0 bg-repeat-x bg-[url('https://i.ibb.co/J3TjC4W/second-plan.png')] animate-parallax"></div>
        <div className="absolute inset-0 bg-repeat-x bg-[url('https://i.ibb.co/RQhDWbk/premierplanv3.png')] animate-parallax"></div>
        <div
          className="absolute bottom-20 left-1/2 -translate-x-1/2 h-[200px] w-[150px] bg-no-repeat bg-[url('https://i.ibb.co/JCGfFJd/moto-net.gif')] animate-moto"
          style={{ transformOrigin: "50% 80%" }}
        ></div>
        <div
          className="absolute bottom-2 left-1/2 translate-x-1/2 h-[114px] w-[206px] bg-no-repeat bg-[url('https://i.ibb.co/0Qhp4DN/voiture-fumee.gif')] animate-voiture"
        ></div>
      </div>

      {/* Footer Content */}
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 border-b py-6 ">
        {/* Bandage Heading */}
        <h2 className="text-2xl font-bold">Bandage</h2> {/* Increased size */}
        
        {/* Social Media Icons */}
        <div className="flex space-x-6 text-white text-lg"> {/* Increased icon size */}
          <a href="" aria-label="Facebook" className="hover:text-sky-600">
            <FaFacebookF/>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-sky-600">
           <FaInstagram/>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-sky-600">
            <FaTwitter/>
          </a>
        </div>
      </div>

      <div className="container mx-auto p-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Column 1 */}
          <div>
            <h3 className="mb-8 text-lg uppercase flex items-center">
              <i className="mr-2" data-feather="shopping-bag"></i>
              <span className="font-bold">The Shop</span>
            </h3>
            <ul className="space-y-4">
              {["Legal Notice", "Privacy Policy", "Terms and Conditions", "Shipping and Returns", "Contest Rules"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="flex items-center hover:text-gray-400">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="mb-8 text-lg uppercase flex items-center">
              <i className="mr-2" data-feather="share-2"></i>
              <span className="font-bold">Our Socials</span>
            </h3>
            <ul className="space-y-4">
              {["YouTube", "Facebook", "Instagram"].map((platform) => (
                <li key={platform}>
                  <a href="#" className="flex items-center hover:text-gray-400">
                    <i className="mr-2" data-feather={platform.toLowerCase()}></i>
                    <span>{platform}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
             {/* Column 3 */}
        
        

          {/* Column 3 */}
          <div>
            <h3 className="mb-8 text-lg uppercase flex items-center">
              <i className="mr-2" data-feather="send"></i>
              <span className="font-bold">Contact</span>
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:afrazsajid55@gmail.com" className="hover:text-gray-400">
                  afrazsajid55@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-8 text-lg uppercase flex items-center">
              <i className="mr-2" data-feather="send"></i>
              <span className="font-bold">Search</span>
            </h3>
            <ul className="space-y-4">
              <li>
              <Searchfrom/>
              </li>
            </ul>
          </div>
        </div>
        
        
      

        {/* Footer Bottom */}
        <div className="border-t border-gray-600 mt-12 pt-8 text-center">
          <p>
            Created by{" "}
            <a
              href="https://www.linkedin.com/in/syed-afraz-a5455233a/"
              target="_blank"
              className="hover:text-gray-400"
              rel="noopener noreferrer"
            >
              @Syed Afraz
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
