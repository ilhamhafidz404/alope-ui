import Select from "../../../Select";
import Code from "../CodePrisma";

import codes from "./../../data/codes.json";

export default function SimpleSelectDocs() {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold">Simple Select</h3>
      <p>This is a minimalize Button from ALOPE UI</p>
      <div className="mt-5">
        <Select
          name="This"
          labelText="What do you thing about ALOPE UI"
          options={[
            {
              value: "Amazing",
              name: "Amazing",
            },
            {
              value: "Awesome",
              name: "Awesome",
            },
            {
              value: "Great",
              name: "Great",
            },
          ]}
        />
      </div>
      <Code code={codes.forms.simpleSelect} language="html" />
    </div>
  );
}
