import React from "react";
export interface CandidateTileProps {}

export const CandidateTile: React.FC<CandidateTileProps> = ({}) => {
  return (
    <div>
      <div
        className={
          "w-5/6 h-14 border-2 border-gray-200 filter drop-shadow-md rounded-md bg-white grid grid-cols-14 gap-2 grid-flow-col text-sm"
        }
      >
        <div className={"grid-start-1 grid-span-1"}>
          <div className={"grid grid-cols-2 grid-rows-2"}>
            <div className={"row-span-2"}>star</div>
            <div>icon</div>
            <div> ref#</div>
          </div>
        </div>
        <div className={"grid-start-2 grid-end-5"}>
          <div className={"grid-rows-3"}>
            <div>Senior Back End Dev</div>
            <div> salary $/year</div>
            <div> place | city</div>
          </div>
        </div>
        <div className={"grid-start-5 grid-end-7"}>
          <div className={"grid grid-cols-2 grid-rows-2"}>
            <div className={""}> Logo </div>
            <div className={"grid grid-rows-2"}>
              <div>250</div>
              <div className={"text-gray-500 text-xs"}>headcount</div>
            </div>
            <div className={"col-span-2"}>Company Name baby</div>
          </div>
        </div>
        <div className={"grid-start-7 grid-end-9"}> Vet (Panel Int)</div>
        <div className={"grid-start-9 grid-end-12"}>
          <div className={"grid-rows-3"}>
            <div>Position</div>
            <div className={"text-gray-500 text-xs"}>industry</div>
            <div className={"text-gray-500 text-xs"}>(see more..)</div>
          </div>
        </div>
        <div className={"grid-start-12 grid-end-13"}> Stand Out Skill</div>
        <div className={"grid-start-14 "}>
          <div className={"grid grid-rows-2"}>
            <div> [Linked]</div>
            <div> [email]</div>
          </div>
        </div>
      </div>
    </div>
  );
};
