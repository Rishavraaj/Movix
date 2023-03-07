import HeroBanner from "./HeroBanner/HeroBanner";
import "./home.scss";
import Popular from "./Popular/Popular";
import TopRated from "./topRated/TopRated";
import Trending from "./Trending/Trending";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Home;
