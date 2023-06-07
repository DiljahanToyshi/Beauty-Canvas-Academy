import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Main = () => {
    return (
      <div className="bg-slate-400">
        <Navbar></Navbar>
        <div className="sm:pt-20 pt-28 pb-10 md:min-h-[calc(100vh-141px)]">
          <Outlet />
        </div>
        <Footer />
      </div>
    );
};

export default Main;