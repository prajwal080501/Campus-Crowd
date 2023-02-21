import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import { useState } from "react";
import Error from "./pages/Error";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Floatbutton from "./components/Floatbutton";

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
      <Navbar oepn={open} handleOpen={handleOpen} />
      <Sidebar handleOpen={handleOpen} open={open} />
      <Rightbar sidebar={sidebar} handleSidebar={handleSidebar} />
      <Floatbutton sidebar={sidebar} handleSidebar={handleSidebar} />
      <Routes>
        <Route exact path="/" element={<Home sidebar={sidebar} handleSidebar={handleSidebar} showSidebar={showSidebar} open={open} handleOpen={handleOpen} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:username" element={<Profile open={open} handleOpen={handleOpen} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
