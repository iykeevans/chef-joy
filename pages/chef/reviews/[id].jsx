import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import ReviewMainSection from "../../../components/reviews/main-section";
import ReviewTopSection from "../../../components/reviews/top-section";
import ReviewModal from "../../../components/modals/review-modal";

import useChef from "../../../custom-hooks/use-chef";
import { fetchUserChefReviews } from "../../../services/review-api/user";

function Reviews() {
  const { chef } = useChef();
  const router = useRouter();
  const [reviews, setReviews] = useState();
  const [showReviewModal, setShowReviewModal] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      fetchUserChefReviews(router.query.id)
        .then((response) => {
          setReviews(response);
        })
        .catch((err) => console.log(err));
    }
  }, [router]);

  return (
    <div className="pt-32 w-11/12 mx-auto">
      <ReviewModal
        chefId={router.query.id}
        show={showReviewModal}
        setShowReviewModal={setShowReviewModal}
      />

      <ReviewTopSection
        chef={chef}
        totalReviews={reviews?.length}
        setShowReviewModal={setShowReviewModal}
      />

      {reviews?.map((review) => (
        <ReviewMainSection
          key={review.id}
          description={review.description}
          rating={review.rating}
          images={review.images}
        />
      ))}
    </div>
  );
}

export default Reviews;
