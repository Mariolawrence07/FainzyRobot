import clsx from "clsx";
import InputScaffold from "./InputScaffold";
import "./Select.css";

/**
 *
 * @param {SelectProps} props
 */
function Select(props) {
  const {
    className,
    fullWidth,
    prefix,
    suffix,
    size,
    gutterBottom,
    label,
    helperText,
    error,
    ...rest
  } = props;

  return (
    <InputScaffold
      className={clsx("Select", className)}
      {...{
        fullWidth,
        prefix,
        suffix,
        size,
        gutterBottom,
        label,
        helperText,
        error,
      }}
    >
      <select className={clsx("Select__select")} {...rest} />
    </InputScaffold>
  );
}

export default Select;

/**
 * @typedef {import('./InputScaffold').InputScaffoldProps & import('react').ComponentPropsWithRef<'select'>} SelectProps
 */
