import { toggleAdminNavigationSidebarAction } from "common/StoreSlice";
import { useDispatch, useSelector } from "react-redux";

export function useNavigationSidebar() {
  const dispatch = useDispatch();

  const isNavigationSidebar = useSelector(
    (state) => state.global.isAdminNavigationSidebar
  );

  function toggleAdminNavigationSidebar(payload) {
    return dispatch(
      toggleAdminNavigationSidebarAction(
        typeof payload === "boolean" ? payload : undefined
      )
    );
  }

  return { isNavigationSidebar, toggleAdminNavigationSidebar };
}

export default useNavigationSidebar;
