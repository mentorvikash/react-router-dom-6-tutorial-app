import { Link, useNavigate, useLocation } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleOrder = (isCompleted) => {
    if (isCompleted) {
      navigate("/pass");
    } else {
      navigate("/fail");
    }
  };

  // const { pathname } = useLocation();

  // const FeaturePage = () => {
  //   return <div>Feature Page</div>;
  // };

  // const NewPage = () => {
  //   return <div>Feature Page</div>;
  // };

  return (
    <div>
      <div>Place Your Order</div>
      <button onClick={() => handleOrder(true)}>Order Placed</button>
      <div>
        <ul>
          <li>
            <Link to={""}>Feature</Link>
          </li>
          <li>
            <Link to={""}>New</Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
