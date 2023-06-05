import { IBooking } from "../models/IBooking";

export interface IAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {}

export const BookingReducer = (bookings: IBooking[], action: IAction) => {
  return;
};
