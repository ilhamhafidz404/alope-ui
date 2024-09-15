import Card from "../../../Card";
import { Button } from "../../../Button";
import Code from "../CodePrisma";

import codes from "./../../data/codes.json";

export default function CardWithImageDocs() {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold">Card with Image</h3>
      <p>This is a minimalize Button from ALOPE UI</p>

      <div className="grid grid-cols-3 gap-5 mt-5">
        <Card
          image="https://images.unsplash.com/photo-1719937206300-fc0dac6f8cac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Card Title"
          subtitle="ini subtitle"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente minima praesentium numquam ut nobis omnis similiq"
          button={<Button text={"Detail"} color="primary" fullWidth />}
          secondaryButton={<Button text={"Delete"} color="error" />}
          ribbon="Discount"
        />
        <Card
          image="https://images.unsplash.com/photo-1724812773475-8a848e4027a7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Card Title"
          subtitle="ini subtitle"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente minima praesentium numquam ut nobis omnis similiq"
          button={<Button text={"Detail"} color="primary" fullWidth />}
          secondaryButton={<Button text={"Delete"} color="error" />}
          secondaryButtonOnLeft
        />
      </div>
      <Code code={codes.cards.withImage} language="html" />
    </div>
  );
}
