import React, { useState } from "react";
import styled from "styled-components";
import { addUserChefReviews } from "../../services/review-api/user";

import Modal from "../modal";

import Star from "../svg/star.svg";

function ReviewModal({ chefId, show, setShowReviewModal }) {
  const stars = [1, 2, 3, 4, 5];
  const [review, setReview] = useState({
    chef_Id: "",
    description: "Thank you for your amazing service . Thank you lot chefjoy ",
    rate_chef: 1,
    images: ["57f146427d0e277f9e14.jpeg", "1626161829257.jpg"],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleReview = async () => {
    try {
      setIsSubmitting(true);
      await addUserChefReviews({ ...review, chef_Id: chefId });
      setShowReviewModal(false);
    } catch (err) {
      console.log(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const uploadImage = () => {};

  return (
    <Modal show={show} onClose={() => setShowReviewModal(false)}>
      <div className="absolute z-30 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white md:w-3/12 w-11/12 rounded-lg py-5 px-6">
        <div className="flex justify-between mb-3">
          <h1 className="text-black text-2xl font-bold ">Add Review</h1>

          <button
            className="flex items-center justify-center h-6 w-6 bg-gray-200 rounded-full"
            onClick={() => setShowReviewModal(false)}
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
              />
            </svg>
          </button>
        </div>

        <p className="mb-2">Lorem ipsum dolor?</p>

        <div className="flex mb-6">
          {stars.map((star) => (
            <button
              key={star}
              className="mr-2.5"
              onClick={() => setReview({ ...review, rate_chef: star })}
            >
              <StyledStar
                className="h-6 w-6"
                $isActive={star <= review.rate_chef}
              />
            </button>
          ))}
        </div>

        <textarea
          className="border w-full rounded-lg p-3 h-32 mb-4"
          placeholder="Description"
          value={review.description}
          onChange={({ target }) =>
            setReview({ ...review, description: target.value })
          }
        />

        <div className="mb-6">
          <p className="mb-2">Upload Gallery Pictures</p>

          <div className="flex" style={{ overflowX: "auto" }}>
            <div
              className="rounded-lg mr-3 flex-none flex items-center justify-center border border-gray-300 border-dashed"
              style={{ width: "70px", height: "60px" }}
            >
              <svg className="h-7 w-7" viewBox="0 0 24 24">
                <path
                  fill="red"
                  d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                />
              </svg>
            </div>

            <div
              className="bg-gray-300 relative rounded-lg mr-3 flex-none"
              style={{ width: "70px", height: "60px" }}
            >
              <button className="absolute right-1 top-1 h-4 w-4 bg-white rounded-full flex items-center justify-center">
                <svg className="h-3 w-3" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className={`py-3 px-5 rounded-lg ${
              isSubmitting ? "bg-gray-200 text-gray-400" : "bg-black text-white"
            } `}
            disabled={isSubmitting}
            onClick={handleReview}
          >
            {isSubmitting ? "Submitting..." : "Post Review"}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ReviewModal;

const StyledStar = styled(Star)`
  fill: #ccc;
  ${(props) => props.$isActive && "fill: #FFC107"};

  &:hover {
    fill: #ffc107;
  }
`;
