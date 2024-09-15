import Alert from "../../../Alert";
import Code from "../CodePrisma";

import codes from "./../../data/codes.json";

export default function AlertWithCloseDocs() {
  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold">Alert with Close Button</h3>
      <p>This is a minimalize Button from ALOPE UI</p>{" "}
      <div className="mt-5">
        <Alert
          text="lorem ipsum sit dolor"
          color="primary"
          withClose
          label="primary-alert"
        />
      </div>
      <Code code={codes.alerts.withIcon} language="html" />
    </div>
  );
}
