
import  { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

import CourseForm from "./CourseForm";

const MyCourse = () => {
    const [axiosSecure] = useAxiosSecure();
  const { user,loading } = useContext(AuthContext);
 

  const { data: courses = [] } = useQuery({
    queryKey: ["courses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`courses/${user?.email}`);
      return res.data;
    },
  });

  

  return (
    <>
      <p className="text-5xl my-3 font-semibold text-center ">
        {user?.displayName} Courses
      </p>
      <div className="w-full">
        <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
          <h3 className="text-3xl">Total Course: {courses.length}</h3>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#SQ</th>
                <th>Image</th>
                <th>Course Name</th>
                <th>Price</th>
                <th>Enrolled Student</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course,index) => (
                <CourseForm
                  key={course._id}
                  index={index}
                  course={course}
                ></CourseForm>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyCourse;
