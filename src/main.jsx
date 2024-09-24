import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import Router from "./Routers/Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router}/>
  </StrictMode>
);
