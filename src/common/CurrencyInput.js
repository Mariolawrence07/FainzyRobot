import Input from "./Input";
import { CurrencyEnum } from "./Constants";
import { formatNumber } from "./Utils";
import { forwardRef } from "react";

export const CurrencyInput = forwardRef(
  /**
   *
   * @param {{currency: keyof typeof CurrencyEnum} & import("./Input").InputProps} props
   */
  (props, ref) => {
    const { currency, value, onChange, onBlur, ...rest } = props;
    const _currency = CurrencyEnum[currency || "NG"];

    return (
      <Input
        ref={ref}
        value={value}
        onChange={(e) => {
          format(e.target);
          if (onChange) {
            onChange(e);
          }
        }}
        onBlur={(e) => {
          format(e.target, true);
          if (onBlur) {
            onBlur(e);
          }
        }}
        prefix={_currency.symbol}
        {...rest}
      />
    );
  }
);

CurrencyInput.defaultProps = {
  currency: "NGN",
};

export default CurrencyInput;

/**
 *
 * @param {HTMLInputElement} input
 * @param {boolean} blur
 */
function format(input, blur) {
  let value = input.value;
  console.log(value);
  if (value === "") {
    return "";
  }
  const previousLength = value.length;
  let caretPosition = input.selectionStart;

  const decimalPosition = value.indexOf(".");
  if (decimalPosition >= 0) {
    let leftSide = formatNumber(value.substring(0, decimalPosition));
    let rightSide = formatNumber(value.substring(decimalPosition));

    if (blur) {
      rightSide += "00";
    }

    rightSide = rightSide.substring(0, 2);
    value = leftSide + "." + rightSide;
  } else {
    value = formatNumber(value);
    if (blur) {
      value += "00";
    }
  }
  input.value = value;
  const currentLength = value.length;
  caretPosition = currentLength - previousLength + caretPosition;
  input.setSelectionRange(caretPosition, caretPosition);

  return value;
}
