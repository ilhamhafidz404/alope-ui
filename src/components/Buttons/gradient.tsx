import { Button } from "../../../Button";
import Code from "../CodePrisma";

import codes from "./../../data/codes.json";

export default function GradientButtonDocs() {
  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold">Gradient Button</h3>
      <p>This is a minimalize Button from ALOPE UI</p>

      <div className="flex gap-3 mt-5">
        <Button text="Primary" color="primary" gradient />
        <Button text="Secondary" color="secondary" gradient />
        <Button text="Error" color="error" gradient />
        <Button text="Success" color="success" gradient />
      </div>
      <Code code={codes.buttons.gradient} language="html" />
    </div>
  );
}
