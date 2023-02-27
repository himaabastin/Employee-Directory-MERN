import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../mainpages/Home/Home";
import Profile from "./EmployeeProfile/Profile";
import NotFound from "../utilis/NotFound/NotFound";

function Pages() {
  return (
    //Routing
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/profile/:id" element={<Profile />} />
      <Route exact path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Pages;
