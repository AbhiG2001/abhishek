import React from "react";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Logo & Description */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">Techinfo HM Restaurant</h2>
          <p className="text-gray-400 text-sm mt-2">
            Serving delicious flavors with a touch of tradition.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:flex-row gap-6 text-center md:text-left">
          <a href="/menu" className="hover:text-blue-400">Menu</a>
          <a href="/about" className="hover:text-blue-400">About Us</a>
          <a href="/contact" className="hover:text-blue-400">Contact</a>
        </div>

        {/* Social Media */}
        <div className="flex gap-5 mt-6 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="./src/assets/Icons/facebook.svg" alt="Facebook" className="h-6 hover:scale-110 transition-transform" />
            {/* <FacebookRoundedIcon/> */}
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="./src/assets/Icons/twitter.svg" alt="Twitter" className="h-6 hover:scale-110 transition-transform" />
            {/* <TwitterIcon/> */}
          </a>
          
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="./src/assets/Icons/youtube.svg" alt="Youtube" className="h-6 hover:scale-110 transition-transform" />
            {/* <YouTubeIcon/> */}
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="./src/assets/Icons/instagram.svg" alt="Instagram" className="h-6 hover:scale-110 transition-transform" />
            {/* <InstagramIcon/> */}
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        © 2025 Techinfo HM Restaurant | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;