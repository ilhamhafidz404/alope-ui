import Code from "../CodePrisma";
import SimpleAlertDocs from "./simple";
import AlertWithCloseDocs from "./withClose";
import AlertWithIconDocs from "./withIcon";

export default function AlertDocs() {
  return (
    <section>
      <h2 className="text-3xl font-bold">Alert</h2>
      <p>
        Use Bootstrap’s custom button styles for actions in forms, dialogs, and
        more with support for multiple sizes, states, and more.
      </p>
      <Code code={`import Alert from "alope-ui/Alert";`} language="js" />

      <hr className="my-5" />
      <SimpleAlertDocs />

      <hr className="my-5" />
      <AlertWithIconDocs />

      <hr className="my-5" />
      <AlertWithCloseDocs />
    </section>
  );
}
