export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter;
export const getIsLoading = state => state.contacts.isLoading;

export const selectUsername = state => state.auth.user.name;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
