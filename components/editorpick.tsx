import React from "react";

const EditorPick = () => {
  return (
    <div className="bg-white py-10 px-5">
      <h2 className="text-center text-xl font-bold mb-2">EDITOR'S PICK</h2>
      <p className="text-center text-gray-500 mb-6">
        Problems trying to resolve the conflict between
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Men */}
        <div className="relative group">
          <img
            src="https://via.placeholder.com/300" // Replace with your image source
            alt="Men"
            className="w-full h-60 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-50">
            <span className="text-white text-lg font-semibold">MEN</span>
          </div>
        </div>

        {/* Women */}
        <div className="relative group">
          <img
            src="https://via.placeholder.com/300" // Replace with your image source
            alt="Women"
            className="w-full h-60 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-50">
            <span className="text-white text-lg font-semibold">WOMEN</span>
          </div>
        </div>

        {/* Accessories */}
        <div className="relative group">
          <img
            src="https://via.placeholder.com/300" // Replace with your image source
            alt="Accessories"
            className="w-full h-60 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-50">
            <span className="text-white text-lg font-semibold">
              ACCESSORIES
            </span>
          </div>
        </div>

        {/* Kids */}
        <div className="relative group">
          <img
            src="https://via.placeholder.com/300" // Replace with your image source
            alt="Kids"
            className="w-full h-60 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-50">
            <span className="text-white text-lg font-semibold">KIDS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPick;