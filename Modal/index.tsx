import { ReactNode } from "react";
import { Button } from "../Button";

interface BaseModalProps {
  isShow: boolean;
  onCloseAction: () => void;
  size?: "sm" | "md" | "lg";
}

interface ModalProps extends BaseModalProps {
  bodyText: string;
}

interface CustomModalProps extends BaseModalProps {
  body: ReactNode;
  footer: ReactNode;
}

const sizeClasses = {
  sm: "md:w-[400px]",
  md: "md:w-[500px]",
  lg: "md:w-[700px]",
};

export function CustomModal({
  isShow,
  onCloseAction,
  size = "md",
  body,
  footer,
}: CustomModalProps) {
  return (
    <div
      className={`backdrop-blur-sm fixed inset-0 z-40 flex items-center justify-center transition-all duration-300 ${
        isShow ? "scale-100" : "scale-0"
      }`}
    >
      <div className="absolute inset-0" onClick={() => onCloseAction()}></div>
      <div
        className={`relative bg-white py-3 px-5 rounded-md shadow w-10/12 ${sizeClasses[size]}`}
      >
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-semibold">Filter</h4>
          <button
            className="hover:text-red-500"
            onClick={() => onCloseAction()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <hr className="my-5" />
        <div>{body}</div>
        <div className="mt-5">{footer}</div>
      </div>
    </div>
  );
}

export function Modal({
  isShow,
  onCloseAction,
  size = "md",
  bodyText,
}: ModalProps) {
  return (
    <div
      className={`backdrop-blur-sm fixed inset-0 z-40 flex items-center justify-center transition-all duration-300 ${
        isShow ? "scale-100" : "scale-0"
      }`}
    >
      <div className="absolute inset-0" onClick={() => onCloseAction()}></div>
      <div
        className={`relative bg-white py-3 px-5 rounded-md shadow w-10/12 ${sizeClasses[size]}`}
      >
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-semibold">Filter</h4>
          <button
            className="hover:text-red-500"
            onClick={() => onCloseAction()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <hr className="my-5" />
        <div>{bodyText}</div>
        <div className="mt-5">
          <span onClick={() => onCloseAction()}>
            <Button text="Close" fullWidth color="secondary" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default { CustomModal, Modal };
