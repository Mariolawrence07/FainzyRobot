import { Route } from "react-router-dom";
import Suspense from "./Suspense";

/**
 * @template R
 * @param { RouteComposerProps<R>} props
 */
function RouteComposer(props) {
  const { routes, wrapper, render, filter } = props;
  return (
    <Suspense>
      {wrapper(
        routes
          .filter(({ meta, ...route }, ...args) =>
            filter({ meta, route }, ...args)
          )
          .map(({ meta, ...route }, ...args) =>
            render({ meta, route }, ...args)
          )
      )}
    </Suspense>
  );
}

RouteComposer.defaultProps = {
  wrapper: (children) => children,
  filter: () => true,
  render: ({ route }, index) => <Route key={index} {...route} />,
};

export default RouteComposer;

/**
 * @typedef {{ route: import('react-router-dom').RouterProps; meta: any }} RouteComposerConfigSplit
 */

/**
 * @typedef {{ meta?: any } & import('react-router-dom').RouterProps} RouteComposerConfig
 */

/**
 * @template {RouteComposerConfig[]} R
 * @typedef {{
 * routes: R;
 * wrapper?: (children: JSX.Element[]) => JSX.Element;
 * render?: (item: RouteComposerConfigSplit, index: number, routes: R) => JSX.Element;
 * filter?: (item: RouteComposerConfigSplit, index: number, routes: R) => boolean;
 * }} RouteComposerProps<R>
 */
