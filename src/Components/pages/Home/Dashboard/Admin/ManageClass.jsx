import useCourses from "../../../../../hooks/useCourses";
import { useState } from "react";

const ManageClass = () => {
  const [courses, , refetch] = useCourses();
  const [disabledButtons, setDisabledButtons] = useState([]);

  const handleApprove = (id) => {
    console.log("approved");
    fetch(`http://localhost:5000/courses/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approve" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
        }
      });
  };

  const handleDisable = (index) => {
    setDisabledButtons([...disabledButtons, index]);
  };

  return (
    <div className="w-full">
      <h3 className="text-3xl text-center font-semibold my-4">Manage Class</h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Course Image</th>
              <th>Course name</th>
              <th>Instructor name</th>
              <th>Instructor email</th>
              <th>Available seats</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => {
              console.log(course.status); // Log the value of course.status here
              return (
                <tr key={course._id}>
                  <td>
                    <img
                      className="h-28 w-28"
                      src={course.courseImg}
                      alt="Course"
                    />
                  </td>
                  <td>{course.courseName}</td>
                  <td>{course.instructorName}</td>
                  <td>{course.email}</td>
                  <td className="text-center">{course.availableSeats}</td>
                  <td>{course.price}$</td>
                  <td>
                    {course.status === "Approved" ? (
                      <span>Approved</span>
                    ) : (
                      <button
                        className="btn bg-green-400"
                        onClick={() => handleApprove(course._id)}
                      >
                        Approve
                      </button>
                    )}
                    <button
                      className="btn bg-red-400 mt-4"
                      disabled={disabledButtons.includes(index)}
                      onClick={() => handleDisable(index)}
                    >
                      Disable
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClass;
