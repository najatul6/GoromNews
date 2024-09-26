import BreakingNews from "../../components/BreakingNews/BreakingNews";
import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";
import Navbar from "../../components/Shared/Navbar/Navbar";

const Career = () => {
  const jobs = [
    {
      title: 'Frontend Developer',
      location: 'Remote',
      description: 'We are looking for a talented frontend developer with experience in React and Tailwind CSS.',
    },
    {
      title: 'Backend Developer',
      location: 'New York, USA',
      description: 'Join our backend team and work with cutting-edge technologies like Node.js and MongoDB.',
    },
    {
      title: 'UX/UI Designer',
      location: 'San Francisco, USA',
      description: 'Creative designer needed to craft user-friendly interfaces and experiences.',
    },
  ];
  return (
    <div>
      <div className="mb-5">
      <Header />
      <BreakingNews />
      <Navbar />
      </div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Join Our Team</h1>
        <p className="text-lg mb-6">
          At GoromNews, we are always looking for passionate, creative people to help us build something amazing.
        </p>
        <a href="#jobs" className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-full">
          View Open Positions
        </a>
      </section>

      {/* Job Listings Section */}
      <section id="jobs" className="container mx-auto py-16 px-6">
        <h2 className="text-4xl font-semibold text-gray-800 text-center mb-12">Current Openings</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
              <p className="text-gray-600 mb-4">{job.location}</p>
              <p className="text-gray-500 mb-4">{job.description}</p>
              <a href="#" className="text-blue-600 font-semibold">Apply Now</a>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-gray-800 text-center mb-12">Why Work With Us?</h2>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Flexible Hours</h3>
              <p className="text-gray-600">Work from home or in the office, your schedule is up to you.</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Competitive Salary</h3>
              <p className="text-gray-600">We offer competitive pay and great benefits to all of our employees.</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Career Growth</h3>
              <p className="text-gray-600">We provide opportunities for growth and professional development.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Career;
