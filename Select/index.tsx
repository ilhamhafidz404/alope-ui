import "./../assets/style.css";

type SelectProps = {
  name: string;
  labelText?: string;
  options: Options[];
};

type Options = {
  name: string;
  value: string;
};

export default function Select({ name, labelText, options }: SelectProps) {
  return (
    <div>
      <label htmlFor={name}>{labelText}</label>
      <select
        name={name}
        className="w-full text-sm rounded-md border focus:outline-none focus:ring-0 focus:border-blue-600 py-2.5 px-3"
      >
        <option value="" selected hidden>
          Select {name}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
