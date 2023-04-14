import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import FilmContext from "./contexts/FilmContext";
import MyFooter from "./components/footer";
import AuthContext from "./contexts/AuthContext";
import CartContext from "./contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ProSidebarProvider>
      <FilmContext>
        <AuthContext>
          <CartContext>
            <App />
          </CartContext>
          {/* <MyFooter/> */}
        </AuthContext>
      </FilmContext>
    </ProSidebarProvider>
  </BrowserRouter>
);
