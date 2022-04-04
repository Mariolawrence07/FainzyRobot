import React from 'react';
import clsx from 'clsx';

export default function TextSelect (props) {
  const {
    helpText,
    required,
    label,
    id,
    errors,
    fullWidth,
    children,
    ...rest
  } = props;
  return (
    <div className="w-full">
      <label class="block text-lg mb-1" for={id}>
        {label}{required ? ' *' : ''}
      </label>

      <div class="relative">
        <select
          className={clsx (
            'appearance-none border-2 rounded-lg w-full py-2 px-4 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline',
            errors && 'border-red-400',
            fullWidth && 'w-full'
          )}
          {...rest}
          id={id}
        >
          {children}
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
