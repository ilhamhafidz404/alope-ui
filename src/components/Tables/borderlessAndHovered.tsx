import Table from "../../../Table";
import Code from "../CodePrisma";

import codes from "./../../data/codes.json";

type dataProps = {
  no: number;
  name: string;
  id: number;
};

export default function BorderlessAndHoveredTableDocs({
  data,
}: {
  data: dataProps[];
}) {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold">Borderless and Hovered table</h3>
      <p>This is a minimalize Button from ALOPE UI</p>

      <div className="mt-5">
        <Table
          thead={["No", "Name"]}
          tbody={data}
          theadBg="gradient-dark"
          hovered
          borderless
          stripped
          align="left"
        />
      </div>
      <Code code={codes.tables.borderlessAndHovered} language="html" />
    </div>
  );
}
