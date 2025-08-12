import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "boxicons/css/boxicons.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Movies from "./Pages/Movies.jsx";
import Favorites from "./Pages/Favorites.jsx";
import Search from "./Pages/Search.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/Movies", element: <Movies /> },
  { path: "/favorites", element: <Favorites /> },
  { path: "/search", element: <Search /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
