import React from 'react';
import Image from 'next/image';
import Header from '@/app/components/Header';
import img1 from "@/app/assets/img1.jpg";
import img2 from "@/app/assets/img2.jpg";
import img3 from "@/app/assets/img3.jpg";
import Card from '@/app/components/Card';
import img6 from '@/app/assets/img6.jpg';

const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      job: 'Software Engineer',
      imageSrc: img6,
      linkedin: 'https://www.linkedin.com/in/johndoe',
      instagram: 'https://www.instagram.com/johndoe',
    },
    {
      name: 'Jane Smith',
      job: 'Product Manager',
      imageSrc: img6,
      linkedin: 'https://www.linkedin.com/in/janesmith',
      instagram: 'https://www.instagram.com/janesmith',
    },
    {
      name: 'Jane Smith',
      job: 'Product Manager',
      imageSrc: img6,
      linkedin: 'https://www.linkedin.com/in/janesmith',
      instagram: 'https://www.instagram.com/janesmith',
    },
    {
      name: 'Jane Smith',
      job: 'Product Manager',
      imageSrc: img6,
      linkedin: 'https://www.linkedin.com/in/janesmith',
      instagram: 'https://www.instagram.com/janesmith',
    },
    // Add more team members as needed
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* <Header /> */}

      {/* Main content */}
      <div className="container mx-auto p-16 bg-white text-black">
        {/* First Paragraph with image to the right */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="md:w-2/3 mb-4 md:mb-0 p-6">
            <p className="text-4xl font-black p-2">About Us</p>
            <p className="text-2xl p-2">
              Moon Finance is your AI investment advisory, which is built to give professional investment advisory services to every Indian investor at their fingertip. Our service is non-partial & specially curated for your unique investment needs.
            </p>
          </div>
          <div className="md:w-1/3 md:ml-4">
            <Image
              src={img3}
              alt="Image 1"
              width={500}
              height={300}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Second Paragraph with image to the left */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between mb-8">
          <div className="md:w-2/3 mb-4 md:mb-0 p-6">
            <p className="text-3xl font-black p-2">Our mission: Empowering India to invest smarter, unlocking growth with every step.</p>
            <p className="text-2xl p-2">
              To be the one-stop investment platform for planning & execution for Indian investors who are investing for a better future.
            </p>
          </div>
          <div className="md:w-1/3 md:mr-4">
            <Image
              src={img1}
              alt="Image 2"
              width={500}
              height={300}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Third Paragraph with image to the right */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-4 md:mb-0 p-6">
            <p className="text-4xl font-black p-2">Our Journey</p>
            <p className="text-2xl p-2">
              We are a motivated team who are solving the problem they faced in their own investment journey.
            </p>
          </div>
          <div className="md:w-1/3 md:ml-4">
            <Image
              src={img2}
              alt="Image 3"
              width={500}
              height={300}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Title for the team */}
        <div className="flex flex-col justify-center items-center mb-8">
          <p className="text-4xl font-black p-2">Meet the team of</p>
          <p className="text-4xl font-black p-2 text-[#12C38C]">Moonfinance!!</p>
        </div>

        {/* Team cards section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-16 m-16">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              name={member.name}
              job={member.job}
              imageSrc={member.imageSrc}
              linkedin={member.linkedin}
              instagram={member.instagram}
            />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default AboutUs;
