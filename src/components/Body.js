import React from "react";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

const Body = () => {
  // Define routes
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage:
          'url("https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg")',
      }}
    >
      <div className="bg-black bg-opacity-50">
        <RouterProvider router={appRouter} />
      </div>
    </div>
  );
};

export default Body;
