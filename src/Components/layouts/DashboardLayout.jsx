/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import useInstructor from "../../hooks/useInstructor";
import useAdmin from "../../hooks/useAdmin";


const DashboardLayout = () => {
 const {user,role} = useContext(AuthContext);
const [isAdmin]= useAdmin();
const [isInstructor] = useInstructor();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center md:pl-10">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-neutral text-white rounded-full  hover:bg-slate-500 outline-slate-50 lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-slate-400">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 font-serif text-lg">
          <li className="text-center font-semibold text-2xl">
            <span>{user?.displayName} Dashboard</span>
            <span> Role: {role} </span>
          </li>
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/manageusers">Manage users</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageclass">Manage Classes</NavLink>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <NavLink to="/dashboard/addcourse"> Add a Course</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mycourse">My Courses</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/enrolledclasses">
                  My Enrolled Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymenthistory">
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/selectcourse">
                  My Selected Course
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">Home</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/classes">Our Courses</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
