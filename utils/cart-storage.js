import isBrowser from "./is-browser";

const cartStorage = (() => {
  const getStore = () => {
    return (isBrowser() && JSON.parse(localStorage.getItem("cart"))) || [];
  };

  const setStore = (store) => {
    return isBrowser() && localStorage.setItem("cart", JSON.stringify(store));
  };

  const updateCart = (identifier, payload) => {
    const store = getStore();
    const storeItemIndex = store.findIndex((item) => item.id === identifier);

    if (storeItemIndex >= 0) {
      const storeItem = store[storeItemIndex];
      const cartItemIndex = storeItem.data.findIndex(
        (item) => item.id === payload.id
      );
      if (cartItemIndex >= 0) {
        storeItem.data[cartItemIndex] = payload;
      } else {
        storeItem.data.push(payload);
      }
      setStore(store);
    }
    // if no cart Item with cuisine Id create cart item
    else {
      const cartItem = { id: identifier, data: [payload] };
      setStore([...store, cartItem]);
    }

    return store;
  };

  const getCart = () => {
    const store = getStore();
    return store
      .map((item) =>
        item.data.map((cartItem) => ({ ...cartItem, cuisineId: item.id }))
      )
      .flat()
      .filter((item) => item.count > 0);
  };

  const getCartItemTotalCount = () => {
    const cart = getCart();
    let total = 0;

    cart.forEach((item) => {
      total += item.count;
    });

    return total;
  };

  const crushCart = () => {
    return isBrowser() && localStorage.removeItem("cart");
  };

  return { updateCart, getCart, getStore, crushCart, getCartItemTotalCount };
})();

export default cartStorage;
