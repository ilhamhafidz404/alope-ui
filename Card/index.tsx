import { ReactNode } from "react";

import "./../assets/style.css";

type CardProps = {
  image?: string;
  title: string;
  subtitle?: string;
  description?: string;
  ribbon?: string;
  button?: ReactNode;
  secondaryButton?: ReactNode;
  secondaryButtonOnLeft?: boolean;
};

export default function Card({
  image,
  title,
  subtitle,
  description,
  ribbon,
  button,
  secondaryButton,
  secondaryButtonOnLeft = false,
}: CardProps) {
  return (
    <div>
      <div className="relative max-w-[400px] shadow-2xl px-5 py-3 pb-7 rounded-md overflow-hidden">
        {ribbon && (
          <span className="bg-red-500 text-white py-2 absolute top-3 -right-[70px] rotate-45 text-sm w-[200px] text-center">
            {ribbon}
          </span>
        )}
        {image && (
          <img
            src={image}
            alt={title}
            className="rounded-md w-full max-h-[250px] object-cover"
          />
        )}
        <div className="mt-4">
          <h5 className="text-xl font-semibold">{title}</h5>
          {subtitle && (
            <p className="text-sm text-gray-800 italic">{subtitle}</p>
          )}
          {description && (
            <p className="mt-3 mb-5 text-sm text-gray-800">{description}</p>
          )}
          <div className="flex gap-2">
            {secondaryButtonOnLeft && secondaryButton}
            <div className="flex-grow w-full">{button}</div>
            {!secondaryButtonOnLeft && secondaryButton}
          </div>
        </div>
      </div>
    </div>
  );
}
