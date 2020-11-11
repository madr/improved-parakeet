import { atom } from "recoil";
import { getDate } from "../date-utils";

export const textFilterState = atom({
  key: "textFilterState",
  default: "",
});

export const daterangeFilterState = atom({
  key: "daterangeFilterState",
  default: {
    from: getDate(-365 * 21),
    to: getDate(),
  },
});
