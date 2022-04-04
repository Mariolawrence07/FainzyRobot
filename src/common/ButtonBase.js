import clsx from "clsx";
import "./ButtonBase.css";

/**
 * @template {Function | string} C
 * @param {ButtonBaseProps<C>} props
 */
function ButtonBase(props) {
  const { className, component: Component, classes, disabled, ...rest } = props;

  return (
    <Component
      disabled={disabled}
      className={clsx("ButtonBase", classes?.root, className, {
        "ButtonBase--disabled": disabled,
        [classes?.disabled]: disabled,
      })}
      {...rest}
    />
  );
}

ButtonBase.defaultProps = {
  component: "button",
  classes: {},
  type: "button",
};

export default ButtonBase;

/**
 * @template {Function | string} C
 * @typedef {{
 * component: C;
 * classes: {root: string; disabled: string}
 * } & import('react').ComponentPropsWithoutRef<typeof C extends Function | string ? C : 'button'>} ButtonBaseProps<C>
 */
