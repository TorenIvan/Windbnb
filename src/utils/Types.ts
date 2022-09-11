import { ModalVisibility } from "./Constants";

export type Guests = {
  adults: number;
  children: number;
};

export type ShowModal = ModalVisibility; 

export type UserChoice = {
  location: string;
  guests: Guests; 
};
