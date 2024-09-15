import Code from "../CodePrisma";
import BorderlessAndHoveredTableDocs from "./borderlessAndHovered";
import SimpleTableDocs from "./simple";
import StrippedTableDocs from "./stripped";
import TableWithActionDocs from "./withAction";

export default function TableDocs() {
  const data = [
    { no: 1, name: "Ilham", id: 101 },
    { no: 2, name: "Hafidz", id: 102 },
    { no: 3, name: "Arima", id: 103 },
  ];

  return (
    <section className="mb-5">
      <h2 className="text-3xl font-bold">Table</h2>
      <p>
        Use Bootstrap’s custom button styles for actions in forms, dialogs, and
        more with support for multiple sizes, states, and more.
      </p>
      <Code code={`import Table from "alope-ui/Table";`} language="js" />

      <hr className="my-5" />
      <SimpleTableDocs data={data} />

      <hr className="my-5" />
      <StrippedTableDocs data={data} />

      <hr className="my-5" />
      <BorderlessAndHoveredTableDocs data={data} />

      <hr className="my-5" />
      <TableWithActionDocs data={data} />
    </section>
  );
}
