import { ReactNode } from "react";

import "./../assets/style.css";

type InputProps = {
  name: string;
  type: string;
  placeholder?: string;
  labelText?: string;
  floatingLabel?: boolean;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  onChangeValue?: (e: string) => void;
};

export default function Input({
  name,
  type,
  placeholder,
  labelText,
  floatingLabel,
  leftIcon,
  rightIcon,
  onChangeValue,
}: InputProps) {
  const commonInputClass =
    "w-full md:text-sm text-xs rounded-md border focus:outline-none focus:ring-0 focus:border-blue-600 bg-gray-50";

  const baseIconClass =
    "absolute -translate-y-1/2 h-full flex items-center p-3 top-1/2";

  const inputElement = (
    <input
      id={name.toLowerCase()}
      name={name}
      type={type}
      className={`py-2.5 px-3 peer ${commonInputClass} ${leftIcon && "pl-12"}`}
      placeholder={
        floatingLabel ? "   " : !floatingLabel && placeholder ? placeholder : ""
      }
      onChange={(e) => {
        if (onChangeValue) {
          onChangeValue(e.target.value);
        }
      }}
    />
  );

  return floatingLabel ? (
    <div className="relative">
      {inputElement}
      <label
        htmlFor={name.toLowerCase()}
        className="absolute left-1.5 text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
      >
        {labelText}
      </label>
    </div>
  ) : (
    <>
      <label htmlFor={name.toLowerCase()} className="text-sm text-gray-900">
        {labelText}
      </label>
      <div className="relative">
        {leftIcon && (
          <div className={`${baseIconClass} left-0 rounded-l-md text-gray-700`}>
            {leftIcon}
          </div>
        )}
        {inputElement}
        {rightIcon && (
          <div
            className={`${baseIconClass} right-0 bg-indigo-500 rounded-r-md text-white`}
          >
            {rightIcon}
          </div>
        )}
      </div>
    </>
  );
}
