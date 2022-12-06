import {
  StaysType,
  StaysTypeExtended,
  StayTypeExtended,
  UserChoice,
} from "../../utils/Types";

class StaysService {
  private readonly country: string;
  private readonly city: string;
  private readonly adults: number;
  private readonly children: number;
  private static readonly STAYS_URL: string = import.meta.env.VITE_STAYS_PATH;

  constructor(userChoice: UserChoice) {
    this.city = userChoice.location.split(",")[0].trim();
    this.country = userChoice.location.split(",")[1].trim();
    this.adults = userChoice.guests.adults;
    this.children = userChoice.guests.children;
  }

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
      const stays: StaysTypeExtended = allStaysExtendedWithId.filter(
        (stay: StayTypeExtended) =>
          stay.country === this.country &&
          stay.city === this.city &&
          stay.maxGuests >= this.adults + this.children
      );
      return stays;
    } catch (error) {
      console.error(error);
      throw new Error(`${error}`);
    }
  }
}

export default StaysService;
