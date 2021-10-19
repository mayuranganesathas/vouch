import React from "react";

export interface CandidateCountProps {
  totalCandidateIcon: string;
  candidateCount: any[];
}

export const CandidateCount: React.FC<CandidateCountProps> = ({
  totalCandidateIcon,
  candidateCount,
}) => {
  return (
    <div className={"grid grid-cols-6 w-48"}>
      <div
        className={"flex items-center justify-center col-start-1 col-span-2"}
      >
        <img src={totalCandidateIcon} className="" width="50" height="50" />
      </div>
      <div
        className={
          "flex items-center justify-center text-xs col-start-3 col-span-1"
        }
      >
        {candidateCount.length}
      </div>

      <div
        className={
          "flex items-center justify-center text-xs font-bold col-start-4 col-span-3"
        }
      >
        Candidates
      </div>
    </div>
  );
};
