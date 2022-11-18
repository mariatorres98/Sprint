import { onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import { auth } from "../firebase/firebaseConfig";
import DashBoardRouter from "./DashBoardRouter";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import Spinner from "react-bootstrap/Spinner";
import Navigationbar from "../components/nav/Navigationbar";
import Pagina1 from "../components/inicio/Pagina1";
import Pagina2 from "../components/inicio/Pagina2";
import Pagina3 from "../components/inicio/Pagina3";
import Pagina4 from "../components/inicio/Pagina4";

const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  const [check, setCheck] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true);
        
      } else {
        setIsLoggedIn(false);
      }
      setCheck(false)
    }
    );
  }, [setIsLoggedIn]);

  if (check) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <BrowserRouter>
    <Navigationbar isAuthentication={isLoggedIn} />
      <Routes>
      <Route path="/pagina1" element={<Pagina1 />} />
          <Route path="/pagina2" element={<Pagina2 />} />
          <Route path="/pagina3" element={<Pagina3 />} />
          <Route path="/pagina4" element={<Pagina4 />} />
        <Route element={<PublicRouter isAuthentication={isLoggedIn} />}>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />

        </Route>
        <Route element={<PrivateRouter isAuthentication={isLoggedIn} />}>
          <Route path="/*" element={<DashBoardRouter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
