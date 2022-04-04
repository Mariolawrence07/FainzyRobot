import clsx from "clsx";
import "./Button.css";

/**
 * @template {Function | string} C
 * @param {ButtonProps<C>} props
 */
function Button(props) {
  const {
    className,
    component: Component,
    classes,
    variant,
    fullWidth,
    ...rest
  } = props;

  return (
    <Component
      className={clsx("Button", className, classes?.root, {
        "Button--contained": variant === "contained",
        [classes?.contained]: classes?.contained && variant === "contained",
        "Button--outlined": variant === "outlined",
        [classes?.outlined]: classes?.outlined && variant === "outlined",
        "Button--text": variant === "text",
        [classes?.text]: classes?.text && variant === "text",
        "Button--fullWidth": fullWidth,
      })}
      {...rest}
    />
  );
}

Button.defaultProps = {
  component: "button",
  variant: "contained",
  classes: {},
};

export default Button;

/**
 * @template {Function | string} C
 * @typedef {{
 * component: C;
 * variant: 'contained'|'outlined'|'text';
 * classes: {root: string; contained: string; text: string; outlined: string};
 * fullWidth: boolean;
 * } & import('react').ComponentPropsWithoutRef<typeof C extends Function | string ? C : 'div'>} ButtonProps<C>
 */
