import React, { useEffect, useState } from "react";
import { ButtonLinkedin } from "./ButtonLinkedin";
import { ButtonEmail } from "./ButtonEmail";
import { CompTooltip } from "./CompTooltip";
import ReactTooltip from "react-tooltip";
import { ButtonConnected } from "./ButtonConnected";
import { useMutation } from "@apollo/client";
import { INSERT_THUMBS_UP_AND_DOWN } from "../../graphql/INSERT_THUMBS_UP";
import { useAuth } from "../../lib/authContext";
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

  const { user } = useAuth();

  const hrId = user.uid;
  const [ThumbUpAndDownMutation, { data, loading, error }] = useMutation(
    INSERT_THUMBS_UP_AND_DOWN,

    {
      variables: {
        hrId: "incompleteField",
        jobName: "incompleteField",
        jobSeniority: "incompleteField",
        jobType: "incompleteField",
        status: "incompleteField",
        candidateId: 0,
      },
    }
  );

  const thumbUpClick = () => {
    thumbUpSetCheck((prevCheck) => !prevCheck);
    thumbDownSetCheck(false);

    ThumbUpAndDownMutation({
      variables: {
        hrId: hrId,
        jobName: "",
        jobSeniority: "",
        jobType: "",
        status: "thumbsUp",
        candidateId: userID,
      },
    });
  };

  const thumbDownClick = () => {
    thumbDownSetCheck((prevCheck) => !prevCheck);
    thumbUpSetCheck(false);

    ThumbUpAndDownMutation({
      variables: {
        hrId: hrId,
        jobName: "",
        jobSeniority: "",
        jobType: "",
        status: "thumbsDown",
        candidateId: userID,
      },
    });
  };
  //refetch queries.

  const moveToContacted = () => {
    ThumbUpAndDownMutation({
      variables: {
        hrId: hrId,
        jobName: "",
        jobSeniority: "",
        jobType: "",
        status: "contacted",
        candidateId: userID,
      },
    });
  };

  return (
    <div className="py-0.5 col-span-12">
      <div
        className={
          "w-6/6 h-24 border-2 border-gray-200 filter drop-shadow-md rounded-md bg-white grid grid-cols-12 grid-flow-col text-sm"
        }
      >
        <div className={"grid-start-1"}>
          <div className={"grid grid-cols-2"}>
            <div className={"grid grid-cols-2"}>
              <div
                className={`flex items-center justify-center pt-4 cursor-pointer`}
              >
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
              <div
                className={
                  "flex items-center justify-center pt-4 cursor-pointer"
                }
              >
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
                className={
                  "text-gray-500 text-xs flex justify-center items-center"
                }
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
          className={
            "grid-start-10 col-span-1 flex justify-center items-center"
          }
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
              <ButtonConnected
                backgroundColour="white"
                onClick={moveToContacted}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={"grid grid-cols-12"}>
        <div className={"col-start-2"}></div>
      </div>
    </div>
  );
};
