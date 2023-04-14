import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PaymentLayout from "../layouts/PaymentLayout";
import AddPost from "../pages/AddPost";
import ChooseUrPlan from "../pages/ChooseUrPlan";
import DetailFilm from "../pages/DetailFilm";
import EditReview from "../pages/EditReview";
import FilmsList from "../pages/FilmsList";
import HomePage from "../pages/HomePage";
import HowToPay from "../pages/HowToPay";
import MainScreen from "../pages/MainScreen";
import MoviesPagesFooter from "../pages/MoviesPagesFooter";
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
      <Route path="/films" element={<FilmsList/>}></Route>
      <Route path="/detail/:id" element={<DetailFilm/>}></Route>
      <Route element={<PaymentLayout />}>
        <Route path="payment" element={<HowToPay />}></Route>
        <Route path="success" element={<PaymentSuccess />}></Route>
      </Route>
      <Route path="/add" element={<AddPost/>}></Route>
      <Route path="/edit/:id" element={<EditReview/>}></Route>
      <Route path="/test" element={<MoviesPagesFooter/>}></Route>
    </Routes>
  );
}

export default MainRoutes;
