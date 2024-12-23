import React from 'react';
import { FaAmazon, FaStripe, FaReddit, FaLyft, FaBuilding } from 'react-icons/fa';

const BigCompanies = () => {
  const companies = [
    { name: 'Reddit', icon: <FaReddit className="w-12 h-12 md:h-20 md:w-20 text-gray-600 hover:text-orange-500 hover:scale-110 transition duration-300" /> },
    { name: 'Lyft', icon: <FaLyft className="w-12 h-12 md:h-20 md:w-20 text-gray-600 hover:text-primary hover:scale-110 transition duration-300" /> },
    { name: 'Hooli', icon: <FaBuilding className="w-12 h-12 md:h-20 md:w-20 text-gray-600 hover:text-blue-500 hover:scale-110 transition duration-300" /> },
    { name: 'Stripe', icon: <FaStripe className="w-12 h-12 md:h-20 md:w-20 text-gray-600 hover:text-indigo-500 hover:scale-110 transition duration-300" /> },
    { name: 'Amazon', icon: <FaAmazon className="w-12 h-12 md:h-20 md:w-20 text-gray-600 hover:text-yellow-500 hover:scale-110 transition duration-300" /> },
   
  ];

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Big Companies Are Here</h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          and quantum mechanics.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-10 md:gap-40 mt-8">
        {companies.map((company, index) => (
          <div key={index} className="text-center">
            {company.icon}
            <p className="mt-4 text-gray-600 text-sm font-bold">{company.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BigCompanies;
