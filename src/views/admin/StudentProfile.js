import React from "react";

// components

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";
import HeaderStatsEmpty from "components/Headers/HeaderStatsEmpty";
import { connect } from "react-redux";

function StudentProfile() {
  return (
    <>
    <HeaderStatsEmpty/>
    <div className="px-4 md:px-10 mx-auto w-full -m-24">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
      </div>
    </>
  );
}

export default StudentProfile;