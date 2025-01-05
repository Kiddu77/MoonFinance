import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        {/* Social Media Links */}
        <div className="flex justify-center md:justify-start space-x-4">
          <Link href="https://www.instagram.com/moonfinance.in" className="hover:text-gray-400">
            <Instagram size={24} />
          </Link>
          <Link href="https://www.linkedin.com/company/moon-finance-s/" className="hover:text-gray-400">
            <Linkedin size={24} />
          </Link>
          <Link href="https://www.twitter.com" className="hover:text-gray-400">
            <Twitter size={24} />
          </Link>
        </div>

        {/* Disclaimer Section */}
        <div className="text-center">
          <p className="mb-2">The suggested ratios are for research purposes only.</p>
          <p className="mb-2">KOINAI TECH PVT. LTD</p>
          <p>CIN: U66309GJ2024PTC147792</p>
        </div>

        {/* Company Links */}
        <div className="flex flex-col items-center md:items-end space-y-2">
          <ul className="text-center md:text-right">
            <li>
              <Link href="/about" className="hover:text-gray-400">
                About Us
              </Link>
            </li>
            {/* <li>
              <Link href="/blogs" className="hover:text-gray-400">
                
              </Link>
            </li> */}
            <li>
              <Link href="/home" className="hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Logo Section */}
      <div className="mt-8 text-center">
        <Image
          src="assets/Footerlogo.svg"
          alt="MOON FINANCE"
          width={150}
          height={50}
          className="mx-auto"
        />
      </div>
    </footer>
  );
};

export default Footer;
