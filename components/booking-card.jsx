import React from "react";

function BookingCard({ booking }) {
  return (
    <div
      className="p-5"
      style={{ boxShadow: "0px 7px 64px rgba(0, 0, 0, 0.10)", borderRadius: 8 }}
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center">
          <span
            className="rounded-full"
            style={{ height: 36, width: 36, background: "#eee" }}
          ></span>

          <div className="flex flex-col ml-4">
            <span className="font-medium">{booking.name}</span>
            <small>{booking.relativeTime}</small>
          </div>
        </div>
        <span>{booking.stars}</span>
      </div>

      <p className="mb-5">
        In at iacuis lrem. Praesent tempor dictum tellus ut molestle, Sed sed
        ullamcorper lorem, id faucibus odio.
      </p>

      <div
        className="mb-5"
        style={{ height: 200, background: "#eee", borderRadius: 8 }}
      ></div>

      <div className="flex items-center">
        <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
          />
        </svg>

        <span className="ml-1">{booking.likes}</span>
      </div>
    </div>
  );
}

export default BookingCard;
