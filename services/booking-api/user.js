import apiClient from "..";

/**
 * Fetch user successful bookings.
 *
 * @function
 * @return {Promise<Array>} All user addresses
 */
export const fetchUserSuccessfulBookings = async () => {
  try {
    const data = await apiClient
      .get("user/pub/get-successful-booking-post")
      .json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
