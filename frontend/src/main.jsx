import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import App from "./App";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Evenment from "./pages/Evenment";
import Contact from "./pages/Contact";
import Galleries from "./pages/Galleries";
import GalleryDetails from "./pages/GalleryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/landing",
    element: <LandingPage />,
  },
  {
    path: "/evenment",
    element: <Evenment />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/galleries",
    element: <Galleries />,
  },
  {
    path: "/galleries/:galleryId",
    element: <GalleryDetails />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
