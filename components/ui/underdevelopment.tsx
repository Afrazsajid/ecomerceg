import React from "react";

const UnderDevelopment: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <a href="#" className="text-xl font-bold">
            MyWebsite
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto mt-12 p-8 bg-yellow-100 border border-yellow-500 rounded-lg shadow-md">
        <p className="text-center text-xl text-gray-800 font-bold">
          🚧{" "}
          <span className="text-red-600">This website is under development!</span>{" "}
          🚧
        </p>
        <p className="mt-4 text-center text-gray-600">
          We're working hard to bring this site live! Check back soon.
        </p>

        {/* Error Display */}
        <div className="mt-8 p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
          <p className="font-mono">
            Error: Unexpected token <code className="text-red-900">"sanity"</code> in{" "}
            <span className="text-gray-900">./src/components/Header.tsx</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnderDevelopment;
