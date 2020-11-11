import React from "react";
import { RecoilRoot } from "recoil";

import EventList from "./components/event-list";
import DateRangeFilter from "./components/daterange-filter";
import TextFilter from "./components/text-filter";

// Assets
import "./css/app.css";

function App() {
  return (
    <RecoilRoot>
      <h1>Evenemang</h1>
      <DateRangeFilter />
      <TextFilter />
      <React.Suspense fallback={<div>🤘🏿</div>}>
        <EventList />
      </React.Suspense>
    </RecoilRoot>
  );
}

export default App;
