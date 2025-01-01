// signup/page.tsx

"use client"
import React, {useRef} from 'react';
import Image from 'next/image';
import {signup} from '@/server/auth/signup';
import { useRouter } from "next/navigation";

const SignUpPage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null); // Create a ref for the form
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formRef.current) {
      const formData = new FormData(formRef.current);

      // You can now access the form data like this:
      const username = formData.get('username') as string | null;
      const phone = formData.get('phone') as string | null;
      const email = formData.get('email') as string | null;
      const password = formData.get('password') as string | null;

      if(!username || !phone || !email || !password){
        return; // toaster component to show error
      }

      const user = await signup({ username, phone, email, password });
      if (user) {
        router.push('/otp'); // Redirect to OTP page
      }
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex flex-col md:flex-row h-screen">
        <div className="w-full md:w-1/2 h-full">
          <div className="w-full h-full relative">
            <Image
              src="https://res.cloudinary.com/dhrvr4sey/image/upload/v1726863366/signup_d575io.png"
              alt="Sign up illustration"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-md">
            <h1 className="text-5xl font-bold mb-8" style={{ color: '#12C38C' }}>Sign up</h1>
            <form ref={formRef} onSubmit={handleSignUp} className='text-black'>
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 mb-2">Username:</label>
                <input name="username" type="text" id="username" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number:</label>
                <input name="phone" type="tel" id="phone" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
                <input name="email" type="email" id="email" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 mb-2">Password:</label>
                <input name="password" type="password" id="password" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <button type="submit" className="w-full text-white py-2 rounded-md transition duration-300" style={{ backgroundColor: '#12C38C' }}>
                Create Account
              </button>
            </form>
            <div className="mt-6 flex items-center justify-between">
              <button className="flex items-center text-gray-700">
                <Image
                  src="https://res.cloudinary.com/dhrvr4sey/image/upload/v1726862669/google_oag3xu.png"
                  alt="Google logo"
                  width={20}
                  height={20}
                />
                <span className="ml-2">Sign up with Google</span>
              </button>
              <button className="flex items-center text-gray-700">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
