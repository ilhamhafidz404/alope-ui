import { Button, ButtonIcon } from "./components/Button";
import Card from "./components/Card";

function App() {
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

      <Card
        image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        title="Card Title"
        subtitle="ini subtitle"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente minima praesentium numquam ut nobis omnis similiq"
        button={<Button text={"Detail"} color="primary" fullWidth />}
        secondaryButton={<Button text={"Delete"} color="error" />}
        ribbon="Discount"
      />
    </>
  );
}

export default App;
