import React from "react";
import Image from "next/image";
import Link from "next/link";

import Stargazer from "../stargazer";
import Styles from "../../pages/styles.module.css";
import { IMAGE_URL } from "../../constants/enviroment-vars";

function ReviewTopSection({ chef, totalReviews = 0, setShowReviewModal }) {
  return (
    <div>
      <div className=" w-100 h-100 block pb-4 ">
        <span className="text-black">
          <small>
            Home <span>/</span>{" "}
          </small>

          <small>
            94601 <span>/</span>{" "}
          </small>

          <small>
            Party <span>/</span>{" "}
          </small>

          <small className="text-gray-400 capitalize">{chef?.fullName}</small>
        </span>

        <div className={Styles.media}>
          <div className="flex">
            <div className="relative rounded-full w-20 h-20 bg-gray-200">
              <Image
                src={`${IMAGE_URL}${chef.profilePic}`}
                className="rounded-full"
                alt="chef picture"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="inline-block ml-4 pt-1.5">
              <h1 className="font-bold text-xl capitalize">{chef?.fullName}</h1>

              <div className="flex h-8 mt-2 space-x-3">
                <small className="rounded-full h-8 w-8 border bg-gray-300"></small>

                <a className="text-xs mt-2">
                  {chef?.city?.name} {chef?.city?.stateCode}
                </a>

                <a className="text-red-600 text-xs mt-2 underline">
                  {totalReviews} Reviews
                </a>
                <Stargazer stars={chef?.rating?.toFixed(1)} />
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href={`/chef/profile/${chef.id}`}>
              <a className="border border-black py-3 px-7 mt-6 font-medium md:text-base text-sm rounded-lg">
                Back to profile
              </a>
            </Link>

            <button
              className="bg-black text-white py-3 px-7 mt-6 ml-5 font-medium md:text-base text-sm rounded-lg"
              onClick={() => setShowReviewModal(true)}
            >
              Add review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewTopSection;
