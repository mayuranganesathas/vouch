import React, { useState } from "react";
import { ButtonVouch } from "../ui/ButtonVouch";
import { SearchFilterDash } from "../ui/searchFilterDash";
import { UserGroupIcon } from "@heroicons/react/solid";
import { MailOpenIcon } from "@heroicons/react/solid";
import { UserAddIcon } from "@heroicons/react/solid";
import { SearchCircleIcon } from "@heroicons/react/solid";
import { PositionFilterVouch } from "../ui/PositionFilterVouch";
import { UsersIcon } from "@heroicons/react/solid";
import { FlagIcon } from "@heroicons/react/solid";
import { LockOpenIcon } from "@heroicons/react/solid";
import { TagIcon } from "@heroicons/react/solid";
import {
  industryArrayList,
  jobCompanySizeDropdownData,
  stateProvinceDropdownArray,
} from "../../pages/api/dropdownCategories";
import { InformationCircleIcon } from "@heroicons/react/solid";
import HRRegInstrucModal from "./HRRegInstrucModal";

export interface HROnboardingProps {
  onClick: () => void;

  industryArray: string;
  setIndustryArray: (industryArray: string) => void;

  employeeArray: string;
  setEmployeeArray: (employeeArray: string) => void;

  hrVoucherCompanyName: string;
  setHrVoucherCompanyName: (hrVoucherCompanyName: string) => void;

  hrVoucherCompanyWebsite: string;
  setHrVoucherWebsite: (hrVoucherVoucherWebsite: string) => void;

  hrCityLocation: string;
  setHrCityLocation: (hrCityLocation: string) => void;

  hrStateLocation: string;
  setHrStateLocation: (hrStateLocation: string) => void;

  checkBoxValidation: boolean;
  setCheckBoxValidation: (checkBoxValidation: boolean) => void;

  hrFirstName: string;
  setHrFirstName: (hrFirstName: string) => void;

  hrLastName: string;
  setHrLastName: (hrLastName: string) => void;

  formValidation: () => boolean;
}

