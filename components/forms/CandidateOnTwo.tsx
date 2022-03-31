import React, { useState } from "react";
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
  positionCategoryDropdownArray,
  SeniorityDropdownArray,
  stateProvinceDropdownArray,
} from "../../pages/api/dropdownCategories";
import Modal from "react-modal";
import { InformationCircleIcon } from "@heroicons/react/solid";
import CanRegInstructionModal from "./CanRegInstructionsModal";

export interface CandidateOnTwoProps {
  locationState: string;
  setLocationState: (remoteStatus: string) => void;
  locationCity: string;
  setLocationCity: (locationCity: string) => void;
  candidateEmail: string;
  setCandidateEmail: (candidateEmail: string) => void;
  firstName: string;
  setFirstName: (firstName: string) => void;

  linkedIn: string;
  setLinkedIn: (linkedIn: string) => void;
  anonCheck: string;
  setAnonCheck: (anonCheck: string) => void;
  previousStage: () => void;
  completeForm: () => void;
  formValidation: () => boolean;
}

export const CandidateOnTwo: React.FC<CandidateOnTwoProps> = ({
  candidateEmail,
  setCandidateEmail,
  firstName,
  setFirstName,

  linkedIn,
  setLinkedIn,
  locationState,
  setLocationState,
  locationCity,
  setLocationCity,
  anonCheck,
  setAnonCheck,

  previousStage,
  completeForm,
  formValidation,
}) => {
  const [iconModalIsOpen, setIconModalIsOpen] = useState(false);
  return (
    <div className={"flex justify-center items-center"}>
      <div
        className={
          "shadow-lg rounded-xl lg:w-3/5 sm:4/5 h-auto bg-white flex justify-center  px-5 "
        }
      >
        <div className={" py-8 text-gray-700 px-12"}>
          <div className={"font-bold text-base flex flex-nowrap"}>
            VOUCH Referrals - Candidate Info
            <InformationCircleIcon
              className=" text-gray-300 w-5 h-5 hover:text-VouchDark cursor-pointer pl-1"
              onClick={() => setIconModalIsOpen(true)}
            />
          </div>
          <div className={"pt-1 text-xs text-gray-500 w-full"}>
            We require minimal information from you to preserve your privacy.
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
            <div className={"pt-1 text-xs w-full italic text-gray-400"}>
              *This email will be used to connect you with interested HR
              Managers with open roles that match your skill set.
            </div>
          </div>
          <div className={"py-4"}>
            <input
              className={
                "border border-gray-300 w-full text-xs rounded py-1 px-4"
              }
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
                dropDownArray={stateProvinceDropdownArray}
                value={locationState}
                defaultLabel="State/Province"
                onChange={(e) => {
                  setLocationState(e.target.value);
                }}
                width={"wide-sm"}
              />
            </div>
            <div className="text-xs flex-nowrap py-0.5">
              Do you want to remain anonymous?
              <div className={""}>
                <div className="form-check form-check-inline flex py-0.5">
                  <input
                    className="form-check-input  rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value={anonCheck}
                    onChange={(e) => setAnonCheck("anon")}
                  />
                  <label className="form-check-label inline-block text-gray-800 flex-nowrap">
                    Anonymous Profile
                  </label>
                </div>
                <div className="form-check form-check-inline flex">
                  <input
                    className="form-check-input rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200  align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value={anonCheck}
                    onChange={(e) => setAnonCheck("available")}
                  />
                  <label className="form-check-label inline-block text-gray-800">
                    Public Profile
                  </label>
                  {console.log(anonCheck)}
                </div>
              </div>
            </div>
          </div>
          <div className="text-xs text-VouchGreen">
            Candidates are 80% more likely to be contacted with a Public Profile
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
            If you selected "Anonymous Profile", your Linkedin URL will remain
            hidden until a company triggers a request AND you approve to share.
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
          <CanRegInstructionModal
            modalIsOpen={iconModalIsOpen}
            closeModal={() => setIconModalIsOpen(false)}
          />
          <div className="flex justify-center items-center pt-12">
            <img
              src="./images/VouchLogo1.png"
              width="100"
              height="auto"
              className={"flex justify-center items-center py-2 px-2"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
