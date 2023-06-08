import Container from "../pages/Home/Container";
import Logo from "./Logo";
// import Search from "./Search";
import MenuDropdown from "./MenuDropdown";
import Instructors from "../pages/Instructors/Instructors";
import { Link } from "react-router-dom";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../pages/Home/Dashboard/Dashboard";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-slate-700 text-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row  items-center justify-between gap-2 md:gap-0">
            <div className="flex items-center ">
              {" "}
              <Logo />
              <div className=" md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-slate-500 transition cursor-pointer">
                The Beauty Canvas Academy
              </div>
            </div>
            <Link to="/instructors" className="sm:hidden md:block">
              Instructors
            </Link>
            <Link to="/classes" className="sm:hidden md:block">
              Classes{" "}
            </Link>
            <Link to="/dashboard" className="sm:hidden md:block">
              Dashboard{" "}
            </Link>
            <MenuDropdown />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
