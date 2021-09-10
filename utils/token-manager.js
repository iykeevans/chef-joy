export const setToken = (tokenName, token) => {
  return localStorage.setItem(tokenName, token);
};

export const getToken = (tokenName) => {
  return localStorage.getItem(tokenName);
};

export const crushToken = (tokenName) => {
  return localStorage.removeItem(tokenName);
};
