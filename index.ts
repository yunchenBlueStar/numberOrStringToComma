export type NumOrStr = number | string | undefined;

export const numberOrStringToComma = (val: NumOrStr) => {
  if (val === undefined) return "0";
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
