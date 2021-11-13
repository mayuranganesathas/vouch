import React from "react";
import { ButtonVouch } from "../ui/ButtonVouch";
import { SearchFilterDash } from "../ui/searchFilterDash";

export interface CandidateOnTwoProps {
  job1: string;
  setJob1: (job1: string) => void;
  job2: string;
  setJob2: (job2: string) => void;
  job3: string;
  setJob3: (job3: string) => void;
  year1: string;
  setYear1: (year1: string) => void;
  year2: string;
  setYear2: (year2: string) => void;
  year3: string;
  setYear3: (year3: string) => void;
  industry1: string;
  setIndustry1: (industry1: string) => void;
  industry2: string;
  setIndustry2: (industry2: string) => void;
  industry3: string;
  setIndustry3: (industry3: string) => void;
  jobArray: any[];
  setJobArray: (jobArray: any[]) => void;
  yearArray: any[];
  setYearArray: (yearArray: any[]) => void;
  industryArray: any[];
  setIndustryArray: (industryArray: any) => void;
}

export const CandidateOnTwo: React.FC<CandidateOnTwoProps> = ({
  job1,
  setJob1,
  job2,
  setJob2,
  job3,
  setJob3,
  year1,
  setYear1,
  year2,
  setYear2,
  year3,
  setYear3,
  industry1,
  setIndustry1,
  industry2,
  setIndustry2,
  industry3,
  setIndustry3,
  jobArray,
  setJobArray,
  yearArray,
  setYearArray,
  industryArray,
  setIndustryArray,
}) => {
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
              dropDownArray={jobArray}
              value={job1}
              onChange={(e) => {
                setJob1(e.target.value);
              }}
              width={"wide-sm"}
            />
            <SearchFilterDash
              backgroundColour={"white"}
              dropDownArray={jobArray}
              value={job2}
              onChange={(e) => {
                setJob2(e.target.value);
              }}
              width={"wide-sm"}
            />
            <SearchFilterDash
              backgroundColour={"white"}
              dropDownArray={jobArray}
              value={job3}
              onChange={(e) => {
                setJob3(e.target.value);
              }}
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
              dropDownArray={yearArray}
              value={year1}
              onChange={(e) => {
                setYear1(e.target.value);
              }}
              width={"wide-lg"}
            />
            <SearchFilterDash
              backgroundColour={"white"}
              dropDownArray={yearArray}
              value={year2}
              onChange={(e) => {
                setYear2(e.target.value);
              }}
              width={"wide-lg"}
            />
            <SearchFilterDash
              backgroundColour={"white"}
              dropDownArray={yearArray}
              value={year3}
              onChange={(e) => {
                setYear3(e.target.value);
              }}
              width={"wide-lg"}
            />
          </div>
          <div>
            {" "}
            <div className={"text-sm"}>Industry</div>
            <SearchFilterDash
              backgroundColour={"white"}
              dropDownArray={industryArray}
              value={industry1}
              onChange={(e) => {
                setIndustry1(e.target.value);
              }}
              width={"wide-lg"}
            />
            <SearchFilterDash
              backgroundColour={"white"}
              dropDownArray={industryArray}
              value={industry2}
              onChange={(e) => {
                setIndustry2(e.target.value);
              }}
              width={"wide-lg"}
            />
            <SearchFilterDash
              backgroundColour={"white"}
              dropDownArray={industryArray}
              value={industry3}
              onChange={(e) => {
                setIndustry3(e.target.value);
              }}
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
