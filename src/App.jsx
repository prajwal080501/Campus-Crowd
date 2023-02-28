import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, redirect, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import { useContext, useState } from "react";
import Error from "./pages/Error";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Floatbutton from "./components/Floatbutton";
import { AuthContext } from "./context/authContext";

function App() {
  const [open, setOpen] = useState(false);
  const [sidebar, showSidebar] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  }
  const { user } = useContext(AuthContext);
  const handleSidebar = () => {
    showSidebar(!sidebar);
  }

  return (
    <Router>
      <Navbar open={open} handleOpen={handleOpen} />
      <Sidebar handleOpen={handleOpen} open={open} />
      <Rightbar sidebar={sidebar} handleSidebar={handleSidebar} />
      <Floatbutton sidebar={sidebar} handleSidebar={handleSidebar} />
      <Routes>
        <Route exact path="/" element={user ? <Home sidebar={sidebar} handleSidebar={handleSidebar} showSidebar={showSidebar} open={open} handleOpen={handleOpen} /> : <Login />} />
        <Route path="/login" element={user ? <Navigate to="/" replace={true} /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:username" element={<Profile open={open} handleOpen={handleOpen} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
