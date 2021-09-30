const getTime = (date) => {
  const splitTime = date.toString().split(" ")[4].split(":");
  return `${splitTime[0]}:${splitTime[1]}`;
};

export default getTime;
