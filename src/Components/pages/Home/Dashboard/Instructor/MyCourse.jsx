
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";

const MyCourse = () => {
  const [courses, setCourses] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/courses/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCourses(data)
      });
  }, [])

  const total = courses.reduce((sum, course) => course.price + sum, 0);

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
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={course._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                       {img && <img
                          src={course.courseImg}
                          alt="Avatar Tailwind CSS Component"
                        />}
                      </div>
                    </div>
                  </td>
                  <td>{course.courseName}</td>
                  <td>${course.price}</td>
                  <td>{course.studentNumber}</td>
                  <td>{'Pending'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyCourse;
