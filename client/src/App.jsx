import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setUser } from "./store/user";
import NaView from "./components/Navbar";
import Profile from "./components/Profile";
import Cards from "./components/Cards";
import Search from "./components/Search";
import UserList from "./components/Userlist";
import PropertyDetail from "./components/PropertyDetail";

function App() {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (search === "") {
      axios
        .get("http://localhost:3001/api/properties/all")
        .then((res) => setProperties(res.data))
        .catch((error) => console.error(error));
    } else {
      axios
        .get(`http://localhost:3001/api/properties/search/${search}`)
        .then((res) => setProperties(res.data))
        .catch((error) => console.error(error));
    }
  }, [search]);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearch(e.target.value);
    }
    console.log(e.key);
  };

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
        <Route path="/propiedades" element={<Cards />} />
        <Route path="/search" element={<Search />} />
        <Route path="/usersView" element={<UserList />} />
        <Route path="/propertyDetail/:id" element={<PropertyDetail />} />
      </Routes>
    </>
  );
}

export default App;
