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
  locationState: string;
  setLocationState: (remoteStatus: string) => void;
  locationCity: string;
  setLocationCity: (locationCity: string) => void;
  remoteArray: any[];
  setRemoteArray: (remoteArray: any[]) => void;
  previousStage: () => void;
  completeForm: () => void;
  formValidation: () => boolean;
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
  locationState,
  setLocationState,
  locationCity,
  setLocationCity,
  remoteArray,
  setRemoteArray,
  previousStage,
  completeForm,
  formValidation,
}) => {
  return (
    <div className={"flex justify-center items-center"}>
      <div className={"px-8 pb-10 shadow-lg rounded-xl w-3/5 h-auto bg-white"}>
        <div className={"pt-8"}>Tell companies a little bit about yourself</div>
        <div className={"pt-2 text-xs"}>
          A few details to help standout in our qualified pool of referrals
        </div>
        <div className={"pb-4 border-b border-gray-200 "}></div>

        <div className={"text-sm pb-2 pt-8"}>Your Profile</div>
        <div className="grid grid-cols-4 gap-4">
          <input
            className={"border border-gray-300 text-xs rounded px-4"}
            placeholder="First Name"
          ></input>
          <input
            className={"border border-gray-300 text-xs rounded px-4"}
            placeholder="Last Name"
          ></input>
        </div>
        <div className={"grid grid-cols-3 gap-4"}>
          <div className={"text-xs pb-2 pt-8"}>Email</div>
          <div className={"text-xs pb-2 pt-8"}>LinkedIn</div>
        </div>
        <div className="grid grid-cols-3 gap-4 pb-8">
          <input
            className={"border border-gray-300 text-xs rounded px-4"}
            placeholder="Enter your email"
          ></input>
          <div className={"col-span-2"}>
            <div className={"grid grid-cols-2 gap-2"}>
              <input
                className={"border border-gray-300 text-xs rounded px-4"}
                placeholder="Paste your personal LinkedIn URL"
              ></input>
              <img src="./images/linkedInTile.png" width="20" height="20" />
            </div>
          </div>
          <div>
            <div className={"text-xs pt-8"}> Location</div>
            <div className={"grid grid-cols-3 gap-2"}>
              <SearchFilterDash
                backgroundColour={"white"}
                dropDownArray={remoteArray}
                value={locationState}
                onChange={(e) => {
                  setLocationState(e.target.value);
                }}
                width={"wide-sm"}
              />

              <SearchFilterDash
                backgroundColour={"white"}
                dropDownArray={remoteArray}
                value={locationCity}
                onChange={(e) => {
                  setLocationCity(e.target.value);
                }}
                width={"wide-sm"}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2"></div>

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
        <div className={"flex justify-center items-center gap-4 pt-4"}>
          {" "}
          <ButtonVouch
            backgroundColour={"VouchGreen"}
            buttonType={"rounded"}
            textColour={"white"}
            label={"Previous"}
            disabled={false}
            onClick={previousStage}
          />
          <ButtonVouch
            backgroundColour={"VouchGreen"}
            buttonType={"rounded"}
            textColour={"white"}
            label={"Confirm Profile"}
            disabled={formValidation() ? false : true}
            onClick={completeForm}
          />
        </div>
      </div>
    </div>
  );
};
