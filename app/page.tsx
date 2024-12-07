
// app/page.tsx
"use client"; // Mark this file as a client component

import React, { useEffect, useState } from 'react';
import Home from './pages/Home/page';
import LoginPage from './pages/login/page';
import SignUpPage from './pages/signup/page';

const App = () => {
  const [route, setRoute] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRoute(window.location.pathname); // Access window safely after client-side rendering
    }
  }, []);

  switch (route) {
    case '/login':
      return <LoginPage />;
    case '/signup':
      return <SignUpPage />;
    default:
      return <Home />;
  }
};

export default App;
