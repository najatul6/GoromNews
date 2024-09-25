import BreakingNews from "../../components/BreakingNews/BreakingNews";
import Footer from "../../components/Shared/Footer/Footer";
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
      {/*  Header Section  */}
      <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">About GoromNews</h1>
          <p className="text-lg">
            Your trusted source for news without bias or boundaries
          </p>
        </div>
      </section>

      {/* About Content Section  */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center space-y-8">
            <h2 className="text-4xl font-semibold text-gray-800">Who We Are</h2>
            <p className="text-lg text-gray-600 text-center max-w-2xl">
              GoromNews is committed to delivering news that matters with
              accuracy and integrity. Our mission is to provide reliable,
              unbiased reporting, shining a light on stories that shape the
              world without fear or favor.
            </p>
            <p className="text-lg text-gray-600 text-center max-w-2xl">
              From breaking news to in-depth analysis, GoromNews stands as a
              trusted platform for all voices, promoting fairness and truth in
              journalism.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section  */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-gray-800 text-center mb-12">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member Card */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 text-center">
                Jane Doe
              </h3>
              <p className="text-gray-600 text-center mb-4">Chief Editor</p>
              <p className="text-gray-500 text-sm text-center">
                Jane leads our editorial team with over 10 years of experience
                in journalism.
              </p>
            </div>

            {/* Team Member Card */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 text-center">
                John Smith
              </h3>
              <p className="text-gray-600 text-center mb-4">Senior Reporter</p>
              <p className="text-gray-500 text-sm text-center">
                John brings a passion for investigative journalism and
                fact-checking to the team.
              </p>
            </div>

            {/* <!-- Team Member Card --> */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 text-center">
                Alice Johnson
              </h3>
              <p className="text-gray-600 text-center mb-4">Content Writer</p>
              <p className="text-gray-500 text-sm text-center">
                Alice is our creative storyteller, covering a range of topics
                with clarity and insight.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
