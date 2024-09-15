import Input from "../../../Input";
import Code from "../CodePrisma";

import codes from "./../../data/codes.json";

export default function FloatingLabelInputFormDocs() {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold">Floating Label</h3>
      <p>This is a minimalize Button from ALOPE UI</p>

      <div className="mt-5">
        <Input name="alope-ui" type="text" labelText="Alope UI" floatingLabel />
      </div>
      <Code code={codes.forms.floatingLabelInput} language="html" />
    </div>
  );
}
