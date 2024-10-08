import AllNews from "../../components/AllNews/AllNews";
import BreakingNews from "../../components/BreakingNews/BreakingNews";
import Header from "../../components/Shared/Header/Header";
import LeftSide from "../../components/Shared/LeftSide/LeftSide";
import Navbar from "../../components/Shared/Navbar/Navbar";
import RightSide from "../../components/Shared/RightSide/RightSide";

const Home = () => {
  return (
    <div>
      <div className="mb-5">
        <Header />
        <BreakingNews />
        <Navbar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <RightSide />
        </div>
        <div className="md:col-span-2">
          <AllNews />
        </div>
        <div>
          <LeftSide />
        </div>
      </div>
    </div>
  );
};

export default Home;
