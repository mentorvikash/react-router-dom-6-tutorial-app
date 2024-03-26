import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleOrder = (isCompleted) => {
    if (isCompleted) {
      navigate("/pass");
    } else {
      navigate("/fail");
    }
  };
  return (
    <div>
      <div>Place Your Order</div>
      <button onClick={() => handleOrder(true)}>Order Placed</button>
    </div>
  );
}

export default Home;
