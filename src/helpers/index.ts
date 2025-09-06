export const convertToTitleCase = (str: string) => {
  return `${str[0].toUpperCase()}${str
    .slice(1)
    .split("_")
    .join(" ")
    .toLowerCase()}`;
};