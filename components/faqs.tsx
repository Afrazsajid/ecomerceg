'use client'
import React, { useState } from "react";

const Accordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions: string[] = [
    "Why Work better together",
    "Why OpenType features and Variable fonts",
    "What payment methods do you accept?",
    "Do you offer free shipping?",
    "Can I return or exchange items?",
  ];

  const answers: string[] = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    "We accept a variety of secure payment methods including credit/debit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    "We offer free shipping on all orders over a certain amount. For orders below that threshold, a shipping fee will apply based on your location and the shipping method selected.adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    "Yes! We offer a hassle-free return policy within 30 days of your purchase. If you're not satisfied with your purchase, you can return it for a full refund or exchange it for another item.",
  ];

  return (
    <div className="container mx-auto p-14 max-w-full">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {questions.map((question, index) => (
          <div key={index} className="border-b last:border-none">
            <button
              className="w-full text-left flex justify-between items-center py-4 text-gray-600 hover:text-blue-500 focus:outline-none"
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
            >
              <span className="text-lg font-medium">{question}</span>
              <span
                className={`transform ${
                  activeIndex === index ? "rotate-45" : "rotate-0"
                } transition-transform duration-200`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  ></path>
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-500 mt-2">{answers[index]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
