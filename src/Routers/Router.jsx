import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import Error404 from "../pages/Error404/Error404";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement:<Error404/>,
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
