import React from "react";
import { ButtonVouch } from "../ui/ButtonVouch";
import { SearchFilterDash } from "../ui/searchFilterDash";

export interface CandidateOnTwoProps {}

export const CandidateOnTwo: React.FC<CandidateOnTwoProps> = ({}) => {
  return (
    <div className={"flex justify-center items-center"}>
      <div className={"px-8 pb-10 shadow-lg rounded-xl w-3/5 h-auto bg-white"}>
        <div className={"pt-8"}>Tell companies a little bit about yourself</div>
        <div className={"pt-2 text-xs"}>
          A few details to help standout in our qualified pool of referrals
        </div>
        <div className={"pb-4 border-b border-gray-200 "}></div>
        <div className={"grid grid-cols-4 pt-8 pb-4 pr-4 pl-8"}>
          <div>
            <div className={"text-sm"}> Position Title:</div>
            <SearchFilterDash
              backgroundColour={"white"}
              dropDownArray={["Job1", "Job2", "Job3"]}
              value={"create a prop for this"}
              onChange={(e) => e.target.value}
              width={"wide-sm"}
            />
            <SearchFilterDash
              backgroundColour={"white"}
              dropDownArray={["Job1", "Job2", "Job3"]}
              value={"create a prop for this"}
              onChange={(e) => e.target.value}
              width={"wide-sm"}
            />
            <SearchFilterDash
              backgroundColour={"white"}
              dropDownArray={["Job1", "Job2", "Job3"]}
              value={"create a prop for this"}
              onChange={(e) => e.target.value}
              width={"wide-sm"}
            />
          </div>
          <div>
            {" "}
            <div className={"text-sm"}>Company Website</div>
            <input
              className={"border border-gray-300 text-xs rounded px-4"}
              placeholder="Enter Company URL"
            ></input>
            <input
              className={"border border-gray-300 text-xs rounded px-4"}
              placeholder="Enter Company URL"
            ></input>
            <input
              className={"border border-gray-300 text-xs rounded px-4"}
              placeholder="Enter Company URL"
            ></input>
          </div>
          <div>
            {" "}
            <div className={"text-sm"}>Years In Role</div>
            <SearchFilterDash
              backgroundColour={"white"}
              dropDownArray={["10+", "5-9", "3-5", "0-2"]}
              value={"create a prop for this"}
              onChange={(e) => e.target.value}
              width={"wide-lg"}
            />
            <SearchFilterDash
              backgroundColour={"white"}
              dropDownArray={["10+", "5-9", "3-5", "0-2"]}
              value={"create a prop for this"}
              onChange={(e) => e.target.value}
              width={"wide-lg"}
            />
            <SearchFilterDash
              backgroundColour={"white"}
              dropDownArray={["10+", "5-9", "3-5", "0-2"]}
              value={"create a prop for this"}
              onChange={(e) => e.target.value}
              width={"wide-lg"}
            />
          </div>
          <div>
            {" "}
            <div className={"text-sm"}>Industry</div>
            <SearchFilterDash
              backgroundColour={"white"}
              dropDownArray={["Finance", "Gaming", "SaaS", "Space"]}
              value={"create a prop for this"}
              onChange={(e) => e.target.value}
              width={"wide-lg"}
            />
            <SearchFilterDash
              backgroundColour={"white"}
              dropDownArray={["Finance", "Gaming", "SaaS", "Space"]}
              value={"create a prop for this"}
              onChange={(e) => e.target.value}
              width={"wide-lg"}
            />
            <SearchFilterDash
              backgroundColour={"white"}
              dropDownArray={["Finance", "Gaming", "SaaS", "Space"]}
              value={"create a prop for this"}
              onChange={(e) => e.target.value}
              width={"wide-lg"}
            />
          </div>
        </div>

        <div className={"text-sm pt-4"}>
          {" "}
          Send a thank you message to thank the HR manager for referring you
        </div>
        <input
          className={"border border-gray-300 rounded-xl w-full h-20 pb-4"}
        ></input>
      </div>
    </div>
  );
};
