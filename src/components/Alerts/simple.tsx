import Alert from "../../../Alert";
import Code from "../CodePrisma";

import codes from "./../../data/codes.json";

export default function SimpleAlertDocs() {
  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold">Simple Alert</h3>
      <p>This is a minimalize Button from ALOPE UI</p>

      <div className="mt-5">
        <Alert text="Simple Alert Primary" color="primary" />
        <br />
        <Alert text="Simple Alert Secondary" color="secondary" />
        <br />
        <Alert text="Simple Alert Error" color="error" />
        <br />
        <Alert text="Simple Alert Success" color="success" />
      </div>
      <Code code={codes.alerts.simple} language="html" />
    </div>
  );
}
