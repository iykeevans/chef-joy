import styled from "styled-components";

function ChTextField({
  label = null,
  onChange,
  onBlur,
  placeholder = "",
  name,
  value,
  ...rest
}) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={label} className="mb-1">
          {label}
        </label>
      )}

      <StyledInput
        {...rest}
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}

const StyledInput = styled.input`
  height: 42px;
  border: 1px solid ${(props) => (props.hasError ? "red" : "#ccc")};
  border-radius: 8px;
`;

export default ChTextField;
