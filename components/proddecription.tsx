import React from "react";

const ProductDescription: React.FC = () => {
  return (
    <div className="w-full mx-auto p-8 space-y-8">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-gray-800 text-center md:text-left">
        Product Description
      </h2>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://placehold.co/600x400/EEE/31343C"
            alt="Product preview"
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <p className="text-gray-600 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            egestas augue eu purus vehicula, vitae congue est tincidunt. Ut
            sodales bibendum sapien, et malesuada turpis tincidunt in. Vivamus
            eleifend felis vel elit ultrices tempus. Mauris et felis arcu.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Curabitur volutpat neque nec orci pharetra, non luctus mauris
            tincidunt. Nullam in massa turpis. Aliquam ac sagittis justo, sit
            amet pretium velit. Fusce at neque fermentum, aliquet metus vel,
            convallis eros.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Donec scelerisque consectetur dolor, in vehicula orci blandit sed.
            In vitae erat ut nisi scelerisque mollis. Pellentesque vitae felis
            vel ligula ultricies eleifend. Cras fringilla tortor eget justo
            vehicula, eget vehicula est vehicula. Ut consequat auctor nisl at
            fermentum.
          </p>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-8">
        <button className="bg-sky-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-sky-600 transition">
          Add to Cart
        </button>
        <button className="border border-gray-300 text-gray-700 py-3 px-6 rounded-lg shadow-md hover:border-gray-400 hover:bg-gray-100 transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ProductDescription;
