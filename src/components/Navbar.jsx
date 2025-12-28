import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full px-6 md:px-12 py-5 flex items-center justify-between relative">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center font-bold">
          C
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <a className="text-sm text-gray-300 hover:text-white cursor-pointer">
          About us
        </a>
        <a className="text-sm text-gray-300 hover:text-white cursor-pointer">
          Store
        </a>
        <a className="text-sm text-gray-300 hover:text-white cursor-pointer">
          Games
        </a>

        <button className="ml-2 bg-white text-black px-5 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition">
          Connect Wallet
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-black border-t border-white/10 flex flex-col items-center gap-6 py-6 md:hidden z-50">
          <a className="text-gray-300 hover:text-white">About us</a>
          <a className="text-gray-300 hover:text-white">Store</a>
          <a className="text-gray-300 hover:text-white">Games</a>
          <button className="bg-white text-black px-6 py-2 rounded-md text-sm font-medium">
            Connect Wallet
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;