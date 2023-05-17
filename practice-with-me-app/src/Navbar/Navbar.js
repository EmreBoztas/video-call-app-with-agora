import { useState } from "react";
import "./navbar.css";
import logo from "../Images/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Practice With Me" />
          </Link>
        </div>
        <ul className="links">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/speakingrooms">Speaking Rooms</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/profile" className="profile_btn">
            <AccountCircleIcon />
            &nbsp;Login
          </CustomLink>
        </ul>
        <div
          className="toggle_btn"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <MenuIcon />
        </div>
      </div>

      <div className={dropdownOpen ? "dropdown_menu open" : "dropdown_menu"}>
        <ul>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/speakingrooms">Speaking Rooms</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/profile" className="profile_btn">
            <AccountCircleIcon />
            &nbsp;Login
          </CustomLink>
        </ul>
      </div>
    </header>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
