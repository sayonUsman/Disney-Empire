import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import LoginPage from "../pages/LoginPage/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
    ],
  },
]);

export default router;
