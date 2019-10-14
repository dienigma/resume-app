import { createStore } from "redux";
import resumeReducer from "../reducers/resumeReducer";

export default () => {
  const store = createStore(resumeReducer);
  return store;
};
