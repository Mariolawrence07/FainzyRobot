export function formatCurrencyToNumber (string) {
  return string.toString ().replace (/,/g, '');
}

export function formatNumber (n) {
  return n
    .toString ()
    .replace (/\D/g, '')
    .replace (/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function formatNumberToCurrency (number = '', decimalPlace = false) {
  let value = number.toString ();
  const decimalPosition = value.indexOf ('.');
  if (decimalPosition >= 0) {
    let leftSide = formatNumber (value.substring (0, decimalPosition));
    let rightSide = formatNumber (value.substring (decimalPosition));
    if (decimalPlace) {
      rightSide += '00';
    }

    rightSide = rightSide.substring (0, 2);
    value = leftSide + '.' + rightSide;
  } else {
    value = formatNumber (value);
    if (decimalPlace) {
      value += '.00';
    }
  }
  return value;
}

export function isObject (item) {
  return item && typeof item === 'object' && !Array.isArray (item);
}

export const isObjectEmpty = obj => Object.keys (obj).length === 0;

function is (x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    /* eslint-disable no-self-compare */
    return x !== x && y !== y;
  }
}

export function debounce (callback, wait = 0) {
  let debounceTimer;
  let triggerArgs;
  let triggerThis;
  function trigger () {
    triggerArgs = arguments;
    triggerThis = this;
    clearTimeout (debounceTimer);
    debounceTimer = setTimeout (() => {
      callback.apply (triggerThis, triggerArgs);
    }, wait);
  }

  trigger.cancel = () => clearTimeout (debounceTimer);
  trigger.flush = () => {
    clearTimeout (debounceTimer);
    callback.apply (triggerThis, triggerArgs);
  };

  return trigger;
}
