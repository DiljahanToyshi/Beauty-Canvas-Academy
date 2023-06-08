import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const CoursesCard = ({ course }) => {
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
  } = course;
  const { user } = useContext(AuthContext);
  
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (course) => {
    
    if (user && user.email) {
      const currentSeats = availableSeats - 1;
      const NewstudentNumber = studentNumber + 1;
      
      const course = {
        courseId: _id,
        courseName,
        email: user.email,
        instructorName,
        AvailableSeats: currentSeats,
        StudentNumber: NewstudentNumber,
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
          if (data.insertedId) {
            // refetch();  refetch cart to update the number of items in the cart
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
      {/* <div className="font-semibold text-lg">{room.location}</div> */}
      <div className="font-light text-2xl text-neutral-800">{courseName}</div>
      <div className="flex flex-row items-center gap-3">
        <div className="font-semibold">Price: {price}$</div>
        <Link>
          <button
            onClick={() => handleAddToCart(course)}
            className="btn btn-neutral text-white rounded-full  hover:bg-slate-500 outline-slate-50"
          >
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CoursesCard;
