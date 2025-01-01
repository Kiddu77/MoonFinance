"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { signup } from "@/server/auth/signup";
import { useSignUp } from "@clerk/nextjs";

// ✅ Define types for Form Data
type FormData = {
  username: string;
  phone: string;
  email: string;
  password: string;
};

const SignUpPage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { signUp, isLoaded } = useSignUp();

  // State Management
  const [verificationStep, setVerificationStep] = useState<"form" | "otp">("form");
  const [otpCode, setOtpCode] = useState<string>("");
  const [pendingVerification, setPendingVerification] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [error, setError] = useState<string>("");

  // ✅ Handle Sign Up
  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!isLoaded) {
      setError("Authentication system is loading...");
      return;
    }

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const username = formData.get("username") as string;
      const phoneNumber = formData.get("phone") as string;
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      if (!username || !phoneNumber || !email || !password) {
        setError("All fields are required");
        return;
      }

      try {
        // Clerk Signup
        const clerkResponse = await signUp.create({
          username,
          phoneNumber,
          password,
        });

        await clerkResponse.update({ emailAddress: email });

        setFormData({ username, phone: phoneNumber, email, password });
        await clerkResponse.preparePhoneNumberVerification();
        setPendingVerification(true);
        setVerificationStep("otp");
      } catch (err: unknown) {
        console.error("Signup error:", err);
        if (err instanceof Error) {
          setError(err.message || "Failed to create account. Please try again.");
        } else {
          setError("Failed to create account. Please try again.");
        }
      }
    }
  };

  // ✅ Handle OTP Verification
  const handleVerifyOTP = async () => {
    if (!isLoaded || !signUp) {
      setError("Authentication system is loading...");
      return;
    }

    try {
      setError("");

      const result = await signUp.attemptPhoneNumberVerification({ code: otpCode });

      if (result.status === "complete" && formData) {
        try {
          await signup(formData);
          window.location.href = "/";
        } catch (err: unknown) {
          console.error("Database error:", err);
          if (err instanceof Error) {
            setError(err.message || "Account verified, but profile creation failed.");
          }
        }
      } else {
        setError("Verification incomplete. Please try again.");
      }
    } catch (err: unknown) {
      console.error("Verification error:", err);
      if (err instanceof Error) {
        setError(err.message || "Invalid verification code. Please try again.");
      }
    }
  };

  // ✅ Resend OTP
  const resendOTP = async () => {
    if (!isLoaded || !signUp) {
      setError("Authentication system is loading...");
      return;
    }

    try {
      await signUp.preparePhoneNumberVerification();
      setError("Verification code resent successfully!");
    } catch (err: unknown) {
      console.error("Resend OTP error:", err);
      if (err instanceof Error) {
        setError(err.message || "Failed to resend code. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex flex-col md:flex-row h-screen">
        {/* ✅ Left Image Section */}
        <div className="w-full md:w-1/2 h-full relative">
          <Image
            src="https://res.cloudinary.com/dhrvr4sey/image/upload/v1726863366/signup_d575io.png"
            alt="Sign up illustration"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* ✅ Right Form Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-md">
            <h1 className="text-5xl font-bold mb-8 text-green-500">
              {verificationStep === "form" ? "Sign Up" : "Verify Phone"}
            </h1>

            {/* ✅ Error Message */}
            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            {/* ✅ Sign-Up Form */}
            {verificationStep === "form" ? (
              <form ref={formRef} onSubmit={handleSignUp} className="text-black">
                <div className="mb-4">
                  <label htmlFor="username" className="block text-gray-700 mb-2">Username:</label>
                  <input name="username" type="text" id="username" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number:</label>
                  <input name="phone" type="tel" id="phone" className="w-full p-2 border border-gray-300 rounded" placeholder="+1234567890" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
                  <input name="email" type="email" id="email" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-6">
                  <label htmlFor="password" className="block text-gray-700 mb-2">Password:</label>
                  <input name="password" type="password" id="password" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <button type="submit" className="w-full text-white py-2 rounded-md bg-green-500" disabled={!isLoaded}>
                  Create Account
                </button>
              </form>
            ) : (
              // ✅ OTP Verification
              <div>
                <label className="block text-gray-700 mb-2">Verification Code:</label>
                <input
                  type="text"
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter verification code"
                />
                <button onClick={handleVerifyOTP} className="w-full bg-green-500 text-white py-2 rounded-md mt-4">
                  Verify Code
                </button>
                <button onClick={resendOTP} className="w-full bg-gray-200 text-gray-700 py-2 rounded-md mt-2">
                  Resend Code
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
