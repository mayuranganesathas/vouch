import React from "react";
import UserIdBar from "../components/UserIdBar";
import WelcomeComp from "../components/dashView/WelcomeComp";
import VouchCTA from "../components/dashView/VouchCTA";
import { CandidateCount } from "../components/dashView/CandidateCount";
import { SearchFilterDash } from "../components/dashView/SearchFilterDash";

const dashBoardTest = {
  newCandidateNumber: 14,
  userHrFirstName: "Viv",
  moveToCandidate: () => {},
  numberReferred: 10,
  numberThanks: 4,
  candidateCount: [10],
  lastCandidateCount: 5,
  backgroundColour: "white",
  dropDownArray: ["A, B, C"],
};

const DashBoard = () => {
  return (
    <div>
      <div className={"pt-4 px-20"}>
        <UserIdBar />
      </div>
      <div className={"w-full border-gray-500 border-b"}></div>
      <div className={"px-2 grid grid-cols-2"}>
        <div className={"pl-24 pt-10"}>
          <WelcomeComp
            newCandidateNumber={dashBoardTest.newCandidateNumber}
            userHrFirstName={dashBoardTest.userHrFirstName}
            moveToCandidates={dashBoardTest.moveToCandidate}
          />
        </div>

        <div className="grid justify-items-end pr-40 pt-10">
          <VouchCTA
            numberReferred={dashBoardTest.numberReferred}
            numberThanks={dashBoardTest.numberThanks}
          />
        </div>
      </div>
      <div className={"grid grids-col-2"}>
        <div className={"pl-20"}>
          <CandidateCount
            candidateCount={dashBoardTest.candidateCount}
            lastCandidateCount={dashBoardTest.lastCandidateCount}
          />
        </div>
        <div>
          <SearchFilterDash
            backgroundColour={dashBoardTest.backgroundColour}
            dropDownArray={dashBoardTest.dropDownArray}
          />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
