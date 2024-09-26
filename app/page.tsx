// app/page.tsx

import React from 'react';
import LoginPage from './pages/login/page'; // Correctly import the Login page component
import Home from './pages/Home/Home';
import Footer from './pages/Home/Footer';
import GetInTouch from './pages/Home/GetInTouch';
import Faq from './pages/Home/Faq';

interface HomePageProps {
  title: string;
  description: string;
}

// Fetching data in the component
const HomePage = async () => {
  // Simulate data fetching (could be from an API, database, etc.)
  const data: HomePageProps = {
    title: 'Welcome to Moon Finance!',
    description: 'This is a basic Next.js page using the new app directory.',
  };

  return (
    <><Home /><Faq /><GetInTouch /><Footer /></>
  );
};

export default HomePage;

