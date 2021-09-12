import { useState, useEffect, useRef } from "react";
import debounce from "lodash.debounce";
import { useRouter } from "next/router";
import { DateTimePicker } from "@material-ui/pickers";
import styled, { keyframes } from "styled-components";
import ChSelectField from "../../base/ch-select-field";
import SearchIcon from "./search-icon.svg";
import { useOuterClick } from "../../../utils/useOuterClicks";
import {
  searchChef,
  fetchCity,
  fetchDishCuisineAndChef,
} from "../../../services/chef-api";
import { getDay } from "date-fns";

const fetchData = async (query, api, cb) => {
  const { data } = await api({ name: query });
  cb(data);
};

const debouncedFetchData = debounce((query, api, cb) => {
  fetchData(query, api, cb);
}, 500);

function HeroSearch() {
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);
  const dropdownRef = useRef(null);
  const [cuisine, setCuisine] = useState("");
  const [cuisines, setCuisines] = useState([]);
  const [openCityMenu, setOpenCityMenu] = useState(false);
  const [openCuisineMenu, setOpenCuisineMenu] = useState(false);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");
  const [day, setDay] = useState(null);
  const [bookingType, setBookingType] = useState("");
  const router = useRouter();

  const handleDateChange = (e) => {
    const date = e.toString();
    const splitTime = date.split(" ")[4].split(":");
    setTime(`${splitTime[0]}:${splitTime[1]}`);
    setDay(getDay(new Date(date)));
    setDate(e);
  };

  const showData = (returnType, data, id) => {
    if (returnType === "name") {
      const findData = data.find((item) => item._id === id);
      return findData.name;
    }

    if (returnType === "id") {
      const findData = data.find((item) => item.name === id);
      return findData._id;
    }
  };

  useEffect(() => {
    debouncedFetchData(city, fetchCity, (res) => {
      if (res) setCities(res);
      else setCities([]);
    });
  }, [city]);

  useEffect(() => {
    if (cuisine) {
      debouncedFetchData(cuisine, fetchDishCuisineAndChef, (res) => {
        if (res) setCuisines(transformDishCuisineAndChef(res));
        else setCuisines([]);
      });
    }
  }, [cuisine]);

  const handleSelectedCityResult = (id) => {
    setOpenCityMenu(false);
    setCity(showData("name", cities, id));
  };
  const handleSelectedCuisineResult = (id) => {
    setOpenCuisineMenu(false);
    setCuisine(showData("name", cuisines, id));
  };

  useOuterClick(dropdownRef, () => {
    if (openCityMenu) {
      setOpenCityMenu(false);
    }
    if (openCuisineMenu) setOpenCuisineMenu(false);
  });

  const handleSearch = async () => {
    const payload = {
      city: showData("id", cities, city),
      time,
      day,
      name: showData("id", cuisines, cuisine),
      type: bookingType,
      cuisine_category: 1,
    };
    try {
      const { data } = await searchChef(payload);
      console.log({ data });
    } catch (error) {
      console.log(error);
    }
  };
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
          <div className="w-6/12 flex flex-col justify-center border-r">
            <div
              ref={dropdownRef}
              className="flex flex-col justify-center h-full px-5 w-6/12"
            >
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                  setOpenCityMenu(true);
                }}
                className={`md:text-base text-sm focus:outline-none appearance-none`}
              />
            </div>
            {openCityMenu && (
              <DropDownMenu
                options={cities}
                width="25%"
                handleOnClick={handleSelectedCityResult}
              />
            )}
          </div>

          <div className="flex flex-col justify-center md:border-r px-5 w-6/12">
            <StyledDatePicker
              className="md:text-base text-sm focus:outline-none appearance-none"
              value={date}
              placeholder="Date / Time"
              onChange={handleDateChange}
            />
          </div>
        </div>

        <div
          className="flex flex-col justify-center md:border-b-0 border-b md:border-r px-5 md:w-2/12"
          style={{ height: 70 }}
        >
          <ChSelectField
            options={[
              { name: "Party", value: "party" },
              { name: "Meals", value: "meals" },
            ]}
            value={bookingType}
            handleChange={({ target }) => setBookingType(target.value)}
          />
        </div>
        <div>
          <div
            ref={dropdownRef}
            className="flex flex-col md:flex-row justify-center px-5"
            style={{ height: 70 }}
          >
            <input
              type="search"
              placeholder="Search for Cuisine, Dishes, Chefs.."
              value={cuisine}
              onChange={(e) => {
                setCuisine(e.target.value), setOpenCuisineMenu(true);
              }}
              className="text-sm focus:outline-none"
            />
          </div>
          {openCuisineMenu && (
            <DropDownMenu
              options={cuisines}
              width="25%"
              handleOnClick={handleSelectedCuisineResult}
            />
          )}
        </div>
      </div>

      <button
        className="md:absolute md:top-2/4 md:right-2.5 md:transform md:-translate-y-2/4 flex items-center justify-center bg-black text-white py-4 px-8 font-medium md:mt-0 mt-4"
        style={{
          borderRadius: 8,
        }}
        onClick={handleSearch}
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

const DropDownMenu = ({ options, width, handleOnClick }) => {
  return (
    <StyledSection style={{ width }}>
      {options.map((option) => (
        <StyledList
          tabIndex={option._id}
          key={option._id}
          onClick={() => handleOnClick(option._id)}
        >
          {option.name}
          <span style={{ fontSize: "10px" }}>
            {" "}
            {option.type ? `(${option.type})` : ""}
          </span>
        </StyledList>
      ))}
    </StyledSection>
  );
};
const transformDishCuisineAndChef = (data) => {
  const { Dish, Cuisine, Chef } = data;

  const modifiedDish = Dish.length
    ? Dish.map((item) => ({
        _id: item._id,
        name: item.name,
        type: "dish",
      }))
    : [];

  const modifiedCuisine = Cuisine.length
    ? Cuisine.map((item) => ({
        _id: item._id,
        name: item.name,
        type: "cuisine",
      }))
    : [];

  const modifiedChef = Chef.length
    ? Chef.map((item) => ({
        _id: item._id,
        name: item.first_name,
        type: "chef",
      }))
    : [];

  return [...modifiedDish, ...modifiedCuisine, ...modifiedChef];
};
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
const menu = keyframes`
    from {
      transform: translate3d(0, 30px, 0);
    }
    to {
      transform: translate3d(0, 20px, 0);
    }
  `;
const StyledSection = styled.div`
  border-radius: 5px;
  z-index: 0;
  margin-top: 0.25rem;
  position: absolute;
  top: 50px;
  max-height: 256px;
  overflow-y: auto;
  padding-left: 18px;
  padding-right: 18px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(45, 49, 66, 0.06), 0px 1px 3px rgba(8, 7, 8, 0.1);
  animation: ${menu} 0.3s ease forwards;
`;
const StyledList = styled.div`
  padding: 5px;
  &:hover {
    color: #ffffff;
    background: #e23744;
    cursor: pointer;
  }
`;

export default HeroSearch;
