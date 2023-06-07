import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Main = () => {
    return (
      <div>
        <Navbar></Navbar>
        <div className="pt-28 pb-10 md:min-h-[calc(100vh-141px)]">
          <Outlet />
        </div>
        <Footer />
      </div>
    );
};

export default Main;