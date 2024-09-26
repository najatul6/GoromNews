import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const LeftSide = () => {
  return (
    <div>
      <div className="w-full space-y-5">
        <h2 className="text-xl font-bold">Login With</h2>
        <div className="w-full space-y-5">
          <button className="btn w-full btn-outline text-lg font-medium">
            <FcGoogle /> Login with Google
          </button>
          <button className="btn w-full btn-outline text-lg font-medium">
            <FaFacebook /> Login with Facebook
          </button>
        </div>
      </div>
      <div className="w-full space-y-2 my-5">
        <h2 className="text-xl font-bold">Find Us On</h2>
        <div className="w-full rounded-xl border">
          <button className="flex justify-start rounded-t-lg items-center px-5 py-4 gap-3 hover:bg-light-gray w-full bg-transparent rounded-none text-lg font-medium text-start">
            <FaFacebook /> Facebook
          </button>
          <button className="flex justify-start items-center px-5 py-4 gap-3 hover:bg-light-gray border-y w-full bg-transparent rounded-none text-lg font-medium text-start">
            <FaTwitter /> Twitter
          </button>
          <button className="flex justify-start rounded-b-lg items-center px-5 py-4 gap-3 hover:bg-light-gray w-full bg-transparent rounded-none text-lg font-medium text-start">
            <FaInstagram /> Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
