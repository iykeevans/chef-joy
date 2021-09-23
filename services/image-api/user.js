import apiClient from "..";

/**
 * Upload user single image.
 *
 * @function
 * @return {Promise<Object>}
 */
export const uploadUserSingleImage = async (payload) => {
  try {
    const data = await apiClient
      .put("pub/upload-image", { body: payload })
      .json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
/**
 * Upload user bulk image.
 *
 * @function
 * @return {Promise<Object>}
 */
export const uploadUserBulkImage = async () => {
  try {
    const data = await apiClient.post("pub/upload-bulk-image").json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

/**
 * Remove uploaded user image.
 *
 * @function
 * @return {Promise<Object>}
 */
export const removeUploadedUserImage = async (id) => {
  try {
    const data = await apiClient.delete(`pub/remove-image/${id}`).json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
