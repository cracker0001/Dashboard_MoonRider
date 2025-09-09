import { FaBars, FaBell, FaUserCircle } from "react-icons/fa";
import moonrider from "../assets/moonrider.png";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <div className="header-left" style={{ display: "flex", alignItems: "center" }}>
        <img 
          src={moonrider} 
          alt="Moonrider Logo" 
          style={{ height: "40px", marginRight: "10px" }} 
        />
      </div>
      
      <div className="header-right">
        <FaBell className="icon" />
        <FaUserCircle className="icon" />
      </div>
    </header>
  );
};

export default Header;
