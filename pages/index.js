import Head from "next/head";

import Hero from "../components/landing-page/hero";
import BookAChef from "../components/landing-page/book-a-chef";
import SelectChef from "../components/landing-page/select-chef";
import HowItWorks from "../components/landing-page/how-it-works";
import ExploreChefs from "../components/landing-page/explore-chefs";
import TrendingChefs from "../components/landing-page/trending-chefs";
import SuccessfulBookings from "../components/landing-page/successful-bookings";
import MobileAd from "../components/landing-page/mobile-ad";

// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chef Joy</title>
        <meta name="description" content="Chef Joy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <BookAChef />
        <SelectChef />
        <HowItWorks />
        <ExploreChefs />
        <TrendingChefs />
        <SuccessfulBookings />
        <MobileAd />
      </main>
    </div>
  );
}
