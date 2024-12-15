import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Header: React.FC = () => {
  // const router = useRouter()
  return (
    <header className="flex justify-between items-center p-4 bg-white">
      <div className="flex items-center">
        <Image
          src="https://res.cloudinary.com/dhrvr4sey/image/upload/v1726864546/Logo_cla0fe.png"
          alt="Moon Finance Logo"
          width={24}
          height={24}
        />
        <span className="font-bold text-black ml-2">MOON FINANCE</span>
      </div>
      <nav>
        <ul className="flex space-x-14 text-black">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li>Services</li>
          <li>Blogs</li>
          <li><Link href="/footer">Contact Us</Link></li>
        </ul>
      </nav>
      <div className="flex space-x-2">
        <Link href="/login" className="px-4 py-2 border rounded-full border-black text-black">Log in</Link>
        <Link href="/signup" className="px-4 py-2 border rounded-full border-black text-black">Sign up</Link>
      </div>
    </header>
  );
};

export default Header;