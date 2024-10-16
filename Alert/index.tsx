import { ReactNode } from "react";

import "./../assets/style.css";

type AlertProps = {
  text: string;
  label?: string;
  color: "primary" | "secondary" | "error" | "success";
  icon?: ReactNode;
  withClose?: boolean;
};

export default function Alert({
  text,
  label,
  color,
  icon,
  withClose = false,
}: AlertProps) {
  const colorClasses = {
    primary: "bg-indigo-500/30 border-indigo-500 text-indigo-500",
    secondary: "bg-gray-500/30 border-gray-500 text-gray-500",
    error: "bg-red-500/30 border-red-500 text-red-500",
    success: "bg-emerald-500/30 border-emerald-500 text-emerald-500",
  };

  const hiddenAlert = () => {
    const alert = document.querySelector(`[aria-label="${label}"]`);

    alert?.classList.add("hidden");
  };

  return (
    <div
      aria-label={label}
      className={`${colorClasses[color]} p-4 rounded border flex items-center justify-between`}
    >
      <div className="flex items-center gap-2">
        {icon}
        <p>{text}</p>
      </div>
      {withClose && (
        <button className="hover:scale-110" onClick={hiddenAlert}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fill-rule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
