import React, { useEffect, useState } from "react";
import { ButtonLinkedin } from "./ButtonLinkedin";
import { StarIcon } from "@heroicons/react/solid";
import { EyeOffIcon } from "@heroicons/react/solid";
import { MailOpenIcon } from "@heroicons/react/solid";
import { ButtonEmail } from "./ButtonEmail";
import { CompTooltip } from "./CompTooltip";
import ReactTooltip from "react-tooltip";
import { ButtonConnected } from "./ButtonConnected";
import { useMutation } from "@apollo/client";
import { INSERT_THUMBS_UP_AND_DOWN } from "../../graphql/INSERT_THUMBS_UP";
import { useAuth } from "../../lib/authContext";
import { QUERY_SHORT_LIST } from "../../graphql/QUERY_SHORTLIST";
export interface CandidateTileProps {
  userID: number;
  positionTitle: string;
  salaryRange: string;
  jobLocation: string;
  numEmployees: string;
  companyName: string;
  stageInterview: string;
  pastPosition1: string;
  standOutSkill1: string;
  standOutSkill2: string;
  userLinkedinURL: string;
  userEmailAction: string;
  firstName: string;
  lastName: string;
  refetchShortList: any;
  pastCompanyName: string;
}

export const CandidateTile: React.FC<CandidateTileProps> = ({
  userID,
  firstName,
  lastName,
  positionTitle,
  salaryRange,
  jobLocation,
  numEmployees,
  companyName,
  stageInterview,
  pastPosition1,
  standOutSkill1,
  standOutSkill2,
  userLinkedinURL,
  userEmailAction,
  refetchShortList,
  pastCompanyName,
}) => {
  const [thumbUpCheck, setthumbUpSetCheck] = useState(false);
  const [thumbDownCheck, setthumbDownSetCheck] = useState(false);
  const [moveToContactedCheck, setmoveToContactedCheck] = useState(false);

  const { user } = useAuth();

  const hrId = user.uid;

  const [ThumbUpAndDownMutation, { data, loading, error }] = useMutation(
    //Mutation for updating a user emoji value after a practice
    INSERT_THUMBS_UP_AND_DOWN,
    {
      onCompleted: refetchShortList,
    }
  );

  const thumbUpClick = () => {
    setthumbUpSetCheck((prevCheck) => !prevCheck);
    setthumbDownSetCheck(false);

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
    setthumbDownSetCheck((prevCheck) => !prevCheck);
    setthumbUpSetCheck(false);

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
    setmoveToContactedCheck((prevCheck) => !prevCheck);
    setmoveToContactedCheck(false);
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
    <div className="py-2  col-span-full">
      <div
        className={
          "w-6/6 max-h-fit filter drop-shadow-sm bg-white grid grid-cols-3 grid-flow-col text-sm text-gray-500 py-2 "
        }
      >
        <div className={"col-start-1  "}>
          <div className={"grid grid-cols-2 content-left h-full"}>
            <div className={"col-start-1 "}>
              <div className={"grid grid-cols-8 pl-2"}>
                <div
                  className={
                    "col-start-1 col-span-2 px-2 grid place-content-evenly"
                  }
                >
                  <div
                    className={
                      "border-2 rounded-t-full rounded-b-full grid place-content-evenly"
                    }
                  >
                    <div className={"flex justify-center "}>
                      <StarIcon
                        className={
                          "h-5 w-5 text-gray-400 hover:text-yellow-200 cursor-pointer"
                        }
                        onClick={thumbUpClick}
                      />
                    </div>
                    <div className="py-1 flex justify-center">
                      <EyeOffIcon
                        className={
                          "h-4 w-4 text-gray-400 hover:text-red-500 cursor-pointer"
                        }
                        onClick={thumbDownClick}
                      />
                    </div>
                    <div className={"flex justify-center pb-0.5"}>
                      <MailOpenIcon
                        className={`h-4 w-4 text-gray-400 hover:text-blue-500 cursor-pointer`}
                        onClick={moveToContacted}
                      />
                    </div>
                  </div>
                </div>
                <div className={"col-start-3 col-span-5 pt-2 pl-2"}>
                  <p className={"font-bold text-gray-900 text-sm"}>
                    {firstName} {lastName}
                  </p>
                  <div className={"text-xs"}> {jobLocation}</div>
                  <div className={""}>
                    <div className={"grid justify-items-start pt-1"}>
                      <ButtonLinkedin
                        backgroundColour="white"
                        userLinkedinURL={userLinkedinURL}
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={"col-start-2 pt-2 pl-4"}>
              <div>
                <p className={"w-full border-r-4 border-gray-300 "}>
                  {pastPosition1}
                </p>
              </div>
              <div>
                <p className={"w-full pt-1 text-xs border-r-4 border-gray-300"}>
                  at {pastCompanyName}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={"col-start-2 pt-2"}>
          <div className={"grid grid-cols-2 "}>
            <div className={"col-start-1 pl-12"}>
              <div className={""}>
                <div>
                  <p className="w-full">{companyName}</p>
                  <p className="w-full pt-1 text-xs">
                    {" "}
                    Employees: {numEmployees}
                  </p>
                </div>
              </div>
            </div>
            <div className={"col-start-2"}>
              <p className={""}> {positionTitle}</p>

              <p className={"w-full pt-1 text-xs"}>{stageInterview}</p>
            </div>
          </div>
        </div>
        <div className={"col-start-3 pt-2 "}>
          <div className={"grid grid-cols-2"}>
            <div className={"col-start-1"}>
              <p className={""}>{salaryRange} </p>
            </div>
            <div className={"col-start-2"}>
              <p className={"w-full font-gray-500 flex flex-wrap  text-xs"}>
                <StarIcon className={"h-4 w-4 text-VouchGreen "} />
                {standOutSkill1}
              </p>
              <p className={"w-full  ont-gray-500 pt-1 flex text-xs "}>
                <StarIcon className={"h-4 w-4 text-VouchGreen"} />
                {standOutSkill2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/*<div className={"grid justify-items-start pl-2"}>
  <ButtonEmail backgroundColour="white" userEmailAction={userEmailAction} />
</div>;

 <p className={"pt-1 text-base "}>
 Industry: (new prop) </p>
                  
                   <div className={"pl-10 pt-2"}>
                    <img src={companyLogo} width="45" height="auto" />
                  </div>
                  
                  <p className={"w-full text-base  pt-1"}>
                Role: {positionTitle}
              </p>*/
