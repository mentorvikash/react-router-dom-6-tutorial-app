import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import About from "./component/About";
import NavBar from "./component/NavBar";
import Dashboard from "./component/Dashboard";
import Login from "./component/Auth/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/" Component={NavBar}>
          <Route index Component={Dashboard} />
          <Route path="/home" Component={Home} />
        </Route>
        <Route path="/about" Component={About} />
      </Routes>
    </>
  );
}

export default App;
