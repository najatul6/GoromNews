import Marquee from "react-fast-marquee";
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
      <div className="pb-10">
        <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-12">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">About GoromNews</h1>
            <p className="text-lg">
              Your trusted source for news without bias or boundaries
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center space-y-8">
              <h2 className="text-4xl font-semibold text-gray-800">
                Who We Are
              </h2>
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

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-semibold text-gray-800 text-center mb-12">
              Meet Our Team
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white shadow-md rounded-lg p-6">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRumQJKleL7aulFNwlCpkOg5hX5veXu3cammg&s"
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

              <div className="bg-white shadow-md rounded-lg p-6">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0HBJD62l1cCRUMOUDywZYkjf1CWaOWzcU5Q&s"
                  alt="Team Member"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800 text-center">
                  John Smith
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  Senior Reporter
                </p>
                <p className="text-gray-500 text-sm text-center">
                  John brings a passion for investigative journalism and
                  fact-checking to the team.
                </p>
              </div>

              <div className="bg-white shadow-md rounded-lg p-6">
                <img
                  src="https://e0.365dm.com/22/01/768x432/skysports-ssn-kaveh-transfer_5632590.jpg?20220104165312"
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

        <section className="py-10">
          <div className="py-5">
            <h2 className="text-3xl font-bold  text-center font-Sofadi text-light-blue">
              Sponsors
            </h2>
            <hr />
          </div>
          <Marquee speed={100} gradientWidth={200} gradientColor="248,251,253">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrEBqY7f7EhATfJYas1jMFZsFD8HbpSpCf9w&s"
              alt="Ranker company profile"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAf9GC-DsJ71NfLbTj3Doh3mZdIiU_FT-Y6x1zqKT4uIc7T5_cU4v2d_zGGD2qthNvasE&usqp=CAU"
              alt="Ranker company profile"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKvmxygP_C7YkVruckjBV7CNFSFUApJ33Znw&s"
              alt="Ranker company profile"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqGF6ssNcRTmOXj9p9yfNmY3ANz932_CW2LA&s"
              alt="Ranker company profile"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBsaRHDmSDKBP22Gik9AU5jFif9j6t0s1lReS5AJQkpwr-5QmfFvo3XCZYD2WFKOMrDEA&usqp=CAU"
              alt="Ranker company profile"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwiExQ3x-h3ug2XD6nwCh7dvO06xyudJPqSkmQpAH1ODKJTjwOZVcPB8bL0pVo3dU7GRs&usqp=CAU"
              alt="Ranker company profile"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-n7-B0jxspHkaVUvanf0Np0yKAHX2D34BGDJTYaGqFyzRqSYJILcJWAXUXOuy_QAL-vY&usqp=CAU"
              alt="Ranker company profile"
            />
          </Marquee>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
