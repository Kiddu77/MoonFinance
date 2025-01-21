import React from 'react';
import Image from 'next/image';
import img1 from "@/app/assets/img1.jpg";
import img2 from "@/app/assets/img2.jpg";
import img3 from "@/app/assets/img3.jpg";
import Card from "../components/Card";
import shrey from '@/app/assets/shrey.svg'
import soumil from '@/app/assets/soumil.svg'

const AboutUs: React.FC = () => {
    const teamMembers = [
        {
            name: 'Shrey Baldev',
            job: 'CEO and Co Founder',
            imageSrc: shrey,
            linkedin: 'https://www.linkedin.com/in/shreybaldev/',
            instagram: 'https://x.com/ShreyBaldev'
        },
        {
            name: 'Soumil Binhani',
            job: 'CTO and Co Founder',
            imageSrc: soumil,
            linkedin: 'https://www.linkedin.com/in/soumil-binhani-6528b5270/',
            instagram: 'https://x.com/kiddu7704'
        },
        // Add more team members as needed
    ];

    return (
        <div className="mx-auto p-16 bg-white text-black">
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
                        width={500} // Set appropriate width
                        height={300} // Set appropriate height
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
                        width={500} // Set appropriate width
                        height={300} // Set appropriate height
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
                        width={500} // Set appropriate width
                        height={300} // Set appropriate height
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>
            </div>

            {/* Title for the team */}
            {/* <div className="flex flex-col md:flex-row items-center justify-center mb-8"> */}
            <div className="flex flex-col justify-center items-center mb-8">
                {/* <div className="md:w-2/3 mb-4 md:mb-0 p-6"> */}
                    <p className="text-4xl font-black p-2">Meet the team of</p>
                    <p className="text-4xl font-black p-2 text-[#12C38C]">Moonfinance!!</p>
                {/* </div> */}
            </div>

            {/* Team cards section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-16 m-16 ">
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
    );
};

export default AboutUs;
