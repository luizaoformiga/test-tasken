import { atom } from "recoil";

export const generate = atom({
  key: "list",
  default: {
    select: [],
    country: [],
  },
});
