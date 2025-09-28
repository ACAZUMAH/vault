import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { routes } from "./routes";
import { useEffect } from "react";
import { useForceUpdate } from "@mantine/hooks";
import { useAppAuthentication } from "../hooks/useAppAuthentication";

export const AppRouter = () => {
  const { isAuthenticated } = useAppAuthentication();
  const forceUpdate = useForceUpdate();
  const getRouter = () => {
    return createBrowserRouter([
      {
        element: <Outlet />,
        children: [...routes],
      },
    ]);
  };

  useEffect(() => {
    forceUpdate();
  }, [isAuthenticated]);

  return <RouterProvider router={getRouter()} />;
};
