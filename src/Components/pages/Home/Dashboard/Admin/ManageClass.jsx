import  { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const ManageClass = () => {
  // const [axiosSecure] = useAxiosSecure();
  const { data: courses = [], refetch } = useQuery(["courses"], async () => {
    const res = await fetch("http://localhost:5000/courses");
    // const res = await axiosSecure.get('/users')
    return res.json();
    // return res.data;
  });

  const handleApprove = async (course) => {
     console.log(course._id)
    fetch(`http://localhost:5000/students/admin/${course._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
         toast.success('course approved')
        }
      });
    }

  const handleDeny = async (id) => {
    try {
      await axios.patch(`/courses/${id}/status`, { status: "denied" }); // Replace with your backend API endpoint
      updateClassStatus(id, "denied");
    } catch (error) {
      console.log("Error updating class status:", error);
    }
  };

  const updateClassStatus = (id, status) => {
    setClasses((prevClasses) =>
      prevClasses.map((cls) => {
        if (cls._id === id) {
          return { ...cls, status };
        }
        return cls;
      })
    );
  };

  return (
    <div className="w-full">
      <p>Manage Courses</p>
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
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls) => (
              <tr key={cls._id}>
                <td>
                  <img className="h-28 w-28" src={cls.courseImg} />
                </td>
                <td>{cls.courseName}</td>
                <td>{cls.instructorName}</td>
                <td>{cls.instructorEmail}</td>
                <td>{cls.availableSeats}</td>
                <td>{cls.price}$</td>
                <td>{cls.status}</td>
                <td>
                  {cls.status === "pending" && (
                    <>
                      <button
                        disabled={cls.status !== "pending"}
                        onClick={() => handleApprove(cls._id)}
                      >
                        Approve
                      </button>
                      <button
                        disabled={cls.status !== "pending"}
                        onClick={() => handleDeny(cls._id)}
                      >
                        Deny
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClass;
