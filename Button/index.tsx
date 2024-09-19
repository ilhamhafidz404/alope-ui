import { ReactNode } from "react";

import "./../assets/style.css";

type ButtonProps = {
  text: string;
  color: "primary" | "secondary" | "success" | "error" | "light" | "dark";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  autoline?: boolean;
  gradient?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  addedClass?: string;
};

function Button({
  text,
  color,
  size = "md",
  fullWidth = false,
  gradient = false,
  iconLeft,
  iconRight,
  addedClass,
}: ButtonProps) {
  const widthClasses = fullWidth ? "w-full" : "";

  const colorClasses = gradient
    ? {
        primary:
          "bg-gradient-to-r from-indigo-500 to-purple-400 hover:from-purple-600 hover:to-indigo-500 text-white",
        secondary:
          "bg-gradient-to-r from-gray-500 to-gray-400 hover:from-gray-600 hover:to-gray-500 text-white",
        error:
          "bg-gradient-to-r from-red-500 to-orange-500 hover:from-orange-500 hover:to-red-500 text-white",
        success:
          "bg-gradient-to-r from-emerald-500 to-green-400 hover:from-green-400 hover:to-emerald-500 text-white",
        light:
          "bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-50 text-gray-800 shadow",
        dark: "bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-900 hover:to-gray-700 text-white",
      }
    : {
        primary:
          "bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-500 text-white",
        secondary:
          "bg-gray-500 hover:bg-gray-400 active:bg-gray-500 text-white",
        error: "bg-red-500 hover:bg-red-400 active:bg-red-500 text-white",
        success:
          "bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-500 text-white",
        light:
          "bg-gray-50 hover:bg-gray-100 text-gray-800 active:bg-gray-200 shadow",
        dark: "bg-gray-800 hover:bg-gray-800 text-white active:bg-gray-900",
      };

  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-2",
    lg: "px-6 py-3 text-xl",
  };

  return (
    <button
      className={`${colorClasses[color]} ${sizeClasses[size]} ${widthClasses} rounded active:scale-95 flex gap-2 items-center justify-center ${addedClass}`}
    >
      {iconLeft}
      {text}
      {iconRight}
    </button>
  );
}

type ButtonIconProps = {
  color: "primary" | "secondary" | "success" | "error";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  fullRounded?: boolean;
};

function ButtonIcon({
  color,
  size = "md",
  fullRounded = false,
  children,
}: ButtonIconProps) {
  const colorClasses = {
    primary: "bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-500",
    secondary: "bg-gray-500 hover:bg-gray-400 active:bg-gray-500",
    error: "bg-red-500 hover:bg-red-400 active:bg-red-500",
    success: "bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-500",
  };

  const sizeClasses = {
    sm: "p-2 text-sm",
    md: "p-3",
    lg: "p-4 text-xl",
  };

  return (
    <button
      className={`${colorClasses[color]} ${
        sizeClasses[size]
      } text-white active:scale-95 flex items-center justify-center  ${
        fullRounded ? "rounded-full " : "rounded"
      } `}
    >
      {children}
    </button>
  );
}

export { Button, ButtonIcon };
