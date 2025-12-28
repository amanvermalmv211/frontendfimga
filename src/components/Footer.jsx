import { FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="w-full bg-white/50 px-6 md:px-12 py-12 text-sm text-gray-300 overflow-x-hidden">

      {/* TOP ROW */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-center justify-between">

        {/* Logo */}
        <h2 className="text-xl font-bold text-white">
          NFTme
        </h2>

        {/* Links */}
        <div className="flex gap-8">
          <a className="hover:text-white cursor-pointer">Explore</a>
          <a className="hover:text-white cursor-pointer">Marketplace</a>
          <a className="hover:text-white cursor-pointer">Artists</a>
          <a className="hover:text-white cursor-pointer">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center font-semibold cursor-pointer hover:bg-gray-200 transition">
            <FaInstagramSquare className="text-black" />
          </div>
          <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center font-semibold cursor-pointer hover:bg-gray-200 transition">
            <ImFacebook className="text-black" />
          </div>
          <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center font-semibold cursor-pointer hover:bg-gray-200 transition">
            <FaTwitter className="text-black" />
          </div>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="my-8 h-px bg-white/10"></div>

      {/* BOTTOM ROW */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-center">
        <span>Privacy policy</span>
        <span className="hidden md:inline">|</span>
        <span>Copyright © Kartik Bansal 2022. All Rights Reserved.</span>
        <span className="hidden md:inline">|</span>
        <span>Terms of service</span>
      </div>

    </footer>
  );
};

export default Footer;