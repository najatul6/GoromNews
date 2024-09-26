import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const LeftSide = () => {
  return (
    <div>
      <div className="w-full space-y-5">
        <h2 className="text-xl font-bold">Login With</h2>
        <div className="w-full space-y-5">
          <button className="btn btn-outline"><FcGoogle /> Login with Google</button>
          <button className="btn btn-outline"><FaFacebook /> Login with Facebook</button>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
