import { assets } from "../../assets/assets";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={assets.logo} />
    </div>
  );
};

export default Navbar;
