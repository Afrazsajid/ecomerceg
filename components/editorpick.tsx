'use client';

import React from 'react';

const EditorsPick = () => {
  return (
    <section className="max-w-screen-lg mx-auto py-8 mt-11">
      {/* Section Heading */}
      <h2 className="text-center text-gray-800 text-2xl font-bold uppercase mb-2">
        Editor's Pick
      </h2>
      <p className="text-center text-gray-500 text-sm mb-6 tracking-widest font-semibold">
        Problems trying to resolve the conflict between
      </p>

      {/* Layout */}
      <div className="md:grid md:grid-cols-4 md:gap-4 flex flex-col gap-4">
        {/* Men */}
        <div className="relative group md:col-span-2 md:row-span-2 overflow-hidden rounded shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1614495039368-525273956716?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Men"
            className="w-full h-auto rounded object-cover md:w-full md:h-full"
          />
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 px-4 py-2 text-black text-lg font-bold">
            Men
          </div>
        </div>

        {/* Women */}
        <div className="relative group md:col-span-1 md:row-span-2 overflow-hidden rounded shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1616847220575-31b062a4cd05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fHww"
            alt="Women"
            className="w-full h-auto rounded object-cover md:w-full md:h-full"
          />
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 px-4 py-2 text-black text-lg font-bold">
            Women
          </div>
        </div>

        {/* Accessories */}
        <div className="relative group md:col-span-1 md:row-span-1 overflow-hidden rounded shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <img
            src="https://plus.unsplash.com/premium_photo-1723549679890-ca13112dc50a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWNjZXNvaWVyJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Accessories"
            className="w-full h-auto rounded object-cover md:w-full md:h-full"
          />
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 px-4 py-2 text-black text-lg font-bold">
            Accessories
          </div>
        </div>

        {/* Kids */}
        <div className="relative group md:col-span-1 md:row-span-1 overflow-hidden rounded shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1529776292731-c2246c65df5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2lkcyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D"
            alt="Kids"
            className="w-full h-auto rounded object-cover md:w-full md:h-full"
          />
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 px-4 py-2 text-black text-lg font-bold">
            Kids
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorsPick;