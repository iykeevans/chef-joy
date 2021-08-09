import React from "react";

function Profile() {
  return (
    <div className="pt-44 w-11/12 mx-auto">
      <div className="flex justify-center">
        <div className="relative">
          <div className="absolute h-32 w-32 bg-black rounded-full"></div>
          <div className="absolute h-32 w-32 bg-gray-700 rounded-full"></div>
          <div className="absolute h-32 w-32 bg-gray-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
