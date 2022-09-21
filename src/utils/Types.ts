import { ModalVisibility } from "./Constants";

export type Guests = {
  adults: number;
  children: number;
};

export type ModalSearchType = ModalVisibility; 

export type UserChoice = {
  location: string;
  guests: Guests; 
};
