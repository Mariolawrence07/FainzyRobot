// import clsx from "clsx";
// import { Home, ShoppingCart, ShoppingBag, Sliders } from "react-feather";
// import { NAV_SIDEBAR_FULL_WIDTH } from "admin/common/Constants";
// import Modal from "common/Modal";
// import Logo from "common/Logo";
// import { RouteEnum, MediaQueryBreakpointEnum } from "common/Constants";
// import { NavLink } from "react-router-dom";
// import useMediaQuery from "hooks/useMediaQuery";
// import useNavigationSidebar from "admin/hooks/useNavigationSidebar";

// function NavigationSidebar(props) {
//   const islg = useMediaQuery(MediaQueryBreakpointEnum.lg);
//   const { isNavigationSidebar, toggleAdminNavigationSidebar } =
//     useNavigationSidebar();

//   const content = (
//     <div
//       className={clsx(
//         "fixed left-0 top-0 h-full bg-main z-drawer overflow-hidden flex flex-col transition-all p-4",
//         islg ? "shadow-md" : "shadow-2xl"
//       )}
//       style={{
//         borderTopRightRadius: 40,
//         transform: `translateX(${
//           isNavigationSidebar || islg ? 0 : -NAV_SIDEBAR_FULL_WIDTH
//         }px)`,
//         width: NAV_SIDEBAR_FULL_WIDTH,
//       }}
//     >
//       <div className="flex items-center justify-center mb-10">
//         <Logo variant="full-colored" />
//       </div>
//       <div className="">
//         {LINKS.map(({ icon: Icon, ...link }) => (
//           <NavLink
//             key={link.name}
//             to={link.to}
//             exact={link.exact}
//             className="flex items-center gap-4 py-3 px-4 rounded-xl"
//             activeClassName="bg-primary-shade4"
//             onClick={() => {
//               if (!islg) {
//                 toggleAdminNavigationSidebar();
//               }
//             }}
//           >
//             <Icon /> {link.name}
//           </NavLink>
//         ))}
//       </div>
//     </div>
//   );

//   if (islg) {
//     return content;
//   }

//   return (
//     <Modal
//       keepMounted
//       open={isNavigationSidebar}
//       onBackdropClick={toggleAdminNavigationSidebar}
//     >
//       {content}
//     </Modal>
//   );
// }

// export default NavigationSidebar;

// const LINKS = [
//   { name: "Dashboard", icon: Home, to: RouteEnum.ADMIN_DASHBOARD, exact: true },
//   { name: "Products", icon: ShoppingBag, to: RouteEnum.ADMIN_PRODUCTS },
//   { name: "Orders", icon: ShoppingCart, to: RouteEnum.ADMIN_ORDERS },
//   { name: "Distributors", icon: Sliders, to: RouteEnum.ADMIN_DISTRIBUTORS },
// ];
