import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trending from "../components/Trending";
import FeaturedArtwork from "../components/FeaturedArtwork";
import PopularArtists from "../components/PopularArtists";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedArtwork />
      <Trending />
      <PopularArtists />
      <Footer />
      
    </>
  );
};

export default Home;