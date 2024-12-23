'use client'
import React, { useState } from "react";

const PricingToggle = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <>
    <div className="flex items-center justify-center p-4">
      <div className="flex items-center bg-blue-100 rounded-full p-1 relative">
        <div
          className={`absolute w-1/2 h-full bg-white rounded-full transition-transform duration-300 ${
            isYearly ? "translate-x-full" : "translate-x-0"
          }`}
        ></div>
        <button
          className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 focus:outline-none z-10 ${
            !isYearly ? "text-blue-600" : "text-blue-600"
          }`}
          onClick={() => setIsYearly(false)}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 focus:outline-none z-10 ${
            isYearly ? "text-blue-600" : "text-blue-600"
          }`}
          onClick={() => setIsYearly(true)}
        >
          Yearly
        </button>
      </div>
      <div className="ml-4 text-blue-600 text-sm font-medium">
        Save 25%
      </div>
    </div>
    </>
  );
};

export default PricingToggle;
