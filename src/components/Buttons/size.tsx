import { Button } from "../../../Button";
import Code from "../CodePrisma";

import codes from "./../../data/codes.json";

export default function CustomSizeButtonDocs() {
  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold">Custom Size Button</h3>
      <p>This is a minimalize Button from ALOPE UI</p>

      <div className="flex gap-3 mt-5">
        <div>
          <Button text="Small" color="primary" size="sm" />
        </div>
        <div>
          <Button text="Medium" color="primary" size="md" />
        </div>
        <div>
          <Button text="Large" color="primary" size="lg" />
        </div>
      </div>
      <Code code={codes.buttons.size} language="html" />
    </div>
  );
}
