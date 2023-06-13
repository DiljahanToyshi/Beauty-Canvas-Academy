import { Link } from "react-router-dom";
import UpdateCourseForm from "./UpdateCourseForm";

const CourseForm = ({ course,index}) => {
  const { courseImg, CourseName, studentNumber, price,} = course;

  return (
    <tr >
      <td>{index + 1}</td>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            {course.courseImg && (
              <img src={course.courseImg} alt="Avatar Tailwind CSS Component" />
            )}
          </div>
        </div>
      </td>
      <td>{course.CourseName}</td>
      <td>${course.price}</td>
      <td>{course.studentNumber}</td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <Link to={`/dashboard/updatecourse/${course?._id}`}>
          {" "}
          <button className="btn btn-neutral text-white rounded-full  hover:bg-slate-500 outline-slate-50">
            Update
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default CourseForm;
