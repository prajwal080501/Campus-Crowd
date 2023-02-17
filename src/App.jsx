import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import { useState } from "react";
import Error from "./pages/Error";

function App() {
  const [open, setOpen] = useState(false);
  const [sidebar, showSidebar] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  }

const handleSidebar = () => {
  showSidebar(!sidebar);
}

  return (
   <Router>
    <Navbar oepn={open} handleOpen={handleOpen}/>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} handleSidebar={handleSidebar} showSidebar={showSidebar}  open={open} handleOpen={handleOpen}/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
