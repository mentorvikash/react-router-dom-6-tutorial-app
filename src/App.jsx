import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import About from "./component/About";
import NavBar from "./component/NavBar";
import NotFound from "./component/NotFound";
import Product from "./component/Product";
import Feature from "./component/Feature";
import New from "./component/New";
import First from "./component/Blog/First";
import Second from "./component/Blog/Second";
import Blog from "./component/Blog/Blog";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/product" Component={Product}>
          <Route index Component={Feature} />
          <Route path="feature" Component={Feature} />
          <Route path="new" Component={New} />
        </Route>
        <Route path="/blog/:blogId" Component={Blog} />
        <Route path="*" Component={NotFound} />1
      </Routes>
    </>
  );
}

export default App;
