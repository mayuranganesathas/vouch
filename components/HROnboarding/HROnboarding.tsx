import React from "react";
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

export interface HROnboardingProps {
  onClick: () => void;

  industryArray: string;
  setIndustryArray: (industryArray: string) => void;

  employeeArray: string;
  setEmployeeArray: (employeeArray: string) => void;

  hrVoucherPosition: string;
  setHrVoucherPosition: (hrVoucherVoucherPosition: string) => void;

  hrVoucherCompanyName: string;
  setHrVoucherCompanyName: (hrVoucherCompanyName: string) => void;

  hrVoucherCompanyWebsite: string;
  setHrVoucherWebsite: (hrVoucherVoucherWebsite: string) => void;

  hrLocation: string;
  setHrLocation: (hrLocation: string) => void;

  hrCompanyLogo: string;
  setHrCompanyLogo: (hrCompanyLogo: string) => void;

  checkBoxValidation: boolean;
  setCheckBoxValidation: (checkBoxValidation: boolean) => void;

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
  hrVoucherPosition,
  setHrVoucherPosition,
  hrVoucherCompanyWebsite,
  setHrVoucherWebsite,
  hrLocation,
  setHrLocation,
  hrCompanyLogo,
  setHrCompanyLogo,
  checkBoxValidation,
  setCheckBoxValidation,
  formValidation,
}) => {
  const industryArray1 = [
    "Advertising",
    "Hardware",
    "Software",
    "Digital",
    "Media",
    "Finance",
    "Health",
    "Gaming",
    "Ed Tech",
    "Ecommerce",
    "Marketing",
    "News and Entertainment",
    "Professional Services",
    "Other-not listed",
  ];

  const hrPositionArray1 = [
    "Recruiter",
    "Recruitment Manager",
    "HR/People Manager",
    "VP of HR/People",
    "Department Head",
    "Operations Lead",
  ];

  const employeeArray1 = [
    "<10",
    "10-50",
    "50-100",
    "100-200",
    "200-500",
    "500+",
  ];
  return (
    <div className={"flex justify-center items-center"}>
      <div className={"shadow-lg rounded-xl w-3/6 h-auto bg-white"}>
        <div className={"grid grid-cols-3"}>
          <div className={"col-start-1 bg-VouchMed rounded-l-lg"}>
            <div>
              <div className={"py-10 "}>
                <div className={"flex justify-center"}>
                  <FlagIcon className={"w-20 h-auto "} fill="white" />
                </div>
                <div
                  className={
                    "flex justify-center py-2 font-bold text-lg text-white"
                  }
                >
                  JOIN THE MOVEMENT
                </div>
                <div className={"text-sm text-white w-full text-center px-6"}>
                  End the war for talent by working together. Gain access to a
                  network of candidates of our very own
                </div>
                <div className={"flex justify-center pt-12"}>
                  <LockOpenIcon className={"w-12 h-auto"} fill="white" />
                </div>
                <div
                  className={
                    "text-sm text-white  w-full px-6 pt-2 pb-12 text-center"
                  }
                >
                  Get access to qualified and active candidates and continuously
                  build up your pipeline{" "}
                </div>
                <div className={"flex justify-center pt-8"}>
                  <UserAddIcon className={"w-12 h-auto"} fill="white" />
                </div>
                <div
                  className={
                    "text-sm text-white text-center px-6 w-full pt-2 pb-12"
                  }
                >
                  Add late stage candidates from your own pipeline and make it a
                  win-win!
                </div>
                <div className={"flex justify-center pt-8"}>
                  <TagIcon className={"w-12 h-auto"} fill="white" />
                </div>
                <div>
                  <div
                    className={
                      "text-sm text-white py-2 width-full text-center px-6"
                    }
                  >
                    Use Vouch to save time and money on your next hire
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"col-start-2 col-span-2 px-8"}>
            <div className={"pt-4 text-left font-bold text-base"}>
              Set Up Your Company Profile
            </div>
            <div className={"text-gray-600 text-sm pt-1"}>
              Thank you for joining Vouch
            </div>
            <div className={"text-gray-600 text-sm py-4"}>
              Please take a moment to set up your profile. You and other HR
              Leaders will be able to view candidate details and the company
              details of other organizations who have referred candidates into
              the platform.{" "}
            </div>
            <div className={"text-gray-600 text-sm py-2"}>
              How your dashboard will look:
            </div>
            <div className={"px-8"}>
              <img src="./images/tileExample.png" width="full" height="auto" />
            </div>
            <div className="py-6">
              <hr className="" />
            </div>
            <div className={"font-bold text-base"}>Company Details</div>
            <div className={"grid grid-cols-3 "}>
              <div className={"col-start-1 col-span-2"}>
                <div className={"pt-4"}>
                  <input
                    className={
                      "border border-gray-300 text-xs rounded py-2 px-4 w-4/5"
                    }
                    placeholder="Enter company name"
                    value={hrVoucherCompanyName}
                    onChange={(e) => setHrVoucherCompanyName(e.target.value)}
                  />
                </div>

                <div className={"py-8"}>
                  <input
                    className={
                      "border border-gray-300 text-xs rounded py-2 px-4 w-4/5"
                    }
                    placeholder="Website - Paste your company URL"
                    value={hrVoucherCompanyWebsite}
                    onChange={(e) => setHrVoucherWebsite(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    className={
                      "border border-gray-300 text-xs rounded py-2 px-4 w-4/5"
                    }
                    placeholder="Location - City of your Corporate HQ"
                    value={hrLocation}
                    onChange={(e) => setHrLocation(e.target.value)}
                  />
                </div>
                <div className={"text-xs pt-8 text-gray-500"}>
                  <div className={" pb-1"}>Upload your company logo:</div>
                  <input type="file" id="myFile" name="filename"></input>
                </div>
              </div>
              <div className={"col-start-3"}>
                <div>
                  <div className={"text-xs font-bold text-gray-500"}>
                    Industry
                  </div>
                  <SearchFilterDash
                    backgroundColour={"white"}
                    dropDownArray={industryArray1}
                    value={industryArray}
                    onChange={(e) => {
                      setIndustryArray(e.target.value);
                    }}
                  />
                </div>
                <div className={"py-4"}>
                  <div className={"text-xs font-bold text-gray-500"}>
                    Company Size
                  </div>
                  <SearchFilterDash
                    backgroundColour={"white"}
                    dropDownArray={employeeArray1}
                    value={employeeArray}
                    onChange={(e) => {
                      setEmployeeArray(e.target.value);
                    }}
                  />
                </div>
                <div className={"text-xs font-bold text-gray-500"}>
                  Your Position
                </div>
                <SearchFilterDash
                  backgroundColour={"white"}
                  dropDownArray={hrPositionArray1}
                  value={hrVoucherPosition}
                  onChange={(e) => {
                    setHrVoucherPosition(e.target.value);
                  }}
                />

                <div>
                  {/* <div className={"text-sm pb-4"}>Upload your company's logo:</div>
              <form action="/action_page.php" className={"text-xs"}>
                <input
                  type="file"
                  id="myFile"
                  name="filename"
                  value={hrCompanyLogo}
                  onChange={(e) => setHrCompanyLogo(e.target.value)}
                />
              </form> */}
                </div>
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
                We recruit for roles in Canada and USA
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
              Terms and Conditions .To see how we may use the information,
              please take a look at our Privacey Policy [LINKS TO ADD]{" "}
            </div>

            <div className={"pb-4 border-b border-gray-200 "}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
