import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const ClassDetails = ({ course }) => {
  const {role} = useContext(AuthContext);
  console.log(role)
  const {
    _id,
    availableSeats,
    
    courseImg,
    rating,
    description,
    courseName,
    price,
    duration,
   
    instructorName,
  } = course;
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
        <Link>
          {role === "Instructor" || role === "Admin" || {availableSeats} == 0 ? (
            
             
              <button className="btn btn-neutral  text-white rounded-full  hover:bg-slate-500 outline-slate-50 " disabled={true}>
                Book Now
              </button>
          ) : (
            <button className="btn btn-neutral text-white rounded-full  hover:bg-slate-500 outline-slate-50">
              Book Now
            </button>
          )}
        </Link>
      </div>
    </div>
  );
};

export default ClassDetails;
