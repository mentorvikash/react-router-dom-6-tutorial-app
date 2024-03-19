import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import About from "./component/About";
import NavBar from "./component/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
      </Routes>
    </>
  );
}

export default App;
