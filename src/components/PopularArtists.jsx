import { GoArrowUpRight } from "react-icons/go";
import ExploreButton from "./ExploreButton";
import img10 from "../assets/img10.png";

const artists = [
  {
    name: "Ferhat Deniz",
    img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
  },
  {
    name: "Sebastian",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
  },
  {
    name: "Javier Miranda",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    name: "Erick Butler",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
];

const PopularArtists = () => {
  return (
    <section className="w-full px-6 md:px-12 py-20 overflow-x-hidden">
      
      {/* TOP: Popular Artists */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-16 gap-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Popular Artists
        </h2>

        <button className="inline-flex items-center gap-2 px-5 py-2 bg-white text-black rounded-md text-sm font-semibold hover:bg-gray-200 transition">
          View all Artists
          <GoArrowUpRight />
        </button>
      </div>

      {/* Artists Row */}
      <div className="flex flex-wrap items-center justify-around w-full lg:px-20 gap-10 mb-24">
        {artists.map((artist) => (
          <div key={artist.name} className="text-center">
            <img
              src={artist.img}
              alt={artist.name}
              className="w-20 h-20 rounded-full object-cover mx-auto"
            />
            <p className="mt-3 text-sm font-medium">{artist.name}</p>
          </div>
        ))}
      </div>

      {/* BOTTOM: Community CTA */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Image */}
        <div className="relative">
          {/* Glow */}
          <div className="absolute inset-0 bg-purple-600/40 blur-[120px] rounded-full"></div>

          <img
            src={img10}
            alt="Community"
            className="relative rounded-2xl w-full max-w-md"
          />
        </div>

        {/* Text */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Join The Community <br />
            And Get The Best NFT <br />
            Collection
          </h3>

          <ExploreButton>
            JOIN COMMUNITY
          </ExploreButton>
        </div>

      </div>

    </section>
  );
};

export default PopularArtists;