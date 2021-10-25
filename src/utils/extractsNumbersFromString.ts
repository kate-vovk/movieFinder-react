export const extractsNumbersFromString = (str: string): string | undefined => {
  return str.match(/\d+((.|.)\d+)?/) ? str.match(/\d+((.|.)\d+)?/)?.[0] : undefined;
  // iterates over the string and returns only numbers (removes the word minutes or USD) //
};
