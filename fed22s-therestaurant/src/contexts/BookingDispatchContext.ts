import { Dispatch, createContext } from "react";
import { IAction } from "../reducers/BookingReducer";

export const PodcastDispatchContext = createContext<Dispatch<IAction>>(() => {
  return;
});
