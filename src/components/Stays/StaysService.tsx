import {
  StaysType,
  StaysTypeExtended,
  StayTypeExtended,
  UserChoice,
} from "../../utils/Types";

class StaysService {
  private readonly adults: number;
  private readonly children: number;
  private readonly country: string;
  private readonly city: string | null;
  private static readonly STAYS_URL: string = import.meta.env.VITE_STAYS_PATH;

  constructor(userChoice: UserChoice) {
    this.adults = userChoice.guests.adults;
    this.children = userChoice.guests.children;
    this.city = StaysService.GetCity(userChoice.location);
    this.country = StaysService.GetCountry(userChoice.location);
  }

  FilterStaysByUserChoice = (
    allStays: StaysTypeExtended
  ): StaysTypeExtended => {
    if (this.city === null) {
      return allStays.filter(
        (stay: StayTypeExtended) =>
          stay.country === this.country &&
          stay.maxGuests >= this.adults + this.children
      );
    }
    return allStays.filter(
      (stay: StayTypeExtended) =>
        stay.country === this.country &&
        stay.city === this.city &&
        stay.maxGuests >= this.adults + this.children
    );
  };

  static GetCountry = (location: string): string => {
    if (location.includes(",")) {
      return location.split(",")[1].trim();
    }
    return location.split(" ")[1].trim();
  };

  static GetCity = (location: string): string | null => {
    if (location.includes(",")) {
      return location.split(",")[0].trim();
    }
    return null;
  };

  async GetStays(): Promise<StaysTypeExtended> {
    try {
      const retrievedStays = await fetch(StaysService.STAYS_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const allStays: StaysType = await retrievedStays.json();
      const allStaysExtendedWithId: StaysTypeExtended = allStays.map(
        (stay, index) => ({ ...stay, id: index })
      );
      const stays: StaysTypeExtended = this.FilterStaysByUserChoice(
        allStaysExtendedWithId
      );
      //throw "error";
      return stays;
    } catch (error) {
      console.error(error);
      throw new Error(`${error}`);
    }
  }
}

export default StaysService;
