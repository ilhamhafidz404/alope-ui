import Card from "../../../Card";
import { Button } from "../../../Button";
import Code from "../CodePrisma";

import codes from "./../../data/codes.json";

export default function CardWithButtonDocs() {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold">Card with Button</h3>
      <p>This is a minimalize Button from ALOPE UI</p>

      <div className="flex gap-4 mt-5">
        <div>
          <Card
            title="Card Title"
            subtitle="ini subtitle"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente minima praesentium numquam ut nobis omnis similiq"
            button={<Button text={"Detail"} color="primary" fullWidth />}
          />
        </div>
        <div>
          <Card
            title="Card Title"
            subtitle="ini subtitle"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente minima praesentium numquam ut nobis omnis similiq"
            button={<Button text={"Detail"} color="primary" fullWidth />}
            secondaryButton={<Button text={"Delete"} color="error" />}
          />
        </div>
        <div>
          <Card
            title="Card Title"
            subtitle="ini subtitle"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente minima praesentium numquam ut nobis omnis similiq"
            button={<Button text={"Detail"} color="primary" fullWidth />}
            secondaryButton={<Button text={"Delete"} color="error" />}
            secondaryButtonOnLeft
          />
        </div>
      </div>
      <Code code={codes.cards.withButton} language="html" />
    </div>
  );
}
