export const getFirstLetterOfText = (text: string) => {
  const splittedLetters = text?.split("");
  const firstLetter = splittedLetters[0]?.toUpperCase();
  return firstLetter;
};
