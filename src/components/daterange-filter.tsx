import React from "react";
import { useRecoilState } from "recoil";
import { daterangeFilterState } from "../atoms";
import { str2date, yyyymmdd } from "../date-utils";

export default function DateRangeFilter() {
  const [filter, setFilter] = useRecoilState(daterangeFilterState);

  const updateFilter = (event: any): void => {
    const { name, value } = event.target as HTMLInputElement;
    switch (name) {
      case "from":
        setFilter({ to, from: str2date(value) });
        break;
      case "to":
        setFilter({ from, to: str2date(value) });
        break;
      default:
        setFilter({ from, to });
    }
  };

  const { from, to } = filter;

  return (
    <div className="daterange">
      <label htmlFor="from">
        Från:
        <input
          id="from"
          name="from"
          type="date"
          value={yyyymmdd(from)}
          max={yyyymmdd(to)}
          onChange={(e: any) => updateFilter(e)}
        />
      </label>
      <label htmlFor="to">
        Till:
        <input
          id="to"
          name="to"
          type="date"
          value={yyyymmdd(to)}
          min={yyyymmdd(from)}
          onChange={(e: any) => updateFilter(e)}
        />
      </label>
    </div>
  );
}
