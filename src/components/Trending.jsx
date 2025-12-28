import { GoArrowUpRight } from "react-icons/go";
import TrendingCard from "./TrendingCard";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";

const Trending = () => {
  return (
    <section className="w-full px-6 md:px-12 py-20 overflow-x-hidden">
      
      {/* Header */}
      <div className="max-w-xl mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Trending This Week
        </h2>
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-12 mt-28">
          <TrendingCard
            image={img4}
            name="Sebastian"
            category="Golden Flower"
            price="2.3 ETH"
            highlighted
          />
          <TrendingCard
            image={img5}
            name="Javier Miranda"
            category="Golden Flower"
            price="2.3 ETH"
          />
          <TrendingCard
            image={img6}
            name="Milad Fakurian"
            category="Golden Flower"
            price="2.3 ETH"
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-12">
          <TrendingCard
            image={img7}
            name="Ferhat Deniz"
            category="Golden Flower"
            price="2.3 ETH"
          />
          <TrendingCard
            image={img8}
            name="Polina Kondrashova"
            category="Golden Flower"
            price="2.3 ETH"
          />
          <TrendingCard
            image={img9}
            name="Erick Butler"
            category="Golden Flower"
            price="2.3 ETH"
          />
        </div>

      </div>

      {/* Footer Button */}
      <div className="mt-16 flex justify-end">
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-md text-sm font-semibold hover:bg-gray-200 transition">
          Explore More
          <GoArrowUpRight />
        </button>
      </div>

    </section>
  );
};

export default Trending;