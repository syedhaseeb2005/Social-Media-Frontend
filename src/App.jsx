import "./App.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state?.user?.user?.user);
  // console.log(user);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Login />} />
        <Route
          path={`/profile/:username`}
          element={user ? <Profile /> : <Login />}
        />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
