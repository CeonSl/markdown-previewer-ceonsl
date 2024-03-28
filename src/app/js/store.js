import { configureStore } from "@reduxjs/toolkit"; // First we need to import the "configureStore" function to asign the reducer to the store
import textSlice from "../../features/text/textSlice";

export default configureStore({
  reducer: {
    text: textSlice,
  },
});
