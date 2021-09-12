import React from "react";

function Empty({ placeholder, city }) {
  return (
    <div className="bg-gray-100 w-full h-72 flex flex-col items-center justify-center">
      <h2 className="md:text-2xl font-semibold mb-2">
        No {placeholder} Near {city}
      </h2>
      <p className="md:text-base text-sm">We will come to your city soon.</p>
    </div>
  );
}

export default Empty;
