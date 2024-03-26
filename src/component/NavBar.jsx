import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <ul className="navlist">
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
      </ul>
    </div>
  );
}
export default NavBar;
