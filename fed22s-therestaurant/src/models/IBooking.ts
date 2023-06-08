import { IGuest } from "./IGuest";

export interface IBooking {
  _id: number;
  people: number;
  date: string;
  sitting: string;
  tables: number;
  guest: IGuest;
}
