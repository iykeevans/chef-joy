import React from "react";
import Stargazer from "../../components/stargazer";
import Star from "../../components/svg/star";
import Top from "../../components/reviews/top";
import Main from "../../components/reviews/main";
import { ReviewData } from "../../components/reviews/review data";

function Reviews({ chef, ...rest }) {
  let newArray = ReviewData.map((item) => ({
    name: item.name,
    area: item.area,
    reviewNo: item.reviewNo,
  }));
  return (
    <div className="container pt-32 w-11/12 mx-auto">
      <Top />
      <Main data={newArray} />
    </div>
  );
}

export default Reviews;
