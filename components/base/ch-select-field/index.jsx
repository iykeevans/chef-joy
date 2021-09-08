import Down from "./down.svg";

function ChSelectField({
  options = [],
  defaultOption = { name: "Select", value: "" },
}) {
  return (
    <div>
      <div className="relative">
        <select className="md:text-base text-sm focus:outline-none appearance-none bg-white">
          {defaultOption && (
            <option disabled value={defaultOption.value}>
              {defaultOption.name}
            </option>
          )}

          {options.length &&
            options.map(({ value, name }, index) => (
              <option value={value} key={index}>
                {name}
              </option>
            ))}
        </select>

        <Down className="absolute right-0 top-1/2 transform -translate-y-1/2" />
      </div>
    </div>
  );
}

export default ChSelectField;
