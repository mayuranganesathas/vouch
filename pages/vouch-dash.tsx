import React, { useEffect, useState } from "react";
import UserProfile from "../components/ui/UserProfile";
import HrCompanyProfile from "../components/ui/HrCompanyProfile";
import UserIdBar from "../components/UserIdBar";
import WelcomeComp from "../components/dashView/WelcomeComp";

export const vouchDash = () => {
  return (
    <div>
      <div className={"pt-4 px-20"}>
        <UserIdBar />
      </div>
      <div className={"w-full border-gray-500 border-b"}></div>
      <div className={"grid grid-cols-2"}>
        <div>
        <WelcomeComp
        newCandidateNumber = 14,
        userHrFirstName = "Viv",
        moveToCandidates = {movetoCanddiates},
        />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default vouchDash;