export const HROnboarding: React.FC<HROnboardingProps> = ({
  onClick,
  industryArray,
  setIndustryArray,
  employeeArray,
  setEmployeeArray,
  hrVoucherCompanyName,
  setHrVoucherCompanyName,
  hrVoucherCompanyWebsite,
  setHrVoucherWebsite,
  hrCityLocation,
  setHrCityLocation,
  hrStateLocation,
  setHrStateLocation,
  checkBoxValidation,
  setCheckBoxValidation,
  formValidation,
  hrFirstName,
  setHrFirstName,
  hrLastName,
  setHrLastName,
}) => {
  const [iconModalIsOpen, setIconModalIsOpen] = useState(false);

  return (
    <div className={"flex justify-center items-center"}>
      <div className={"shadow-lg rounded-xl w-2/6 h-auto bg-white"}>
        <div className={"grid grid-cols-2"}>
          <div className={"col-start-1 col-span-2 px-8 text-gray-700 text-xs"}>
            <div
              className={"pt-4 text-left font-bold text-sm flex flex-nowrap"}
            >
              VOUCH - Set Up Your Company Profile
              <InformationCircleIcon
                className=" text-gray-300 w-5 h-5 hover:text-VouchDark cursor-pointer pl-1"
                onClick={() => setIconModalIsOpen(true)}
              />
            </div>

            <div className={"text-gray-500 py-4 pt-1"}>
              Thank you for joining Vouch. Please take a moment to set up your
              company profile. This information will be shared with other
              companies in the platform.
            </div>

            <div className="">
              <hr className="" />
            </div>
            <div className={"font-bold text-sm pt-6"}>Profile Details</div>
            <div className={"grid grid-cols-2 pb-6"}>
              <div className={"pt-1"}>
                <input
                  className={
                    "border border-gray-300 text-xs rounded py-1 px-4 w-5/6"
                  }
                  placeholder="First name"
                  value={hrFirstName}
                  onChange={(e) =>
                    setHrFirstName(e.target.value)
                  } /*needs new props*/
                />
              </div>
              <div className={"pt-1"}>
                <input
                  className={
                    "border border-gray-300 text-xs rounded py-1 px-4 w-5/6"
                  }
                  placeholder="Last name"
                  value={hrLastName}
                  onChange={(e) =>
                    setHrLastName(e.target.value)
                  } /*needs new props*/
                />
              </div>
            </div>

            <div className={"font-bold text-sm"}>Company Details</div>
            <div className={"grid grid-cols-3 "}>
              <div className={"col-start-1 col-span-2 pt-1"}>
                <div className={"pt-4"}>
                  <input
                    className={
                      "border border-gray-300 text-xs rounded py-1 px-4 w-5/6"
                    }
                    placeholder="Enter company name"
                    value={hrVoucherCompanyName}
                    onChange={(e) => setHrVoucherCompanyName(e.target.value)}
                  />
                </div>

                <div className={"py-5"}>
                  <input
                    className={
                      "border border-gray-300 text-xs rounded py-1 px-4 w-5/6"
                    }
                    placeholder="Website - Paste your company URL"
                    value={hrVoucherCompanyWebsite}
                    onChange={(e) => setHrVoucherWebsite(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    className={
                      "border border-gray-300 text-xs rounded py-1 px-4 w-5/6"
                    }
                    placeholder="Location - City of your Corporate HQ"
                    value={hrCityLocation}
                    onChange={(e) => setHrCityLocation(e.target.value)}
                  />
                </div>
              </div>
              <div className={"col-start-3"}>
                <div>
                  <div className={"text-xs font-bold text-gray-500"}>
                    Industry
                  </div>
                  <SearchFilterDash
                    backgroundColour={"white"}
                    dropDownArray={industryArrayList}
                    value={industryArray}
                    onChange={(e) => {
                      setIndustryArray(e.target.value);
                    }}
                  />
                </div>
                <div className={"py-1"}>
                  <div className={"text-xs font-bold text-gray-500"}>
                    Company Size
                  </div>
                  <SearchFilterDash
                    backgroundColour={"white"}
                    dropDownArray={jobCompanySizeDropdownData}
                    value={employeeArray}
                    onChange={(e) => {
                      setEmployeeArray(e.target.value);
                    }}
                  />
                </div>
                <div className={"text-xs font-bold text-gray-500"}>
                  State / Province
                </div>
                <SearchFilterDash
                  backgroundColour={"white"}
                  dropDownArray={stateProvinceDropdownArray}
                  value={hrStateLocation}
                  onChange={(e) => {
                    setHrStateLocation(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className={"flex content-end pt-8 pb-4"}>
              <form action="/action_page.php" className={"text-xs"}>
                <input
                  type="checkbox"
                  id="USCAN"
                  name="USCANVerified"
                  checked={checkBoxValidation}
                  onChange={(e) => setCheckBoxValidation(e.target.checked)}
                />
              </form>

              <div className={"text-xs pl-2"}>
                {" "}
                We recruit for positions in the USA and/or Canada
              </div>
            </div>
            <div className={"col-span-2"}>
              <div className="flex justify-center pt-2">
                <ButtonVouch
                  backgroundColour={"VouchGreen"}
                  buttonType={"rounded"}
                  textColour={"white"}
                  label={"JOIN"}
                  disabled={formValidation()}
                  onClick={onClick}
                  buttonWidth="wide"
                />
              </div>
            </div>
            <div className={"w-full text-xs text-gray-300 py-2"}>
              By clicking on “Refer Candidate”, you agree to the VouchRecruit
              <a
                href={"https://www.vouchrecruit.com/termsandconditions"}
                target="_blank"
                className="text-VouchGreen"
              >
                {" "}
                Terms and conditions.
              </a>
              To see how we may use the information, please take a look at our
              <a
                href="https://www.vouchrecruit.com/privacypolicy"
                target="_blank"
                className="text-VouchGreen"
              >
                {" "}
                Privacy Policy.
              </a>
              <div className="flex justify-center items-center pt-12">
                <img
                  src="./images/VouchLogo1.png"
                  width="100"
                  height="auto"
                  className={"flex justify-center items-center py-2 px-2"}
                />
              </div>
              <HRRegInstrucModal
                modalIsOpen={iconModalIsOpen}
                closeModal={() => setIconModalIsOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
