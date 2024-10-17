import { ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";
import NavbarSearchBox from "./searchBox";
import NavbarFullscreeenNav from "./fullscreeenNav";
import NavbarSearchBoxDialog from "./searchBoxDialog";
import Input from "../Input";

import "./../assets/style.css";

interface navLinks {
  placeholder: string;
  to: string;
}

interface searchItems {
  img: string;
  title: string;
  description: string;
  actionClick: string;
}

type NavbarProps = {
  title: string;
  logo?: ReactNode;
  links: navLinks[];
  stickyTop?: boolean;
  backDropBlur?: boolean;
  bg?: "light" | "dark" | "transparent";
  withSearchBar?: boolean;
  searchItems?: searchItems[];
  textColor?: "dark" | "light";
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
  textColor = "light",
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

  const textColorClass = {
    light: "text-white",
    dark: "text-black",
  };

  //
  const [isShowFSNav, setIsShowFSNav] = useState<boolean>(false);
  const [isShowDialogSearch, setIsShowDialogSearch] = useState<boolean>(false);

  return (
    <>
      <nav
        className={`z-50 flex justify-between py-5 items-center shadow xl:px-20 md:px-10 px-3 ${
          backDropBlur && "backdrop-blur"
        } ${stickyTop && "fixed top-0 left-0 right-0"} ${bg && bgClass[bg]}`}
      >
        <div className="flex gap-4 items-center">
          {logo}
          <h5 className={`font-bold text-xl ${textColorClass[textColor]}`}>
            {title}
          </h5>
        </div>
        {withSearchBar && (
          <div className="w-1/3 text-gray-800 relative hidden lg:block">
            <Input
              name="wef"
              type="text"
              placeholder="Search your favorite"
              leftIcon={<SearchIcon color={"text-gray-900"} />}
              onChangeValue={(e) => setSearch(e)}
            />
            <NavbarSearchBox
              searchItems={searchItems || []}
              search={search}
              bg={bg ? bg : "light"}
            />
          </div>
        )}
        <div className="hidden lg:block">
          <ul className={`flex gap-5 font-medium ${textColorClass[textColor]}`}>
            {links.map((link, index) => (
              <li key={index}>
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
        {/*  */}
        <div className="lg:hidden flex gap-5">
          {withSearchBar && (
            <button
              className={`p-1 rounded-md cursor-pointer ${
                bg == "dark"
                  ? "hover:bg-gray-700"
                  : bg == "light"
                  ? "hover:bg-gray-200"
                  : "hover:bg-gray-200/10"
              }`}
              onClick={() => setIsShowDialogSearch(!isShowDialogSearch)}
            >
              <SearchIcon color={textColorClass[textColor]} />
            </button>
          )}
          <div
            className={`p-1 rounded-md cursor-pointer ${
              bg == "dark"
                ? "hover:bg-gray-700"
                : bg == "light"
                ? "hover:bg-gray-200"
                : "hover:bg-gray-200/10"
            }`}
            onClick={() => setIsShowFSNav(!isShowFSNav)}
          >
            {!isShowFSNav ? (
              <HamburgerIcon color={textColorClass[textColor]} />
            ) : (
              <CloseIcon color={textColorClass[textColor]} />
            )}
          </div>
        </div>
      </nav>

      <NavbarSearchBoxDialog
        isShow={isShowDialogSearch}
        searchItems={searchItems || []}
        search={search}
        bg={bg ? bg : "light"}
        changeSearchValue={(e) => setSearch(e)}
      />

      <NavbarFullscreeenNav
        isShow={isShowFSNav}
        links={links}
        addedActiveClass={addedActiveClass}
        baseClass={baseClass}
        addedHoverClass={addedHoverClass}
        bg={bg}
        hiddenFullscreenNav={() => setIsShowFSNav(false)}
      />
    </>
  );
}

const SearchIcon = ({ color }: { color: string }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`size-6 ${color}`}
      >
        <path
          fillRule="evenodd"
          d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
          clipRule="evenodd"
        />
      </svg>
    </>
  );
};

const HamburgerIcon = ({ color }: { color: string }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`size-6 ${color}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </>
  );
};

const CloseIcon = ({ color }: { color: string }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`size-6 ${color}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </>
  );
};
