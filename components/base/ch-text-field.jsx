import React from "react";

function ChTextField({ placeholder, textSize = "text-sm" }) {
  return (
    <div className="flex">
      <input
        type="text"
        placeholder={placeholder}
        className={`${textSize} focus:outline-none`}
      />
    </div>
  );
}

export default ChTextField;
