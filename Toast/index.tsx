import { useEffect, useState } from "react";

import "./../assets/style.css";

type ToastProps = {
  isShow: boolean;
  type: "error" | "success" | "warning" | "default";
  description: string;
  showTime?: number;
  setIsShow: (isShow: boolean) => void;
  position?:
    | "top-right"
    | "bottom-right"
    | "top-left"
    | "bottom-left"
    | "top-center"
    | "bottom-center";
};

export default function Toast({
  isShow,
  setIsShow,
  type,
  description,
  showTime = 2000,
  position = "bottom-right",
}: ToastProps) {
  const types = {
    success: "bg-emerald-500 text-white border-emerald-300",
    error: "bg-red-500 text-white border-red-300",
    warning: "bg-yellow-500 text-white border-yellow-300",
    default: "bg-white text-gray-800 border-none",
  };

  const positions = {
    "top-right": "top-5 right-5",
    "bottom-right": "bottom-5 right-5",
    "top-left": "top-5 left-5",
    "bottom-left": "bottom-5 left-5",
    "top-center": "top-5 left-1/2 -translate-x-1/2",
    "bottom-center": "bottom-5 left-1/2 -translate-x-1/2",
  };

  const [show, setShow] = useState(isShow ? "block" : "hidden");

  useEffect(() => {
    if (isShow) {
      setShow("block");

      const timer = setTimeout(() => {
        setShow("hidden");
        setIsShow(false);
      }, showTime);

      return () => clearTimeout(timer);
    }
  }, [isShow, showTime, setIsShow]);

  const forceClose = () => {
    setShow("hidden");
  };

  return (
    <div
      className={`fixed shadow p-5 rounded max-w-md z-[60] ${types[type]} ${show} ${positions[position]}`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span>
            {type === "error" ? (
              <ErrorIcon />
            ) : type === "success" ? (
              <SuccessIcon />
            ) : type === "warning" ? (
              <WarningIcon />
            ) : (
              <DefaultIcon />
            )}
          </span>
          <h6 className="font-medium">{type.toUpperCase()}</h6>
        </div>
        <button className="hover:scale-110" onClick={() => forceClose()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <hr className={`my-3`} />
      <p className="text-sm">{description}</p>
    </div>
  );
}

const ErrorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5"
  >
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
      clipRule="evenodd"
    />
  </svg>
);

const SuccessIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5"
  >
    <path
      fillRule="evenodd"
      d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
      clipRule="evenodd"
    />
  </svg>
);

const WarningIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5"
  >
    <path
      fillRule="evenodd"
      d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
      clipRule="evenodd"
    />
  </svg>
);

const DefaultIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5"
  >
    <path
      fillRule="evenodd"
      d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z"
      clipRule="evenodd"
    />
  </svg>
);
