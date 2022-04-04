import clsx from "clsx";
import ButtonBase from "./ButtonBase";
import "./IconButton.css";

/**
 *
 * @param {IconButtonProps} props
 */
function IconButton(props) {
  const { className, square, ...rest } = props;
  return (
    <ButtonBase
      className={clsx("IconButton", square && "IconButton--square", className)}
      {...rest}
    />
  );
}

export default IconButton;

/**
 * @typedef {{
 * square: boolean
 * } & import("./ButtonBase").ButtonBaseProps<"button">} IconButtonProps
 */
