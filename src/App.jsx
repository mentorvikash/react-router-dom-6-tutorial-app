import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import About from "./component/About";
import NavBar from "./component/NavBar";
import OrderSucess from "./component/OrderSucess";
import OrderFail from "./component/OrderFail";
import NotFound from "./component/NotFound";
import Products from "./component/Products";
import Features from "./component/Features";
import New from "./component/New";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/pass" Component={OrderSucess} />
        <Route path="/fail" Component={OrderFail} />
        <Route path="/products" Component={Products}>
          <Route path="feature" Component={Features} />
          <Route path="new" Component={New} />
        </Route>
        <Route path="*" Component={NotFound} />
      </Routes>
    </>
  );
}

export default App;
