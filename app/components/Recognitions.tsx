import React from 'react';
import Image from 'next/image';
import image30 from "@/app/assets/image 30.png";
import image32 from "@/app/assets/image 32.png";
import NSRCEL from "@/app/assets/NSRCEL Main logo 1.png";

interface RecognitionItem {
  name: string;
  logo: React.ReactNode;
}

const Recognitions: React.FC = () => {
  const recognitions: RecognitionItem[] = [
    { name: 'VIT', logo: <Image src={image32} alt="VIT Logo" width={128} height={128} /> },
    { name: 'Microsoft for Startups', logo: <Image src={image30} alt="Microsoft for Startups Logo" width={128} height={128} /> },
    { name: 'NSRCEL', logo: <Image src={NSRCEL} alt="NSRCEL Logo" width={128} height={128} /> },
  ];

  return (
    <div className="bg-white py-16 px-6">
      <h2 className="text-center text-3xl font-semibold text-gray-800 mb-12">We Are Recognized by</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {recognitions.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 shadow-lg rounded-lg bg-gray-100"
          >
            {item.logo}
            <p className="text-center mt-6 text-xl font-medium text-gray-700">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recognitions;
