export function ExtractLocationFromHTMLText(text: string): string {
  return text.replace(/[^\w ]/, "").trim();
}

export function HasGuestsExceededTheCapacityLimit(
  adults: number,
  children: number
): boolean {
  let capacityExceeded = false;

  if (adults < 0) capacityExceeded = true;
  if (children < 0) capacityExceeded = true;
  if (adults + children > 12) capacityExceeded = true;
  if (adults + children < 1) capacityExceeded = true;

  return capacityExceeded;
}
