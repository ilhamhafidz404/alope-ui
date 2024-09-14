import { Button, ButtonIcon } from "../../../Button";
import Code from "../CodePrisma";

import codes from "./../../data/codes.json";

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

      <div className="mt-4">
        <h3 className="text-xl font-semibold">Simple Button</h3>
        <p>This is a minimalize Button from ALOPE UI</p>

        <div className="flex gap-3 mt-5">
          <Button text="Primary" color="primary" />
          <Button text="Secondary" color="secondary" />
          <Button text="Error" color="error" />
          <Button text="Success" color="success" />
        </div>

        <Code code={codes.buttons.simple} language="html" />
      </div>

      <hr className="my-5" />

      <div className="mt-4">
        <h3 className="text-xl font-semibold">Gradient Button</h3>
        <p>This is a minimalize Button from ALOPE UI</p>

        <div className="flex gap-3 mt-5">
          <Button text="Primary" color="primary" gradient />
          <Button text="Secondary" color="secondary" gradient />
          <Button text="Error" color="error" gradient />
          <Button text="Success" color="success" gradient />
        </div>
        <Code code={codes.buttons.gradient} language="html" />
      </div>

      <hr className="my-5" />

      <div className="mt-4">
        <h3 className="text-xl font-semibold">Custom Size Button</h3>
        <p>This is a minimalize Button from ALOPE UI</p>

        <div className="flex gap-3 mt-5">
          <div>
            <Button text="Small" color="primary" size="sm" />
          </div>
          <div>
            <Button text="Medium" color="primary" size="md" />
          </div>
          <div>
            <Button text="Large" color="primary" size="lg" />
          </div>
        </div>
        <Code code={codes.buttons.size} language="html" />
      </div>

      <hr className="my-5" />

      <div className="mt-4">
        <h3 className="text-xl font-semibold">Full Width Button</h3>
        <p>This is a minimalize Button from ALOPE UI</p>

        <div className="flex gap-3 mt-5">
          <Button
            text="Full Width Button"
            color="primary"
            size="sm"
            fullWidth
          />
        </div>
        <Code code={codes.buttons.fullwidth} language="html" />
      </div>

      <hr className="my-5" />

      <div className="mt-4">
        <h3 className="text-xl font-semibold">Button with Icon</h3>
        <p>This is a minimalize Button from ALOPE UI</p>

        <div className="flex gap-3 mt-5">
          <Button
            text="Left Icon"
            color="primary"
            iconLeft={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            }
          />
          <Button
            text="Right Icon"
            color="primary"
            iconRight={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            }
          />
          <Button
            text="Left & Right Icon"
            color="primary"
            iconLeft={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            }
            iconRight={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            }
          />
        </div>
        <Code code={codes.buttons.withIcon} language="html" />
      </div>

      <hr className="my-5" />

      <div className="mt-4">
        <h3 className="text-xl font-semibold">Only Icon Button</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <div className="mt-5">
          <ButtonIcon color="primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </ButtonIcon>
        </div>
        <Code code={codes.buttons.onlyIcon} language="html" />
      </div>

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
