import clsx from "clsx";
import { forwardRef } from "react";
import InputScaffold from "./InputScaffold";
import "./Input.css";

const Input = forwardRef(
  /**
   *
   * @param {InputProps} props
   */
  function Input(props, ref) {
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
        className={clsx("Input", className)}
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
        <input ref={ref} {...rest} className="Input__input" />
      </InputScaffold>
    );
  }
);

export default Input;

/**
 * @typedef {{} & import('./InputScaffold').InputScaffoldProps & import('react').ComponentPropsWithoutRef<'input'>} InputProps
 */
