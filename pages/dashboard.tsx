import React from "react";
import VouchCTA from "../components/dashView/VouchCTA";
import StandOutSkill from "../components/ui/StandOutSkill";
import UserIdBar from "../components/dashView/UserIdBar";
import { CandidateTile } from "../components/dashView/CandidateTile";

const dbData = {
  numbersReferred: 3,
  numberThanks: 2,
};
const DashBoard = () => {
  return (
    <div>
      <UserIdBar />
      <VouchCTA
        numberReferred={dbData.numbersReferred}
        numberThanks={dbData.numberThanks}
      />
    </div>
  );
};

export default DashBoard;
