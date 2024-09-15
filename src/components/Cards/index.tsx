import Code from "../CodePrisma";
import SimpleCardDocs from "./simple";
import CardWithButtonDocs from "./withButton";
import CardWithImageDocs from "./withImage";

export default function CardDocs() {
  return (
    <section className="mb-5">
      <h2 className="text-3xl font-bold">Card</h2>
      <p>
        Use Bootstrap’s custom button styles for actions in forms, dialogs, and
        more with support for multiple sizes, states, and more.
      </p>
      <Code
        code={`import { Button } from "alope-ui/Button";\nimport { Button, ButtonIcon } from "alope-ui/Button";`}
        language="js"
      />

      <hr className="my-5" />
      <SimpleCardDocs />

      <hr className="my-5" />
      <CardWithButtonDocs />

      <hr className="my-5" />
      <CardWithImageDocs />
    </section>
  );
}
