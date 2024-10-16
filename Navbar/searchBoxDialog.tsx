import Input from "../Input";
import NavbarSearchBox from "./searchBox";

interface searchItems {
  img: string;
  title: string;
  description: string;
  actionClick: string;
}

type NavbarSearchBoxProps = {
  isShow: boolean;
  searchItems: searchItems[];
  search?: string;
  bg: "light" | "dark" | "transparent";
  changeSearchValue: (e: string) => void;
};

export default function NavbarSearchBoxDialog({
  isShow,
  searchItems,
  search,
  bg,
  changeSearchValue,
}: NavbarSearchBoxProps) {
  return (
    <div
      className={`fixed lg:hidden flex pt-28 justify-center backdrop-blur inset-0 z-40 transition-all duration-300 ${
        !isShow ? "scale-0" : "scale-100"
      }`}
    >
      <div className="w-full md:mx-16 mx-5">
        <div className="w-full text-gray-800 relative">
          <div
            className={`${
              bg == "dark" ? "bg-gray-800" : "bg-white"
            } md:p-5 p-3 shadow rounded-md`}
          >
            <Input
              name="wef"
              type="text"
              placeholder="Search your favorite"
              leftIcon={<SearchIcon />}
              onChangeValue={(e) => changeSearchValue(e)}
            />
          </div>
          <NavbarSearchBox
            searchItems={searchItems || []}
            search={search}
            bg={bg ? bg : "light"}
          />
        </div>
      </div>
    </div>
  );
}

const SearchIcon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="md:size-6 size-5"
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
