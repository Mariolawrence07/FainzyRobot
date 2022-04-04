import clsx from "clsx";
import "./Paper.css";

/**
 *
 * @param {import('react').ComponentPropsWithoutRef<'div'>} props
 */
function Paper(props) {
  const { className, ...rest } = props;
  return <div className={clsx("Paper", className)} {...rest} />;
}

export default Paper;
