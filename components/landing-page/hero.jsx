import { useRouter } from "next/router";

function Hero() {
  const router = useRouter();

  return (
    <section className="w-11/12 mx-auto h-screen pt-16">
      <div className="flex flex-col md:flex-row md:flex-row-reverse items-center w-full">
        <div className="md:w-6/12 flex md:justify-end justify-center">
          <img
            src="assets/images/hero-image.png"
            alt="chef"
            style={{ width: 500 }}
          />
        </div>

        <div className="md:w-6/12 text-center md:text-left">
          <h1 className="font-bold md:text-5xl text-3xl  md:w-10/12">
            Book Your Favorite Chef With Lovely Menu
          </h1>

          <p className="text-lg md:w-8/12 mt-6 text-gray-500">
            Book the best chefs nearby for your next party or daily meals.
          </p>
        </div>
      </div>

      <div
        className="flex flex-wrap"
        style={{
          boxShadow: "0px 7px 64px rgba(0, 0, 0, 0.10)",
          borderRadius: 10,
          height: 70,
        }}
      >
        <div className="flex flex-col justify-center border-r h-full px-5 md:w-3/12 w-6/12">
          {/* <label htmlFor="">City</label> */}
          <input type="text" placeholder="City" />
        </div>

        <div className="flex flex-col justify-center md:border-r px-5 md:w-3/12 w-6/12">
          {/* <label htmlFor="">Date & Time</label> */}
          <input type="datetime" placeholder="Date / Time" />
        </div>

        <div className="flex flex-col justify-center md:border-r px-5 md:w-2/12 w-full">
          {/* <label htmlFor="">Type</label> */}
          <select name="" id="">
            <option value="">Party</option>
          </select>
        </div>

        <div className="flex flex-col md:flex-row items-center px-5 w-4/12 relative">
          <input type="search" placeholder="Search For Cuisines, Chef" />
          <button
            className="md:absolute static bg-black text-white py-4 px-10 font-medium"
            style={{ right: 8, borderRadius: 8 }}
            onClick={() => router.push("/chef/search")}
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
