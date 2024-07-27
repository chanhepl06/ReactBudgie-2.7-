import "@/assets/styles/scss/main.scss";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import Root from "@/routes/root";
import LoginPage from "@/pages/authentication/LoginPage";
import { ThemeProvider } from "@mui/styles";
import ResponsiveAppBar from "@/routes/root";
import Card from "@/components/Card";
import DashBoard from "@/pages/dashboard/DashboardPage";

interface Error {
  message: string;
  statusText: string;
}

function ErrorBoundary() {
  const error = useRouteError() as Error;
  console.log(error);
  return <i>{error.statusText || error.message}</i>;
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: "/contacts",
          element: <LoginPage />,
        },
        {
          path: "/abouts",
          element: <DashBoard />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
