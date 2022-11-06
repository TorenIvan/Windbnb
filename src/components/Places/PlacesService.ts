import { PlacesType, PlaceType, UserChoice } from "../../utils/Types";

class PlacesService {
  private readonly country: string;
  private readonly city: string;
  private readonly adults: number;
  private readonly children: number;

  constructor(userChoice: UserChoice) {
    this.country = userChoice.location.split(",")[0].trim();
    this.city = userChoice.location.split(",")[1].trim();
    this.adults = userChoice.guests.adults;
    this.children = userChoice.guests.children;
  }

  async GetPlaces(): Promise<PlacesType> {
    try {
      const allPlaces = await fetch("http://localhost:3000/src/stays.json", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const allPlacesJSON: PlacesType = await allPlaces.json();
      const places: PlacesType = allPlacesJSON.filter(
        (place: PlaceType) =>
          place.country === this.country &&
          place.city === this.city &&
          place.maxGuests === this.adults + this.children
      );
      return places;
    } catch (error) {
      console.error(error);
      throw new Error(`${error}`);
    }
  }
}

export default PlacesService;
