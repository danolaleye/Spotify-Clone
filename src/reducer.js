export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQCxZA83a6qUIhjqESLg2JRLA5GCw7YQbWF9CVCPKiGU_9LGNqMFqH32fkqso2ybEHwskXn88ilcuDuNIGliKwfJfUeApxAgb7Sl9A06D9FFRo1tvSRfGWA9UHEZEpjDFnfT91K980ys_frkxHAqdpkaxycLaRwIP31aFENNBg5mDHHmd48J",
};

const reducer = (state, action) => {
  //always console.log actions to help with debugging
  console.log(action);

  //Action -> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};

export default reducer;
