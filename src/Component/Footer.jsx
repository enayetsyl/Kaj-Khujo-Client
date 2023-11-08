import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-[#e0e0e0] h-80">
      <div className="container pt-4 lg:pt-32 mx-auto flex lg:flex-row flex-col items-center justify-center gap-5">
        <div className="w-full sm:w-1/2 md:w-1/3">
          {/* Left side with logo and website name */}
          <div className="flex items-center justify-center">
            <Logo></Logo>
           </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3">
          {/* Middle section with phone number and address */}
          <div className="flex flex-col justify-center items-center sm:text-left mt-3 sm:mt-0">
            <p className="text-black">Phone: <span className='font-bold text-red-600'>01730 19 76 20</span></p>
            <p className="text-black">126, Madina Street, West Bank.</p>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3">
          {/* Right side with social media links */}
          <div className="flex justify-center items-center lg:justify-end mt-3 sm:mt-0">
            <a href="#" className="text-blue-700 text-5xl hover:text-7xl hover:text-blue-900 mr-4">
              <FaFacebook />
            </a>
            <a href="#" className="text-blue-700 text-5xl hover:text-7xl hover:text-white mr-4">
              <FaTwitter />
            </a>
            <a href="#" className="text-red-700 text-5xl hover:text-7xl hover:text-red-900 mr-4">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="container mx-auto mt-4 text-center text-gray-600">
        &copy; {new Date().getFullYear()} Your Website. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

