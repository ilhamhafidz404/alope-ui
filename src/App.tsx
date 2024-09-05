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
      {/* Buttons */}
      <Button
        text="Small Primary with Gradient"
        color="primary"
        size="sm"
        gradient
        addedClass="mb-5"
      />
      <Button
        text="Secondary with Icon"
        color="secondary"
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
      <Button text="Button LG" color="success" size="lg" fullWidth />

      {/* Button Icons */}
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

      {/*  */}

      <Card
        // image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        title="Card Title"
        subtitle="ini subtitle"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente minima praesentium numquam ut nobis omnis similiq"
        // button={<Button text={"Detail"} color="primary" fullWidth />}
        // secondaryButton={<Button text={"Delete"} color="error" fullWidth />}
        // ribbon="Discount"
      />

      <br />

      <Card
        // image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        title="Card Title"
        subtitle="ini subtitle"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente minima praesentium numquam ut nobis omnis similiq"
        button={<Button text={"Detail"} color="primary" fullWidth />}
      />

      <br />

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

      {/*  */}

      <div className="px-20 mt-5">
        <Table
          thead={["No", "Name", "Action"]}
          theadBg="gradient-dark"
          tbody={data}
          stripped
          borderless
          hovered
          align="left"
          actions={(row) => (
            <a href={`/details/${row.id}`} className="text-blue-500">
              Detail
            </a>
          )}
        />
      </div>
    </>
  );
}

export default App;
