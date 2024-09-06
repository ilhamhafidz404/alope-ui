import { ReactNode } from "react";

type InputProps = {
  name: string;
  type: string;
  placeholder?: string;
  labelText?: string;
  floatingLabel?: boolean;
  rightIcon?: ReactNode;
};

export default function Input({
  name,
  type,
  placeholder,
  labelText,
  floatingLabel,
  rightIcon,
}: InputProps) {
  const commonInputClass =
    "w-full text-sm rounded-md border focus:outline-none focus:ring-0 focus:border-blue-600";

  const inputElement = (
    <input
      id={name.toLowerCase()}
      name={name}
      type={type}
      className={`py-2.5 px-3 peer ${commonInputClass}`}
      placeholder={
        floatingLabel ? " " : !floatingLabel && placeholder ? placeholder : ""
      }
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
        {inputElement}
        {rightIcon && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-500 h-full flex items-center p-3 rounded-r-md text-white">
            {rightIcon}
          </div>
        )}
      </div>
    </>
  );
}
