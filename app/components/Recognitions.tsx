import React from 'react';

interface RecognitionItem {
  name: string;
  logo: React.ReactNode;
}

const Recognitions: React.FC = () => {
  const recognitions: RecognitionItem[] = [
    { name: 'VIT', logo: <div className="bg-gray-200 h-16 w-16"></div> },
    { name: 'Microsoft for Startups', logo: <div className="bg-gray-200 h-16 w-16"></div> },
    { name: 'Ecount', logo: <div className="bg-gray-200 h-16 w-16"></div> },
  ];

  return (
    <div className="bg-white py-10">
      <h2 className="text-center text-xl font-semibold mb-6">We Are Recognized by</h2>
      <div className="flex justify-center items-center space-x-10">
        {recognitions.map((item, index) => (
          <div key={index} className="p-4 shadow-lg rounded-lg">
            {item.logo}
            <p className="text-center mt-2">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recognitions;