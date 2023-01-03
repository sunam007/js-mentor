import { Route, Routes } from "react-router";
import "./App.css";
import About from "./component/About/About";
import Classes from "./component/Classes/Classes";
import Courses from "./component/Courses/Courses";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import SignUp from "./component/SignUp/SignUp";
import Support from "./component/Support/Support";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="/classes" element={<Classes />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
