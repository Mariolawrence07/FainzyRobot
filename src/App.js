import "./App.css";
import { useRoutes } from "react-router-dom";
import { RouteEnum } from "common/constants";
import { Suspense } from "react";
import Home from "home/Home";
import AppThemeProvider from "AppThemeProvider";
import Products from "products/Products";
import "assets/slick/slick.css";
import "assets/slick/slick-theme.css";
import About from "about/About";
import Career from "careers/Career";
import Contact from "contactUs/Contact";
import SignIn from "SignIn/SignIn";
import Register from "register/Register";

function App() {
  const ROUTES = useRoutes([
    {
      path: "*",
      element: <Home />,
    },
    {
      path: RouteEnum.PRODUCTS_DETAIL,
      element: <Products />,
    },
    {
      path: RouteEnum.ABOUT,
      element: <About />,
    },
    {
      path: RouteEnum.CAREERS,
      element: <Career />,
    },
    {
      path: RouteEnum.LOGIN,
      element: <SignIn />,
    },
    {
      path: RouteEnum.REGISTER,
      element: <Register />,
    },
    {
      path: RouteEnum.HOME,
      element: <Home />,
    },
    {
      path: RouteEnum.CONTACT_US,
      element: <Contact />,
    },

    {
      path: "**",
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
