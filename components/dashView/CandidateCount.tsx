import React from "react";

export interface CandidateCountProps {
  totalCandidateIcon: string;
  candidateCount: any[];
  lastCandidateCount: number;
}

export const CandidateCount: React.FC<CandidateCountProps> = ({
  totalCandidateIcon,
  candidateCount,
  lastCandidateCount,
}) => {
  return (
    <div className={"grid grid-cols-13 w-64"}>
      <div className={"col-start-1 col-span-2"}>
        <img
          src="./images/candidates.png"
          className=""
          width="50"
          height="50"
        />
      </div>
      <div className={"flex items-center col-start-3 text-xl font-bold "}>
        {candidateCount.length}
      </div>

      <div className={"flex items-center font-bold col-start-4"}>
        Candidates
      </div>
      <div className={"col-start-5 text-red-400 text-sm pt-1"}>
        {" "}
        ({candidateCount.length - lastCandidateCount}
      </div>
      <div className={"col-start-6 text-red-400 text-sm pt-1"}>New)</div>
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
