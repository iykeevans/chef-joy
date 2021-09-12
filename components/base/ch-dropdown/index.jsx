import React, { useRef, useState } from "react";

import { useOuterClick } from "../../../utils/useOuterClicks";

function ChDropdown({ children, options, handleOnClick, loading = true }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useOuterClick(dropdownRef, () => {
    if (showDropdown) {
      setShowDropdown(false);
    }
  });

  return (
    <div className="relative">
      <div
        className="flex flex-col"
        ref={dropdownRef}
        onClick={() => setShowDropdown(true)}
      >
        {children}
      </div>

      {showDropdown && (
        <div className="absolute" style={{ top: 40, width: 400 }}>
          {loading ? (
            <div className="text-sm bg-white border rounded px-3 py-2">
              Loading...
            </div>
          ) : (
            <>
              {options.length ? (
                <div className="flex flex-col bg-white border rounded px-3 py-2">
                  {options.map((option) => (
                    <div
                      className="text-sm py-2 hover:bg-red-500 hover:text-white px-2 cursor-pointer"
                      key={option.id}
                      onClick={() => handleOnClick(option)}
                    >
                      {option.name}
                    </div>
                  ))}
                </div>
              ) : null}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default ChDropdown;
