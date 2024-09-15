import Alert from "../../../Alert";
import Code from "../CodePrisma";

import codes from "./../../data/codes.json";

export default function AlertWithIconDocs() {
  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold">Alert with Icon</h3>
      <p>This is a minimalize Button from ALOPE UI</p>{" "}
      <div className="mt-5">
        <Alert
          text="lorem ipsum sit dolor"
          color="error"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                clip-rule="evenodd"
              />
            </svg>
          }
        />
      </div>
      <Code code={codes.alerts.withIcon} language="html" />
    </div>
  );
}
