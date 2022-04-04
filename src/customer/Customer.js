import { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "customer/common/Footer";
import RouteComposer from "common/RouteComposer";
// import PageNotFound from "common/PageNotFound";
import { RouteEnum } from "common/Constants";
import Header from "./common/Header";

function Customer() {
  return (
    <>
      <Header />
      <RouteComposer
        routes={ROUTES}
        wrapper={(children) => <Switch>{children}</Switch>}
      />
      <Footer />
    </>
  );
}

export default Customer;

const ROUTES = [
  {
    path: RouteEnum.HOME,
    component: lazy(() => import("customer/home/Home")),
  },
  // {
  //   path: RouteEnum.LOGIN,
  //   component: lazy(() => import("customer/login/Login")),
  // },
  // {
  //   path: RouteEnum.REGISTER,
  //   component: lazy(() => import("customer/register/Register")),
  // },
];
