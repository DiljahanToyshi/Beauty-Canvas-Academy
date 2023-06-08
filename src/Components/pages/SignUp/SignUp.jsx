import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../../Firebase/firebase.config";

const SignUp = () => {
  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      //   updateUserProfile(data.name, data.photoURL)
      //     .then(() => {
      //       const saveUser = { name: data.name, email: data.email };
      //       fetch("http://localhost:5000/users", {
      //         method: "POST",
      //         headers: {
      //           "content-type": "application/json",
      //         },
      //         body: JSON.stringify(saveUser),
      //       })
      //         .then((res) => res.json())
      //         .then((data) => {
      //           if (data.insertedId) {
      //             reset();
      //             Swal.fire({
      //               position: "top-end",
      //               icon: "success",
      //               title: "User created successfully.",
      //               showConfirmButton: false,
      //               timer: 1500,
      //             });
      //             navigate("/");
      //           }
      //         });
      //     })
      //     .catch((error) => console.log(error));
    });
  };
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser.photoURL);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl pt-8 font-bold">Please SignUp !</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body mb-0 pb-0"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
              </div>
              <div className="form-control">
                <p>
                  <Link to="/login" className="label-text-alt link link-hover">
                    ALready have an account?{" "}
                    <span className="text-slate-600">Please signup</span>
                  </Link>
                </p>
              </div>
              <div className="form-control pb-0">
                <input
                  className="btn  bg-slate-400 text-white"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>

            <div className="text-center">
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline text-center mb-5 mt-3"
              >
                <FaGoogle className="mr-2" /> Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
