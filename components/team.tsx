import React from "react";
import { Facebook,  Twitter, Instagram } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    { id: 1, img: "/img/team-1.jpg", name: "Full Name", designation: "Designation" },
    { id: 2, img: "/img/team-2.jpg", name: "Full Name", designation: "Designation" },
    { id: 3, img: "/img/team-3.jpg", name: "Full Name", designation: "Designation" },
    { id: 4, img: "/img/team-4.jpg", name: "Full Name", designation: "Designation" },
  ];

  return (
    <div className="container mx-auto py-10">
      <div className="text-center mx-auto mb-10 max-w-xl">
        <h1 className="text-3xl font-bold mb-3">Property Agents</h1>
        <p className="text-gray-600">
          Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-item rounded-lg shadow-lg transition-transform duration-500 hover:scale-105">
            <div className="relative">
              <img className="w-full h-auto object-cover" src={member.img} alt={member.name} />
              <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2 flex justify-center space-x-2">
                <a
                  href="#"
                  className="btn btn-square  text-primary  hover:bg-primary hover:text-white transition-colors duration-300"
                >
                   <Facebook />
                </a>
                <a
                  href="#"
                  className="btn btn-square text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                >
                   <Twitter />
                </a>
                <a
                  href="#"
                  className="btn btn-square bg-white text-primary  hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  <Instagram />
                </a>
              </div>
            </div>
            <div className="text-center p-4 mt-3">
              <h5 className="font-bold text-lg">{member.name}</h5>
              <small className="text-gray-500">{member.designation}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
