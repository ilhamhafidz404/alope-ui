import Table from "../../../Table";
import Code from "../CodePrisma";

import codes from "./../../data/codes.json";

type dataProps = {
  no: number;
  name: string;
  id: number;
};

export default function SimpleTableDocs({ data }: { data: dataProps[] }) {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold">Simple table</h3>
      <p>This is a minimalize Button from ALOPE UI</p>

      <div className="mt-5">
        <Table thead={["No", "Name"]} tbody={data} align="left" />
      </div>
      <Code code={codes.tables.simple} language="html" />
    </div>
  );
}
