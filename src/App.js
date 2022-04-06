import "./App.css";
import { useRoutes } from "react-router-dom";
import { RouteEnum } from "common/constants";
import { Suspense } from "react";
import Home from "home/Home";
import AppThemeProvider from "AppThemeProvider";

function App() {
  const ROUTES = useRoutes([
    {
      path: RouteEnum.HOME,
      element: <Home />,
    },
    {
      path: "*",
      element: <Home />,
    },
  ]);

  return (
    <AppThemeProvider>
      <Suspense fallback={"loading..."}>{ROUTES}</Suspense>
    </AppThemeProvider>
  );
}

export default App;
