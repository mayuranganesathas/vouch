import React from "react";
import { UsersIcon } from "@heroicons/react/solid";

export interface CandidateCountProps {
  candidateCount: any;
  // lastCandidateCount: number;
}

export const CandidateCount: React.FC<CandidateCountProps> = ({
  candidateCount,
  // lastCandidateCount,
}) => {
  return (
    <div className={"grid justify-items-end"}>
      <div className={"flex flex-nowrap text-xl"}>
        <div className={""}>{candidateCount} Candidates</div>
      </div>
      {/* <div
        className={
          "items-center rounded-full px-0.5 text-white text-xs col-start-4 row-start-1"
        }
      > */}
      {/* <div className={"text-gray-600"}>
          {" "}
          {candidateCount - lastCandidateCount} New
        </div> */}
      {/* </div> */}
    </div>
  );
};

/*<div className={"flex items-center"}>
        <div className={"grid grid-cols-10 font-bold text-red-400 text-sm"}>
          <div className={"flex justify-self-end col-start-11"}>
            {" "}
            ({candidateCount.length - lastCandidateCount}
          </div>
          <div className={"col-start-13 px-2"}> New)</div>
        </div>{" "}
      </div>*/
