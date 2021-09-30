export const transformCities = (response) => {
  if (Array.isArray(response)) return response;
  return response.data.map((item) => ({
    name: item.name,
    id: item._id,
  }));
};
