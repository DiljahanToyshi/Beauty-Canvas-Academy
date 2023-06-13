import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
// import ErrorPage from "../pages/Error/ErrorPage";
import ManageUsers from "../pages/Home/Dashboard/Admin/ManageUsers";
import ManageClass from "../pages/Home/Dashboard/Admin/ManageClass";
import EnrolledClass from "../pages/Home/Dashboard/Student/EnrolledClass";
import PaymentHistory from "../pages/Home/Dashboard/Student/PaymentHistory";
import SelectedCourse from "../pages/Home/Dashboard/Student/SelectedCourse";
import PrivateRoute from "./PrivateRoute";
import AddCourse from "../pages/Home/Dashboard/Instructor/AddCourse";
import MyCourse from "../pages/Home/Dashboard/Instructor/MyCourse";
import DashboardLayout from "../layouts/DashboardLayout";
import AdmineROute from "./AdmineROute";
import InstructorRoute from "./InstructorRoute";
import UpdateCourseForm from "../pages/Home/Dashboard/Instructor/UpdateCourseForm";

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
        element: (
          <AdmineROute>
            <ManageUsers></ManageUsers>
          </AdmineROute>
        ),
      },

      {
        path: "manageclass",
        element: (
          <AdmineROute>
            <ManageClass></ManageClass>
          </AdmineROute>
        ),
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
        element: (
          <InstructorRoute>
            {" "}
            <AddCourse></AddCourse>
          </InstructorRoute>
        ),
      },
      {
        path: "mycourse",
        element: (
          <InstructorRoute>
            <MyCourse></MyCourse>{" "}
          </InstructorRoute>
        ),
      },
      {
        path: "updatecourse/:id",
        element: <UpdateCourseForm />,
      },

      // {path:"/update-course/:courseId", element:<UpdateCourseForm /> }
    ],
  },
]);
