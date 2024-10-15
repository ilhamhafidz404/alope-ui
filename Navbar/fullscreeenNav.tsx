import { NavLink } from "react-router-dom";

interface navLinks {
  placeholder: string;
  to: string;
}

type NavbarProps = {
  isShow: boolean;
  links: navLinks[];
  baseClass: string;
  addedHoverClass: string;
  addedActiveClass: string;
  bg: string;
  hiddenFullscreenNav: () => void;
};

export default function NavbarFullscreeenNav({
  isShow,
  links,
  baseClass,
  addedHoverClass,
  addedActiveClass,
  bg,
  hiddenFullscreenNav,
}: NavbarProps) {
  const bgClass =
    bg === "dark" ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900";
  const translateClass = isShow ? "translate-y-0" : "-translate-y-full";

  return (
    <section
      className={`fixed lg:hidden inset-0 z-40 flex items-center justify-center ${bgClass} transition-all duration-300 ${translateClass}`}
    >
      <ul className="font-medium">
        {links.map(({ to, placeholder }) => (
          <li
            key={to}
            className="text-center mb-5 text-xl"
            onClick={() => hiddenFullscreenNav()}
          >
            <NavLink
              to={to}
              className={({ isActive }) =>
                `${baseClass} ${addedHoverClass} ${
                  isActive ? addedActiveClass : ""
                }`
              }
            >
              {placeholder}
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
