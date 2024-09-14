import { ButtonIcon } from "../../../Button";
import Code from "../CodePrisma";

import codes from "./../../data/codes.json";

export default function OnlyIconButtonDocs() {
  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold">Only Icon Button</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <div className="mt-5">
        <ButtonIcon color="primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </ButtonIcon>
      </div>
      <Code code={codes.buttons.onlyIcon} language="html" />
    </div>
  );
}
