import Header from '@/app/components/Header';
import React from 'react';
import Image from 'next/image';

const LoginPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex flex-1">
        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
          <h1 className="text-6xl font-bold mb-8" style={{ color: '#12C38C' }}>Welcome!</h1>
          <form className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="Please enter your email here."
                className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-[#12C38C]"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-[#12C38C]"
              />
            </div>
            <button className="w-full" style={{ backgroundColor: '#12C38C', color: 'white', padding: '12px', borderRadius: '8px', transition: 'background-color 0.3s ease' }}>
              LOGIN
            </button>
          </form>
          <a href="#" className="text-center block mt-4" style={{ color: '#12C38C' }}>Forgot Password?</a>
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-4 text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <p className="text-center mb-4 text-black">Continue with</p>
          <div className="flex justify-center space-x-4 mb-8">
            <button className="p-2 border rounded-full">
            <Image 
              src="https://res.cloudinary.com/dhrvr4sey/image/upload/v1726862669/google_oag3xu.png" 
              alt="Google" 
              className="w-6 h-6" 
              width={24} 
              height={24} 
            />
            </button>
            <button className="p-2 border rounded-full">
            <Image 
              src="https://res.cloudinary.com/dhrvr4sey/image/upload/v1726862670/apple_zmjup3.png" 
              alt="Apple" 
              className="w-6 h-6" 
              width={24} 
              height={24} 
            />
            </button>
            <button className="p-2 border rounded-full">
            <Image 
              src="https://res.cloudinary.com/dhrvr4sey/image/upload/v1726862669/mail_ryfif4.png" 
              alt="Mail" 
              className="w-6 h-6" 
              width={24} 
              height={24} 
            />
            </button>
          </div>
          <p className="text-center text-black">
            Don&#39;t you have an account? <a href="#" style={{ color: '#12C38C' }}>Sign up</a>
          </p>
        </div>
        <div className="w-full md:w-1/2 bg-[#12C38C] flex items-center justify-center p-8">
          <div className="w-full max-w-xl">
          <Image 
            src="https://res.cloudinary.com/dhrvr4sey/image/upload/v1726865117/login_kjpjnz.png" 
            alt="Business growth illustration" 
            className="w-full h-auto object-contain" 
            width={1024} // replace with the actual width of the image
            height={512} // replace with the actual height of the image
          />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;