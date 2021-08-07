import React from "react";

function ChefCard({ chef }) {
  return (
    <div>
      <div
        className="mb-5"
        style={{ height: 200, background: "#eee", borderRadius: 8 }}
      ></div>

      <div className="flex justify-between">
        <span className="font-medium text-lg">{chef.name}</span>
        <span>{chef.stars}</span>
      </div>

      <div className="border-b pb-3 pt-1">{chef.specialty}</div>

      <div className="mt-3">{chef.time}</div>
    </div>
  );
}

export default ChefCard;
