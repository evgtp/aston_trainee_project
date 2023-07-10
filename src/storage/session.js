export const endSession = () => {
  sessionStorage.clear();
};

export const isLoggedIn = () => {
  return getSession().accessToken;
};
