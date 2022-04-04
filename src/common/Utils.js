export function formatCurrencyToNumber(string) {
  return string.toString().replace(/,/g, "");
}

export function formatNumber(n) {
  return n
    .toString()
    .replace(/\D/g, "")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatNumberToCurrency(number = "", decimalPlace = false) {
  let value = number.toString();
  const decimalPosition = value.indexOf(".");
  if (decimalPosition >= 0) {
    let leftSide = formatNumber(value.substring(0, decimalPosition));
    let rightSide = formatNumber(value.substring(decimalPosition));
    if (decimalPlace) {
      rightSide += "00";
    }

    rightSide = rightSide.substring(0, 2);
    value = leftSide + "." + rightSide;
  } else {
    value = formatNumber(value);
    if (decimalPlace) {
      value += ".00";
    }
  }
  return value;
}

export function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}

export const isObjectEmpty = (obj) => Object.keys(obj).length === 0;

export function deepMerge(target, source) {
  if (Array.isArray(target) && Array.isArray(source)) {
    const newTarget = [...target];
    for (const key in source) {
      if (typeof source[key] === "object") {
        newTarget[key] = deepMerge(newTarget[key] || {}, source[key]);
      } else {
        newTarget[key] = source[key] || newTarget[key];
      }
    }
  } else if (isObject(target) && isObject(source)) {
    const newTarget = { ...target };
    for (const key in source) {
      if (isObject(source[key])) {
        newTarget[key] = deepMerge(newTarget[key] || {}, source[key]);
      } else {
        newTarget[key] = source[key] || newTarget[key];
      }
    }
    return newTarget;
  }
  return undefined;
}

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    /* eslint-disable no-self-compare */
    return x !== x && y !== y;
  }
}

export function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (
    typeof objA !== "object" ||
    objA === null ||
    typeof objB !== "object" ||
    objB === null
  ) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (let i = 0; i < keysA.length; i++) {
    if (
      !Object.prototype.hasOwnProperty.call(objB, keysA[i]) ||
      !is(objA[keysA[i]], objB[keysA[i]])
    ) {
      return false;
    }
  }

  return true;
}

export function debounce(callback, wait = 0) {
  let debounceTimer;
  let triggerArgs;
  let triggerThis;
  function trigger() {
    triggerArgs = arguments;
    triggerThis = this;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      callback.apply(triggerThis, triggerArgs);
    }, wait);
  }

  trigger.cancel = () => clearTimeout(debounceTimer);
  trigger.flush = () => {
    clearTimeout(debounceTimer);
    callback.apply(triggerThis, triggerArgs);
  };

  return trigger;
}

export function throttle(callback, wait = 0) {
  let throttleTimer;
  let triggerArgs;
  let triggerThis;
  function trigger() {
    triggerArgs = arguments;
    triggerThis = this;
    if (throttleTimer) return;
    throttleTimer = true;
    setTimeout(() => {
      callback.apply(triggerThis, triggerArgs);
      throttleTimer = false;
    }, wait);
  }

  trigger.cancel = () => clearTimeout(throttleTimer);
  trigger.flush = () => {
    clearTimeout(throttleTimer);
    callback.apply(triggerThis, triggerArgs);
  };

  return trigger;
}

export function objectToFormData(data) {
  const fd = new FormData();
  for (const key in data) {
    fd.set(key, data[key]);
  }
  return fd;
}
