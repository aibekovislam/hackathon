import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';
import FilmContext from './contexts/FilmContext';
import MyFooter from "./components/footer";
import AuthContext from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ProSidebarProvider>
      <FilmContext>
        <AuthContext>
          <App/>
          <MyFooter/>
        </AuthContext>
      </FilmContext>
    </ProSidebarProvider>
  </BrowserRouter>
);
