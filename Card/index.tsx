import { ReactNode } from "react";

import "./../assets/style.css";

type CardProps = {
  image?: string;
  title: string;
  subtitle?: string;
  description?: string;
  icon?: ReactNode;
  ribbon?: string;
  button?: ReactNode;
  secondaryButton?: ReactNode;
  secondaryButtonOnLeft?: boolean;
  forceSameHeight?: boolean;
  fullWidth?: boolean;
  type?: "vertical" | "horizontal";
};

export default function Card({
  image,
  title,
  subtitle,
  description,
  icon,
  ribbon,
  button,
  secondaryButton,
  secondaryButtonOnLeft = false,
  forceSameHeight = false,
  fullWidth = false,
  type = "vertical",
}: CardProps) {
  return (
    <>
      <div
        className={`relative bg-white shadow-xl px-5 py-3 pb-7 rounded-md overflow-hidden ${
          type == "horizontal" && "flex gap-5 items-center min-w-[700px]"
        } ${fullWidth ? "w-full" : "max-w-[400px]"}`}
      >
        {ribbon && (
          <span className="bg-red-500 text-white py-2 absolute top-3 -right-[70px] rotate-45 md:text-sm text-xs w-[200px] text-center">
            {ribbon}
          </span>
        )}
        {image && (
          <img
            src={image}
            alt={title}
            className={`rounded-md ${
              type == "vertical" ? "w-full" : "w-1/2"
            } max-h-[250px] object-cover ${
              forceSameHeight && type == "vertical"
                ? "min-h-[250px]"
                : forceSameHeight && type == "horizontal"
                ? "min-h-[200px]"
                : ""
            }`}
          />
        )}
        {icon && (
          <span className="bg-indigo-500 w-[50px] h-[50px] inline-flex items-center justify-center rounded-full mt-5 text-white">
            {icon}
          </span>
        )}
        <div className={`${icon ? "mt-2" : "mt-4"}`}>
          <h5 className="text-xl font-semibold">{title}</h5>
          {subtitle && (
            <p className="text-sm text-gray-800 italic">{subtitle}</p>
          )}
          {description && (
            <p
              className={`mt-3 text-sm text-gray-800 ${
                (button || secondaryButton) && "mb-5"
              }`}
            >
              {description}
            </p>
          )}
          <div className="flex gap-2">
            {secondaryButtonOnLeft && secondaryButton}
            <div className="flex-grow w-full">{button}</div>
            {!secondaryButtonOnLeft && secondaryButton}
          </div>
        </div>
      </div>
    </>
  );
}
