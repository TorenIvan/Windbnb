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
  image:
    "https://images.unsplash.com/photo-1621252179027-94459d278660?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  title: "I have bad news for you",
  body: "Something went wrong with this page. Please, try searching again. Thank you!!!",
} as const;

export const NoStaysInfo = (
  location: string,
  adults: number,
  children: number
): DefaultErrorType => ({
  image:
    "https://images.unsplash.com/photo-1533374206871-33b8f07c216c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
  title: DefaultError.title,
  body: `Stays are not available for ${adults} adults and ${children} children at ${location}`,
});
