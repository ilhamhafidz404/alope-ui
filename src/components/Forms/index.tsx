import Code from "../CodePrisma";
import FloatingLabelInputFormDocs from "./floatingLabelInput";
import SimpleInputFormDocs from "./simpleInput";
import SimpleSelectDocs from "./simpleSelect";
import InputWithIconDocs from "./withIconInput";

export default function FormDocs() {
  return (
    <section className="mb-5">
      <h2 className="text-3xl font-bold">Form</h2>
      <p>
        Use Bootstrap’s custom button styles for actions in forms, dialogs, and
        more with support for multiple sizes, states, and more.
      </p>
      <Code
        code={`import Input from "alope-ui/Input";\nimport Select from "alope-ui/Select";`}
        language="js"
      />

      <hr className="my-5" />
      <SimpleInputFormDocs />

      <hr className="my-5" />
      <FloatingLabelInputFormDocs />

      <hr className="my-5" />
      <InputWithIconDocs />

      <hr className="my-5" />
      <SimpleSelectDocs />
    </section>
  );
}
