'use client';

import React, { useState } from 'react';


const GetInTouch: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex flex-col md:flex-row p-8 bg-white rounded-lg shadow-lg">
      <div className="md:w-1/2 pr-8">
        <h1 className="text-4xl font-bold mb-4 text-black">Get in Touch</h1>
        <p className="text-lg mb-4 text-black">
          Hey! We are looking forward to get in touch with you and answer your queries
        </p>
        <div className="border-l-4 border-green-400 pl-4 mb-6">
          <p className="text-sm text-black">
            Receive investment strategies that rival those of top advisors, designed for
            precision and success.ceive investment strategies that rival those of top advisors,
            designed for precision and success.ceive
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: '📞', label: 'Phone Number', value: '+91 6353332891' },
            { icon: '📞', label: 'Phone Number', value: '+91 9867578878' },
            { icon: '✉️', label: 'Email', value: 'shrey.moonfinance@gmail.com' },
            { icon: '🏠', label: 'Location', value: 'VIT Vellore' }
          ].map((item, index) => (
            <div key={index} className="flex items-center bg-green-100 rounded-lg p-3">
              <div className="bg-green-400 text-white p-2 rounded-full mr-3">{item.icon}</div>
              <div>
                <p className="font-semibold text-black">{item.label}</p>
                <p className="text-sm text-gray-600">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter valid Email address"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            value={formData.email}
            onChange={handleInputChange}
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            className="w-full p-2 mb-4 border border-gray-300 rounded h-32"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
          <button
            type="submit"
            className="bg-green-400 text-white px-6 py-2 rounded-full hover:bg-green-500 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;