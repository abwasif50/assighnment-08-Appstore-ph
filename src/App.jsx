// import React from "react";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import MainLayout from "./Layout/MainLayout";
// import Home from "./pages/Home";
// import AllApps from "./pages/AllApps";
// import AppDetails from "./pages/AppDetails";
// // import MyInstallation from "./pages/MyInstallation";
// // import ErrorPage from "./pages/ErrorPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     //  errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",
//          element: <Home />,
//       },
//       {
//         path: "/apps",
//          element: <AllApps />,
//       },
//       {
//         path: "/apps/:id",
//           element: <AppDetails />,
//       },
//       {
//         path: "/installation",
//         //  element: <MyInstallation />,
//       },
//     ],
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;

import React from "react";

const App = () => {
  return (
    <div className="font-sans bg-base-100 text-base-content min-h-screen">
      <h1 className="text-center text-3xl font-bold text-primary mt-10">
        App Store Project Running Successfully 🚀
      </h1>
      <p className="text-center mt-2 text-gray-500">
        Navigate using the navbar to explore apps.
      </p>
    </div>
  );
};

export default App;
