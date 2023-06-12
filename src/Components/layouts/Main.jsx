import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";

const Main = () => {
  const [theme,setTheme] = useState("light");
  useEffect(() =>{
if (theme === "dark") {
  document.documentElement.classList.add("dark");
}
else {
  document.documentElement.classList.remove("dark");
}
  },[theme]);
  const handleTHeme =() =>{
    setTheme(theme ==="dark" ? "light" :"dark");
  }
    return (
      <div className=" bg-slate-400  dark:bg-slate-800">
        <div className="">
          <div>
            <Navbar> </Navbar>
            <span className="md:absolute md:top-10 md:left-96 ">
              {" "}
              {theme === "dark" ? (
                <button
                  onClick={handleTHeme}
                  className=" absolute btn btn-sm rounded-full  bg-slate-400 text-white"
                >
                  Bright Mode
                </button>
              ) : (
                <button
                  onClick={handleTHeme}
                  className=" relative  btn btn-sm rounded-full  bg-slate-400 text-white"
                >
                  Dark Mode
                </button>
              )}
            </span>
          </div>
          <div className="sm:pt-20 pt-28 pb-10 md:min-h-[calc(100vh-141px)]">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    );
};

export default Main;