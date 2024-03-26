import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <div>
      <ul>
        <li>
          {" "}
          <Link to={"/products/feature"}>Features</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to={"/products/new"}>New</Link>{" "}
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Products;
