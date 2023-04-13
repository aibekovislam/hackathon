import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import MainScreen from "../pages/MainScreen";
import LeaveSoon from "../components/leaveSoon";
import "../static/style.css";
import FAQ from "../components/FAQ";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />}></Route>
      </Route>
      <Route path="/main" element={<MainScreen />} />
      <Route path="/leaving-so-soon" element={<LeaveSoon />} />
      <Route path="/footer" element={<FAQ />} />
    </Routes>
  );
}

export default MainRoutes;
