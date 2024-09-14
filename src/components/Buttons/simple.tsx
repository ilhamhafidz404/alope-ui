import { Button } from "../../../Button";
import Code from "../CodePrisma";

import codes from "./../../data/codes.json";

export default function SimpleButtonDocs() {
  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold">Simple Button</h3>
      <p>This is a minimalize Button from ALOPE UI</p>

      <div className="flex gap-3 mt-5">
        <Button text="Primary" color="primary" />
        <Button text="Secondary" color="secondary" />
        <Button text="Error" color="error" />
        <Button text="Success" color="success" />
      </div>

      <Code code={codes.buttons.simple} language="html" />
    </div>
  );
}
