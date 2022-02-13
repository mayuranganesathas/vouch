import React, {useState} from "react";
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
import {
  industryArrayList,
  positionCategoryDropDownArray,
  SeniorityDropDownArray,
  stateProvince,
} from "../../pages/api/dropdownCategories";
import Modal from "react-modal"
import { InformationCircleIcon } from "@heroicons/react/solid";
import CanRegInstructionModal from "./CanRegInstructionsModal"

export interface CandidateOnTwoProps {
  companyWebsite: string;
  setCompanyWebsite: (companyWebsite: string) => void;
  positionTitle: string;
  setPositionTitle: (positionTitle: string) => void;

  industry: string;
  setIndustry: (industry: string) => void;

  locationState: string;
  setLocationState: (remoteStatus: string) => void;
  locationCity: string;
  setLocationCity: (locationCity: string) => void;
  candidateEmail: string;
  setCandidateEmail: (candidateEmail: string) => void;
  firstName: string;
  setFirstName: (firstName: string) => void;
  lastName: string;
  setLastName: (lastName: string) => void;
  linkedIn: string;
  setLinkedIn: (linkedIn: string) => void;

  companyName: string;
  setCompanyName: (companyName: string) => void;

  jobCategory: string;
  setJobCategory: (jobCategory: string) => void;
  jobSeniority: string;
  setJobSeniority: (jobSeniority: string) => void;

  previousStage: () => void;
  completeForm: () => void;
  formValidation: () => boolean;
}

export const CandidateOnTwo: React.FC<CandidateOnTwoProps> = ({
  companyWebsite,
  setCompanyWebsite,
  positionTitle,
  setPositionTitle,
  companyName,
  setCompanyName,

  industry,
  setIndustry,
  jobCategory,
  setJobCategory,
  jobSeniority,
  setJobSeniority,

  candidateEmail,
  setCandidateEmail,
  firstName,
  setFirstName,
  lastName,
  setLastName,

  linkedIn,
  setLinkedIn,
  locationState,
  setLocationState,
  locationCity,
  setLocationCity,

  previousStage,
  completeForm,
  formValidation,
}) => {
  const email = () => {};
  const [iconModalIsOpen, setIconModalIsOpen] = useState(false);

  return (
    <div className={"flex justify-center items-center"}>
      <div
        className={
          "shadow-lg rounded-xl w-3/5 h-auto bg-white grid grid-cols-2"
        }
      >
        
        <div className={"col-start-1 col-span-2 px-4 py-4 text-gray-700"}>
          <div className={"font-bold text-base flex flex-nowrap"}>
            VOUCH Referrals - Candidate Info<InformationCircleIcon
                  className=" text-gray-300 w-5 h-5 hover:text-VouchDark cursor-pointer"
                  onClick={() => setIconModalIsOpen(true)}
                />
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
            <div className={"text-xs py-4"}>
              <div>
                {" "}
                <MailIcon className={"h-4 w-4 "} />
              </div>
              <input
                className={
                  "border border-gray-300 text-xs w-full rounded py-1 px-4"
                }
                placeholder="Email Address"
                value={candidateEmail}
                onChange={(e) => setCandidateEmail(e.target.value)}
              ></input>
            </div>
            <div className={"text-xs py-2"}>
              <input
                className={
                  "border border-gray-300 text-xs w-full rounded py-1 px-4"
                }
                placeholder="City"
                value={locationCity}
                onChange={(e) => setLocationCity(e.target.value)}
              ></input>
            </div>
            <div className={"text-xs py-2"}>
              <SearchFilterDash
                backgroundColour={"white"}
                dropDownArray={stateProvince}
                value={locationState}
                onChange={(e) => {
                  setLocationState(e.target.value);
                }}
                width={"wide-sm"}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2"></div>
          <div className="py-6">
            <hr className="" />
          </div>
          <div className={"text-base font-bold pt-2"}>
            Prior Work Experience
          </div>
          <div className={"py-1 text-xs text-gray-500"}>
            Current or previous role (required){" "}
          </div>
          <div className={"grid grid-cols-2 "}>
            <div className={"col-start-1  py-1"}>
              <div className={"pr-1"}>
                {" "}
                <input
                  className={
                    "border border-gray-300 text-xs w-full rounded py-1 px-4"
                  }
                  placeholder="Position Title"
                  value={positionTitle}
                  onChange={(e) => setPositionTitle(e.target.value)} //PROP
                ></input>
              </div>
              <div className={"pt-4 pr-1"}>
                <div className={""}>
                  <input
                    className={
                      "border border-gray-300 text-xs w-full rounded py-1 px-4"
                    }
                    placeholder="Company Name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)} //PROP
                  ></input>
                </div>
              </div>
            </div>
            <div className={"col-start-2"}>
              <div className={"pt-12 pl-1"}>
                <input
                  className={
                    "border border-gray-300 text-xs w-full rounded py-1 px-4"
                  }
                  placeholder="Company Website"
                  value={companyWebsite}
                  onChange={(e) => setCompanyWebsite(e.target.value)} //PROP
                ></input>
              </div>
            </div>
          </div>
          <div className={"text-xs text-gray-400 pt-1 pb-6"}>
            {" "}
            Important: Company website is used to ensure profile DOES NOT show
            up on your current company’s dashboard of candidates if they
            participate in Vouch
          </div>
          <div className={"grid grid-cols-3 gap-4"}>
            <div>
              <div className={"text-xs"}>Job Category</div>

              <SearchFilterDash
                backgroundColour={"white"}
                dropDownArray={positionCategoryDropDownArray}
                value={jobCategory}
                onChange={(e) => {
                  setJobCategory(e.target.value);
                }}
                width={"wide-sm"}
              />
            </div>

            <div>
              <div className={"text-xs"}>Industry</div>
              <SearchFilterDash
                backgroundColour={"white"}
                dropDownArray={industryArrayList}
                value={industry}
                onChange={(e) => {
                  setIndustry(e.target.value);
                }}
                width={"wide-lg"}
              />
            </div>
            <div>
              <div className={"text-xs"}>Seniority</div>
              <SearchFilterDash
                backgroundColour={"white"}
                dropDownArray={SeniorityDropDownArray}
                value={jobSeniority}
                onChange={(e) => {
                  setJobSeniority(e.target.value);
                }}
                width={"wide-lg"}
              />
            </div>
          </div>

          {/* <div className={"text-xs pt-8"}>
            {" "}
            Send a thank you message to thank the HR manager for referring you
          </div>
          <input
            className={"border border-gray-300 rounded-xl w-full h-20 pb-4"}
          ></input> */}
          <div className={"flex justify-center items-center gap-4 pt-4"}>
            {" "}
            <ButtonVouch
              backgroundColour={"VouchGreen"}
              buttonType={"square"}
              textColour={"white"}
              label={"Previous"}
              disabled={false}
              onClick={previousStage}
            />
            <ButtonVouch
              backgroundColour={"VouchGreen"}
              buttonType={"square"}
              textColour={"white"}
              label={"Submit"}
              disabled={formValidation() ? false : true}
              onClick={completeForm}
            />
          </div>
          < CanRegInstructionModal
           modalIsOpen={iconModalIsOpen}
           closeModal={() => setIconModalIsOpen(false)}
           />
        </div>
      </div>
    </div>
  );
};
