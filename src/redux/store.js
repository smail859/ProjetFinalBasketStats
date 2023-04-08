import { configureStore } from "@reduxjs/toolkit";
import trainingSliceReducer from "./reducers";

export default configureStore({
  reducer: {
    training: trainingSliceReducer,
  },
});
