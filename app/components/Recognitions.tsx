import React from 'react';

interface RecognitionItem {
  name: string;
  logo: React.ReactNode;
}

const Recognitions: React.FC = () => {
  const recognitions: RecognitionItem[] = [
    { name: 'VIT', logo: <div className="bg-gray-200 h-16 w-16 rounded-full"></div> },
    { name: 'Microsoft for Startups', logo: <div className="bg-gray-200 h-16 w-16 rounded-full"></div> },
    { name: 'Ecount', logo: <div className="bg-gray-200 h-16 w-16 rounded-full"></div> },
  ];

  return (
    <div className="bg-white py-10 px-4">
      <h2 className="text-center text-2xl font-semibold mb-8">We Are Recognized by</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {recognitions.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 shadow-lg rounded-lg bg-gray-50"
          >
            {item.logo}
            <p className="text-center mt-4 text-lg font-medium">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recognitions;
