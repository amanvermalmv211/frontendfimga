import { GoArrowUpRight } from "react-icons/go";
import img3 from "../assets/img3.png";

const FeaturedArtwork = () => {
  return (
    <section className="w-full px-6 md:px-12 py-20 overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT IMAGE */}
        <div className="relative flex justify-center">
          {/* Purple Glow */}
          <div className="absolute w-[320px] h-[320px] bg-purple-600/40 blur-[120px] rounded-full"></div>

          <img
            src={img3}
            alt="Bitcoin Art"
            className="relative w-72 md:w-80 lg:w-[420px] rounded-2xl shadow-2xl"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Bitcoin <br /> Art Work
          </h2>

          <p className="mt-4 text-sm text-gray-400">
            Created by <span className="text-purple-400">Jonathan Borba</span>
          </p>

          {/* BID + TIMER */}
          <div className="mt-10 flex flex-wrap gap-10 items-center">
            
            {/* Bid */}
            <div>
              <p className="text-sm text-gray-400">Current Bid</p>
              <p className="text-2xl font-bold">1.09 ETH</p>
              <p className="text-xs text-gray-400">$1,835</p>
            </div>

            {/* Divider */}
            <div className="hidden sm:block h-14 w-px bg-white/20"></div>

            {/* Timer */}
            <div>
              <p className="text-sm text-gray-400 mb-2">Auction Ends In</p>
              <div className="flex gap-6 text-center">
                <div>
                  <p className="text-xl font-bold">18</p>
                  <p className="text-xs text-gray-400">Hours</p>
                </div>
                <div>
                  <p className="text-xl font-bold">57</p>
                  <p className="text-xs text-gray-400">Minutes</p>
                </div>
                <div>
                  <p className="text-xl font-bold">14</p>
                  <p className="text-xs text-gray-400">Seconds</p>
                </div>
              </div>
            </div>

          </div>

          {/* BUTTON */}
          <button className="mt-10 inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-md text-sm font-semibold hover:bg-gray-200 transition">
            View Art Work
            <GoArrowUpRight />
          </button>
        </div>

      </div>
    </section>
  );
};

export default FeaturedArtwork;