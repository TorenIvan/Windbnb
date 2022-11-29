export type Guests = {
  adults: number;
  children: number;
};

export type UserChoice = {
  location: string;
  guests: Guests;
};

export type PlaceType = {
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

export type PlacesType = PlaceType[];

export type PlaceTypeExtended = PlaceType & { id: number };

export type PlacesTypeExtended = PlaceTypeExtended[];
