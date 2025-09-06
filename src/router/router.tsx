import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { routes } from "./routes";

export const AppRouter = () => {
    
  const getRouter = () => {
    return createBrowserRouter([
      {
        element: <Outlet />,
        children: [...routes],
      },
    ]);
  };

  return <RouterProvider router={getRouter()}/>
};
