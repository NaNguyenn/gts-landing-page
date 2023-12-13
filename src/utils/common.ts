import { FORMAT_NUMBER } from "./constants";

export const formatMoneyNoUnit = (num?: number | string, sep?: string) => {
  if (!num) return "0";
  return num.toString().replace(FORMAT_NUMBER, `$1${sep || "."}`);
};
