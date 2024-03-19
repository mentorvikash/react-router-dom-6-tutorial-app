import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <ul className="navlist">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
      </ul>
    </div>
  );
}
export default NavBar;
