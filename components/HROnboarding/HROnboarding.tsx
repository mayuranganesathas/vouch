import React from "react";
import { ButtonVouch } from "../ui/ButtonVouch";
import { SearchFilterDash } from "../ui/searchFilterDash";
import { UserGroupIcon } from "@heroicons/react/solid";
import { MailOpenIcon } from "@heroicons/react/solid";
import { UserAddIcon } from "@heroicons/react/solid";
import { SearchCircleIcon } from "@heroicons/react/solid";
import { PositionFilterVouch } from "../ui/PositionFilterVouch";

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
  const industryArray1 = ["Finance", "Gaming", "SaaS", "Space"];

  const hrPositionArray1 = ["Recruiter", "HR Manager", "Executive"];

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
              <div className={""}>
                <div className={"flex justify-center"}>
                  <UserGroupIcon className={"w-20 h-auto "} fill="white" />
                </div>
                <div
                  className={
                    "flex justify-center py-2 font-bold text-lg text-white"
                  }
                >
                  VOUCHING CANDIDATES
                </div>
                <div className={"text-sm text-white"}>
                  <div className={"flex justify-center"}>
                    Help other qualified candidates from{" "}
                  </div>
                  <div className={"flex justify-center"}>
                    your recruitment pipeline get noticed!
                  </div>
                  <div className={"flex justify-center"}>
                    They may not have been your final pick,
                  </div>
                  <div className={"flex justify-center"}>
                    but they could be someone elses.
                  </div>
                </div>
                <div className={"flex justify-center pt-8"}>
                  <MailOpenIcon className={"w-12 h-auto"} fill="white" />
                </div>
                <div className={"text-sm text-white  py-2 flex justify-center"}>
                  Candidates get invited to join.
                </div>
                <div className={"flex justify-center pt-8"}>
                  <UserAddIcon className={"w-12 h-auto"} fill="white" />
                </div>
                <div className={"text-sm text-white py-2"}>
                  <div className={"flex justify-center"}>
                    Referred candidates match more
                  </div>
                  <div className={"flex justify-center"}>
                    easily with our community
                  </div>
                  <div className={"flex justify-center"}>of recruiters.</div>
                </div>
                <div className={"flex justify-center pt-8"}>
                  <SearchCircleIcon className={"w-12 h-auto"} fill="white" />
                </div>
                <div>
                  <div className={"text-sm text-white py-2"}>
                    <div className={"flex justify-center"}>Pay it forward.</div>
                    <div className={"flex justify-center"}>
                      Find active and qualified
                    </div>
                    <div className={"flex justify-center"}>
                      candidates for your next hire.
                    </div>
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
            <div className={"grid grid-cols-2 gap-2"}>
              <div className={"col-start-1"}>
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
              <div className={"col-start-2"}>
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
