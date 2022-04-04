import React from 'react';
import clsx from 'clsx';

export default function TextArea (props) {
  const {helpText, required, label, id, errors, fullWidth, ...rest} = props;
  return (
    <div>
      <label class="block text-lg mb-1" for={id}>
        {label}{required ? ' *' : ''}
      </label>
      <textarea
        className={clsx (
          'appearance-none border-2 rounded-lg w-full py-4 px-4 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline',
          errors && 'border-red-400',
          fullWidth && 'w-full'
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
