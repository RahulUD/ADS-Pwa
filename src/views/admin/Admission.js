import React from "react";

// components

import HeaderStatsEmpty from "components/Headers/HeaderStatsEmpty";
import UserFormCard from "components/Form/UserFormCard";

function Admission() {
  return (
    <>
      <HeaderStatsEmpty />
      <div className="px-4 md:px-10 mx-auto w-full -m-24">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-12/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
              <div className="rounded-t bg-white mb-0 px-6 py-6">
                <div className="text-center flex">
                  <h6 className="text-gray-800 text-xl font-bold">Admission</h6>
                </div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <UserFormCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admission;