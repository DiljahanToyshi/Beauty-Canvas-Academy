import { useContext } from "react";
import useCourses from "../../../hooks/useCourses";
import Container from "../Home/Container";
import CoursesCard from "../Home/PopularCourse/CoursesCard";
import { AuthContext } from "../../providers/AuthProvider";


const Classes = () => {
  const [courses] = useCourses();
    const { role } = useContext(AuthContext);


  return (
    <Container>
      <div className=" my-8">
        <p className="text-5xl font-semibold text-center ">
          Our Popular <br /> Course Program 
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {courses.map((course) => (
            <CoursesCard key={course._id} course={course} role={role}></CoursesCard>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Classes;
