import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "nextjs-toast";
import FadeLoader from "react-spinners/FadeLoader";

import ChefCard from "../../components/chef-card";

import Dinner from "../../components/dinner.svg";
import Champagne from "../../components/champagne-glass.svg";
import Close from "../../components/close.svg";
import Modal from "../../components/modal/searchModal";

import { searchChef } from "../../services/chef-api";
import Empty from "../../components/empty";
import getTime from "../../utils/get-time";
import { transformSearchResult } from "../../utils/transformers/chef";
import getDay from "date-fns/getDay";

function Search() {
  // hooks
  const dispatch = useDispatch();
  const searchPayload = useSelector((state) => state.searchPayload);
  const snackbar = useSnackbar();

  // state
  const [chefs, setChefs] = useState([]);
  const [chefCount, setChefCount] = useState({ meal: 0, party: 0 });
  const [show, setShow] = useState(false);
  const [currentTab, setCurrentTab] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCurrentTab(searchPayload.cuisine_category);
  }, [searchPayload.cuisine_category]);

  useEffect(() => {
    setLoading(true);

    const payload = {};
    searchPayload.cuisine_category &&
      (payload.cuisine_category = searchPayload.cuisine_category);
    searchPayload.city &&
      (payload.city = searchPayload.city.id || searchPayload.city._id);

    if (searchPayload.date) {
      payload.time = getTime(searchPayload.date);
      payload.day = getDay(searchPayload.date);
    }

    searchChef(payload)
      .then((res) => {
        setChefs(transformSearchResult(res));
        setChefCount({ meal: res.data.mealChef, party: res.data.partyChef });
      })
      .catch((err) => {
        if (err.message.includes("404")) {
          setChefs([]);
          snackbar.showMessage("No chefs found", "error", "filled");
          return;
        }

        snackbar.showMessage(
          "An error occured while fetching chefs probably a network error",
          "error",
          "filled"
        );

        console.log(err);
      })
      .finally(() => setLoading(false));
  }, [searchPayload, snackbar]);

  if (loading)
    return (
      <div className="pt-44 flex justify-center">
        <FadeLoader color="red" />
      </div>
    );

  return (
    <>
      <div
        className="flex items-center fixed w-full bg-white z-10 border-b"
        style={{ top: 80 }}
      >
        <div className="flex items-center md:w-11/12 w-full md:mx-auto">
          <div
            className={`md:mr-5 flex justify-center items-center md:w-48 w-1/2 ${
              currentTab == 1 ? "border-b-2 border-red-500" : ""
            } py-2 cursor-pointer`}
            onClick={() =>
              dispatch({
                type: "SET_SEARCH_PAYLOAD",
                payload: { cuisine_category: 1 },
              })
            }
          >
            <Champagne className="h-7" />
            <div className="flex flex-col ml-3">
              <span className="font-medium">Party</span>
              <span className="text-xs text-gray-500">
                {chefCount.party} Chefs
              </span>
            </div>
          </div>

          <div
            className={`flex justify-center items-center md:w-48 w-1/2 ${
              currentTab == 2 ? "border-b-2 border-red-500" : ""
            } py-2 cursor-pointer`}
            onClick={() =>
              dispatch({
                type: "SET_SEARCH_PAYLOAD",
                payload: { cuisine_category: 2 },
              })
            }
          >
            <Dinner className="h-7" />
            <div className="flex flex-col ml-3">
              <span className="font-medium">Meals</span>
              <span className="text-xs text-gray-500">
                {chefCount.meal} Chefs
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto pt-32">
        {chefs.length ? (
          <div className="flex md:flex-row flex-col flex-col-reverse md:items-center md:justify-between pt-8 md:pb-8 pb-5 ">
            <h2 className="md:text-2xl text-lg font-semibold">
              Chefs Near {searchPayload.city.name || "You"}
            </h2>

            <div className="text-sm flex items-center md:mb-0 mb-5">
              <button
                onClick={() => setShow(true)}
                className="border p-2 rounded-lg mr-3 flex items-center"
              >
                <div className="bg-red-500 text-white rounded-full h-4 w-4 text-xs mr-1">
                  1
                </div>
                Filter
              </button>

              <button className="bg-black text-white p-2 rounded-lg mr-3 flex items-center">
                Popular
                <Close className="ml-2" />
              </button>

              <button className="border p-2 rounded-lg">Ratings</button>
            </div>
          </div>
        ) : null}

        {chefs.length ? (
          <div className="grid md:grid-cols-4 grid-cols-1 gap-x-8 gap-y-8">
            {chefs.map((chef, index) => (
              <ChefCard chef={chef} isVariant={true} key={index} />
            ))}
          </div>
        ) : (
          <div className="pt-16">
            <Empty
              title={`No Chef's Near ${searchPayload.city.name || "You"}`}
              subTitle="We will come to your city soon."
            />
          </div>
        )}
      </div>

      <Modal onClose={() => setShow(false)} show={show} />
    </>
  );
}

export default Search;
