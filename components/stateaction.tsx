import React from "react";

const StatsSection = () => {
  const stats = [
    { value: "15K", label: "Happy Customers" },
    { value: "150K", label: "Monthly Visitors" },
    { value: "15", label: "Countries Worldwide" },
    { value: "100+", label: "Top Partners" },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900">{stat.value}</h3>
              <p className="text-sm md:text-base text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
