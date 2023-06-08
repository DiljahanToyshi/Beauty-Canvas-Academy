
const Instructordetails = ({ item }) => {
  const {
    _id, instructorImage, availableSeats, instructorEmail, studentNumber, courseImg, rating, description, courseName, price, duration, category,instructorName } = item;
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
          src={instructorImage}
          alt="course"
        />
      </div>
      <div className="font-semibold text-lg">{instructorName}</div>
      <div className="font-semibold text-lg">Email:{instructorEmail}</div>
      <div className="font-light text-2xl text-neutral-800">
        Coursename: {courseName}
      </div>
      <div className="font-light text-2xl text-neutral-800">
        Course Rating: {rating}
      </div>
      <div className="flex flex-row items-center gap-3">
        <div className="font-semibold">Price: {price}$</div>
      
      </div>
    </div>
  );
};

export default Instructordetails;
