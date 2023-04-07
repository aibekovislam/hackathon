import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';
import FilmContext from './contexts/FilmContext';
import MyFooter from "./components/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ProSidebarProvider>
      <FilmContext>
        <App/>
        <MyFooter/>
      </FilmContext>
    </ProSidebarProvider>
  </BrowserRouter>
);
