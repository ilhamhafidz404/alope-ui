import { Button } from "../Button";

import "./../assets/style.css";

interface HeaderAction {
  placeholder: string;
  to: string;
  buttonColor: "primary" | "secondary" | "success" | "error" | "light" | "dark";
}

type HeaderProps = {
  bgUrl: string;
  logoUrl: string;
  title: string;
  description: string;
  actions?: HeaderAction[];
};

export default function Header({
  bgUrl,
  logoUrl,
  title,
  description,
  actions,
}: HeaderProps) {
  return (
    <header
      className={`min-h-[800px] max-h-screen min-w-screen relative bg-cover bg-center flex items-center justify-center text-white after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-b after:to-black/80 after:from-black/40 overflow-hidden`}
    >
      <img
        src={`${bgUrl}`}
        className="absolute w-full h-full object-cover object-center"
      />
      <div className="relative z-20 text-center w-1/2">
        <img
          src={logoUrl}
          alt=""
          width={200}
          className="w-[200px] mx-auto mb-10"
        />
        <h1 className="text-4xl font-semibold">{title}</h1>
        <p className="mt-5 text-gray-200">{description}</p>
        <div className="flex gap-3 justify-center mt-10">
          {actions?.length &&
            actions.map((action) => (
              <Button color={action.buttonColor} text={action.placeholder} />
            ))}
        </div>
      </div>
    </header>
  );
}
