import React from "react";

// components

import HeaderStatsEmpty from "components/Headers/HeaderStatsEmpty";
import EnqueryTable from "components/Table/EnqueryTable";

export default function Tables() {
  return (
    <>
    <HeaderStatsEmpty/>
    <div className="px-4 md:px-10 mx-auto w-full -m-24">
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <EnqueryTable color="dark" />
        </div>
      </div>
      </div>
    </>
  );
}
