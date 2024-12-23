import React from "react";
import PricingPlans from "@/components/princingplan";
import PricingToggle from "@/components/pricetoggle";
import BigCompanies from "@/components/Bigcompanies";
import Accordion from "@/components/faqs";
import Navbar from "@/components/navbar";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Pricing = () => {
  return (
    // princing card

    <>
<Navbar highlightedItem="pricing" />
     <section className="bg-gray-50 py-10 md:py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Subheading */}
        <h5 className="text-sm font-medium text-gray-500 tracking-wide uppercase">
          Pricing
        </h5>

        {/* Main Heading */}
        <h1 className="mt-2 text-3xl md:text-5xl font-bold text-gray-900">
          Simple Pricing
        </h1>

        {/* Breadcrumb */}
        <nav className="mt-4 text-sm text-gray-500">
          <ol className="inline-flex items-center space-x-2">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <span className="text-gray-400">/</span>
            </li>
            <li>
              <span className="font-medium text-gray-700">Pricing</span>
            </li>
          </ol>
        </nav>
      </div>
    </section>
    <div className="flex flex-wrap flex-col justify-center items-center">
    <h2 className="text-[49px] font-bold mb-6 text-center">Pricing</h2>
    <p className="text-center w-96">We focus on ergonomics and meeting 
you where you work. It's only 
a keystroke away.</p>
</div>
      <PricingToggle />
      <PricingPlans />
      <BigCompanies/>
      <Accordion/>

    <section className="bg-white py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          Start your 14 days free trial
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto py-4 w-96">
          Met minim Mollit non deserunt. Aliquip sit id cillum do amet sint. Reprehenderit qui
          officia consequat.
        </p>

        {/* Call-to-Action Button */}
        <div className="mt-8">
          <button className="px-6 py-3 text-white bg-primary hover:bg-primaryB-100 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all">
            Try it free now
          </button>
        </div>

        {/* Social Media Links */}
        <div className="mt-6 flex justify-center space-x-4">
          <a
            href="#"
            className="text-gray-500 hover:text-blue-600 transition"
            aria-label="Twitter"
          >
            <Twitter className="w-10 h-10" />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-blue-600 transition"
            aria-label="Facebook"
          >
            <Facebook className="w-10 h-10" />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-blue-600 transition"
            aria-label="Instagram"
          >
            <Instagram className="w-10 h-10" />
          </a>
        </div>
      </div>
    </section>


    </>
  );
};

export default Pricing;
