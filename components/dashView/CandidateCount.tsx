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
          className={"justify-center"}
          src="./images/candidates.png"
          width="50"
          height="50"
        />
      </div>
      <div className={"flex items-center font-bold col-start-3 text-xl"}>
        <div className={""}>{candidateCount.length} Candidates</div>
      </div>
      <div className={"col-start-5 items-start text-red-400 text-sm pt-1"}>
        {" "}
        ({candidateCount.length - lastCandidateCount} New)
      </div>
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
