import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";


const EnrolledClass = () => {
      const { user } = useContext(AuthContext);
    const [courses, setcourses] = useState([]);

    const url = `http://localhost:5000/payments/${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                    console.log(data)
                    setcourses(data)
                
               
            }
            )
    }, []);


    return (
      <div className="w-full">
        <h3 className="text-3xl text-center font-semibold my-4">
          Your Course{" "}
        </h3>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Course Name</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.courseName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default EnrolledClass;