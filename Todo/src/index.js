import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./screens/Home";
import Authentication, { AuthenticationMode } from "./screens/Authentication";
import ErrorPage from "./screens/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import UserProvider from "./context/UserProvider";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/signin",
    element: (
      <Authentication
        authenticationMode={AuthenticationMode.Login}
      ></Authentication>
    ),
  },
  {
    path: "/signup",
    element: (
      <Authentication
        authenticationMode={AuthenticationMode.Register}
      ></Authentication>
    ),
  },
  {
    element: <ProtectedRoute></ProtectedRoute>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserProvider>
  </React.StrictMode>
);


reportWebVitals();
