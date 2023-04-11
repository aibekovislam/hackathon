import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PaymentLayout from "../layouts/PaymentLayout";
import ChooseUrPlan from "../pages/ChooseUrPlan";
import HomePage from "../pages/HomePage";
import HowToPay from "../pages/HowToPay";
import MainScreen from "../pages/MainScreen";
import PaymentSuccess from "../pages/PaymentSuccess";
import SignPage from "../pages/SignPage";
  
function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signin" element={<SignPage />}></Route>
        <Route path="/plan" element={<ChooseUrPlan />}></Route>
      </Route>
      <Route path="/main" element={<MainScreen />} />
      <Route element={<PaymentLayout />}>
        <Route path="payment" element={<HowToPay />}></Route>
        <Route path="success" element={<PaymentSuccess />}></Route>
      </Route>
    </Routes>
  );
}

export default MainRoutes;
