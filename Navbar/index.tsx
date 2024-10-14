import { ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";
import NavbarSearchBox from "./searchBox";
import Input from "../Input";

interface navLinks {
  placeholder: String;
  to: string;
}

interface searchItems {
  img: string;
  title: string;
  description: string;
  actionClick: string;
}

type NavbarProps = {
  title: String;
  logo?: ReactNode;
  links: navLinks[];
  stickyTop?: boolean;
  backDropBlur?: boolean;
  bg?: "light" | "dark" | "transparent";
  withSearchBar?: boolean;
  searchItems?: searchItems[];
};

export default function Navbar({
  title,
  logo,
  links,
  stickyTop = true,
  backDropBlur = false,
  bg = "transparent",
  withSearchBar = false,
  searchItems,
}: NavbarProps) {
  const [search, setSearch] = useState("");

  const baseClass =
    "after:content-[''] after:bottom-0 after:h-[5px] after:bg-indigo-500 after:absolute after:rounded-full relative pb-2";

  const addedHoverClass =
    "hover:after:w-[5px] active:after:w-[15px] after:transition-all after:duration-500 after:left-1/2 after:-translate-x-1/2";

  const addedActiveClass =
    "after:w-full after:left-0 after:right-0 after:transition-all after:duration-500";

  const bgClass = {
    transparent: "bg-transparent",
    light: "bg-gray-100",
    dark: "bg-gray-800 text-gray-100",
  };

  return (
    <nav
      className={`z-50 flex justify-between px-10 py-5 items-center shadow ${
        backDropBlur && "backdrop-blur"
      } ${stickyTop && "sticky top-0 left-0 right-0"} ${bg && bgClass[bg]}`}
    >
      <div className="flex gap-2">
        {logo}
        <h5 className="font-bold text-xl">{title}</h5>
      </div>
      {withSearchBar && (
        <div className="w-1/3 text-gray-800 relative">
          <Input
            name="wef"
            type="text"
            placeholder="Search your favorite"
            leftIcon={
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </>
            }
            onChangeValue={(e) => setSearch(e)}
          />
          <NavbarSearchBox
            searchItems={searchItems || []}
            search={search}
            bg={bg ? bg : "light"}
          />
        </div>
      )}
      <div className="hidden xl:block">
        <ul className="flex gap-5 font-medium">
          {links.map((link) => (
            <li>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `${baseClass} ${addedHoverClass} ${
                    isActive ? addedActiveClass : ""
                  }`
                }
              >
                {link.placeholder}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
