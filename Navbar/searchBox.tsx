import { NavLink } from "react-router-dom";

import "./../assets/style.css";

interface searchItems {
  img: string;
  title: string;
  description: string;
  actionClick: string;
}

type NavbarSearchBoxProps = {
  searchItems: searchItems[];
  search?: string;
  bg: "light" | "dark" | "transparent";
};

export default function NavbarSearchBox({
  searchItems,
  search,
  bg,
}: NavbarSearchBoxProps) {
  const bgClasses = {
    transparent: "bg-gray-100 hover:bg-gray-200 border-gray-200",
    light: "bg-gray-100 hover:bg-gray-200 border-gray-200",
    dark: "bg-gray-800 text-gray-100 hover:bg-gray-900 border-gray-800",
  };

  return (
    search && (
      <div
        className={`absolute w-full shadow shadow-indigo-500/30 mt-7 left-0 right-0 rounded-md after:border-[10px] after:border-indigo-500 after:content-[''] after:border-t-transparent after:border-r-transparent after:border-l-transparent after:absolute after:-top-5 after:left-5 ${bgClasses[bg]}`}
      >
        {searchItems.slice(0, 3).map((item) => (
          <NavLink
            to={item.actionClick}
            className={`flex md:flex-row flex-col gap-4 items-center p-3 ${bgClasses[bg]}`}
          >
            <img
              src={item.img}
              alt=""
              className="rounded md:w-1/3 w-full h-[100px] object-cover md:inline-block hidden"
            />
            <div className="w-full">
              <p className="font-semibold md:text-base text-sm">{item.title}</p>
              <p className="text-gray-500 md:text-sm text-sm">
                {item.description}
              </p>
            </div>
          </NavLink>
        ))}
        <hr className={`${bgClasses[bg]}`} />
        <a
          href=""
          className={`p-3 flex justify-between text-indigo-500 rounded-b-md md:text-base text-sm ${bgClasses[bg]}`}
        >
          <span>Lihat Selengkapnya</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="md:size-6 size-4"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    )
  );
}
