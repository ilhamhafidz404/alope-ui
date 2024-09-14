import { Button, ButtonIcon } from "../Button";
import Card from "../Card";
import Input from "../Input";
import Select from "../Select";
import Table from "../Table";
import Alert from "../Alert";

// components
import ButtonDocs from "./components/Buttons";

// data

function App() {
  const data = [
    { no: 1, name: "Ilham", id: 101 },
    { no: 2, name: "Aisyah", id: 102 },
    { no: 3, name: "Zara", id: 103 },
  ];

  return (
    <>
      <nav className="flex justify-between items-center px-10 py-5 border-b fixed top-0 left-0 right-0 bg-white z-50">
        <div>
          <h1 className="text-xl font-semibold">🚀ALOPE UI</h1>
        </div>
        <div>
          <a href="">See in GITHUB</a>
        </div>
      </nav>

      <section className="grid grid-cols-5 px-10 mt-20">
        <aside className="fixed top-20">
          <ul>
            <li>Instalation Guide</li>
          </ul>
        </aside>
        <div></div>
        <main className="col-span-4">
          <div className="container px-10 py-5">
            <ButtonDocs />

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
                      button={
                        <Button text={"Detail"} color="primary" fullWidth />
                      }
                    />
                  </div>
                  <div>
                    <Card
                      title="Card Title"
                      subtitle="ini subtitle"
                      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente minima praesentium numquam ut nobis omnis similiq"
                      button={
                        <Button text={"Detail"} color="primary" fullWidth />
                      }
                      secondaryButton={<Button text={"Delete"} color="error" />}
                    />
                  </div>
                  <div>
                    <Card
                      title="Card Title"
                      subtitle="ini subtitle"
                      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente minima praesentium numquam ut nobis omnis similiq"
                      button={
                        <Button text={"Detail"} color="primary" fullWidth />
                      }
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
                    button={
                      <Button text={"Detail"} color="primary" fullWidth />
                    }
                    secondaryButton={<Button text={"Delete"} color="error" />}
                    ribbon="Discount"
                  />
                  <Card
                    image="https://images.unsplash.com/photo-1724812773475-8a848e4027a7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="Card Title"
                    subtitle="ini subtitle"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente minima praesentium numquam ut nobis omnis similiq"
                    button={
                      <Button text={"Detail"} color="primary" fullWidth />
                    }
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

            {/*  */}
            <section className="mb-5">
              <Input
                name="password"
                type="text"
                labelText="Test"
                floatingLabel
              />
              <Input
                name="password"
                type="text"
                labelText="Test"
                placeholder="Test"
                rightIcon={
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
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>
                }
              />
              <Input
                name="password"
                type="text"
                labelText="Test"
                placeholder="Test"
              />

              <Select
                name="test"
                labelText="Test"
                options={[
                  {
                    value: "hhe",
                    name: "hhe",
                  },
                  {
                    value: "hhe",
                    name: "hhe",
                  },
                  {
                    value: "hhe",
                    name: "hhe",
                  },
                ]}
              />
            </section>

            {/*  */}

            <section>
              <h2 className="text-2xl font-bold">Alerts</h2>
              <Alert
                text="lorem ipsum sit dolor"
                label="primary-alert"
                color="primary"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                }
                withClose
              />
              <Alert
                text="lorem ipsum sit dolor"
                color="secondary"
                withClose
                label="secondary-alert"
              />
              <Alert text="lorem ipsum sit dolor" color="error" />
              <Alert text="lorem ipsum sit dolor" color="success" />
            </section>
          </div>
        </main>
      </section>
    </>
  );
}

export default App;
