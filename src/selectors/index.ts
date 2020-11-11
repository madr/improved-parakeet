import { selector } from "recoil";
import { daterangeFilterState, textFilterState } from "../atoms";
import { withinDaterange } from "../date-utils";
import { EventData } from "../types";

export const eventListState = selector({
  key: "eventListState",
  get: async () => {
    const response = await fetch("data.json");
    const list = (await response.json()) as Array<EventData>;

    return list;
  },
});

export const filteredEventListState = selector({
  key: "filteredEventListState",
  get: ({ get }) => {
    const textFilter = get(textFilterState);
    const { from, to } = get(daterangeFilterState);
    const list = get(eventListState);

    if (textFilter !== "") {
      return list.filter(
        (item: EventData) =>
          (
            item.title +
            item.lead +
            item.bands?.join(" ") +
            item.best?.join(" ")
          ).match(new RegExp(textFilter, "i")) &&
          withinDaterange(item, from, to)
      );
    } else {
      return list.filter((item: EventData) => withinDaterange(item, from, to));
    }
  },
});
