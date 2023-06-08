import { Link } from "react-router-dom";

const Instructor = ({ course }) => {
  const {
    _id,
    instructorImage,
    instructorName,
    availableSeats,
    studentNumber,
    price,
    category,
    duration,
    courseName,
    description,
  } = course;
  return (
    <div className="bg-gray-100 p-6 rounded shadow-lg">
      <img
        className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
        src={instructorImage}
        alt="instructorImage"
      />
      <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
        {instructorName}
      </p>
      <p className="text-gray-700 ">Course: {courseName}</p>
      <p className="text-gray-700 ">StudentNumber: {studentNumber}</p>
      <p className="text-gray-700 font-bold">Price: {price}$</p>
      <Link to={`/book/${_id}`}>
        <button className="btn btn-neutral text-white rounded-full  hover:bg-slate-500 outline-slate-50">
          See Details
        </button>
      </Link>
    </div>
  );
};

export default Instructor;
