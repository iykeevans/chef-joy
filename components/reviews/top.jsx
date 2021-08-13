import React from "react";
import Stargazer from "../stargazer";
import { ReviewData } from "./review data";
import Styles from "../../pages/styles.module.css"

function Top ({}) {
    const [Reviewdata] = ReviewData
    return <div>
    <div className=" w-100 h-100 block pb-4 " >

            <span className="text-black">
              <small>Home <span>/</span> </small>
              <small>94601  <span>/</span> </small>
              <small>Party  <span>/</span> </small>
              <small className="text-gray-400">{Reviewdata.name}</small>
            </span>

        <div className={Styles.media}>

            <div className="flex">
                  <div className=" rounded-full w-20 bg-red-500 h-20"></div>
                  <div className="inline-block ml-4 pt-1.5">
                    <h1 className="font-bold text-xl">{Reviewdata.name}</h1>
                      <div className="flex h-8 mt-2 space-x-3">
                          <small className="rounded-full h-8 w-8 border bg-gray-300"></small>
                          <a className="text-xs mt-2">{Reviewdata.area}</a>
                          <a className="text-red-600 text-xs mt-2 underline">{`${Reviewdata.reviewNo} Reviews`}</a>
                          <Stargazer stars={45}    />
                      </div>
                  </div>
            </div>

            <div className="border text-center   ">
                <button
                    className="border border-black py-3 px-7 mt-6 font-medium md:text-base text-sm"
                    style={{ borderRadius: 8 }}
                  >
                    Back to profile
                  </button>
                <button
                    className="bg-black text-white py-3 px-7 mt-6 ml-5 font-medium md:text-base text-sm"
                    style={{ borderRadius: 8 }}
                  >
                    Add review
                  </button>
            </div>

        </div>
    </div>
    </div>
};

export default Top