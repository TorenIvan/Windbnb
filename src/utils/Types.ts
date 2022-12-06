export type Guests = {
  adults: number;
  children: number;
};

export type UserChoice = {
  location: string;
  guests: Guests;
};

export type StayType = {
  city: string;
  country: string;
  superHost: boolean;
  title: string;
  rating: number;
  maxGuests: number;
  type: string;
  beds: number | null;
  photo: string;
};

export type StaysType = StayType[];

export type StayTypeExtended = StayType & { id: number };

export type StaysTypeExtended = StayTypeExtended[];
