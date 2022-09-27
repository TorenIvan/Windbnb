export type Guests = {
  adults: number;
  children: number;
};

export type UserChoice = {
  location: string;
  guests: Guests; 
};
