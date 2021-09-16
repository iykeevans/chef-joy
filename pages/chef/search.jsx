import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "nextjs-toast";

import ChefCard from "../../components/chef-card";

import Dinner from "../../components/dinner.svg";
import Champagne from "../../components/champagne-glass.svg";
import Close from "../../components/close.svg";
import Modal from "../../components/modal/searchModal";

import { searchChef } from "../../services/chef-api";
import Empty from "../../components/empty";
import { IMAGE_URL } from "../../constants/enviroment-vars";

function Search() {
  const searchPayload = useSelector((state) => state.searchPayload);
  const snackbar = useSnackbar();

  const [chefs, setChefs] = useState([
    {
      name: "Beverly James",
      stars: 4.5,
      specialty: "indian",
      time: "5pm to 8pm",
      image: "/assets/images/chefs/beverly.jpg",
      link: "/chef/profile",
    },
    {
      name: "Kathy Hudson",
      stars: 4.5,
      specialty: "chinese, italian, thai",
      time: "5pm to 8pm",
      image: "/assets/images/chefs/kathy.jpg",
      link: "/chef/profile",
    },
    {
      name: "Louis Ford",
      stars: 4.5,
      specialty: "indian",
      time: "5pm to 8pm",
      image: "/assets/images/chefs/louis.jpg",
      link: "/chef/profile",
    },
  ]);

  const [show, setShow] = useState(false);
  const [currentTab, setCurrentTab] = useState(1);

  const transformSearchResult = ({ data }) => {
    return data.getChef.map((item) => ({
      id: item._id,
      name: `${item.first_name} ${item.last_name}`,
      stars: "4.2" || item.chef_review[0].rate_chef,
      cuisine: item.chef_cuisines.map((data) => data.name).join(", "),
      time: `${item.availability.routine_schedule[0].start_time} to ${item.availability.routine_schedule[0].end_time}`,
      profilePic: `${IMAGE_URL}${item.profile_pic}`,
      link: `/chef/profile/${item._id}`,
    }));
  };

  useEffect(() => {
    searchChef(searchPayload)
      .then((res) => {
        setChefs(transformSearchResult(res));
      })
      .catch((err) => {
        if (err.message.includes("404")) {
          setChefs([]);
          snackbar.showMessage("No chefs found", "error", "filled");
        }
        console.log("-------->", err.message);
        snackbar.showMessage(
          "An error occured while fetching chefs probably a network error",
          "error",
          "filled"
        );
      });
  }, [searchPayload, snackbar]);

  return (
    <>
      <div
        className="flex items-center fixed w-full bg-white z-10 border-b"
        style={{ top: 80 }}
      >
        <div className="flex items-center md:w-11/12 w-full md:mx-auto">
          <div
            className={`md:mr-5 flex justify-center items-center md:w-48 w-1/2 ${
              currentTab === 1 ? "border-b-2 border-red-500" : ""
            } py-2 cursor-pointer`}
            onClick={() => setCurrentTab(1)}
          >
            <Champagne className="h-7" />
            <div className="flex flex-col ml-3">
              <span className="font-medium">Party</span>
              <span className="text-xs text-gray-500">{0} Chefs</span>
            </div>
          </div>

          <div
            className={`flex justify-center items-center md:w-48 w-1/2 ${
              currentTab === 2 ? "border-b-2 border-red-500" : ""
            } py-2 cursor-pointer`}
            onClick={() => setCurrentTab(2)}
          >
            <Dinner className="h-7" />
            <div className="flex flex-col ml-3">
              <span className="font-medium">Meals</span>
              <span className="text-xs text-gray-500">{0} Chefs</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto pt-32">
        {chefs.length ? (
          <div className="flex md:flex-row flex-col flex-col-reverse md:items-center md:justify-between pt-8 md:pb-8 pb-5 ">
            <h2 className="md:text-2xl text-lg font-semibold">
              Chefs Near {"San Diego"}
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
            <Empty placeholder="Chef's" city="San Diego" />
          </div>
        )}
      </div>

      <Modal onClose={() => setShow(false)} show={show} />
    </>
  );
}

export default Search;
