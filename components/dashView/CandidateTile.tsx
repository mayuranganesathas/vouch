import React, { useEffect, useState } from "react";
import { ButtonLinkedin } from "./ButtonLinkedin";
import { ButtonEmail } from "./ButtonEmail";
import { CompTooltip } from "./CompTooltip";
import ReactTooltip from "react-tooltip";

export interface CandidateTileProps {
  userID: number;
  positionTitle: string;
  salaryRange: string;
  jobLocation: string;
  companyLogo: string;
  numEmployees: string;
  companyName: string;
  stageInterview: string;
  stageNumber: string;
  pastPosition1: string;
  pastIndustry1: string;
  standOutSkill1: string;
  linkedInUrl: string;
}

export const CandidateTile: React.FC<CandidateTileProps> = ({
  userID,
  positionTitle,
  salaryRange,
  jobLocation,
  companyLogo,
  numEmployees,
  companyName,
  stageInterview,
  stageNumber,
  pastPosition1,
  pastIndustry1,
  standOutSkill1,
  linkedInUrl,
}) => {
  const buttonEmail = () => {
    console.log("test1");
  };

  const [isShown, setIsShown] = useState(false);

  return (
    <div className="py-0.5">
      <div
        className={
          "w-6/6 h-24 border-2 border-gray-200 filter drop-shadow-md rounded-md bg-white grid grid-cols-14 gap-2 grid-flow-col text-sm"
        }
      >
        <div className={"grid-start-1"}>
          <div className={"grid grid-cols-2"}>
            <div className={"flex items-center justify-center pt-4"}>
              <img src="./images/starUnselect.png" width="20" height="20" />
            </div>
            <div className={""}>
              <div className={"flex items-center justify-center pt-6"}>
                <img src="./images/profile.png" width="30" height="30" />
              </div>
              <div className={"text-xs flex justify-center items-center12"}>
                <p className={""}>{userID}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={"grid-start-2 grid-end-5 pt-4 pl-4"}>
          <div className={""}>
            <div>{positionTitle}</div>
            <div className={"pt-1"}> {salaryRange}</div>
            <div className={"pt-2 text-gray-500 text-xs"}> {jobLocation}</div>
          </div>
        </div>

        <div className={"grid-start-5 grid-end-7 pt-4 z-20"}>
          <div className={"grid grid-cols-2"}>
            <div className={"flex justify-center items-center"}>
              {" "}
              <img src={companyLogo} width="70" height="auto" />
            </div>
            <div className={""}>
              <div className={"flex justify-center items-center text-lg"}>
                {numEmployees}
              </div>
              <div
                className={
                  "text-gray-500 text-xs flex justify-center items-center"
                }
              >
                Headcount
              </div>
            </div>
            <div
              className={
                "col-span-2 flex justify-center items-center pt-1 text-gray-500"
              }
            >
              {companyName}
            </div>
          </div>
        </div>
        <div className={"grid-start-7 grid-end-9 pt-7"}>
          <div className={"flex justify-center"}>{stageInterview}</div>
          <div className={"text-gray-500 text-xs flex justify-center"}>
            {stageNumber}
          </div>
        </div>

        <div className={"grid-start-9 grid-end-12 pl-4 pt-5"}>
          <div>{pastPosition1}</div>
          <div className={"text-gray-500 text-xs"}>{pastIndustry1}</div>
          <div className={"text-gray-500 text-xs"}>(see more..)</div>
        </div>
        <div
          className={
            "grid-start-12 grid-end-13 flex justify-center items-center"
          }
        >
          {" "}
          {standOutSkill1}
        </div>
        <div className={"grid-start-14 flext justify-center items-center py-1"}>
          <div className={"pt-2 pl-2"}>
            {" "}
            <ButtonLinkedin
              backgroundColour="white"
              userLinkedinURL={linkedInUrl}
            />
          </div>
          <div className={"pt-2 pl-2"}>
            {" "}
            <ButtonEmail backgroundColour="white" onClick={buttonEmail} />
          </div>
        </div>
      </div>
      <div className={"grid grid-cols-14"}>
        <div className={"col-start-2"}></div>
      </div>
    </div>
  );
};
