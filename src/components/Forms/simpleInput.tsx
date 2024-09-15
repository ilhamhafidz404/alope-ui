import Input from "../../../Input";
import Code from "../CodePrisma";

import codes from "./../../data/codes.json";

export default function SimpleInputFormDocs() {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold">Simple Input</h3>
      <p>This is a minimalize Button from ALOPE UI</p>

      <div className="mt-5">
        <Input name="alope-ui" type="text" labelText="Alope UI" />
        <br />
        <Input name="alope-ui" type="text" placeholder="Without Label" />
      </div>
      <Code code={codes.forms.simpleInput} language="html" />
    </div>
  );
}
