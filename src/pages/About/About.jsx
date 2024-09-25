import BreakingNews from "../../components/BreakingNews/BreakingNews";
import Header from "../../components/Shared/Header/Header";
import Navbar from "../../components/Shared/Navbar/Navbar";

const About = () => {
  return (
    <div>
      <div className="mb-5">
        <Header />
        <BreakingNews />
        <Navbar />
      </div>
      About
    </div>
  );
};

export default About;
