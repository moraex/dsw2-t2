import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "../components/Header";
import AboutUs from "./AboutUs";
import Home from "./Home";
import Adote from "./Adote"

const UnauthenticatedRoute = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <UnauthenticatedRoute />,
    children: [{
      path: '',
      element: <Home />
    },
    {
      path: '/about-us',
      element: <AboutUs />
    },
    {
      path: '/adote',
      element: <Adote /> }
    ]
  },

]);

export default router;

