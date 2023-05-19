import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./routes/Routes";
import { RouterProvider } from "react-router-dom";
import AuthContextProviders from "./providers/AuthContextProviders";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProviders>
      <RouterProvider router={router} />
    </AuthContextProviders>
  </React.StrictMode>
);
