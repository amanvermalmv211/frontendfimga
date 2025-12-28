import { BiSolidDiamond } from "react-icons/bi";
import ExploreButton from "./ExploreButton";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";

const Hero = () => {
  return (
    <section className="relative w-full px-6 md:px-12 pt-16 pb-20">

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            Discover Rare <br />
            Collections Of <br />
            Art & NFT&apos;s
          </h1>

          <p className="mt-6 text-gray-300 max-w-md">
            Create, Explore, & Collect Digital Art NFTs
          </p>

          <ExploreButton>
            EXPLORE
          </ExploreButton>

          {/* STATS */}
          <div className="mt-14 flex gap-14">
            <div>
              <h3 className="text-2xl font-bold">32k+</h3>
              <p className="text-sm text-gray-400">Artwork</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">20k+</h3>
              <p className="text-sm text-gray-400">Auctions</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">10k+</h3>
              <p className="text-sm text-gray-400">Artists</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE STACK */}
        <div className="relative flex justify-center">

          {/* Glow */}
          <div className="absolute w-[450px] h-[350px] bg-gradient-to-b from-purple-400 via-purple-700 to-indigo-600 blur-[120px] rounded-full"></div>

          <div className="absolute left-20 top-6 -rotate-12 shadow-2xl w-64 md:w-72 z-40">
            <img
              src={img2}
              alt="NFT Front"
              className="w-64 md:w-72 h-72 border-white border-2"
            />

            {/* INFO CARD */}
            <div className="bg-white/60 w-full backdrop-blur-lg p-4 text-sm">
              <div className="flex justify-between mb-2">
                <div className="flex space-x-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img src={"https://images.unsplash.com/photo-1527980965255-d3b416303d12"} alt="" className="w-full h-full" />
                  </div>
                  <div>
                    <div className="font-semibold">Laura</div>
                    <div>0.21 Bid</div>
                  </div>
                </div>
                <div className="">
                  <div className="text-xs">Remaining Time</div>
                  <div className="font-semibold">18h : 57m : 14s</div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <div className="text-xs">Current Bid</div>
                  <div className="font-semibold"> <BiSolidDiamond className="inline text-black" /> 2.8 ETH</div>
                </div>
                <button className="px-4 py-1 bg-white text-black text-xs">
                  PLACE A BID
                </button>
              </div>
            </div>
          </div>

          {/* Front Image */}
          <div className="shadow-2xl w-64 md:w-72 z-40">
            <img
              src={img1}
              alt="NFT Front"
              className="w-64 md:w-72 border-white border-2"
            />

            {/* INFO CARD */}
            <div className="bg-white/60 w-full backdrop-blur-lg p-4 text-sm">
              <div className="flex justify-between mb-2">
                <div className="flex space-x-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe" alt="" className="w-full h-full" />
                  </div>
                  <div>
                    <div className="font-semibold">Laura</div>
                    <div>0.21 Bid</div>
                  </div>
                </div>
                <div className="">
                  <div className="text-xs">Remaining Time</div>
                  <div className="font-semibold">18h : 57m : 14s</div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <div className="text-xs">Current Bid</div>
                  <div className="font-semibold"> <BiSolidDiamond className="inline text-black" /> 2.8 ETH</div>
                </div>
                <button className="px-4 py-1 bg-white text-black text-xs">
                  PLACE A BID
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;