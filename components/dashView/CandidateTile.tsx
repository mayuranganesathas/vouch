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
import { useMutation } from "@apollo/client";
import { INSERT_THUMBS_UP_AND_DOWN } from "../../graphql/INSERT_THUMBS_UP";
import { useAuth } from "../../lib/authContext";
import { QUERY_SHORT_LIST } from "../../graphql/QUERY_SHORTLIST";
export interface CandidateTileProps {
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
  userLinkedinURL: string;
  userEmailAction: string;
  refetchShortList: any;
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
  userLinkedinURL,
  userEmailAction,
  refetchShortList,
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
                    "col-start-1 border-2 rounded-t-full rounded-b-full"
                  }
                >
                  <div className={"flex justify-center pt-1"}>
                    <StarIcon
                      className={
                        "h-6 w-6 text-gray-400 hover:text-yellow-200 cursor-pointer"
                      }
                      onClick={thumbUpClick}
                    />
                  </div>
                  <div className="py-2 flex justify-center">
                    <EyeOffIcon
                      className={
                        "h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer"
                      }
                      onClick={thumbDownClick}
                    />
                  </div>
                  <div className={"flex justify-center pb-1"}>
                    <MailOpenIcon
                      className={`h-5 w-5 text-gray-400 hover:text-blue-500 cursor-pointer`}
                      onClick={moveToContacted}
                    />
                  </div>
                </div>
                <div className={"col-start-3 col-span-5 pt-4 pl-2"}>
                  <p className={"font-bold text-gray-900 text-base"}>
                    {userID}
                  </p>
                  <div className={""}> {jobLocation}</div>
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

            <div className={"col-start-2 pt-4 pl-4"}>
              <div>
                <p className={"w-full text-base border-r-4 border-gray-100 "}>
                  {pastPosition1}
                </p>
              </div>
              <div>
                <p className={"w-full pt-1 border-r-4 border-gray-100"}>
                  in {pastIndustry1}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={"col-start-2 pt-4"}>
          <div className={"grid grid-cols-2 "}>
            <div className={"col-start-1 pl-12"}>
              <div className={""}>
                <div>
                  <p className="w-full text-base">{companyName}</p>
                  <p className="w-full pt-1 ">
                    {" "}
                    # of Employees: {numEmployees}
                  </p>
                </div>
              </div>
            </div>
            <div className={"col-start-2 pl-4"}>
              <p className={"text-base"}> Position Open Text Prop</p>

              <p className={"w-full pt-1 "}>{stageInterview}</p>
            </div>
          </div>
        </div>
        <div className={"col-start-3 pt-4 "}>
          <div className={"grid grid-cols-2"}>
            <div className={"col-start-1 pl-8"}>
              <p className={"w-full text-base"}>${salaryRange} k/year </p>
            </div>
            <div className={"col-start-2"}>
              <p className={"w-full font-gray-500 "}>[S] {standOutSkill1}</p>
              <p className={"w-full  font-gray-500 pt-1 "}>[S] New Prop</p>
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
                  
                   <div className={"pl-10 pt-4"}>
                    <img src={companyLogo} width="45" height="auto" />
                  </div>
                  
                  <p className={"w-full text-base  pt-1"}>
                Role: {positionTitle}
              </p>*/
