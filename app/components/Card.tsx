import React from 'react';
import Image, { StaticImageData } from 'next/image';
// import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import img4 from "@/app/assets/img4.svg";
import img5 from "@/app/assets/img5.svg";



interface CardProps {
  name: string;
  job: string;
  imageSrc: string | StaticImageData;
  linkedin: string;
  instagram: string;
}

const Card: React.FC<CardProps> = ({ name, job, imageSrc, linkedin, instagram }) => {
  return (
    <div className="flex flex-col md:flex-row bg-black text-white rounded-lg shadow-lg p-6 mb-8">
      {/* Image on the left */}
      <div className="md:w-1/3 flex justify-center md:justify-start">
        <Image
          src={imageSrc}
          alt={`${name}'s picture`}
          width={120}
          height={120}
          className="rounded-full"
        />
      </div>

      {/* Text and Links on the right */}
      <div className="md:w-2/3 flex flex-col justify-center text-center md:text-left mt-4 md:mt-0 md:ml-6">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-lg text-gray-600">{job}</p>
        <div className="flex justify-center md:justify-start mt-2 space-x-4">
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            {/* <FaLinkedin size={24} /> */}
            <Image
              src={img4}
              alt="LinkedIn"
              width={24}
              height={24}
              className="fill-current text-blue-500"
            />
          </a>
          <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
            {/* <FaInstagram size={24} /> */}
            <Image
              src={img5}
              alt="Twitter"
              width={24}
              height={24}
              className="fill-current text-blue-500"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
