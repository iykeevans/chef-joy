const getTime = (date) => {
  return date.toString().split("T")[1].split(".")[0].slice(0, 5);
};

export default getTime;
