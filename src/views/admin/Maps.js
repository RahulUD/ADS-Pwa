import React from "react";

// components

import MapExample from "components/Maps/MapExample.js";
import HeaderStatsEmpty from "components/Headers/HeaderStatsEmpty";

export default function Maps() {
  return (
    <>
    <HeaderStatsEmpty/>
    <div className="px-4 md:px-10 mx-auto w-full -m-24">
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <MapExample />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
