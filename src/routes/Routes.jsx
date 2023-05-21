import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import Error_404 from "../pages/Error_404/Error_404";
import AddToy from "../pages/AddToy/AddToy";
import AllToy from "../pages/AllToy/AllToy";
import MyToys from "../pages/MyToys/MyToys";
import Home from "../pages/Home/Home";
import Updates from "../pages/MyToys/Updates/Updates";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all_toy",
        element: <AllToy></AllToy>,
      },
      {
        path: "/my_toys",
        element: <MyToys></MyToys>,
      },
      {
        path: "/updates/:id",
        element: <Updates></Updates>,
      },
      {
        path: "/add_toy",
        element: <AddToy></AddToy>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/signUp",
        element: <SignUpPage></SignUpPage>,
      },
    ],
  },
  {
    path: "*",
    element: <Error_404 />,
  },
]);

export default router;
