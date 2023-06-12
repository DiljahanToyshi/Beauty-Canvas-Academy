import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../../../../hooks/useCart";

const CoursesCard = ({ course }) => {
  const {user,role} = useContext(AuthContext);

  const {
    _id,
    courseImg,
    instructorName,
    availableSeats,
    studentNumber,
    price,
    category,
    duration,
    courseName,
    description,
    rating
  } = course;
  const [,refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const handleAddToCart = (course) => {
    
    if (user && user.email) {
      
      const course = {
        courseId: _id,
        courseName,
        email: user.email,
        instructorName,
        availableSeats,
        studentNumber,
        price,
        category,
        duration,
        description,
      };
          

      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(course),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId > 0) {
            refetch(); 
            
            //  refetch cart to update the number of items in the cart
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Course added on the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to booked your course",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full group">
      <div
        className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
      >
        <img
          className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
          src={courseImg}
          alt="course"
        />
      </div>
      <div className="font-semibold text-lg">
        {" "}
        <span className="font-bold">Instructor:</span> {instructorName}
      </div>
      <div className="font-light text-lg text-neutral-800">
        <span className="font-bold"> Coursename: </span>
        {courseName}
      </div>
      <div className="font-light text-lg text-neutral-800">
        <span className="font-bold"> Course Rating:</span> {rating}
      </div>
      <div className="font-semibold text-lg">
        <span className="font-bold">Description:</span>
        {description}
      </div>
      <div className="font-semibold text-lg">
        <span className="font-bold"> Available Seat:</span> {availableSeats}
      </div>
      <div className="font-semibold text-lg">
        <span className="font-bold">Duration: </span>
        {duration}Month
      </div>

      <div className="flex flex-row items-center gap-3">
        <div className="font-semibold">
          <span className="font-bold">Price:</span> {price}$
        </div>

        {role == "Student" ? (
          <button
            onClick={() => handleAddToCart(course)}
            className="btn btn-neutral text-white rounded-full  hover:bg-slate-500 outline-slate-50"
            disabled={false}
          >
            Book Now
          </button>
        ) : (
          <button
            onClick={() => handleAddToCart(course)}
            className="btn btn-neutral text-white rounded-full  hover:bg-slate-500 outline-slate-50"
            disabled={true}
          >
            Book Now
          </button>
        )}
      </div>
    </div>
  );
};

export default CoursesCard;
