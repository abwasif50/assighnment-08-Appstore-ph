import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import MainLayout from "./Layout/MainLayout.jsx";
import Home from "./pages/Home.jsx";

import AllApps from "./pages/AllApps.jsx";
import AppDetails from "./pages/AppDetails.jsx";
 import MyInstallation from "./pages/MyInstallation.jsx";
 import ErrorPage from "./pages/ErrorPage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
   errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "apps", element: <AllApps /> },
      { path: "apps/:id", element: <AppDetails /> },
       { path: "installation", element: <MyInstallation /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
