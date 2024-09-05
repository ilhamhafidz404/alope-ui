import { ReactNode } from "react";

type ButtonProps = {
  text: string;
  color: "primary" | "secondary" | "success" | "error";
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
          "bg-gradient-to-r from-indigo-500 to-purple-400 hover:from-purple-600 hover:to-indigo-500",
        secondary:
          "bg-gradient-to-r from-gray-500 to-gray-400 hover:from-gray-600 hover:to-gray-500",
        error:
          "bg-gradient-to-r from-red-500 to-orange-500 hover:from-orange-500 hover:to-red-500",
        success:
          "bg-gradient-to-r from-emerald-500 to-green-400 hover:from-green-400 hover:to-emerald-500",
      }
    : {
        primary: "bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-500",
        secondary: "bg-gray-500 hover:bg-gray-400 active:bg-gray-500",
        error: "bg-red-500 hover:bg-red-400 active:bg-red-500",
        success: "bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-500",
      };

  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-2",
    lg: "px-6 py-3 text-xl",
  };

  return (
    <button
      className={`${colorClasses[color]} ${sizeClasses[size]} ${widthClasses} rounded text-white active:scale-95 flex gap-2 items-center justify-center ${addedClass}`}
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
};

function ButtonIcon({ color, size = "md", children }: ButtonIconProps) {
  const colorClasses = {
    primary: "bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-500",
    secondary: "bg-gray-500 hover:bg-gray-400 active:bg-gray-500",
    error: "bg-red-500 hover:bg-red-400 active:bg-red-500",
    success: "bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-500",
  };

  const sizeClasses = {
    sm: "p-2 text-sm", // Disesuaikan untuk ikon
    md: "p-3", // Disesuaikan untuk ikon
    lg: "p-4 text-xl", // Disesuaikan untuk ikon
  };

  return (
    <button
      className={`${colorClasses[color]} ${sizeClasses[size]} rounded text-white active:scale-95 flex items-center justify-center`}
    >
      {children}
    </button>
  );
}

export { Button, ButtonIcon };
