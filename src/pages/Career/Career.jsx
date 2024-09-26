import BreakingNews from "../../components/BreakingNews/BreakingNews";
import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";
import Navbar from "../../components/Shared/Navbar/Navbar";

const Career = () => {
  return (
    <div>
      <div className="mb-5">
        <Header />
        <BreakingNews />
        <Navbar />
      </div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-red-500 text-white py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Life at GoromNews</h1>
        <p className="text-lg mb-6">
          At GoromNews, we&#39;re more than just a newsroom. We&#39;re a community of
          passionate storytellers.
        </p>
        <a
          href="#culture"
          className="bg-white text-red-600 font-semibold py-2 px-4 rounded-full"
        >
          Explore Our Culture
        </a>
      </section>

      {/* Our Culture Section */}
      <section id="culture" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-gray-800 text-center mb-12">
            Our Culture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">
                Inclusive and Collaborative
              </h3>
              <p className="text-lg text-gray-600">
                At GoromNews, diversity of thought and background is our
                strength. We collaborate openly and foster an inclusive work
                environment where everyone has a voice.
              </p>
            </div>
            <div>
              <img
                src="https://via.placeholder.com/500"
                alt="Culture"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Growth and Development Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-gray-800 text-center mb-12">
            Growth & Development
          </h2>
          <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
            <div className="flex-1 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Learning Opportunities
              </h3>
              <p className="text-gray-600">
                We invest in your growth with learning programs, workshops, and
                mentorships that help you thrive in your career.
              </p>
            </div>
            <div className="flex-1 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Career Advancement
              </h3>
              <p className="text-gray-600">
                With clear paths for promotion and personal growth, we empower
                you to shape your own career.
              </p>
            </div>
            <div className="flex-1 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Work-Life Balance
              </h3>
              <p className="text-gray-600">
                Our flexible work policies and emphasis on work-life balance
                ensure that you excel at work without sacrificing your personal
                life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Stories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-gray-800 text-center mb-12">
            Employee Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Story 1 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Employee 1"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 text-center">
                Emily Johnson
              </h3>
              <p className="text-gray-600 text-center mb-4">Senior Reporter</p>
              <p className="text-gray-500 text-sm text-center">
              &quot;Working at GoromNews has been a life-changing experience. I&#39;ve
                grown both professionally and personally, and I&#39;m proud to be
                part of such an innovative team.&quot;
              </p>
            </div>

            {/* Story 2 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Employee 2"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 text-center">
                Mark Robinson
              </h3>
              <p className="text-gray-600 text-center mb-4">Digital Editor</p>
              <p className="text-gray-500 text-sm text-center">
              &quot;At GoromNews, I have the freedom to experiment with new digital
                strategies and work with a dynamic team that supports
                creativity.&quot;
              </p>
            </div>

            {/* Story 3 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Employee 3"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 text-center">
                Sophia Lee
              </h3>
              <p className="text-gray-600 text-center mb-4">Content Writer</p>
              <p className="text-gray-500 text-sm text-center">
              &quot;The culture at GoromNews is unparalleled. We&#39;re like a family
                that pushes each other to be the best. Every day is a new
                learning experience.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Career;
