import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <ul className="navlist">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li>
          <NavLink to="product">Product</NavLink>
        </li>
      </ul>
    </div>
  );
}
export default NavBar;
