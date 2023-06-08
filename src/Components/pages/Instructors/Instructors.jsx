import useData from "../../../hooks/useData";
import Container from "../Home/Container";
import Instructordetails from "./Instructordetails";


const Instructors = () => {
  const [courseData] = useData();
 

  return (
    <Container>
      <div className=" my-24">
        <p className="text-5xl font-semibold text-center ">
          Know Our Instructor
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {courseData.map((item) => (
            <Instructordetails
              key={item._id}
              item={item}
            ></Instructordetails>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Instructors;
