import React from 'react';

const Input = React.forwardRef(
  (
    { label, error, placeholder, type = 'text', required = false, ...props },
    ref
  ) => {
    return (
      <div className="mb-4">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
            {required && <span className="text-red-500">*</span>}
          </label>
        )}
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition ${
            error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
          }`}
          {...props}
        />
        {error && <span className="text-red-500 text-sm mt-1 block">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
