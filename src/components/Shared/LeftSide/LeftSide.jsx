import { FcGoogle } from "react-icons/fc";

const LeftSide = () => {
  return (
    <div>
      <div>
        <h2>Login With</h2>
        <div>
          <button className="btn "><FcGoogle /> Login with Google</button>
          <button className="btn "><FaFacebook /> Login with Facebook</button>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
