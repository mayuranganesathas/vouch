import React from "react";
export interface CandidateTileProps {}

export const CandidateTile: React.FC<CandidateTileProps> = ({}) => {
  return (
    <div>
      <div
        className={
          "w-5/6 h-14 border-2 border-gray-200 filter drop-shadow-md rounded-md bg-white grid grid-cols-14 text-sm"
        }
      >
        <div className={"grid-start-1 grid-span-1"}>star component</div>
        <div className={"grid-start-2"}> Referral icon</div>
        <div className={"grid-start-3 grid-end-5"}> Role interviewed for</div>
        <div className={"grid-start-6 grid-end-7"}> Referring By</div>
        <div className={"grid-start-8 grid-end-9"}> Vetted To</div>
        <div className={"grid-start-10"}> Last Role</div>
        <div className={"grid-start-11 grid-end-12"}> Stand Out Skill</div>
        <div className={"grid-start-13 grid-end-14"}> Buttons </div>
      </div>
    </div>
  );
};
