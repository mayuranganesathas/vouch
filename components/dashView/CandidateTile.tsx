import React, { useEffect, useState } from "react";
import { ButtonLinkedin } from "./ButtonLinkedin";
import { StarIcon } from "@heroicons/react/solid";
import { EyeOffIcon } from "@heroicons/react/solid";
import { MailOpenIcon } from "@heroicons/react/solid";
import { SparklesIcon } from "@heroicons/react/solid";
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
    <div className="py-4  col-span-full">
      <div
        className={
          "w-6/6 max-h-fit border-r-2 border-t-2 border-b-2 border-gray-300 filter drop-shadow rounded-tl-full rounded-bl-full bg-white grid grid-cols-5 grid-flow-col text-sm"
        }
      >
        <div className={"col-start-1 col-span-2 "}>
          <div
            className={
              "grid grid-cols-2 content-center bg-VouchMed rounded-full h-full "
            }
          >
            <div className={"text-center py-4"}>
              <p className={"text-2xl font-bold text-VouchDark"}>
                User Name :{userID}
              </p>
              <div className={"text-white text-base font-bold"}>
                Location,(prop needed)
              </div>
              <div className={"pt-2 grid grid-cols-2 pr-2"}>
                <div className={"grid justify-items-end"}>
                  <ButtonLinkedin
                    backgroundColour="white"
                    userLinkedinURL={userLinkedinURL}
                  />{" "}
                </div>
                <div className={"grid justify-items-start pl-2"}>
                  <ButtonEmail
                    backgroundColour="white"
                    userEmailAction={userEmailAction}
                  />
                </div>
              </div>
            </div>
            <div className={""}>
              {" "}
              <p className={"text-lg font-bold text-VouchDark"}>
                Current/Most Recent Role
              </p>
              <div>
                {" "}
                <p className={"w-full text-base text-white font-bold"}>
                  {pastPosition1}
                </p>
              </div>
              <div>
                {" "}
                <p className={"w-full text-base text-white font-bold"}>
                  Industry:{pastIndustry1}
                </p>
                <div className={"pt-4"}>
                  <p className={"text-base font-bold text-VouchDark"}>
                    {" "}
                    Years of Industry Experience
                  </p>
                  <p className={"text-base text-white font-bold"}>
                    {" "}
                    Number of Years (prop)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={"col-start-3 py-4"}>
          <div className={"pl-10 content-center"}>
            <div>
              <p className={"font-bold text-lg pb-2 text-VouchDark"}>
                Referred By
              </p>
              <p className="w-full text-base font-bold">{companyName}</p>
              <p className="w-full text-base pt-1 text-gray-500">
                {" "}
                Headcount: {numEmployees}
              </p>
              <p className={"pt-1 text-base text-gray-500"}>
                {" "}
                Industry: (new prop)
              </p>
              <div className={"pl-10 pt-4"}>
                <img src={companyLogo} width="45" height="auto" />
              </div>
            </div>
          </div>
        </div>
        <div className={"col-start-4 py-4"}>
          <p className={"font-bold text-lg text-VouchDark pb-2"}>
            {" "}
            Role Interviewed For
          </p>
          <p className={"font-bold text-base"}> Position Open Text</p>
          <p className={"w-full text-base text-gray-500 pt-1"}>
            Role: {positionTitle}
          </p>
          <p className={"w-full text-base text-gray-500 pt-1"}>
            {" "}
            Salary: ${salaryRange} K/year{" "}
          </p>
          <p className={"text-bold text-base pt-4 font-bold"}>
            Interviewed To:
          </p>
          <p className={"w-full text-base text-gray-500"}>{stageInterview}</p>
        </div>
        <div className={"col-start-5 py-4"}>
          <div className={"grid grid-cols-3"}>
            <div className={"col-start-1 col-span-2"}>
              <p className={"font-bold text-lg text-VouchDark pb-2"}>
                Interview Notes
              </p>
              <p className={"font-bold text-base"}>Standout Skills</p>
              <p
                className={"w-full text-base font-gray-500 pt-1 text-gray-500"}
              >
                [S] {standOutSkill1}
              </p>
              <p
                className={"w-full text-base font-gray-500 pt-1 text-gray-500"}
              >
                [S] New Prop
              </p>
              <p
                className={"w-full text-base font-gray-500 pt-1 text-gray-500"}
              >
                {" "}
                [S] New Prop
              </p>
            </div>

            <div
              className={
                "col-start-3 col-span-1 grid justify-items-end content-center pr-4 pt-4"
              }
            >
              <div className={""}>
                <StarIcon className={"h-7 w-7"} fill="none" stroke="gray" />
              </div>
              <div className="py-8">
                <EyeOffIcon className={"h-7 w-7"} fill="none" stroke="gray" />
              </div>
              <div>
                <MailOpenIcon className={"h-7 w-7"} fill="none" stroke="gray" />
              </div>
            </div>
          </div>
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
