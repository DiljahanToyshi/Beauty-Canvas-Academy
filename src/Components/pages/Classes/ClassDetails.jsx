import { Link } from "react-router-dom";

const ClassDetails = ({ course }) => {
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
      <div className="font-semibold text-lg">Instructor: {instructorName}</div>
      <div className="font-light text-2xl text-neutral-800">
        Coursename: {courseName}
      </div>
      <div className="font-light text-2xl text-neutral-800">
        Course Rating: {rating}
      </div>
      <div className="font-semibold text-lg">Description:{description}</div>
      <div className="font-semibold text-lg">
        Available Seat: {availableSeats}
      </div>
      <div className="font-semibold text-lg">Duration: {duration}Month</div>

      <div className="flex flex-row items-center gap-3">
        <div className="font-semibold">Price: {price}$</div>
        <Link to={`/book/${_id}`}>
          <button className="btn btn-neutral text-white rounded-full  hover:bg-slate-500 outline-slate-50">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ClassDetails;
