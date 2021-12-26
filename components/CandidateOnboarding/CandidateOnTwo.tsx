import React from "react";
import { ButtonVouch } from "../ui/ButtonVouch";
import { SearchFilterDash } from "../ui/searchFilterDash";
import { FlagIcon } from "@heroicons/react/solid";
import { LockOpenIcon } from "@heroicons/react/solid";
import { TagIcon } from "@heroicons/react/solid";
import { MailIcon } from "@heroicons/react/solid";
import { UserAddIcon } from "@heroicons/react/solid";
import { LightningBoltIcon } from "@heroicons/react/solid";
import { RewindIcon } from "@heroicons/react/solid";
import { ChevronDoubleRightIcon } from "@heroicons/react/solid";

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
  yearArray: any[];
  industryArray: any[];
  // locationState: string;
  // setLocationState: (remoteStatus: string) => void;
  // locationCity: string;
  // setLocationCity: (locationCity: string) => void;

  firstName: string;
  setFirstName: (firstName: string) => void;

  lastName: string;
  setLastName: (lastName: string) => void;

  linkedIn: string;
  setLinkedIn: (linkedIn: string) => void;

  candidateEmail: string;
  setCandidateEmail: (candidateEmail: string) => void;

  companyWebsite1: string;
  setCompanyWebsite1: (companyWebsite1: string) => void;

  companyWebsite2: string;
  setCompanyWebsite2: (companyWebsite2: string) => void;

  companyWebsite3: string;
  setCompanyWebsite3: (companyWebsite3: string) => void;

  previousStage: () => void;
  completeForm: () => void;
  formValidation: () => boolean;
}

