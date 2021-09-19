import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDay } from "date-fns";
import { DateTimePicker } from "@material-ui/pickers";
import styled from "styled-components";

import useDebounce from "../../../../custom-hooks/use-debounce";
import { fetchCity } from "../../../../services/chef-api";
import ChDropdown from "../../../base/ch-dropdown";

const transformCity = (response) => {
  if (Array.isArray(response)) return response;
  return response.data.map((item) => ({
    name: item.name,
    id: item._id,
  }));
};

function SearchBar() {
  // state
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");
  const [day, setDay] = useState("");

  // hooks
  const debouncedValue = useDebounce(searchValue);
  const dispatch = useDispatch();
  const searchPayload = useSelector((state) => state.searchPayload);

  useEffect(() => {
    fetchCity({ name: debouncedValue })
      .then((res) => {
        setLoading(false);
        setCities(transformCity(res));
        console.log(transformCity(res));
      })
      .catch((err) => console.log(err));
  }, [debouncedValue]);

  const handleDateChange = (event) => {
    const date = event.toString();
    const splitTime = date.split(" ")[4].split(":");
    setTime(`${splitTime[0]}:${splitTime[1]}`);
    setDay(getDay(new Date(date)));
    setDate(event);
  };

  const handleSearch = () => {
    const payload = {
      city: selectedCity.id,
      day,
      time,
      cuisine_category: searchPayload.cuisine_category || 1,
      name: "",
    };

    dispatch({ type: "SET_SEARCH_PAYLOAD", payload });
  };

  return (
    <div
      className="hidden md:flex items-center ml-16 rounded px-4 py-2"
      style={{ border: "1px solid #eee" }}
    >
      <div
        className="flex flex-col w-44 pr-4"
        style={{ borderRight: "1px solid #eee" }}
      >
        <span className="text-xs text-gray-400 mb-1.5">City</span>

        <ChDropdown
          loading={loading}
          options={cities}
          handleOnClick={(selected) => {
            setSearchValue(selected.name);
            setSelectedCity(selected);
          }}
        >
          <input
            className="text-sm"
            placeholder="San Diego"
            value={searchValue}
            onChange={({ target }) => {
              if (target.value) {
                setLoading(true);
              } else {
                setLoading(false);
                setSelectedCity({ name: "", id: "" });
              }
              setSearchValue(target.value);
            }}
          />
        </ChDropdown>
      </div>

      <div
        className="flex flex-col ml-5 w-44"
        style={{ borderRight: "1px solid #eee" }}
      >
        <span className="text-xs text-gray-400 mb-1.5">Date & Time</span>

        <StyledDatePicker
          className="text-sm focus:outline-none appearance-none"
          value={date}
          placeholder="Date / Time"
          onChange={handleDateChange}
        />
      </div>

      <div className="pl-4">
        <button
          className="flex items-center justify-center bg-red-500 text-white w-6 h-6 rounded-full"
          onClick={handleSearch}
        >
          {">"}
        </button>
      </div>
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

  .MuiInputBase-input {
    padding: unset;
  }

  .MuiInputBase-root {
    font-size: unset;
    font-family: inherit;
  }
`;

export default SearchBar;
