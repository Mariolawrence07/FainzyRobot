import clsx from "clsx";
import "./InputScaffold.css";

/**
 *
 * @param {InputScaffoldProps} props
 */
function InputScaffold(props) {
  const {
    prefix,
    suffix,
    label,
    fullWidth,
    className,
    children,
    size,
    gutterBottom,
    helperText,
    error,
    classes,
    ...rest
  } = props;
  return (
    <div
      className={clsx("InputScaffold", className, classes?.root, {
        "InputScaffold--fullWidth": fullWidth,
        [classes?.fullWidth]: classes?.fullWidth && fullWidth,
        "InputScaffold--gutterBottom": gutterBottom,
        [classes?.gutterBottom]: classes?.gutterBottom && gutterBottom,
      })}
      {...rest}
    >
      {!!label && <label className="InputScaffold__label">{label}</label>}
      <div
        className={clsx("InputScaffold__inputWrapper", classes?.inputWrapper, {
          "InputScaffold__inputWrapper--small": size === "small",
          "InputScaffold__inputWrapper--medium": size === "medium",
          "InputScaffold__inputWrapper--large": size === "large",
        })}
      >
        {!!prefix && (
          <div
            className={clsx(
              "InputScaffold__inputWrapper__prefix",
              classes?.prefix
            )}
          >
            {prefix}
          </div>
        )}
        {children}
        {!!suffix && (
          <div
            className={clsx(
              "InputScaffold__inputWrapper__suffix",
              classes?.suffix
            )}
          >
            {suffix}
          </div>
        )}
      </div>
      {!!helperText && (
        <p
          className={clsx(
            "InputScaffold__helperText",
            !!error && "InputScaffold__helperText--error"
          )}
        >
          {helperText}
        </p>
      )}
    </div>
  );
}

InputScaffold.defaultProps = {
  size: "medium",
};

export default InputScaffold;

/**
 * @typedef {{
 * prefix: import("react").ReactNode;
 * suffix: import("react").ReactNode;
 * label: string;
 * fullWidth: boolean;
 * size: 'medium' | 'large' | number;
 * gutterBottom: boolean;
 * helperText: string;
 * error: boolean;
 * classes:  {root: string; fullWidth: string; gutterBottom: string; label: string; inputWrapper: string; prefix: string; suffix: string; helperText: string}
 * } & import('react').ComponentPropsWithoutRef<'div'>} InputScaffoldProps
 */
