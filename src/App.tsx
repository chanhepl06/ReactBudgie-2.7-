import "@/assets/styles/scss/main.scss";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import Root from "@/routes/root";
import LoginPage from "@/pages/authentication/LoginPage";
import Card from "@/components/Card";

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
      element: <LoginPage />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: "contacts",
          element: <Root />,
        },
        {
          path: "abouts",
          element: (
            <Card
              title="About Page"
              content="This is About Page"
              imageUrl="https://picsum.photos/20/20"
            />
          ),
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
