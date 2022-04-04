import { CurrencyEnum } from "./Constants";
import { formatNumberToCurrency } from "./Utils";

/**
 *
 * @param {{currency: keyof typeof CurrencyEnum} & import("react").ComponentPropsWithoutRef<"span">} props
 */
export function CurrencyText(props) {
  const { children, currency, ...rest } = props;
  const _currency = CurrencyEnum[currency || "NG"] || CurrencyEnum.NG;

  return (
    <span {...rest}>
      {_currency.symbol}
      {formatNumberToCurrency(children)}
    </span>
  );
}

CurrencyText.defaultProps = {
  currency: "NG",
};

export default CurrencyText;
