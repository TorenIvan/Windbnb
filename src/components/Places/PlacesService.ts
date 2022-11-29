import {
  PlacesType,
  PlacesTypeExtended,
  PlaceTypeExtended,
  UserChoice,
} from "../../utils/Types";

class PlacesService {
  private readonly country: string;
  private readonly city: string;
  private readonly adults: number;
  private readonly children: number;
  private static readonly PLACES_URL: string = import.meta.env.VITE_PLACES_PATH;

  constructor(userChoice: UserChoice) {
    this.city = userChoice.location.split(",")[0].trim();
    this.country = userChoice.location.split(",")[1].trim();
    this.adults = userChoice.guests.adults;
    this.children = userChoice.guests.children;
  }

  async GetPlaces(): Promise<PlacesType> {
    try {
      const retrievedPlaces = await fetch(PlacesService.PLACES_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const allPlaces: PlacesType = await retrievedPlaces.json();
      const allPlacesExtendedWithId: PlacesTypeExtended = allPlaces.map(
        (place, index) => ({ ...place, id: index })
      );
      const places: PlacesTypeExtended = allPlacesExtendedWithId.filter(
        (place: PlaceTypeExtended) =>
          place.country === this.country &&
          place.city === this.city &&
          place.maxGuests >= this.adults + this.children
      );
      return places;
    } catch (error) {
      console.error(error);
      throw new Error(`${error}`);
    }
  }
}

export default PlacesService;
