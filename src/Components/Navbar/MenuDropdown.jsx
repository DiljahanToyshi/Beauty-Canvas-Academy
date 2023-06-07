import { AiOutlineMenu } from "react-icons/ai";
import {  useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Image from "./Imgae";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../pages/Home/Dashboard/Dashboard";

const MenuDropdown = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  //   const toggleOpen = useCallback(() => {
  //     setIsOpen(value => !value)
  //   }, [])
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        {/* The Beauty Canvas Academy btn */}
        <div className=" md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-slate-500 transition cursor-pointer">
          The Beauty Canvas Academy
        </div>
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 md:py-1 md:px-2 border-[1px] border-slate-500 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Image />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-slate-700 overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <Link
              to="/"
              className="block md:hidden px-4 py-3 hover:bg-slate-500 transition font-semibold"
            >
              Home
            </Link>
            {user ? (
              <div
                onClick={logOut}
                className="px-4 py-3 hover:bg-slate-500 transition font-semibold cursor-pointer"
              >
                Logout
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-3 hover:bg-slate-500 transition font-semibold"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-3 hover:bg-slate-500 transition font-semibold"
                >
                  Sign Up
                </Link>
              </>
            )}
            <Link
              to="/instructors"
              className="block md:hidden px-4 py-3 hover:bg-slate-500 transition font-semibold"
            >
              <Instructors></Instructors>
            </Link>
            <Link
              to="/classes"
              className="block md:hidden px-4 py-3 hover:bg-slate-500 transition font-semibold"
            >
              <Classes></Classes>
            </Link>
            <Link
              to="/dashboard"
              className="block md:hidden px-4 py-3 hover:bg-slate-500 transition font-semibold"
            >
              <Dashboard></Dashboard>{" "}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;
