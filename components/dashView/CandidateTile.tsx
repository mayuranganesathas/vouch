import React from "react";
import { ButtonLinkedin } from "./ButtonLinkedin";
import { ButtonEmail } from "./ButtonEmail";

export interface CandidateTileProps {
  starStatus: boolean;
  userID: number;
  positionTitle: string;
  salaryRange: string;
  jobLocation: string;
  companyLogo: string;
  numEmployees: string;
  companyName: string;
  stageInterview: string;
  pastPosition1: string;
  pastIndustry1: string;
  standOutSkill1: string;
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
  pastPosition1,
  pastIndustry1,
  standOutSkill1,
}) => {
  return (
    <div>
      <div
        className={
          "w-6/6 h-auto border-2 border-gray-200 filter drop-shadow-md rounded-md bg-white grid grid-cols-14 gap-2 grid-flow-col text-sm"
        }
      >
        <div className={"grid-start-1 "}>
          <div className={"grid grid-cols-2"}>
            <div className={"flex items-center justify-center pt-2"}>
              <img src="./images/starUnselect.png" width="15" height="15" />
            </div>
            <div className={""}>
              <div className={"flex items-center justify-center pt-3"}>
                <img src="./images/profile.png" width="25" height="25" />
              </div>
              <div className={"text-xs flex justify-center items-center12"}>
                {userID}
              </div>
            </div>
          </div>
        </div>
        <div className={"grid-start-2 grid-end-5"}>
          <div className={""}>
            <div>{positionTitle}</div>
            <div> {salaryRange}</div>
            <div> {jobLocation}</div>
          </div>
        </div>
        <div className={"grid-start-5 grid-end-7"}>
          <div className={"grid grid-cols-2"}>
            <div className={"flex justify-center items-center"}>
              {" "}
              <img src={companyLogo} width="50" height="auto" />
            </div>
            <div className={""}>
              <div className={"flex justify-center items-center"}>
                {numEmployees}
              </div>
              <div
                className={
                  "text-gray-500 text-xs flex justify-center items-center"
                }
              >
                headcount
              </div>
            </div>
            <div className={"col-span-2 flex justify-center items-center"}>
              {companyName}
            </div>
          </div>
        </div>
        <div
          className={"grid-start-7 grid-end-9 flex justify-center items-center"}
        >
          {" "}
          {stageInterview}
        </div>

        <div className={"grid-start-9 grid-end-12"}>
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
        <div className={"grid-start-14 "}>
          <div className={""}>
            {" "}
            <ButtonLinkedin backgroundColour="white" />
          </div>
          <div>
            {" "}
            <ButtonEmail backgroundColour="white" />
          </div>
        </div>
      </div>
    </div>
  );
};
