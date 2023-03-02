import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setUser } from "./store/user";
import NaView from "./components/navbar/Navbar";
import Profile from "./components/profile/profile";
import Cards from "./components/cards/Cards";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .post("http://localhost:3001/api/users/me", {
        token: window.localStorage.getItem("token"),
      })
      .then((res) => dispatch(setUser(res.data)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <NaView />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/alquiler" element={<Cards />} />
      </Routes>
    </>
  );
}

export default App;
