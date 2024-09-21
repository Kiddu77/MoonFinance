import React from 'react';

const Header = () => {
  return (
     <header className="flex justify-between items-center p-4">
     <div className="flex items-center">
       <img src="https://res.cloudinary.com/dhrvr4sey/image/upload/v1726864546/Logo_cla0fe.png" alt="Moon Finance Logo" className="h-6 w-6 mr-2" />
       <span className="font-bold text-black">MOON FINANCE</span>
     </div>
     <nav>
       <ul className="flex space-x-14 text-black">
         <li>Home</li>
         <li>About</li>
         <li>Services</li>
         <li>Blogs</li>
         <li>Contact Us</li>
       </ul>
     </nav>
     <div className="flex space-x-2">
     <button className="px-4 py-2 border rounded-full border-black text-black">Log in</button>
    <button className="px-4 py-2 border rounded-full border-black text-black">Sign up</button>
     </div>
   </header>
  );
};

export default Header;