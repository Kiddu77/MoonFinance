import React from 'react';
import Home from '../components/Home'; // Adjust the path if necessary
import Faq from '@/app/components/Faq';
import Recognitions from '@/app/components/Recognitions';
import Solutions from '@/app/components/Solutions';
import GetInTouch from '@/app/components/GetInTouch';
import Footer from '@/app/components/Footer';

const HomePage: React.FC = () => {
  return (
    <div>
      <Home />
      <Solutions />
      <Recognitions />
      <Faq />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default HomePage;
