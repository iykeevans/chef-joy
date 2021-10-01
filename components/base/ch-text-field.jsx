import styled from "styled-components";

function ChTextField({
  label = null,
  type,
  onChange,
  onBlur,
  placeholder = "",
  name,
  value,
  errorMessage,
  ...rest
}) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={label} className="mb-1">
          {label}
        </label>
      )}

      <div>
        <StyledInput
          {...rest}
          type={type || "text"}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>

      {errorMessage && (
        <div className="text-sm text-red-500 mt-1">{errorMessage}</div>
      )}
    </div>
  );
}

const StyledInput = styled.input`
  height: 42px;
  border: 1px solid ${(props) => (props.hasError ? "red" : "#ccc")};
  border-radius: 8px;
  width: 100%;
`;

export default ChTextField;
