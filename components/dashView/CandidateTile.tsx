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
        hrID: "incompleteField",
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
    ThumbUpAndDownMutation({
      variables: {
        hrID: hrId,
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
    ThumbUpAndDownMutation({
      variables: {
        hrID: hrId,
        jobName: "",
        jobSeniority: "",
        jobType: "",
        status: "thumbsDown",
        candidateId: userID,
      },
    });
  };

  const moveToContacted = () => {
    ThumbUpAndDownMutation({
      variables: {
        hrID: hrId,
        jobName: "",
        jobSeniority: "",
        jobType: "",
        status: "contacted",
        candidateId: userID,
      },
    });
  };

  return (
    <div className="py-0.5">
      <div
        className={
          "w-6/6 h-24 border-2 border-gray-200 filter drop-shadow-md rounded-md bg-white grid grid-cols-14 grid-flow-col text-sm"
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
        <div className={"grid-start-2 grid-end-5 pt-4 pl-6"}>
          <div className={""}>
            <div>{positionTitle}</div>
            <div className={"pt-1"}> ${salaryRange} K/year</div>
            <div className={"pt-2 text-gray-500 text-xs"}> {jobLocation}</div>
          </div>
        </div>

        <div className={"grid-start-5 grid-end-7 pt-4"}>
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

        <div className={"grid-start-7 grid-end-9 pt-7 pl-8"}>
          <div className={""}>{stageInterview}</div>
          <div className={"text-gray-500 text-xs"}>{stageNumber}</div>
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
        <div className={"grid-start-14 flex justify-center items-center py-1"}>
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
      <div className={"grid grid-cols-14"}>
        <div className={"col-start-2"}></div>
      </div>
    </div>
  );
};
