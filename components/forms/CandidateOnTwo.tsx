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
          "shadow-lg rounded-xl w-2/5 h-auto bg-white flex justify-center  px-5 "
        }
      >
        
        <div className={" py-8 text-gray-700 px-12"}>
          <div className={"font-bold text-base flex flex-nowrap"}>
            VOUCH Referrals - Candidate Info<InformationCircleIcon
                  className=" text-gray-300 w-5 h-5 hover:text-VouchDark cursor-pointer pl-1"
                  onClick={() => setIconModalIsOpen(true)}
                />
          </div>
          <div className={"pt-1 text-xs text-gray-500 w-full"}>
            We require minimal information from you to preserve your privacy. Only first anme, location and referring company details will be shared actively with hiring companies.
          </div>
          
         
          
         
          <div className={"pt-8 pb-4"}>
              <input
                className={
                  "border border-gray-300 text-xs w-full rounded py-1 px-4"
                }
                placeholder="Email Address"
                value={candidateEmail}
                onChange={(e) => setCandidateEmail(e.target.value)}
              ></input>
          </div>
          <div className ={"py-4"}>  
            <input
              className={"border border-gray-300 w-full text-xs rounded py-1 px-4"}
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
          </div>
            
            
          
          <div className={"grid grid-cols-2 gap-2 w-full"}>
           
            
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
          <div className={"text-xs py-4 w-full flex flex-nowrap"}>
              <div className="grid content-center pt-1 pr-2">
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
            <div className={"text-xs w-full italic text-gray-400"}>
                Interested companies will request your LinkedIn. They will ONLY see the URL if you give permission. An email will be sent to notify you of a LinkedIn Request. Your LinkedIn URL will otherwise not appear anywhere on the VOUCH platform without your consent.
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
