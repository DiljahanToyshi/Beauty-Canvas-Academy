import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../../../Firebase/firebase.config";
import { AuthContext } from "../../providers/AuthProvider";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Swal from "sweetalert2";
import SocialLogin from "../../SocialLogin/SocialLogin";

const Login = () => {
  const auth = getAuth(app);
  const [show, setSHow] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const emailRef = useRef();
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"; 

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setError("");
    setSuccess("");

    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please add at least one uppercase.");
      return;
    } else if (password.length < 6) {
      setError("Password must be 6 characters long");
      return;
    }

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
           Swal.fire({
             title: "Login Successfully.",
             showClass: {
               popup: "animate__animated animate__fadeInDown",
             },
             hideClass: {
               popup: "animate__animated animate__fadeOutUp",
             },
           });
           console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        if (!loggedUser.emailVerified) {
       console.log("exit") }
        setSuccess("login successfully.");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
 

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold mt-8">Please Login !</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body pb-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-slate-500 text-lg">
                  Email</span>
              </label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
              <span className="label-text text-slate-500 text-lg">
                  Password</span>
              </label>
              <div className="flex gap-3 md:gap-6 items-center">
                <div>
                  {" "}
                  <input
                                    ref={emailRef}
                                    className="input input-bordered"

                    type={show ? "text" : "password"}
                    name="password"
                    id=""
                    placeholder="your password"
                    required
                  />
                </div>
                <div className="">
                  <span onClick={() => setSHow(!show)}>
                      {show ? (
                        <span>
                          <AiFillEye></AiFillEye>
                        </span>
                      ) : (
                        <span>
                          {" "}
                          <AiFillEyeInvisible></AiFillEyeInvisible>{" "}
                        </span>
                      )}
                  </span>
                </div>
              </div>

              <p className="text-red-600 text-xl font-semibold">{error}</p>
              <p className="text-green-600 text-xl font-semibold">{success}</p>
              <p className="mt-2 ">
                <Link
                  to="/signup"
                  className="label-text-alt link link-hover text-center"
                >
                  New to The Beauty Canvas Academy?{" "}
                  <span className="text-slate-600">
                    Please create an account
                  </span>
                </Link>
              </p>
            </div>
            <div className="form-control mt-2 pb-0">
              <button className="btn bg-slate-400 text-white">Login</button>
            </div>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
