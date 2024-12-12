// app/page.tsx
"use client"; // Mark this file as a client component

import React, { useEffect, useState } from 'react';
import Home from './pages/home/page';
import LoginPage from './pages/login/page';
import SignUpPage from './pages/signup/page';
import AboutUs from './pages/aboutus/page';

const App = () => {
  const [route, setRoute] = useState('');

  useEffect(() => {
    // Make sure we are on the client side
    if (typeof window !== 'undefined') {
      setRoute(window.location.pathname); // Access window safely after client-side rendering
    }
  }, []); // This useEffect runs once after the component is mounted

  useEffect(() => {
    // This useEffect tracks changes to the window location safely on the client side
    if (typeof window !== 'undefined' && route !== window.location.pathname) {
      setRoute(window.location.pathname); // Ensure route gets updated on URL change
    }
  }, [route]); // Update route when the pathname changes

  switch (route) {
    case '/pages/login':
      return <LoginPage />;
    case '/pages/signup':
      return <SignUpPage />;
    case '/pages/aboutus':
      return <AboutUs />
    case '/pages/home':
      return <Home />
    default:
      return <Home />;
  }
};

export default App;
