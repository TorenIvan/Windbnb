import { DefaultErrorType } from "./Types";

export enum ModalVisibility {
  Hidden,
  EditLocation,
  EditGuests,
}

export const InitialGuestsTitle = "Add Guests";

export const InfoLineTitle = "Stays in Finland";

export const Stay = "stay";

export const Stays = "stays";

export const InitialLocationTitle = "Finland";

export const InitialStay = "Whole Finland";

export const InitialAdults = 1;

export const InitialChildren = 0;

export const SearchItemType = {
  location: "location",
  guests: "guests",
};

export const InitialLocations: string[] = [
  "Helsinki, Finland",
  "Turku, Finland",
  "Oulu, Finland",
  "Vaasa, Finland",
  "Whole Finland",
];

export const Adults: string = "Adults";

export const Children: string = "Children";

export const AdultsClarificationText: string = "Age 13 or above";

export const ChildrenClarificationText: string = "Age 2-12";

export const MinusSymbol: string = "-";

export const AddSymbol: string = "+";

export const SuperHost: string = "Super Host";

export const Dot: string = ".";

export const Beds: string = "beds";

export const DefaultError: DefaultErrorType = {
  image: "../../pexels-binyamin-mellish-186077.jpg",
  title: "edo",
  body: "edoodo",
} as const;