export const CandidateOnTwo: React.FC<CandidateOnTwoProps> = ({
  companyWebsite1,
  companyWebsite2,
  companyWebsite3,
  setCompanyWebsite2,
  setCompanyWebsite1,
  setCompanyWebsite3,
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
  yearArray,
  industryArray,
  // locationState,
  // setLocationState,
  // locationCity,
  // setLocationCity,
  // remoteArray,

  firstName,
  setFirstName,
  lastName,
  setLastName,
  candidateEmail,
  setCandidateEmail,
  linkedIn,
  setLinkedIn,
  previousStage,
  completeForm,
  formValidation,
}) => {
  return (
    <div className={"flex justify-center items-center"}>
      <div
        className={
          "shadow-lg rounded-xl w-3/5 h-auto bg-white grid grid-cols-3"
        }
      >
        <div className={"py-4 px-4 col-start-1 bg-VouchMed rounded-l-lg"}>
          <div className={"py-10 "}>
            <div className={"flex justify-center"}>
              <UserAddIcon className={"w-12 h-auto "} fill="white" />
            </div>
            <div
              className={
                "flex justify-center py-2 font-bold text-lg text-white"
              }
            >
              JOIN THE NETWORK
            </div>
            <div className={"text-sm text-white w-full text-center px-6"}>
              You really impressed in your last interview. That time and
              validation is valuable.
            </div>
            <div className={"flex justify-center pt-12"}>
              <LightningBoltIcon className={"w-12 h-auto"} fill="white" />
            </div>
            <div
              className={
                "text-sm text-white  w-full px-6 pt-2 pb-12 text-center"
              }
            >
              Provide some additional career info to boost your profile in our
              network of actively hiring companies
            </div>
            <div className={"flex justify-center pt-8"}>
              <RewindIcon className={"w-12 h-auto"} fill="white" />
            </div>
            <div
              className={
                "text-sm text-white text-center px-6 w-full pt-2 pb-12"
              }
            >
              Don’t start back from at zero. Get referred to other comparable
              positions.
            </div>
            <div className={"flex justify-center pt-8"}>
              <ChevronDoubleRightIcon className={"w-12 h-auto"} fill="white" />
            </div>
            <div>
              <div
                className={
                  "text-sm text-white py-2 width-full text-center px-6"
                }
              >
                Use Vouch to start in the later in the hiring pipeline for your
                next dream job!{" "}
              </div>
            </div>
          </div>
        </div>
        <div className={"col-start-2 col-span-2 px-4 py-4"}>
          <div className={"font-bold text-base"}>
            Tell companies a little bit about yourself
          </div>
          <div className={"pt-1 text-xs text-gray-500"}>
            A few details to help standout in our qualified pool of referrals
          </div>
          <div className={"text-gray-500 text-xs pt-4 pb-1"}>
            Example of what HR Managers see in their dashboard:{" "}
          </div>
          <div className={"px-8"}>
            <img src="./images/tileExample.png" width="full" height="auto" />
          </div>
          <div className="py-6">
            <hr className="" />
          </div>
          <div className={"text-base font-bold"}>Your Profile</div>
          <div className={"py-1 text-xs text-gray-500"}>
            All fields are required{" "}
          </div>
          <div className="grid grid-cols-2 gap-2">
            <input
              className={"border border-gray-300 text-xs rounded py-1 px-4"}
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
            <input
              className={"border border-gray-300 text-xs rounded py-1 px-4"}
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
          </div>
          <div className={"grid grid-cols-2 gap-2"}>
            <div className={"text-xs py-4"}>
              <div>
                <MailIcon className={"w-4 h-auto"} fill="black" />{" "}
              </div>
              <input
                className={
                  "border border-gray-300 text-xs w-full rounded py-1 px-4"
                }
                placeholder="Enter address"
                value={candidateEmail}
                onChange={(e) => setCandidateEmail(e.target.value)}
              ></input>
            </div>
            <div className={"text-xs py-4"}>
              <div>
                {" "}
                <img
                  src="./images/linkedInTile.png"
                  width="12"
                  height="auto"
                  className={"pb-1"}
                />
              </div>
              <input
                className={
                  "border border-gray-300 text-xs w-full rounded py-1 px-4"
                }
                placeholder="LinkedIn Profile URL"
                value={linkedIn}
                onChange={(e) => setLinkedIn(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2"></div>
          <div className="py-6">
            <hr className="" />
          </div>
          <div className={"text-base font-bold"}>Prior Work Experience</div>
          <div className={"py-1 text-xs text-gray-500"}>
            Current or previous role (required){" "}
          </div>
          <div className={"grid grid-cols-2 "}>
            <div className={"col-start-1  py-1 pb-4"}>
              <div className={"pr-1"}>
                <input
                  className={
                    "border border-gray-300 text-xs w-full rounded py-1 px-4"
                  }
                  placeholder="Company Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)} //PROP
                ></input>
              </div>
              <div className={"pt-4 pr-1"}>
                <div className={""}>
                  <input
                    className={
                      "border border-gray-300 text-xs w-full rounded py-1 px-4"
                    }
                    placeholder="Position Title"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} //PROP
                  ></input>
                </div>
              </div>
            </div>
            <div className={"col-start-2"}>
              <div className={"pt-1 pl-1"}>
                <input
                  className={
                    "border border-gray-300 text-xs w-full rounded py-1 px-4"
                  }
                  placeholder="Company Website"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)} //PROP
                ></input>
              </div>
            </div>
          </div>
          <div className={"grid grid-cols-3 gap-4"}>
            <div>
              <div className={"text-xs"}>Job Category</div>

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
              <div className={"text-xs"}>Industry</div>
              <SearchFilterDash
                backgroundColour={"white"}
                dropDownArray={industryArray}
                value={industry1}
                onChange={(e) => {
                  setIndustry1(e.target.value);
                }}
                width={"wide-lg"}
              />
            </div>
            <div>
              <div className={"text-xs"}>Total Years of Experience</div>
              <SearchFilterDash
                backgroundColour={"white"}
                dropDownArray={yearArray}
                value={year1}
                onChange={(e) => {
                  setYear1(e.target.value);
                }}
                width={"wide-lg"}
              />
            </div>
          </div>

          <div className={"text-xs pt-8"}>
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
              label={"Submit"}
              disabled={formValidation() ? false : true}
              onClick={completeForm}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
