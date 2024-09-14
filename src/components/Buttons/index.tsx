import Code from "../CodePrisma";

// variant
import FullWidthButtonDocs from "./fullWidth";
import GradientButtonDocs from "./gradient";
import OnlyIconButtonDocs from "./onlyIcon";
import SimpleButtonDocs from "./simple";
import CustomSizeButtonDocs from "./size";
import ButtonWithIconDocs from "./withIcon";

export default function ButtonDocs() {
  return (
    <section className="mb-5">
      <h2 className="text-3xl font-bold">Button</h2>
      <p>
        Use Bootstrap’s custom button styles for actions in forms, dialogs, and
        more with support for multiple sizes, states, and more.
      </p>
      <Code
        code={`import { Button, ButtonIcon } from "alope-ui/Button";`}
        language="js"
      />

      <hr className="my-5" />
      <SimpleButtonDocs />

      <hr className="my-5" />
      <GradientButtonDocs />

      <hr className="my-5" />
      <CustomSizeButtonDocs />

      <hr className="my-5" />
      <FullWidthButtonDocs />

      <hr className="my-5" />
      <ButtonWithIconDocs />

      <hr className="my-5" />
      <OnlyIconButtonDocs />

      {/* <div className="mt-4">
        <h3 className="text-xl font-semibold">Example Button</h3>

        <div className="flex gap-3">
          <Button
            text="Delete"
            color="error"
            gradient
            iconLeft={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            }
          />
        </div>
      </div> */}
    </section>
  );
}
