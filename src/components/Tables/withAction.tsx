import Table from "../../../Table";
import Code from "../CodePrisma";

import codes from "./../../data/codes.json";

type dataProps = {
  no: number;
  name: string;
  id: number;
};

export default function TableWithActionDocs({ data }: { data: dataProps[] }) {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold">Table with Action</h3>
      <p>This is a minimalize Button from ALOPE UI</p>

      <div className="mt-5">
        <Table
          thead={["No", "Name", "Action"]}
          tbody={data}
          theadBg="gradient-dark"
          hovered
          borderless
          stripped
          align="left"
          actions={() => (
            <a href={``} className="text-blue-500">
              Detail
            </a>
          )}
        />
      </div>
      <Code code={codes.tables.withAction} language="html" />
    </div>
  );
}
