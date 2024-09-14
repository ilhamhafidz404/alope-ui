import { Button } from "../../../Button";
import Code from "../CodePrisma";

import codes from "./../../data/codes.json";

export default function FullWidthButtonDocs() {
  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold">Full Width Button</h3>
      <p>This is a minimalize Button from ALOPE UI</p>

      <div className="flex gap-3 mt-5">
        <Button text="Full Width Button" color="primary" size="sm" fullWidth />
      </div>
      <Code code={codes.buttons.fullwidth} language="html" />
    </div>
  );
}
