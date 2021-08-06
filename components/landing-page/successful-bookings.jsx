import { useState } from "react";
import BookingCard from "../booking-card";

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
    <section className="w-11/12 mx-auto pt-44">
      <h2 className="text-4xl font-semibold text-center mb-4">
        Successful Bookings
      </h2>

      <p className="text-center text-lg text-gray-500 mb-10">
        Chefs completing their bookings and experiences.
      </p>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-x-8">
        {bookings.map((booking) => (
          <BookingCard booking={booking} />
        ))}
      </div>
    </section>
  );
}

export default SuccessfulBookings;
