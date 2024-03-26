import { Outlet, useParams } from "react-router-dom";
function Product() {
  const { feature } = useParams();
  console.log({ feature });
  return (
    <div>
      <h2>Product Page</h2>
      <Outlet />
    </div>
  );
}

export default Product;
