import React from "react";
import { useRecoilState } from "recoil";
import { textFilterState } from "../atoms";

export default function TextFilter() {
  const [query, setFilter] = useRecoilState(textFilterState);

  const updateFilter = (event: any): void => {
    const { value } = event.target as HTMLInputElement;
    setFilter(value);
  };

  return (
    <>
      <label className="textfilter" htmlFor="query">
        Filtrera:
        <input
          id="query"
          name="query"
          type="text"
          placeholder="stad, land, namn, typ av evenemang ..."
          value={query}
          onChange={(e: any) => updateFilter(e)}
        />
      </label>
    </>
  );
}
