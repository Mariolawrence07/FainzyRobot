import { lazy } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import useAuthUser from "hooks/useAuthUser";
import { useSelector } from "react-redux";
import Suspense from "common/Suspense";
import { RouteEnum } from "common/Constants";
import LoadingModal from "common/LoadingModal";
import useLoadingModal from "hooks/useLoadingModal";

const Customer = lazy(() => import("customer/Customer"));
const Admin = lazy(() => import("admin/Admin"));

console.log("Customer", Customer);
function App() {
  const { isLoadingModal } = useLoadingModal();
  const isAdminRouteMatch = useRouteMatch({
    path: RouteEnum.ADMIN_DASHBOARD,
  });
  const authUser = useAuthUser();
  const accessToken = useSelector((state) => state.global.accessToken);

  return (
    <>
      <Suspense>
        {!isAdminRouteMatch && <Customer />}

        {!!accessToken && authUser?.is_admin && (
          <Route path={RouteEnum.ADMIN_DASHBOARD} component={Admin} />
        )}
      </Suspense>
      <LoadingModal open={isLoadingModal} />
    </>
  );
}

export default App;
