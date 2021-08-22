import { useRouter } from "next/router";
import { DateTimePicker } from "@material-ui/pickers";
import styled from "styled-components";
import ChSelectField from "../../base/ch-select-field";
import SearchIcon from "./search-icon.svg";
import ChTextField from "../../base/ch-text-field";

function HeroSearch() {
  const router = useRouter();

  const handleDateChange = () => {};
  const selectedDate = null;

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
            <input
              type="text"
              placeholder="City"
              className={`md:text-base text-sm focus:outline-none appearance-none`}
            />
          </div>

          <div className="flex flex-col justify-center md:border-r px-5 w-6/12">
            <StyledDatePicker
              className="md:text-base text-sm focus:outline-none appearance-none"
              value={selectedDate}
              placeholder="Date / Time"
              onChange={handleDateChange}
            />
          </div>
        </div>

        <div
          className="flex flex-col justify-center md:border-b-0 border-b md:border-r px-5 md:w-2/12"
          style={{ height: 70 }}
        >
          <ChSelectField defaultOption={{ name: "Party", value: "" }} />
        </div>

        <div
          className="flex flex-col md:flex-row justify-center px-5"
          style={{ height: 70 }}
        >
          {/* <input
            type="search"
            placeholder="Search for Cuisine, Dishes, Chefs.."
            className="text-sm focus:outline-none"
          /> */}
          <ChTextField placeholder="Search for Cuisine, Dishes, Chefs.." />
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

const StyledDatePicker = styled(DateTimePicker)`
  /* default */
  .MuiInput-underline:before {
    border-bottom: none;
  }
  /* hover (double-ampersand needed for specificity reasons. */
  && .MuiInput-underline:hover:before {
    border-bottom: none;
  }
  /* focused */
  .MuiInput-underline:after {
    border-bottom: none;
  }
`;

export default HeroSearch;
