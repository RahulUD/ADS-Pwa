import React from "react";

// components

import HeaderStatsEmpty from "components/Headers/HeaderStatsEmpty";
import CardMessageBox from "components/Cards/CardMessageBox";
import CardContactBox from "components/Cards/CardContactBox";

export default function Settings() {
  return (
    <>
    <HeaderStatsEmpty/>
    <div className="px-4 md:px-10 mx-auto w-full -m-24">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-4/12 px-4">
          <CardMessageBox />
        </div>
        <div className="w-full lg:w-8/12 px-4">
          <CardContactBox />
        </div>
      </div>
      </div>
    </>
  );
}
