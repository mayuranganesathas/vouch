import React, { useEffect, useState } from "react";
import { ButtonLinkedin } from "./ButtonLinkedin";
import { ButtonEmail } from "./ButtonEmail";
import { CompTooltip } from "./CompTooltip";
import ReactTooltip from "react-tooltip";
import { ButtonConnected } from "./ButtonConnected";

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
  userLinkedinURL: string;
  userEmailAction: string;
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
  userLinkedinURL,
  userEmailAction,
}) => {
  const [thumbUpCheck, thumbUpSetCheck] = useState(false);
  const [thumbDownCheck, thumbDownSetCheck] = useState(false);

  const buttonEmail = () => {
    console.log("test1");
  };

  const thumbUpClick = () => {
    thumbUpSetCheck((prevCheck) => !prevCheck);
    thumbDownSetCheck(false);
  };

  const thumbDownClick = () => {
    thumbDownSetCheck((prevCheck) => !prevCheck);
    thumbUpSetCheck(false);
  };

  return (
    <div className="py-0.5 px-24 col-span-full">
      <div
        className={
          "w-6/6 h-36 border-2 border-gray-200 filter drop-shadow-md rounded-md bg-white grid grid-cols-2 grid-flow-col text-sm"
        }
      >
        <div
          className={
            "grid grid-cols-2 content-center bg-VouchGreen rounded-full"
          }
        >
          <div className={"text-center "}>
            <p className={"text-lg font-bold"}>User Name Details:{userID}</p>
            <div className={"text-white"}>Location,(prop needed)</div>
            <div className={"pt-0.5"}>
              {" "}
              <ButtonLinkedin
                backgroundColour="white"
                userLinkedinURL={userLinkedinURL}
              />
            </div>
          </div>
          <div className={"content-center"}>
            {" "}
            <div>
              {" "}
              <p className={"w-full text-base font-bold"}>{pastPosition1}</p>
            </div>
            <div>
              {" "}
              <p className={"w-full text-sm text-white"}>
                Industry:{pastIndustry1}
              </p>
              <div className={"pt-4"}>
                <p className={"text-base font-bold"}>
                  {" "}
                  Years of Industry Experience
                </p>
                <p className={"text-sm text-white"}> Number of Years (prop)</p>
              </div>
            </div>
          </div>
        </div>
        <div className={"grid grid-cols-4 pl-8 content-center"}>
          <div>
            <p className={"font-bold text-sm pb-2 text-VouchMed"}>
              Referred By
            </p>
            <p className="w-full text-xs font-bold">{companyName}</p>
            <p className="w-full text-xs pt-1 text-gray-500">
              {" "}
              Headcount: {numEmployees}
            </p>
            <p className={"pt-1 text-xs text-gray-500"}>
              {" "}
              Industry: (new prop)
            </p>
            <div className={"pl-10 py-1"}>
              <img src={companyLogo} width="25" height="auto" />
            </div>
          </div>

          <div>
            <p className={"font-bold text-sm text-VouchMed pb-2"}>
              {" "}
              Role Interviewed For
            </p>
            <p className={"font-bold text-xs"}> Position Open Text</p>
            <p className={"w-full text-xs text-gray-500"}>
              Role Category: {positionTitle}
            </p>
            <p className={"w-full text-xs text-gray-500"}>
              {" "}
              Salary Range: ${salaryRange} K/year{" "}
            </p>
            <p className={"text-bold text-xs"}>Interviewed To:</p>
            <p className={"w-full text-xs text-gray-500"}>{stageInterview}</p>
          </div>
          <div>Interview Notes</div>
          <div>Notes</div>
        </div>
      </div>
    </div>
  );
};

/*<div className="py-0.5 col-span-12">
  <div
    className={
      "w-6/6 h-24 border-2 border-gray-200 filter drop-shadow-md rounded-md bg-white grid grid-cols-12 grid-flow-col text-sm"
    }
  >
    <div className={"grid-start-1"}>
      <div className={"grid grid-cols-2"}>
        <div className={"grid grid-cols-2"}>
          <div className={"flex items-center justify-center pt-4"}>
            <img
              src={
                thumbUpCheck
                  ? "./images/thumbsUpSelected.png"
                  : "./images/thumbsUpBlank.png"
              }
              width="20"
              height="20"
              onClick={thumbUpClick}
            />
          </div>
          <div className={"flex items-center justify-center pt-4"}>
            <img
              src={
                thumbDownCheck
                  ? "./images/thumbsDownSelected.png"
                  : "./images/thumbsDownBlank.png"
              }
              width="20"
              height="20"
              onClick={thumbDownClick}
            />
          </div>
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
    <div className={"grid-start-2 col-span-2 pt-4 pl-6 text-left"}>
      <div className={""}>
        <div>
          <p className="w-full">{positionTitle}</p>
        </div>
        <div className={"pt-1"}>
          {" "}
          <p className={"w-full"}>${salaryRange} K/year </p>
        </div>
        <div className={"pt-2 text-gray-500 text-xs"}>
          {" "}
          <p className="w-full">{jobLocation}</p>
        </div>
      </div>
    </div>

    <div className={"grid-start-4 col-span-2 pt-4"}>
      <div className={"grid grid-cols-2"}>
        <div className={"flex justify-end items-center"}>
          {" "}
          <img src={companyLogo} width="30" height="auto" />
        </div>
        <div className={""}>
          <div className={"flex justify-center items-center text-lg"}>
            <p className="w-full">{numEmployees}</p>
          </div>
          <div
            className={"text-gray-500 text-xs flex justify-center items-center"}
          >
            <p className="w-full">Headcount</p>
          </div>
        </div>
        <div
          className={
            "col-span-2 flex justify-center items-center pt-1 text-gray-500"
          }
        >
          <p className="w-full">{companyName}</p>
        </div>
      </div>
    </div>

    <div className={"grid-start-6 col-span-2 pt-7 pl-8"}>
      <div className={""}>
        <p className={"w-full"}>{stageInterview}</p>
      </div>
      <div className={"text-gray-500 text-xs"}>
        <p className={"w-full"}>{stageNumber}</p>
      </div>
    </div>

    <div className={"grid-start-8 col-span-2 pl-4 pt-5"}>
      <div>
        <p className={"w-full"}>{pastPosition1}</p>
      </div>
      <div className={"text-gray-500 text-xs"}>
        <p className={"w-full"}>{pastIndustry1}</p>
      </div>
      <div className={"text-gray-500 text-xs"}>
        <p className={"w-full"}>(see more..)</p>
      </div>
    </div>
    <div
      className={"grid-start-10 col-span-1 flex justify-center items-center"}
    >
      {" "}
      <p className={"w-full"}>{standOutSkill1}</p>
    </div>
    <div
      className={
        "grid-start-11 col-span-2 flex justify-center items-center py-1"
      }
    >
      <div className={"grid grid-cols-2"}>
        <div className={"pt-0.5"}>
          {" "}
          <ButtonLinkedin
            backgroundColour="white"
            userLinkedinURL={userLinkedinURL}
          />
        </div>
        <div className={"pt-0.5"}>
          {" "}
          <ButtonEmail
            backgroundColour="white"
            userEmailAction={userEmailAction}
          />
        </div>
        <div className={"col-span-2"}>
          <ButtonConnected backgroundColour="white" />
        </div>
      </div>
    </div>
  </div>
  <div className={"grid grid-cols-12"}>
    <div className={"col-start-2"}></div>
  </div>
</div>;
*/
