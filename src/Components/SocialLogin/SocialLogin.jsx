import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      const loggedInUser = result.user;
      const saveUser = {
        name: loggedInUser?.displayName,
        email: loggedInUser?.email,
      };
      fetch("https://assignment-12-server-delta-six.vercel.app/students", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };

  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center my-4">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline"
        >
          <FaGoogle></FaGoogle> Login with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
