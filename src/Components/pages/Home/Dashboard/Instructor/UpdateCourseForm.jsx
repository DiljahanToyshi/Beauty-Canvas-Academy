

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const UpdateCourseForm = () => {
    const {id} = useParams();
const [course,setCourse] = useState({});
  const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
    fetch(`http://localhost:5000/singlecourse/${id}`)
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, [])


const onSubmit = (data) => {
    fetch(`http://localhost:5000/updatesinglecourse/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      .then((res) => res.json())
      .then((data) => console.log(data));
      
  };
    return (
      <div className="w-full px-10">
        <p className="text-3xl text-center font-mono mt-11">
          {" "}
          Update Your Course
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
                <span className="label-text font-semibold">
                  Student Number*
                </span>
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
                <span className="label-text font-semibold">
                  Available Seats
                </span>
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
            <div className="form-control my-4 ml-4">
              <label className="label">
                <span className="label-text font-semibold">Duration*</span>
              </label>
              <input
                type="number"
                {...register("duration", { required: true })}
                className="file-input file-input-bordered w-full "
              />
            </div>
            <div>
              <input
                className="btn btn-neutral mt-12 ml-4 text-white rounded-full  "
                type="submit"
                value="Update Course"
              />
            </div>
          </div>
        </form>
      </div>
    );
};

export default UpdateCourseForm;