import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
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
import DashboardLayout from "../layouts/DashboardLayout";

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
        <DashboardLayout></DashboardLayout>{" "}
      </PrivateRoute>
    ),
    children: [
      {
        path: "manageusers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "adminhome",
        element: <AdminHOme></AdminHOme>,
      },
      {
        path: "manageclass",
        element: <ManageClass></ManageClass>,
      },
      {
        path: "enrolledclasses",
        element: <EnrolledClass></EnrolledClass>,
      },
      {
        path: "paymenthistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "selectcourse",
        element: <SelectedCourse></SelectedCourse>,
      },
      {
        path: "addcourse",
        element: <AddCourse></AddCourse>,
      },
      {
        path: "mycourse",
        element: <MyCourse></MyCourse>,
      },
    ],
  },
]);
