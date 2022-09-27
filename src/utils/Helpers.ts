export function ExtractLocationFromHTMLText(text: string): string {
  return text.replace(/[^\w ]/, "").trim();
}