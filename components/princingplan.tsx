import React from 'react';

const PricingPlans = () => {
  return (
    <section className="px-4 py-8 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Simple, transparent pricing</h1>
          <p className="text-lg text-gray-600">No contracts. No surprise fees.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Free Plan */}
          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 border-2 border-blue-500 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-primary rounded-full"></div>
              </div>
              <h2 className="ml-4 text-xl font-semibold text-gray-900">Free</h2>
            </div>
            <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</p>
            <div className="text-2xl font-bold text-gray-900 mb-4">$0<span className="text-base font-normal text-gray-600">/ month</span></div>
            <ul className="mb-6 space-y-3">
              <li className="flex items-center text-gray-900">
                <span className="w-5 h-5 inline-block bg-primary rounded-full mr-3"></span>Unlimited product updates

              </li>
              <li className="flex items-center text-gray-900">
                <span className="w-5 h-5 inline-block bg-primary rounded-full mr-3"></span>Own analytics platform
              </li>
              <li className="flex items-center text-gray-400">
                <span className="w-5 h-5 inline-block bg-gray-300 rounded-full mr-3"></span>Chat support
              </li>
              <li className="flex items-center text-gray-400">
                <span className="w-5 h-5 inline-block bg-gray-300 rounded-full mr-3"></span>Mobile application
              </li>
              <li className="flex items-center text-gray-400">
                <span className="w-5 h-5 inline-block bg-gray-300 rounded-full mr-3"></span>Unlimited users
              </li>
            </ul>
            <button className="w-full py-2 bg-primary text-white font-semibold rounded-lg">Get Started</button>
          </div>

          {/* Pro Plan */}
          <div className="border rounded-lg p-6 bg-white shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 border-2 border-blue-500 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-primary rounded-lg"></div>
              </div>
              <h2 className="ml-4 text-xl font-semibold text-gray-900">Pro</h2>
              <div className="ml-auto bg-yellow-400 text-white text-sm px-3 py-1 rounded-full">Best Value</div>
            </div>
            <p className="text-gray-600 mb-6">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            <div className="text-2xl font-bold text-gray-900 mb-4">$18<span className="text-base font-normal text-gray-600">/ month</span></div>
            <ul className="mb-6 space-y-3">
              <li className="flex items-center text-gray-900">
                <span className="w-5 h-5 inline-block bg-primary rounded-full mr-3"></span>Unlimited product updates

              </li>
              <li className="flex items-center text-gray-900">
                <span className="w-5 h-5 inline-block bg-primary rounded-full mr-3"></span>Own analytics platform
              </li>
              <li className="flex items-center text-gray-900">
                <span className="w-5 h-5 inline-block bg-primary rounded-full mr-3"></span>Chat support
              </li>
              <li className="flex items-center text-gray-400">
                <span className="w-5 h-5 inline-block bg-gray-300 rounded-full mr-3"></span>Mobile application
              </li>
              <li className="flex items-center text-gray-400">
                <span className="w-5 h-5 inline-block bg-gray-300 rounded-full mr-3"></span>Unlimited users
              </li>
            </ul>
            <button className="w-full py-2 bg-primary text-white font-semibold rounded-lg">Get Started</button>
          </div>

          {/* Enterprise Plan */}
          <div className="border rounded-lg p-6 bg-white text-black">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" fill="none" stroke="blue" strokeWidth="2">
                  <path d="M3.813 11.077L21 1.155l17.187 9.922v19.846L21 40.845 3.813 30.923V11.077Z" />
                  <circle cx="21" cy="21" r="8" />
                </svg>
              </div>
              <h2 className="ml-4 text-xl font-semibold">Enterprise</h2>
            </div>
            <p className="text-black mb-6">Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
            <div className="text-2xl font-bold mb-4">Let's Talk</div>
            <ul className="mb-6 space-y-3">
              <li className="flex items-center">
                <span className="w-5 h-5 inline-block bg-primary rounded-full mr-3"></span>Unlimited product updates

              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 inline-block bg-primary rounded-full mr-3"></span>Own analytics platform
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 inline-block bg-primary rounded-full mr-3"></span>Chat support
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 inline-block bg-primary rounded-full mr-3"></span>Mobile application
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 inline-block bg-primary rounded-full mr-3"></span>Unlimited users
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 inline-block bg-primary rounded-full mr-3"></span>Customize Panel
              </li>
            </ul>
            <button className="w-full py-2 bg-primary text-white font-semibold rounded-lg">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
