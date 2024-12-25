import React from 'react';
import { User, Shield, Sliders, Layout, BarChart } from 'lucide-react';

const Solutions = () => {
  const features = [
    {
      icon: User,
      title: 'Expert-Level Guidance',
      description:
        'Receive investment strategies that rival those of top advisors, tailored to your unique financial goals.',
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description:
        'Your investments and personal data are protected with state-of-the-art encryption protocols.',
    },
    {
      icon: Sliders,
      title: 'Customizable Experience',
      description:
        'Enjoy a platform that molds to your preferences with flexible investment options.',
    },
    {
      icon: Layout,
      title: 'User-Friendly Interface',
      description: 'Navigate our intuitive platform with ease, whether you are a novice or a pro.',
    },
    {
      icon: BarChart,
      title: 'Efficient Management',
      description:
        'Our AI-driven insights help you manage your investments, maximizing returns and minimizing risks.',
    },
  ];

  return (
    <div className="bg-white p-6 md:p-8">
      {/* Introduction Section */}
      <div className="bg-emerald-600 rounded-lg p-6 md:p-8 text-white mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">What we do?</h2>
        <p className="mb-6 text-sm md:text-base">
          Welcome to MoonFinance! Our advanced AI begins by asking a few simple
          questions about your investment details and priorities. Moon analyzes
          your investor profile and provides tailored recommendations made for
          you. We deliver personalized insights and strategies aligned with your
          financial goals. Unlock your financial potential with Moon, your expert
          in crafting customized investment plans.
        </p>
        <div className="flex items-center justify-between">
          <div className="w-24 h-24 bg-emerald-500 rounded-full"></div>
          <div className="flex flex-col items-end space-y-2">
            <div className="w-12 h-12 bg-yellow-400 rounded-full"></div>
            <div className="w-16 h-8 bg-white rounded"></div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 shadow-lg rounded-lg bg-gray-50"
          >
            <feature.icon className="w-12 h-12 text-emerald-600 mb-3" />
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
