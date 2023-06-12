
import  { useContext,  useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import UpdateModal from "./UpdateModal";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyCourse = () => {
    const [axiosSecure] = useAxiosSecure();

  const { user,loading } = useContext(AuthContext);
    let [isOpen, setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
      setIsOpen(false);
    }

  const { refetch, data: courses = [] } = useQuery({
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
              {courses.map((course, index) => (
                <tr key={course._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        {course.courseImg && (
                          <img
                            src={course.courseImg}
                            alt="Avatar Tailwind CSS Component"
                          />
                        )}
                      </div>
                    </div>
                  </td>
                  <td>{course.CourseName}</td>
                  <td>${course.price}</td>
                  <td>{course.studentNumber}</td>
                  <td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span
                        onClick={() => setIsEditModalOpen(true)}
                        className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                      >
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span className="relative">Update</span>
                      </span>
                      <UpdateModal
                        isOpen={isEditModalOpen}
                        closeModal={() => setIsEditModalOpen(false)}
                        course={course}
                        id={course._id}
                        refetch={refetch}
                        setIsEditModalOpen={setIsEditModalOpen}
                      />
                    </td>
                  </td>
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
