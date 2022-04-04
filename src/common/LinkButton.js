import Button from "./Button";
import { Link } from "react-router-dom";

/**
 *
 * @param {LinkButtonProps} props
 */
function LinkButton(props) {
  return <Button {...props} />;
}

LinkButton.defaultProps = {
  component: Link,
};

export default LinkButton;

/**
 * @typedef {{
 * } & import('./Button').ButtonProps<typeof Link>} LinkButtonProps
 */
