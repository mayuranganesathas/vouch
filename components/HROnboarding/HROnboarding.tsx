import React from "react";
import { ButtonVouch } from "../ui/ButtonVouch";
import { SearchFilterDash } from "../ui/searchFilterDash";

export interface HROnboardingProps {
  onClick: () => void;
  industrySelect: string;
  setIndustrySelect: (industrySelect: string) => void;
  industryArray: any[];
  setIndustryArray: (industryArray: any[]) => void;
  numberOfEmployees: string;
  setNumberOfEmployees: (numberOfEmployees: string) => void;
  employeeArray: any[];
  setEmployeeArray: (employeeArray: any[]) => void;
}

export const HROnboarding: React.FC<HROnboardingProps> = ({
  onClick,
  industrySelect,
  setIndustrySelect,
  industryArray,
  setIndustryArray,
  numberOfEmployees,
  setNumberOfEmployees,
  employeeArray,
  setEmployeeArray,
}) => {
  return (
    <div className={"flex justify-center items-center"}>
      <div className={"px-8 shadow-lg rounded-xl w-2/5 h-auto bg-white"}>
        <div className={"pt-8 text-left"}>Set up your Company Profile</div>
        <div className={"border-b-2 border-gray-300 py-2"}> </div>
        <div className={"py-2 text-xs text-left"}>
          Thank you for joining vouch. In order to properly match referred
          candidates, we need a little information about your company. You and
          other HR Managers will be able to see candidate details as well as the
          company details where they were referred from to help you qualify the
          candidates.
        </div>
        <div className={"grid grid-cols-2 gap-2"}>
          <div className={"col-start-1 pt-4"}>
            <div>
              <div className={"text-sm"}> Company Name:</div>
              <input
                className={
                  "border border-gray-300 text-xs rounded py-2 px-4 w-4/5"
                }
                placeholder="Enter company name"
              ></input>
            </div>
            <div className={"py-4"}>
              <div className={"text-sm"}> Company Website:</div>
              <input
                className={
                  "border border-gray-300 text-xs rounded py-2 px-4 w-4/5"
                }
                placeholder="Paste your company's website URL"
              ></input>
            </div>
            <div>
              <div className={"text-sm"}> Location:</div>
              <input
                className={
                  "border border-gray-300 text-xs rounded py-2 px-4 w-4/5"
                }
                placeholder="Enter the city for your Corporate HQ"
              ></input>
            </div>
          </div>
          <div className={"col-start-2 pt-4"}>
            <div>
              <div className={"text-sm"}>Industry</div>
              <SearchFilterDash
                backgroundColour={"white"}
                dropDownArray={industryArray}
                value={industrySelect}
                onChange={(e) => {
                  setIndustrySelect(e.target.value);
                }}
              />
            </div>
            <div className={"py-4"}>
              <div className={"text-sm"}>Industry</div>
              <SearchFilterDash
                backgroundColour={"white"}
                dropDownArray={employeeArray}
                value={numberOfEmployees}
                onChange={(e) => {
                  setNumberOfEmployees(e.target.value);
                }}
              />
            </div>
            <div>
              <div className={"text-sm pb-4"}>Upload your company's logo:</div>
              <form action="/action_page.php" className={"text-xs"}>
                <input type="file" id="myFile" name="filename"></input>
              </form>
            </div>
          </div>
        </div>
        <div className={"grid grid-cols-2"}>
          <div className={"col-start-1"}>
            <div className={"flex content-end pt-20"}>
              <form action="/action_page.php" className={"text-xs"}>
                <input
                  type="checkbox"
                  id="USCAN"
                  name="USCANVerified"
                  value="true"
                ></input>
              </form>
              <div className={"text-xs pl-2"}>
                {" "}
                We recruit for roles in Canada and USA
              </div>
            </div>
          </div>
          <div className={"col-start-2"}>
            <div className="flex justify-center pt-14">
              <ButtonVouch
                backgroundColour={"VouchGreen"}
                buttonType={"rounded"}
                textColour={"white"}
                label={"Submit"}
                disabled={false}
                onClick={onClick}
              />
            </div>
          </div>
        </div>

        <div className={"pb-4 border-b border-gray-200 "}></div>
      </div>
    </div>
  );
};
