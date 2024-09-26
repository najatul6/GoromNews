import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const LeftSide = () => {
  return (
    <div>
      <div className="w-full">
        <h2 className="">Login With</h2>
        <div>
          <button className="btn w-full btn-outline"><FcGoogle /> Login with Google</button>
          <button className="btn w-full btn-outline"><FaFacebook /> Login with Facebook</button>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
