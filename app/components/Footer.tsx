import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Reach us here!</h3>
          <div className="flex flex-col space-y-2">
            <Link href="https://www.instagram.com" className="flex items-center">
              <Instagram className="mr-2" size={20} />
              Instagram
            </Link>
            <Link href="https://www.linkedin.com" className="flex items-center">
              <Linkedin className="mr-2" size={20} />
              LinkedIn
            </Link>
            <Link href="https://www.twitter.com" className="flex items-center">
              <Twitter className="mr-2" size={20} />
              Twitter
            </Link>
          </div>
        </div>

        <div className="text-center mb-6 md:mb-0">
          <p className="mb-2">The Suggested ratios are for research purposes only.</p>
          <p className="mb-2">KOINAI TECH PVT.LTD</p>
          <p>CIN: U66309GJ2024PTC147792</p>
        </div>

        <div className="text-right">
          <h3 className="text-xl font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Image src="/path-to-your-logo.svg" alt="MOON FINANCE" width={150} height={50} />
      </div>
    </footer>
  );
};

export default Footer;