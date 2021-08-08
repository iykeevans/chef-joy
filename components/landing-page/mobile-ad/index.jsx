import Image from "next/image";
import useDimensions from "react-cool-dimensions";
import AppleBadge from "./apple-badge";
import GoogleBadge from "./google-badge";

function MobileAd() {
  const { observe, width } = useDimensions();
  return (
    <section
      className="w-11/12 mx-auto mt-44 bg-red-600 md:py-0 py-8"
      style={{ borderRadius: 16 }}
    >
      <div className="flex md:flex-row flex-col items-center w-11/12 mx-auto">
        <div className="md:w-6/12 md:mt-8">
          <div className="relative" style={{ height: 400, width: "100%" }}>
            <Image
              src="/assets/images/landing-page/mobile-ad/ad-image.png"
              layout="fill"
              objectFit="cover"
              objectPosition="0 -50%"
            />
          </div>
        </div>

        <div className="md:w-6/12 text-white md:text-left text-center">
          <h2 className="font-semibold md:text-4xl text-2xl md:w-10/12 mb-4">
            Get Best Experience with Chef joy App.
          </h2>

          <p className="md:text-lg md:w-8/12 mb-8">
            Our mobile app makes it easy to manage your food anywhere.
          </p>

          <div class="flex md:flex-row flex-col items-center">
            <GoogleBadge className="md:mr-4 md:mb-0 mb-4" />

            <AppleBadge />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileAd;
