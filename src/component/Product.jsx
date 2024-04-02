import { Link, Outlet } from "react-router-dom";

function Product() {
  return (
    <div>
      <h2>Product Page</h2>
      <ul
        className="navlist"
        style={{ display: "flex", gap: "10px", listStyleType: "none" }}
      >
        <li>
          <Link style={{ textDecoration: "none" }} to="feature">
            Feature
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="new">
            New
          </Link>
        </li>
      </ul>
      <div
        style={{ border: "1px solid black", margin: "2rem", padding: "1rem" }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Product;
