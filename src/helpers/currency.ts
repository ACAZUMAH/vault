import currency from "currency.js";

export const convertToHighUnit = (value: number) => {
  return currency(value, { fromCents: true }).value;
};

export const convertToLowerUnit = (value: number) => {
  return currency(value, { fromCents: true }).intValue;
};

export const formatCurrency = (value: number, symbol = "") => {
  return currency(value, { symbol, separator: "," }).format();
};

export function formatCurrencyGBP(value: number, hideSymbol = false): string {
  const formatted = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(convertToHighUnit(value));
  return hideSymbol ? formatted.replace("£", "").trim() : formatted;
}
