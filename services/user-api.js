import apiClient from ".";

/**
 * fetch chef.profile
 *
 * @function
 * @return {Promise<Object>} chef object
 */
export const fetchUserProfile = async () => {
  try {
    const data = await apiClient.get("user/api/consumer/get-profile").json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
