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
    <div className={""}>
      <div className={"row-start-1 row-span-1 w-48"}>
        <div className={"grid grid-cols-6 font-bold text-red-400 text-base"}>
          <div className={"flex justify-center items-center"}>
            {" "}
            {candidateCount.length - lastCandidateCount}
          </div>
          <div> New</div>
        </div>{" "}
      </div>
      <div className={"row-start-2 row-span-1 w-48"}>
        <div className={"grid grid-cols-6 w-48 grid-rows-2"}>
          <div
            className={
              "flex items-center justify-center col-start-1 col-span-2"
            }
          >
            <img src={totalCandidateIcon} className="" width="50" height="50" />
          </div>
          <div
            className={
              "flex items-center justify-center col-start-3 col-span-1 text-3xl"
            }
          >
            {candidateCount.length}
          </div>

          <div
            className={
              "flex items-center justify-center text-2-xl font-bold col-start-4 col-span-3"
            }
          >
            Candidates
          </div>
        </div>
      </div>
    </div>
  );
};
