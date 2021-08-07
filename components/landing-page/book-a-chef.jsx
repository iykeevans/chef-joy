import Image from "next/image";

function BookAChef() {
  return (
    <section className="w-9/12 mx-auto">
      <div className="flex md:flex-row flex-col items-center mb-44">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="font-bold text-4xl md:w-11/12">
            Book A Chef For Your Next House Party.
          </h2>

          <p className="text-gray-500 text-lg mt-7 md:w-8/12">
            Attend to your guests and make them feel at home.
          </p>

          <button
            className="bg-black text-white py-3 px-7 mt-6 font-medium"
            style={{ borderRadius: 8 }}
          >
            Book A Chef
          </button>
        </div>

        <div className="md:w-1/2 flex justify-end">
          <div className="relative" style={{ width: 400 }}>
            <Image
              src="/assets/images/landing-page/book-a-chef/book-chef-1.png"
              alt="book-chef"
              layout="fill"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mb-44">
        <div className="md:w-5/12">
          <div className="relative" style={{ width: 400 }}>
            <Image
              src="/assets/images/landing-page/book-a-chef/book-chef-1.png"
              alt="book-chef"
              layout="fill"
            />
          </div>
        </div>

        <div className="md:w-5/12 text-center md:text-left">
          <h2 className="font-bold text-4xl">
            Schedule Chefs For Your Daily Meals.
          </h2>

          <p className="text-gray-500 text-lg mt-6 md:w-8/12">
            Don&apos;t worry about the food, we got this.
          </p>

          <button
            className="bg-black text-white py-3 px-7 rounded mt-6 font-medium"
            style={{ borderRadius: 8 }}
          >
            Book A Chef
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="font-bold text-4xl md:w-9/12">
            All This Starts At $30/Hour
          </h2>

          <p className="text-gray-500 text-lg mt-7 md:w-8/12">
            Cheaper than ordering from a restaurant.
          </p>

          <button
            className="bg-black text-white py-3 px-7 rounded mt-6 font-medium"
            style={{ borderRadius: 8 }}
          >
            Book A Chef
          </button>
        </div>

        <div className="md:w-1/2 flex justify-end">
          <div className="relative" style={{ width: 400 }}>
            <Image
              src="/assets/images/landing-page/book-a-chef/book-chef-1.png"
              alt="book-chef"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookAChef;
