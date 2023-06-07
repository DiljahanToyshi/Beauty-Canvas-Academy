import { Link } from "react-router-dom";
import logoImg from "../../assets/logo(8).jpg"

const Logo = () => {
  return (
    <Link to="/">
      <img
        className="hidden md:block w-20 rounded-full"
        src={logoImg}
        alt="logo"
       
      />
    </Link>
  );
};

export default Logo;
