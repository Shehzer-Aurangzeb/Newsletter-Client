export const KEYS = {
  PATH: "path",
  USER: "newsletter_user",
};

export const getUserInfoFromLocalStorage = () => {
  const result = localStorage.getItem(KEYS.USER);
  return result;
};
export const saveUserInfoInLocalStorage = (user) => {
  localStorage.setItem(KEYS.USER, user);
};

export const deleteUserInfoFromLocalStorage = () => {
  localStorage.removeItem(KEYS.USER);
};
