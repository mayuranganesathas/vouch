import React from "react";

import WelcomeComp from "../components/dashView/WelcomeComp";
import VouchCTA from "../components/dashView/VouchCTA";
import { CandidateCount } from "../components/dashView/CandidateCount";
import { SearchFilterDash } from "../components/ui/searchFilterDash";
import { CandidateTile } from "../components/dashView/CandidateTile";
import DashCandidateTiles from "../components/dashView/DashCandidateTiles";
import UserIdBar from "../components/dashView/UserIdBar";

const dashBoardTest = {
  newCandidateNumber: 14,
  userHrFirstName: "Viv",
  moveToCandidate: () => {},
  numberReferred: 10,
  numberThanks: 4,
  candidateCount: [10],
  lastCandidateCount: 5,
  dropDownArray: ["software eng", "mayu's butthole", "brian's face"],

  starStatus: false,
  userID: 1234,
  positionTitle: "Sr. Backend Dev",
  salaryRange: "$110k-140k $/Yr",
  jobLocation: "Toronto | Ontario",
  companyLogo: "./images/Google-logo.png",
  numEmployees: "5000+",
  companyName: "Google Ltd",
  stageInterview: "Final Stage",
  stageNumber: "(5 of 5)",
  pastPosition1: "Director of Eng.",
  pastIndustry1: "Finance",
  standOutSkill1: "Strong Communication",
};

const dbData = {
  numbersReferred: 3,
  numberThanks: 2,
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
      <div className={"grid grid-cols-2"}>
        <div className={"pl-20"}>
          <CandidateCount
            candidateCount={dashBoardTest.candidateCount}
            lastCandidateCount={dashBoardTest.lastCandidateCount}
          />
        </div>
        <div className={"grid justify-items-end col-start-2 pr-40 py-8"}>
          <div className={"grid grid-cols-2"}>
            <div className={"col-star-1"}>Filter Referrals: </div>
            <div className={"col-start-2"}>
              <SearchFilterDash
                backgroundColour="white"
                dropDownArray={dashBoardTest.dropDownArray}
                value="hi"
                onChange={(e) => {
                  e.target.value;
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={"bg-gray-50 px-20"}>
        <div className={"grid grid-cols-14 gap-4 bg-gray-200 grid-flow-col"}>
          <div className={"col-start-1 pl-4"}> Referral</div>
          <div className={"grid-start-2 grid-end-5"}> Role Interviewed For</div>
          <div className={"grid-start-5 grid-end-7"}>Referring By</div>
          <div className={"grid-start-7 grid-end-9"}> Vetted To</div>
          <div className={"grid-start-9 grid-end-12"}>Last Role</div>
          <div className={"grid-start-12 grid-end-13"}>Stand Out Skill</div>
          <div className={"grid-start-14"}></div>
        </div>
        <div className={"py-4"}>
          <DashCandidateTiles />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
