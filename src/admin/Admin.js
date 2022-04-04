
import { Switch, Route } from "react-router-dom";
import Header from "./common/Header";
import NavigationSidebar from "admin/common/NavigationSidebar";
import RouteComposer from "common/RouteComposer";
import PageNotFound from "common/PageNotFound";
import Container from "common/Container";
import { NAV_SIDEBAR_FULL_WIDTH } from "admin/common/Constants";
import {  MediaQueryBreakpointEnum } from "common/Constants";
import useMediaQuery from "hooks/useMediaQuery";

function Admin() {
  const islg = useMediaQuery(MediaQueryBreakpointEnum.lg);

  return (
    <>
      <Header />
      <NavigationSidebar />
      <div
        className="h-full pt-16"
        style={{
          marginLeft: islg ? NAV_SIDEBAR_FULL_WIDTH : 0,
        }}
      >
        <Container className="relative h-full">
          <RouteComposer
            routes={ROUTES}
            wrapper={(children) => (
              <Switch>
                {children} <Route path="*" component={PageNotFound} />
              </Switch>
            )}
          />
        </Container>
      </div>
    </>
  );
}

export default Admin;

const ROUTES = [
//   {
//     exact: true,
//     path: RouteEnum.ADMIN_DASHBOARD,
//     component: lazy(() => import("admin/dashboard/Dashboard")),
//   },
];
