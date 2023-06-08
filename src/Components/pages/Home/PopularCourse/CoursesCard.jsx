import { Link } from "react-router-dom";

const CoursesCard = ({course}) => {
     const { _id, courseImg, instructorName,availableSeats,studentNumber,price,category,duration,courseName,description } = course;
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
         <div className="font-light text-2xl text-neutral-800">
           {courseName}
         </div>
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

export default CoursesCard;