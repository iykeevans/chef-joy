import { useState, useEffect } from "react";
import useCart from "./use-cart";

export default function useSyncDish(cuisineId, dishes) {
  const [state, setState] = useState([]);
  const { store, mutateCart, cartCount } = useCart();

  // useEffect(() => {
  //   const storeItem = store.find((item) => item.id === cusineId);

  //   if (storeItem) {
  //     const tempState = [];

  //     storeItem.data.forEach((item) => {
  //       const dish = dishes.find((dish) => dish.id === item.id);

  //       if (dish) {
  //         const clonedDish = { ...dish };
  //         clonedDish.count = item.count;
  //         tempState.push(clonedDish);
  //       }
  //     });

  //     setState(tempState);
  //   } else {
  //     setState([...dishes]);
  //   }
  // }, [cusineId, dishes, store]);

  useEffect(() => {
    const storeItem = store.find((item) => item.id === cuisineId);
    const clonedDishes = JSON.parse(JSON.stringify([...dishes]));

    if (storeItem) {
      storeItem.data.forEach((item) => {
        const dishIndex = dishes.findIndex((dish) => dish.id === item.id);

        if (dishIndex >= 0) {
          clonedDishes[dishIndex].count = item.count;
        }
      });
    }

    setState(clonedDishes);
  }, [dishes, store, cuisineId]);

  return { syncedDishes: state, mutateCart, cartCount };
}
