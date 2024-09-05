import React from "react";

interface TableProps {
  thead: string[];
  tbody: Array<{ [key: string]: any }>;
  theadBg?:
    | "primary"
    | "secondary"
    | "error"
    | "success"
    | "transparent"
    | "dark"
    | "gradient-primary"
    | "gradient-secondary"
    | "gradient-error"
    | "gradient-success"
    | "gradient-dark";
  stripped?: boolean;
  borderless?: boolean;
  hovered?: boolean;
  align?: "left" | "right" | "center" | "center-head";
  actions?: (row: { [key: string]: any }) => React.ReactNode;
}

const Table: React.FC<TableProps> = ({
  thead,
  tbody,
  theadBg = "transparent",
  stripped = false,
  borderless = false,
  hovered = false,
  align = "left",
  actions,
}) => {
  const theadBgClass = {
    primary: "bg-indigo-500 text-white",
    secondary: "bg-gray-500 text-white",
    error: "bg-red-500 text-white",
    success: "bg-emerald-500 text-white",
    transparent: "bg-transparent",
    dark: "bg-gray-800 text-white",
    "gradient-primary":
      "bg-gradient-to-r from-indigo-500 to-purple-400 text-white",
    "gradient-secondary":
      "bg-gradient-to-r from-gray-500 to-gray-400 text-white",
    "gradient-error": "bg-gradient-to-r from-red-500 to-orange-500 text-white",
    "gradient-success":
      "bg-gradient-to-r from-emerald-500 to-green-400 text-white",
    "gradient-dark": "bg-gradient-to-r from-gray-800 to-gray-600 text-white",
  };

  const borderClass = !borderless
    ? "border-collapse border border-gray-300"
    : "";
  const alignClass = align === "center-head" ? "text-center" : `text-${align}`;

  return (
    <table className={`table-auto w-full ${borderClass}`}>
      <thead className={theadBgClass[theadBg]}>
        <tr>
          {thead.map((header, index) => (
            <th
              key={index}
              className={`px-4 py-3 ${borderClass} ${alignClass}`}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tbody.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={`${
              stripped && rowIndex % 2 === 0 ? "bg-gray-100" : ""
            } ${hovered ? "hover:bg-gray-200" : ""} ${alignClass}`}
          >
            {thead.map((header, colIndex) => (
              <td key={colIndex} className={`px-4 py-3 ${borderClass}`}>
                {header.toLowerCase() === "action" && actions
                  ? actions(row)
                  : row[header.toLowerCase()] || "-"}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
