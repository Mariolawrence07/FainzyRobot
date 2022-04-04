import clsx from "clsx";
import "./Chip.css";

/**
 *
 * @param {ChipProps} props
 */
function Chip(props) {
  const { className, ...rest } = props;
  return <div className={clsx("Chip", className)} {...rest} />;
}

export default Chip;

/**
 * @typedef {{} & import("react").ComponentPropsWithoutRef<'div'>} ChipProps
 */
