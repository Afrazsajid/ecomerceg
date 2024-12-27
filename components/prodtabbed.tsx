import React, { useState } from "react";
import ProductDescription from "./proddecription";
import ReviewSection from "./review";
import Accordion from "./faqs";

const TabbedSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"description" | "reviews" | "FAQs"  >("description");

  return (
    <div className="w-full mx-auto p-4 sm:p-8">
      {/* Tab Buttons */}
      <div className="flex justify-center space-x-8 mb-6 relative border-b border-gray-300">
        <button
          className={`pb-2 text-lg font-medium transition-all ${
            activeTab === "description"
              ? "text-gray-900 border-b-2 border-sky-500"
              : "text-gray-500 hover:text-gray-800"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`pb-2 text-lg font-medium transition-all ${
            activeTab === "reviews"
              ? "text-gray-900 border-b-2 border-sky-500"
              : "text-gray-500 hover:text-gray-800"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
        <button
          className={`pb-2 text-lg font-medium transition-all ${
            activeTab === "FAQs"
              ? "text-gray-900 border-b-2 border-sky-500"
              : "text-gray-500 hover:text-gray-800"
          }`}
          onClick={() => setActiveTab("FAQs")}
        >
          FAQ
        </button>
      </div>

      {/* Tab Content */}
      <div
        className={`transition-transform duration-500 ease-in-out ${
          activeTab === "description" ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {activeTab === "description" && (
          <div>
            <ProductDescription/>
          </div>
        )}
      </div>
      <div
        className={`transition-transform duration-500 ease-in-out ${
          activeTab === "reviews" ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {activeTab === "reviews" && (
          <div className="w-full">
            <ReviewSection/>
          </div>
        )}
      </div>

      <div
        className={`transition-transform duration-500 ease-in-out ${
          activeTab === "FAQs" ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {activeTab === "FAQs" && (
          <div>
            <Accordion/>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabbedSection;
