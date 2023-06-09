import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useCart from "../../../../../hooks/useCart";

const SelectedCourse = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  const total = cart.reduce((sum, course) => course.price + sum, 0);


  const handleDelete = (course) => {
      console.log(course);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${course._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your Course has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <>
      <p className="text-5xl my-3 font-semibold text-center ">
        Selected Course
      </p>
      <div className="w-full">
        <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
          <h3 className="text-3xl">Total Course: {cart.length}</h3>
          <h3 className="text-3xl">Total Bills: ${total}</h3>
          <Link to="/dashboard/payment">
            <button className="btn btn-neutral text-white rounded-full  hover:bg-slate-500 outline-slate-50 btn-sm">
              PAY
            </button>
          </Link>
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((course, index) => (
                <tr key={course._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={course.courseImg}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{course.courseName}</td>
                  <td>${course.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(course)}
                      className="btn btn-ghost bg-red-600  text-white"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
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

export default SelectedCourse;
