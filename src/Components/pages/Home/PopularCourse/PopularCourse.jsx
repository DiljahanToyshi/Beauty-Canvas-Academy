import { useEffect, useState } from "react";
import Container from "../Container";
import CoursesCard from "./CoursesCard";
import useCourses from "../../../../hooks/useCourses";

const PopularCourse = () => {
const[courses] = useCourses();
           const popularCourses = courses.filter(
             (course) => course.category === "popular"
           );

    return (
      <Container>
        <div className=" my-24">
          <p className="text-5xl font-semibold text-center ">
            Our Popular <br /> Course Program
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {popularCourses.map((course) => (
              <CoursesCard key={course._id} course={course}></CoursesCard>
            ))}
          </div>
        </div>
      </Container>
    );
};

export default PopularCourse;