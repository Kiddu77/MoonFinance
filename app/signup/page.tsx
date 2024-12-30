"use client"
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { signup } from '@/server/auth/signup';
import { useSignUp } from "@clerk/nextjs";

const SignUpPage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { signUp, isLoaded } = useSignUp();
  const [verificationStep, setVerificationStep] = useState<'form' | 'otp'>('form');
  const [otpCode, setOtpCode] = useState('');
  const [pendingVerification, setPendingVerification] = useState(false);
  const [formData, setFormData] = useState<{
    username: string;
    phone: string;
    email: string;
    password: string;
  } | null>(null);
  const [error, setError] = useState('');

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!isLoaded) {
      setError('Authentication system is loading...');
      return;
    }

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const username = formData.get('username') as string;
      const phoneNumber = formData.get('phone') as string;
      const email = formData.get('email') as string;
      const password = formData.get('password') as string;

      if(!username || !phoneNumber || !email || !password) {
        setError('All fields are required');
        return;
      }

      try {
        // First create the user with Clerk
        const clerkResponse = await signUp.create({
          username,
          phoneNumber,
          password,
        });

        // After successful creation, add email as identifier
        await clerkResponse.update({
          emailAddress: email,
        });

        // Store form data for later use
        setFormData({ username, phone: phoneNumber, email, password });
        
        // Send phone verification
        await clerkResponse.preparePhoneNumberVerification();
        setPendingVerification(true);
        
        // Move to OTP verification step
        setVerificationStep('otp');
      } catch (err: any) {
        console.error('Signup error:', err);
        setError(err.message || 'Failed to create account. Please try again.');
      }
    }
  }

  const handleVerifyOTP = async () => {
    if (!isLoaded || !signUp) {
      setError('Authentication system is loading...');
      return;
    }

    try {
      setError('');
      
      const result = await signUp.attemptPhoneNumberVerification({
        code: otpCode,
      });

      if (result.status === "complete" && formData) {
        // Create user in your database
        try {
          const user = await signup(formData);
          console.log('User created:');
          
          // Redirect to dashboard or home page
          window.location.href = "/";
        } catch (err: any) {
          console.error('Database user creation error:', err);
          setError('Account verified but failed to create user profile. Please contact support.');
        }
      } else {
        setError('Verification incomplete. Please try again.');
      }
    } catch (err: any) {
      console.error('Verification error:', err);
      setError(err.message || 'Invalid verification code. Please try again.');
    }
  }

  const resendOTP = async () => {
    if (!isLoaded || !signUp) {
      setError('Authentication system is loading...');
      return;
    }

    try {
      await signUp.preparePhoneNumberVerification();
      setError('Verification code resent successfully!');
    } catch (err: any) {
      console.error('Resend OTP error:', err);
      setError(err.message || 'Failed to resend code. Please try again.');
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
            <h1 className="text-5xl font-bold mb-8" style={{ color: '#12C38C' }}>
              {verificationStep === 'form' ? 'Sign up' : 'Verify Phone'}
            </h1>

            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            {verificationStep === 'form' ? (
              <form ref={formRef} onSubmit={handleSignUp} className='text-black'>
                <div className="mb-4">
                  <label htmlFor="username" className="block text-gray-700 mb-2">Username:</label>
                  <input 
                    name="username" 
                    type="text" 
                    id="username" 
                    className="w-full p-2 border border-gray-300 rounded" 
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number:</label>
                  <input 
                    name="phone" 
                    type="tel" 
                    id="phone" 
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="+1234567890"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
                  <input 
                    name="email" 
                    type="email" 
                    id="email" 
                    className="w-full p-2 border border-gray-300 rounded" 
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="password" className="block text-gray-700 mb-2">Password:</label>
                  <input 
                    name="password" 
                    type="password" 
                    id="password" 
                    className="w-full p-2 border border-gray-300 rounded"
                    minLength={8}
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full text-white py-2 rounded-md transition duration-300" 
                  style={{ backgroundColor: '#12C38C' }}
                  disabled={!isLoaded}
                >
                  Create Account
                </button>
              </form>
            ) : (
              <div className="space-y-4">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Verification Code:</label>
                  <input
                    type="text"
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter verification code"
                  />
                </div>
                <button
                  onClick={handleVerifyOTP}
                  className="w-full text-white py-2 rounded-md transition duration-300"
                  style={{ backgroundColor: '#12C38C' }}
                  disabled={!isLoaded || otpCode.length < 4}
                >
                  Verify Code
                </button>
                <button
                  onClick={resendOTP}
                  className="w-full bg-gray-100 text-gray-700 py-2 rounded-md hover:bg-gray-200 transition duration-300"
                  disabled={!isLoaded}
                >
                  Resend Code
                </button>
                <button
                  onClick={() => setVerificationStep('form')}
                  className="w-full bg-gray-100 text-gray-700 py-2 rounded-md hover:bg-gray-200 transition duration-300"
                >
                  Back
                </button>
              </div>
            )}

            {verificationStep === 'form' && (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;