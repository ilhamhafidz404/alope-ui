import { Button, ButtonIcon } from "./components/Button";
import Card from "./components/Card";
import Table from "./components/Table";

function App() {
  const data = [
    { no: 1, name: "Ilham", id: 101 },
    { no: 2, name: "Aisyah", id: 102 },
    { no: 3, name: "Zara", id: 103 },
  ];

  return (
    <>
      <div className="container px-10 py-5">
        <h1 className="text-3xl font-bold">🚀ALOPE UI</h1>

        <hr className="my-5" />
        <section className="mb-5">
          <h2 className="text-2xl font-bold">Button</h2>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">Simple Button</h3>

            <div className="flex gap-3">
              <Button text="Primary" color="primary" />
              <Button text="Secondary" color="secondary" />
              <Button text="Error" color="error" />
              <Button text="Success" color="success" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Gradient Button</h3>

            <div className="flex gap-3">
              <Button text="Primary" color="primary" gradient />
              <Button text="Secondary" color="secondary" gradient />
              <Button text="Error" color="error" gradient />
              <Button text="Success" color="success" gradient />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Custom Size Button</h3>

            <div className="flex gap-3">
              <div>
                <Button text="Primary" color="primary" size="sm" />
              </div>
              <div>
                <Button text="Primary" color="primary" size="md" />
              </div>
              <div>
                <Button text="Primary" color="primary" size="lg" />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Full Width Button</h3>

            <div className="flex gap-3">
              <Button text="Primary" color="primary" size="sm" fullWidth />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Button with Icon</h3>

            <div className="flex gap-3">
              <Button
                text="Primary"
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
                text="Primary"
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
                text="Primary"
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
          </div>
          <div className="mt-4">
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
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Only Icon Button</h3>

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
        </section>

        {/*  */}

        <section className="mb-5">
          <h2 className="text-2xl font-bold">Card</h2>

          <div className="mt-8">
            <h3 className="text-xl font-semibold">Simple Card</h3>

            <Card
              title="Card Title"
              subtitle="ini subtitle"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente minima praesentium numquam ut nobis omnis similiq"
            />
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold">Card with Button</h3>

            <div className="flex gap-4">
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
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold">Card with Image</h3>

            <div className="grid grid-cols-4 gap-5">
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
          </div>
        </section>

        <section className="mb-5">
          <h2 className="text-2xl font-bold">Table</h2>
          <div className="mt-8">
            <h3 className="text-xl font-semibold">Simple table</h3>

            <Table thead={["No", "Name"]} tbody={data} align="left" />
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold">Stripped Table</h3>
            <Table
              thead={["No", "Name"]}
              tbody={data}
              stripped
              align="left"
              actions={(row) => (
                <a href={`/details/${row.id}`} className="text-blue-500">
                  Detail
                </a>
              )}
            />
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold">
              Custom Background Table Head
            </h3>
            <Table
              thead={["No", "Name"]}
              tbody={data}
              theadBg="gradient-dark"
              stripped
              align="left"
              actions={(row) => (
                <a href={`/details/${row.id}`} className="text-blue-500">
                  Detail
                </a>
              )}
            />
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold">
              Hovered & Borderless Table
            </h3>
            <Table
              thead={["No", "Name"]}
              tbody={data}
              theadBg="gradient-dark"
              hovered
              borderless
              stripped
              align="left"
              actions={(row) => (
                <a href={`/details/${row.id}`} className="text-blue-500">
                  Detail
                </a>
              )}
            />
            <div className="mt-8">
              <h3 className="text-xl font-semibold">
                Table with Action Button
              </h3>
              <Table
                thead={["No", "Name", "Action"]}
                tbody={data}
                theadBg="gradient-dark"
                hovered
                borderless
                stripped
                align="left"
                actions={(row) => (
                  <a href={`/details/${row.id}`} className="text-blue-500">
                    Detail
                  </a>
                )}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
