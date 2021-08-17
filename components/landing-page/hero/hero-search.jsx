import { useRouter } from "next/router";
import SearchIcon from "./search-icon.svg";

function HeroSearch() {
  const router = useRouter();

  return (
    <div className="relative flex flex-col">
      <div
        className="flex md:flex-row flex-col rounded-lg w-full"
        style={{ boxShadow: "0px 7px 64px rgba(0, 0, 0, 0.1)" }}
      >
        <div
          className="flex md:border-b-0 border-b md:w-6/12"
          style={{ height: 70 }}
        >
          <div className="flex flex-col justify-center border-r h-full px-5 w-6/12">
            <select className="md:text-base text-sm focus:outline-none appearance-none">
              <option value="">City</option>
            </select>
          </div>

          <div className="flex flex-col justify-center md:border-r px-5 w-6/12">
            <input
              type="date"
              placeholder="Date / Time"
              className="md:text-base text-sm focus:outline-none appearance-none"
            />
          </div>
        </div>

        <div
          className="flex flex-col justify-center md:border-b-0 border-b md:border-r px-5 md:w-2/12"
          style={{ height: 70 }}
        >
          <select
            name=""
            id=""
            className="md:text-base text-sm focus:outline-none appearance-none"
          >
            <option value="">Party</option>
          </select>
        </div>

        <div
          className="flex flex-col md:flex-row justify-center px-5"
          style={{ height: 70 }}
        >
          <input
            type="search"
            placeholder="Search For Cuisines, Chef"
            className="text-sm focus:outline-none"
          />
        </div>
      </div>

      <button
        className="md:absolute md:top-2/4 md:right-2.5 md:transform md:-translate-y-2/4 flex items-center justify-center bg-black text-white py-4 px-8 font-medium md:mt-0 mt-4"
        style={{
          borderRadius: 8,
        }}
        onClick={() => router.push("/chef/search")}
      >
        <SearchIcon
          className="mr-2 font-medium"
          style={{ width: 18, height: 18 }}
        />
        Search
      </button>
    </div>
  );
}

export default HeroSearch;
