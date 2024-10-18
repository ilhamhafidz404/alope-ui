# 🚀ALOPE UI

ALOPE UI is a simple and flexible component library for your React project. It is built with Vite, ESLint, Tailwind CSS, and uses Heroicons for icons, enabling fast development and clean code.

Components:

- [Alert](https://github.com/ilhamhafidz404/alope-ui#alert)
- [Button](https://github.com/ilhamhafidz404/alope-ui#button)
- [Card](https://github.com/ilhamhafidz404/alope-ui#card)
- [Form](https://github.com/ilhamhafidz404/alope-ui#form)
- [Footer](https://github.com/ilhamhafidz404/alope-ui#footer)
- [Header](https://github.com/ilhamhafidz404/alope-ui#header)
- [Modal](https://github.com/ilhamhafidz404/alope-ui#modal)
- [Navbar](https://github.com/ilhamhafidz404/alope-ui#navbar)
- [Table](https://github.com/ilhamhafidz404/alope-ui#table)
- [Toast](https://github.com/ilhamhafidz404/alope-ui#toast)

## Instalation Guide

⚠️ Note: Make sure to run this command in your React project.

- Install using npm

```bash
npm i alope-ui
```

## Examples

### ALERT

⚠️Requirement import

```jsx
import Alert, ButtonIcon from "alope-ui/Alert";
```

- Simple Alert

```jsx
<Alert text="Simple Alert Primary" color="primary" />
<Alert text="Simple Alert Secondary" color="secondary" />
<Alert text="Simple Alert Error" color="error" />
<Alert text="Simple Alert Success" color="success" />
```

- Alert with Icon

```jsx
<Alert text="lorem ipsum sit dolor" color="error" icon={...} />
```

- Alert with Close Button

```jsx
<Alert text="lorem ipsum sit dolor" color="error" withClose />
```

### BUTTON

⚠️Requirement import

```jsx
import { Button, ButtonIcon } from "alope-ui/Button";
```

- Simple Button

```jsx
<Button text="Primary" color="primary" />
<Button text="Secondary" color="secondary" />
<Button text="Error" color="error" />
<Button text="Success" color="success" />
<Button text="Light" color="light" />
<Button text="Dark" color="dark" />
```

- Gradient Button

```jsx
<Button text="Primary" color="primary" gradient />
<Button text="Secondary" color="secondary" gradient />
<Button text="Error" color="error" gradient />
<Button text="Success" color="success" gradient />
<Button text="Light" color="light" gradient/>
<Button text="Dark" color="dark" gradient/>
```

- Custom Size Button

```jsx
<Button text="Small" color="primary" size="sm" />
<Button text="Medium" color="parimary" size="md" />
<Button text="Large" color="primary" size="lg" />
```

- Fullwidth Button

```jsx
<Button text="Full Width Button" color="primary" fullWidth />
```

- Button with Icon

```jsx
<Button text="Left Icon" color="primary" iconLeft={...} />
<Button text="Right Icon" color="primary" iconRight={...} />
<Button text="Left & Right Icon" color="primary" iconLeft={...} iconRight={...} />
```

- Only Icon Button

```jsx
<ButtonIcon color="primary">{yourIcon()}</ButtonIcon>

<ButtonIcon color="primary" fullRounded>{yourIcon()}</ButtonIcon>
```

### CARD

⚠️Requirement import

```jsx
import Card from "alope-ui/Card";
import { Button } from "alope-ui/Button";
```

- Simple Card

```jsx
<Card title="Card Title" subtitle="ini subtitle" description="..." />
```

- Card with Button

```jsx
<Card
	title="Card Title"
	subtitle="ini subtitle"
	description="..."
	button={<Button text={"Detail"} color="primary" fullWidth />}
/>

<Card
	title="Card Title"
	subtitle="ini subtitle"
	description="..."
	button={<Button text={"Detail"} color="primary" fullWidth />}
	secondaryButton={<Button text={"Delete"} color="error"/>}
/>

<Card
	title="Card Title"
	subtitle="ini subtitle"
	description="..."
	button={<Button text={"Detail"} color="primary" fullWidth />}
	secondaryButton={<Button text={"Delete"} color="error"  />}
	secondaryButtonOnLeft
/>
```

- Card with Image

```jsx
<Card
	image="..."
	title="Card Title"
	subtitle="ini subtitle"
	description="..."
	button={<Button text={"Detail"} color="primary" fullWidth />}
	secondaryButton={<Button text={"Delete"} color="error" />}
	ribbon="Discount"
/>

<Card
	image="..."
	title="Card Title"
	subtitle="ini subtitle"
	description="..."
	button={<Button text={"Detail"} color="primary" fullWidth />}
	secondaryButton={<Button text={"Delete"} color="error" />}
	secondaryButtonOnLeft
/>
```

### FORM

⚠️Requirement import

```jsx
import Input from "alope-ui/Input";
import Select from "alope-ui/Select";
```

- Simple Input

```jsx
<Input name="alope-ui" type="text" labelText="Alope UI" />
<Input name="alope-ui" type="text" placeholder="Without Label" />
```

- Floating Label Input

```jsx
<Input name="alope-ui" type="text" labelText="Alope UI" floatingLabel />
```

- Input with Icon

```jsx
<Input
	name="alope-ui"
	type="text"
	labelText="Input with Icon"
	placeholder="This is Placeholder"
	leftIcon={...}
/>
<Input
	name="alope-ui"
	type="text"
	labelText="Input with Icon"
	placeholder="This is Placeholder"
	rightIcon={...}
/>
```

- Simple Select

```jsx
<Select
  name="alope-ui"
  labelText="What do you thing about ALOPE UI"
  options={[
    {
      value: "Amazing",
      name: "Amazing",
    },
  ]}
/>
```

### Footer

⚠️Requirement import

```jsx
import Footer from "alope-ui/Footer";
```

```jsx
<Footer
  imgUrlLogo="..."
  text="ALOPE UI"
  bottomText="Copyright by ALOPE UI, since &copy; 2024"
  links={[
    {
      to: "https://instagram.com",
      placeholder: "Intagram",
    },
    {
      to: "/",
      placeholder: (
        <img src="TiktokLogo.png" className="min-w-[50px] max-w-[50px]" />
      ),
    },
    {
      to: "/",
      placeholder: <YoutubeIcon />,
    },
    {
      to: "",
      placeholder: (
        <span className="flex gap-2 items-center">
          <XIcon />X
        </span>
      ),
    },
  ]}
/>
```

### HEADER

⚠️Requirement import

```jsx
import Header from "alope-ui/Header";
```

- Simple Input

```jsx
<Header
  bgUrls={["...". "..."]}
  logoUrl="..."
  title="ALOPE UI is The Best "
  description="ALOPE UI is a simple and flexible component library for your React project. It is built with Vite, ESLint, Tailwind CSS, and uses Heroicons for icons, enabling fast development and clean code."
  actions={[
    {
      placeholder: "Action 1",
      buttonColor: "primary",
      to: "/",
    },
    {
      placeholder: "Action 2",
      buttonColor: "light",
      to: "/",
    },
  ]}
/>
```

### MODAL

⚠️Requirement import

```jsx
import { Modal, CustomModal } from "../Modal";
```

- Simple Modal

```jsx
const [showModal, setShowModal] = useState(false);

<Modal
  isShow={showModal}
  onCloseAction={() => setShowModal(false)}
  bodyText={"uwiegfuiewf"}
  size="md"
/>;
```

- Custom Modal

```jsx
const [showCustomModal, setShowCustomModal] = useState(false);

const handleSubmitFilter = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const target = e.target as HTMLFormElement;
  const subsektorValue = (
    target.elements.namedItem("subsektor") as HTMLSelectElement
  ).value;

  const params = new URLSearchParams(window.location.search);
  params.set("subsektor", subsektorValue);

  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.pushState({}, "", newUrl);

  setShowModal(false);
};

<CustomModal
  isShow={showCustomModal}
  onCloseAction={() => setShowCustomModal(false)}
  body={
    <form method="GET" onSubmit={(e) => handleSubmitFilter(e)}>
      <Select
        name="Param"
        options={[
          {
            name: "param",
            value: "valueParam",
          },
        ]}
      />
      <div className="mt-5">
        <Button text="Filter" color="primary" fullWidth />
      </div>
    </form>
  }
  footer={<p>Alope UI is the Best</p>}
/>
```

- Navbar with Search

```jsx
<Navbar
  title={"ALOPE"}
  logo={...}
  links={[
    {
      placeholder: "Home",
      to: "/",
    },
    {
      placeholder: "About",
      to: "/about",
    },
    {
      placeholder: "Product",
      to: "/product",
    },
  ]}
  stickyTop
  bg={"transparent"}
  withSearchBar
  searchItems={[
    {
      img: "...",
      title: "Title Card",
      description: "description",
      actionClick: "/",
    },
    {
      img: "...",
      title: "Title Card",
      description: "description",
      actionClick: "/",
    },
    {
      img: "...",
      title: "Title Card",
      description: "description",
      actionClick: "/",
    },
    {
      img: "...",
      title: "Title Card",
      description: "description",
      actionClick: "/",
    },
  ]}
/>
```

### NAVBAR

⚠️Important: Please setup your project with react-router-dom first!
<br/>
⚠️Requirement import

```jsx
import Navbar from "../Navbar";
```

- Simple Navbar

```jsx
<Navbar
  title={"ALOPE"}
  links={[
    {
      placeholder: "Home",
      to: "/",
    },
    {
      placeholder: "About",
      to: "/about",
    },
    {
      placeholder: "Product",
      to: "/product",
    },
  ]}
  stickyTop={false}
/>
```

- Sticky with Navbar Icon / Logo

```jsx
<Navbar
  title={"ALOPE"}
  logo={...}
  links={[
    {
      placeholder: "Home",
      to: "/",
    },
    {
      placeholder: "About",
      to: "/about",
    },
    {
      placeholder: "Product",
      to: "/product",
    },
  ]}
  stickyTop
/>
```

- Navbar with Search

```jsx
<Navbar
  title={"ALOPE"}
  logo={...}
  links={[
    {
      placeholder: "Home",
      to: "/",
    },
    {
      placeholder: "About",
      to: "/about",
    },
    {
      placeholder: "Product",
      to: "/product",
    },
  ]}
  stickyTop
  bg={"transparent"}
  withSearchBar
  searchItems={[
    {
      img: "...",
      title: "Title Card",
      description: "description",
      actionClick: "/",
    },
    {
      img: "...",
      title: "Title Card",
      description: "description",
      actionClick: "/",
    },
    {
      img: "...",
      title: "Title Card",
      description: "description",
      actionClick: "/",
    },
    {
      img: "...",
      title: "Title Card",
      description: "description",
      actionClick: "/",
    },
  ]}
/>
```

### TABLE

⚠️Requirement import

```jsx
import Table from "alope-ui/Table";
```

- Simple Table

```jsx
<Table
  thead={["No", "Name"]}
  tbody={[
    { no: 1, name: " Ilham" },
    { no: 2, name: "Hafidz" },
  ]}
  align="left"
/>
```

- Stripped Table

```jsx
<Table
  thead={["No", "Name"]}
  tbody={[
    { no: 1, name: " Ilham" },
    { no: 2, name: "Hafidz" },
  ]}
  align="left"
  stripped
/>
```

- Borderless and Hovered Table

```jsx
<Table
  thead={["No", "Name"]}
  tbody={[
    { no: 1, name: " Ilham" },
    { no: 2, name: "Hafidz" },
  ]}
  align="left"
  stripped
  borderless
  hovered
/>
```

- Table with Action

```jsx
<Table
  thead={["No", "Name"]}
  tbody={[
    { no: 1, name: " Ilham" },
    { no: 2, name: "Hafidz" },
  ]}
  align="left"
  stripped
  borderless
  hovered
  actions={(row) => (
    <a href={`/details/${row.id}`} className="text-blue-500">
      Detail
    </a>
  )}
/>
```

### TOAST

⚠️Requirement import

```jsx
import Toast from "alope-ui/Toast";
```

- Simple Toast
  The value for the type attribute can be set to one of the following: "default", "success", "error", or "warning".

```jsx
<Toast
  isShow={toast}
  setIsShow={(isShow: boolean) => {
    setToast(isShow);
  }}
  type="default"
  description="..."
/>
```

- Set Position & Show Time Toast
  The value for the position attribute can be set to one of the following: "top-left", "top-center", "top-right" or "bottom-left", "bottom-center", "bottom-right".

```jsx
<Toast
  isShow={toast}
  setIsShow={(isShow: boolean) => {
    setToast(isShow);
  }}
  type="default"
  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic id dolorum laboriosam sequi quaerat rem quo magnam veniam molestias temporibus!"
  showTime={5000}
  position="bottom-center"
/>
```

You can see an example of the components [here](https://github.com/ilhamhafidz404/alope-ui/blob/master/src/App.tsx)
