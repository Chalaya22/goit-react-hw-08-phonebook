const getIsLoggedIn = state => state.auth.isLoggedIn;
const getuserName = state => state.auth.user.name;
const authSelectors = {
  getIsLoggedIn,
  getuserName,
};
export default authSelectors;
