import { atom } from "recoil";
import { getDate, str2date } from "../date-utils";

export const textFilterState = atom({
  key: "textFilterState",
  default: "",
});

export const daterangeFilterState = atom({
  key: "daterangeFilterState",
  default: {
    from: str2date("2000-06-01"),
    to: getDate(),
  },
});
