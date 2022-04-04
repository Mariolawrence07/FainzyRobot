import React from 'react';
import clsx from 'clsx';

export default function TextInput (props) {
  const {
    helpText,
    required,
    label,
    id,
    className,
    errors,
    fullWidth,
    ...rest
  } = props;
  return (
    <div>
      <label class="block text-lg mb-1" for={id}>
        {label}{required ? ' *' : ''}
      </label>
      <input
        className={clsx (
          'appearance-none border-2 rounded-lg py-2 px-4 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:border-gray-500',
          errors && 'border-red-400',
          fullWidth && 'w-full',
          className && className
        )}
        id={id}
        type="text"
        {...rest}
      />
      {errors &&
        helpText &&
        <small class="text-red-500 text-xs">
          {helpText}
        </small>}
    </div>
  );
}
