import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: students = [], refetch } = useQuery(["students"], async () => {
    // const res = await fetch("http://localhost:5000/students");
    const res = await axiosSecure.get('/students')
    // return res.json();
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    console.log(user._id)
    fetch(`http://localhost:5000/students/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleMakeInstructor = (user) => {
    console.log(user)
    fetch(`http://localhost:5000/students/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${user.name} is an Instructor Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  

  return (
    <div className="w-full">
      <h3 className="text-3xl text-center font-semibold my-4">
Manage Student      </h3>
      <h3 className="text-exl text-center font-semibold my-4">
        Total Students: {students.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role ? user.role : "Student"}</td>
                <td>
                  {user.role !== "Instructor" && (
                    <button
                      className="btn rounded-full bg-black font-semibold text-white "
                      onClick={() => handleMakeInstructor(user)}
                      disabled={user.role === "Instructor"}
                    >
                      Make Instructor
                    </button>
                  )}
                  {user.role !== "Admin" && (
                    <button
                      className="ml-3 btn btn-outline rounded-full font-semibold text-black"
                      onClick={() => handleMakeAdmin(user)}
                      disabled={user.role === "Admin"}
                    >
                      Make Admin
                    </button>
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

export default ManageUsers;

//
