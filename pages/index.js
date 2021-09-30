import Head from "next/head";
import { useEffect, useState } from "react";

import Hero from "../components/landing-page/hero";
import BookAChef from "../components/landing-page/book-a-chef";
import SelectChef from "../components/landing-page/select-chef";
import HowItWorks from "../components/landing-page/how-it-works";
import ExploreChefs from "../components/landing-page/explore-chefs";
import TrendingChefs from "../components/landing-page/trending-chefs";
import SuccessfulBookings from "../components/landing-page/successful-bookings";
import MobileAd from "../components/landing-page/mobile-ad";

export default function Home() {
  const [coordinates, setCoordinates] = useState({});

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });

        setCoordinates({
          lat: position.coords.latitude || "37.36605",
          long: position.coords.longitude || "-121.82718",
        });
      });
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Chef Joy</title>
        <meta name="description" content="Chef Joy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero coordinates={coordinates} />
        <BookAChef />
        <SelectChef />
        <HowItWorks />
        <ExploreChefs coordinates={coordinates} />
        <TrendingChefs />
        <SuccessfulBookings />
        {/* <MobileAd /> */}
      </main>
    </div>
  );
}
