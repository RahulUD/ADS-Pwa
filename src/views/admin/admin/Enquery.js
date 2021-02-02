import React from "react";

// components

import CardTable from "components/Cards/CardTable.js";
import HeaderStatsEmpty from "components/Headers/HeaderStatsEmpty";

export default function Tables() {
  return (
    <>
    <HeaderStatsEmpty/>
    <div className="px-4 md:px-10 mx-auto w-full -m-24">
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
            hoo
          <CardTable />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div>
      </div>
      </div>
    </>
  );
}
