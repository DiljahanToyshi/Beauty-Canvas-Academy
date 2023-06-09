import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../pages/Home/Dashboard/Dashboard";
// import ErrorPage from "../pages/Error/ErrorPage";
import ManageUsers from "../pages/Home/Dashboard/Admin/ManageUsers";
import AdminHOme from "../pages/Home/Dashboard/Admin/AdminHOme";
import ManageClass from "../pages/Home/Dashboard/Admin/ManageClass";
import EnrolledClass from "../pages/Home/Dashboard/Student/EnrolledClass";
import PaymentHistory from "../pages/Home/Dashboard/Student/PaymentHistory";
import SelectedCourse from "../pages/Home/Dashboard/Student/SelectedCourse";
import PrivateRoute from "./PrivateRoute";
import AddCourse from "../pages/Home/Dashboard/Instructor/AddCourse";
import MyCourse from "../pages/Home/Dashboard/Instructor/MyCourse";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },

      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/manageusers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "/dashboard/adminhome",
        element: <AdminHOme></AdminHOme>,
      },
      {
        path: "/dashboard/manageclass",
        element: <ManageClass></ManageClass>,
      },
      {
        path: "/dashboard/enrolledclasses",
        element: <EnrolledClass></EnrolledClass>,
      },
      {
        path: "/dashboard/paymenthistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "/dashboard/selectcourse",
        element: <SelectedCourse></SelectedCourse>,
      },
      {
        path: "dashboard/addcourse",
        element: <AddCourse></AddCourse>,
      },
      {
        path: "dashboard/mycourse",
        element: <MyCourse></MyCourse>,
      },
    ],
  },
]);
