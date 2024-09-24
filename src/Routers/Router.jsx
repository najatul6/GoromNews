import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement:
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/logIn",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register/>,
      }
    ],
  },
]);

export default Router;
