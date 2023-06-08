import { useEffect, useState } from "react";
import Container from "../Container";
import CoursesCard from "./CoursesCard";

const PopularCourse = () => {
    const [courses,setCourses] = useState([]);
     useEffect(() => {
       fetch("data.json")
         .then((res) => res.json())
         .then((data) => {console.log(data);
            setCourses(data)});
     }, []);
    return (
      <Container>
        <div className="bg-slate-400 my-24">
          <p className="text-5xl font-semibold text-center">
            Our Popular <br /> Course Program
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <CoursesCard key={course.index} course={course}></CoursesCard>
            ))}
          </div>
        </div>
      </Container>
    );
};

export default PopularCourse;