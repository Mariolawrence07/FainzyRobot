import clsx from "clsx";
import "./Container.css";

/**
 *
 * @param {import('react').ComponentPropsWithoutRef<'div'>} props
 */
function Container(props) {
  return <div {...props} className={clsx("Container", props.className)} />;
}

export default Container;
