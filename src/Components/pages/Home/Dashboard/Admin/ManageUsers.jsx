import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUsers = () => {
  // const [axiosSecure] = useAxiosSecure();
  const { data: students = [], refetch } = useQuery(["students"], async () => {
    const res = await fetch("http://localhost:5000/students");
    // const res = await axiosSecure.get('/users')
    return res.json();
    // return res.data;
  });

  const handleMakeAdmin = (user) => {
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
    fetch(`http://localhost:5000/students/handleMakeInstructor/${user._id}`, {
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

  // const handleDelete = user => {

  // }

  return (
    <div className="w-full">
      <h3 className="text-3xl text-center font-semibold my-4">
        Total Users: {students.length}
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
              <th>Action</th>
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
                  {/* {user.role === "admin" ? (
                    <button
                      className="btn btn-ghost bg-green-500  text-white"
                    >
                      Admin{" "}
                    </button>
                  ) : user.role === "instructor" ? (
                    "Instructor"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost bg-green-500  text-white"
                    >
                      Student{" "}
                    </button>
                  )} */}
                  {user.role !== "instructor" && (
                    <button
                      className="btn btn-ghost bg-green-500  text-white"
                      onClick={() => handleMakeAdmin(user.id)}
                      disabled={user.role === "admin"}
                    >
                      Make Instructor
                    </button>
                  )}
                  {user.role !== "admin" && (
                    <button
                      className="ml-3 btn btn-ghost bg-red-500  text-white"
                      onClick={() => handleMakeAdmin(user)}
                      disabled={user.role === "instructor"}
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
