import clsx from "clsx";
import "./Checkbox.css";

/**
 *
 * @param {CheckboxProps} props
 */
function Checkbox(props) {
  const { className, ...rest } = props;
  return (
    <input type="checkbox" className={clsx("Checkbox", className)} {...rest} />
  );
}

export default Checkbox;

/**
 * @typedef {{
 *
 * } & import("react").ComponentPropsWithoutRef<"input">} CheckboxProps
 */
