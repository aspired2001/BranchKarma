import React from 'react';

const Industries = () => {
  // Array of random company names
  const companyNames = [
    'Construction',
    'Consulting',
    'Asset Management',
    'Angel Investing',
    'Agriculture',
    'Consumer Goods',
    'Technology',
  ];

  return (
    <div className="mt-36">
      <h1 className="text-white text-3xl font-customFont ml-32 font-semibold">We Operate In</h1>

      <div className="flex flex-wrap justify-center p-4 mt-14 ">
        {/* Render circle divs */}
        {companyNames.map((company, index) => (
          <div
            key={index}
            className={`card h-[160px] w-[160px] md:w-[160px] bg-gray-500 hover:bg-[#81D8D0] transition-colors duration-300 rounded-full shadow-md m-4 flex justify-center items-center text-white font-bold ${index === 3 ? 'md:col-span-3' : 'md:col-span-1'
              }`}
          >
            {company}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
