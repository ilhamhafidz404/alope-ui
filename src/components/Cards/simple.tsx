import Card from "../../../Card";
import Code from "../CodePrisma";

import codes from "./../../data/codes.json";

export default function SimpleCardDocs() {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold">Simple Card</h3>
      <p>This is a minimalize Button from ALOPE UI</p>

      <div className="mt-5">
        <Card
          title="Card Title"
          subtitle="ini subtitle"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente minima praesentium numquam ut nobis omnis similiq"
        />
      </div>
      <Code code={codes.cards.simple} language="html" />
    </div>
  );
}
