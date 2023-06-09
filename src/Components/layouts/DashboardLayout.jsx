import { NavLink, Outlet } from "react-router-dom";

import useAdmin from "../hooks/useAdmin";
import useCart from "../../hooks/useCart";
import useInstructor from "../../hooks/useInstructor";

const DashboardLayout = () => {
  const [cart] = useCart();

  // TODO: load data from the server to have dynamic isAdmin based on Data
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <div className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side bg-slate-600">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminhome">Admin Home</NavLink>
              </li>

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
                <NavLink to="/dashboard/mycourse">My Course</NavLink>
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
