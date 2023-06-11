/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../../providers/AuthProvider";
import { useContext } from "react";
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddCourse = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.courseImg[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const {
            instructorName,
            availableSeats,
            email,
            price,
            duration,
            CourseName,
            description,
            courseImg,
            studentNumber,
          } = data;
          const newItem = {
            instructorName,
            availableSeats: parseInt(availableSeats),
            email,
            price: parseFloat(price),
            duration: parseFloat(duration),
            CourseName,
            description,
            courseImg: imgURL,
            studentNumber: parseInt(studentNumber),
          };

          axiosSecure.post("/courses", newItem).then((data) => {
            console.log("after posting new course ", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "New course added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div className="w-full px-10">
      <p className="text-3xl text-center font-mono mt-11">
        {" "}
        Add Your Brand New Course
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex my-4">
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">Course Name*</span>
            </label>
            <input
              type="text"
              placeholder="Course Name"
              {...register("CourseName", { required: true, maxLength: 120 })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full mb-4 ml-4">
            <label className="label">
              <span className="label-text font-semibold">Student Number*</span>
            </label>
            <input
              type="number"
              placeholder="Student Number"
              {...register("studentNumber", {
                required: true,
                maxLength: 120,
              })}
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="flex my-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Available Seats</span>
            </label>
            <input
              type="number"
              placeholder="available seats"
              {...register("availableSeats", {
                required: true,
                maxLength: 120,
              })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="flex my-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Instructor Name</span>
            </label>
            <input
              type="text"
              value={user?.displayName}
              {...register("instructorName", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">
                Instructor's Email
              </span>
            </label>
            <input
              type="email"
              value={user?.email}
              {...register("email", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Course Details</span>
          </label>
          <textarea
            {...register("description", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="details"
          ></textarea>
        </div>
        <div className="flex my-4">
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text font-semibold">Course Image*</span>
            </label>
            <input
              type="file"
              {...register("courseImg", { required: true })}
              className="file-input file-input-bordered w-full "
            />
          </div>
          <div className="form-control w-full my-4 ml-4">
            <label className="label">
              <span className="label-text font-semibold">Duration*</span>
            </label>
            <input
              type="number"
              {...register("duration", { required: true })}
              className="file-input file-input-bordered w-full "
            />
          </div>
        </div>
        <input
          className="btn btn-neutral text-white rounded-full  "
          type="submit"
          value="Add Course"
        />
      </form>
    </div>
  );
};

export default AddCourse;
