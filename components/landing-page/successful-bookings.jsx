import { useState } from "react";

import BookingCard from "../booking-card";
import ChButton from "../base/ch-button";

function SuccessfulBookings() {
  const [bookings, setBookings] = useState([
    {
      name: "Anthony James",
      relativeTime: "4 mins ago",
      stars: 4.5,
      likes: 129,
      image: "",
    },
    {
      name: "Kathryn Schneider",
      relativeTime: "4 mins ago",
      stars: 4.5,
      likes: 129,
      image: "",
    },
    {
      name: "Jugal shah",
      relativeTime: "4 mins ago",
      stars: 4.5,
      likes: 129,
      image: "",
    },
  ]);

  return (
    <section className="w-11/12 mx-auto md:pt-44 pt-32">
      <h2 className="md:text-4xl text-2xl font-semibold text-center mb-4">
        Successful Bookings
      </h2>

      <p className="text-center md:text-lg text-sm text-gray-500 mb-10">
        Chefs completing their bookings and experiences.
      </p>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-x-8">
        {bookings.map((booking, index) => (
          <BookingCard booking={booking} key={index} className="mb-10 p-5" />
        ))}
      </div>

      <div className="flex justify-center md:mt-16 mt-8">
        <ChButton className="bg-black text-white py-3 px-7 font-medium">
          View All Bookings
        </ChButton>
      </div>
    </section>
  );
}

export default SuccessfulBookings;
