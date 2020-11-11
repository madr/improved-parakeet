import React from "react";
import { useRecoilValue } from "recoil";
import Event from "./event-item";

import { filteredEventListState } from "../selectors";
import { EventData } from "../types";

export default function EventList() {
  const events = useRecoilValue(filteredEventListState);

  return (
    <div className="events">
      {events.map((item: EventData) => (
        <Event key={item.lead} item={item} />
      ))}
    </div>
  );
}
