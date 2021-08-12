import React from "react";
import Star from "../svg/star";
import { ReviewData } from "./review data";

function Main(props) {
  const [Reviewdata] = ReviewData;
  const { match } = props;

  let contenttArray = [];
  let idd = 1;

  //   for (const [key, value] of Object.entries(ReviewData.content[`${idd}`])) {
  //     contenttArray.push({
  //       property: key,
  //       value: value,
  //     });
  //   }

  const ReviewRows = () => (
    <div className="w-full p-4 h-100 shadoe-md border">
      <span className="flex justify-between w-32">
        <Star /> <Star /> <Star /> <Star /> <Star />
      </span>

      <p className="font-medium mt-4">{Reviewdata.content[0].word}</p>

      <div className="flex mt-4 h-12 ">
        <small className="rounded-full mt-2 h-9 w-9 bg-gray-300"></small>
        <div className="block h-10 ml-3 mt-1">
          <p className="font-extralight text-xs mt-1">
            {Reviewdata.content[0].name}
          </p>
          <div className="flex mt-1 space-x-2">
            <small className="rounded-full mt-0.5 h-3 w-3 bg-gray-300"></small>
            <a className=" text-xs ">{Reviewdata.content[0].area}</a>
          </div>
        </div>
      </div>

      <div className="flex w-100 h-30 space-x-2 py-3 ">
        <div className="w-24 h-16 border rounded-md bg-red-200"></div>
        <div className="w-24 h-16 border rounded-md bg-red-200"></div>
        <div className="w-24 h-16 border rounded-md bg-red-200"></div>
      </div>
    </div>
  );

  return (
    <>
      <table>
        <tr className="w-full">
          <ReviewRows />
        </tr>
      </table>
    </>
  );
}

export default Main;
