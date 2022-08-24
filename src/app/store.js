import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/icecream/icecreamSlice";
import userReducer from "../features/users/userSlice";
// const reduxLogger = require("redux-logger");
// const logger = reduxLogger.createLogger();

// import reducer ande create a store
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    users: userReducer,
  },
  // middleware: (getDefultMiddleware) => getDefultMiddleware().concat(logger),
});

export default store;
