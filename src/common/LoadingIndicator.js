import clsx from "clsx";
import "./LoadingIndicator.css";

/**
 *
 * @param {LoadingIndicatorProps} props
 */
function LoadingIndicator(props) {
  const { indicator, className } = props;
  return (
    <div
      className={clsx(className, {
        "LoadingIndicator-1": indicator === 1,
        "LoadingIndicator-2": indicator === 2,
      })}
    >
      Loading...
    </div>
  );
}

LoadingIndicator.defaultProps = {
  indicator: 1,
};

export default LoadingIndicator;

/**
 * @typedef {{indicator: 1 | 2} & import("react").ComponentPropsWithoutRef<'div'>} LoadingIndicatorProps
 */
