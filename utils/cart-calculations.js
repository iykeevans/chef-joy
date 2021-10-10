import { minutesToHours } from "date-fns";
import getDishMinutes from "./get-dish-minutes";

export const getTotalMinutes = (cart) => {
  let totalTime = 0;

  cart.forEach((item) => {
    const { count, cookingInfo } = item;

    const dishMinutes = getDishMinutes(cookingInfo, count);

    totalTime += Number(dishMinutes);
  });

  return minutesToHours(totalTime)
    ? {
        rawVal: minutesToHours(totalTime),
        formattedVal: `${minutesToHours(totalTime)} Hours`,
      }
    : { rawVal: totalTime, formattedVal: `${totalTime} Minutes` };
};

export const getTotalAmount = (cart, cartCount) => {
  let totalAmount = 0;
  if (!cart || !cart.length) return 0;

  return (
    (getTotalMinutes(cart).rawVal * 35 +
      Number(cart[0]?.price.tax_rate) +
      Number(cart[0]?.price.platform_fee)) *
    cartCount
  );
};
