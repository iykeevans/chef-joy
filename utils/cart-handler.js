const cartHandler = (actionType, dishId, cuisineId, dishes, mutateCart) => {
  if (actionType === "INCREMENT" || actionType === "ADD") {
    const dishIndex = dishes.findIndex((dish) => dish.id === dishId);
    const clonedDishes = JSON.parse(JSON.stringify([...dishes]));
    clonedDishes[dishIndex].count++;

    mutateCart(cuisineId, clonedDishes[dishIndex]);
  } else {
    const dishIndex = dishes.findIndex((dish) => dish.id === dishId);
    const clonedDishes = JSON.parse(JSON.stringify([...dishes]));
    clonedDishes[dishIndex].count--;

    mutateCart(cuisineId, clonedDishes[dishIndex]);
  }
};

export default cartHandler;
