import React from "react";
import { DashboardCategoryFilter } from "../ui/DashboardCategoryFilter";
import InformationIconToolTip from "../ui/InformationIconToolTip";
import { CandidateCount } from "./CandidateCount";
import DashCandidateTiles from "./DashCandidateTiles";
import VouchCTA from "./VouchCTA";
import { FilterIcon } from "@heroicons/react/solid";

export interface HomeDashboardProps {
  hrData: any;

  positionCategoryDropdownList: string[];
  yearsOfExperienceDropdownList: string[];
  stateProvinceDropdownList: string[];

  existingCandidates: any;
  setExistingCandidates: (e) => void;

  clearFilter: any;
  clearFilters: () => void;

  candidateLocationFilterDropdown: any;
  filterChangeLocationDropdown: (e) => void;

  positionTypeFilterDropdown: any;
  filterChangePositionType: (e) => void;

  yearsOfExperienceFilterDropdown: any;
  filterChangeYearsOfExperience: (e) => void;
  anonData: any;
  data: any;
  refetchShortList: any;
}

export const HomeDashboard = ({
  hrData,
  positionCategoryDropdownList,
  yearsOfExperienceDropdownList,
  stateProvinceDropdownList,
  existingCandidates,
  setExistingCandidates,
  clearFilter,
  clearFilters,
  candidateLocationFilterDropdown,
  filterChangeLocationDropdown,
  positionTypeFilterDropdown,
  filterChangePositionType,
  yearsOfExperienceFilterDropdown,
  filterChangeYearsOfExperience,
  anonData,
  data,
  refetchShortList,
}: HomeDashboardProps) => {
  return (
    <div>
      <div className={" pt-6 pb-6 px-24 bg-gray-50"}>
        <div
          className={"grid grid-cols-3"}
          style={{
            backgroundImage: 'url("./images/ombreBackground.jpeg")',
          }}
        >
          <div className={"col-start-1 col-span-2 py-4 pl-6 "}>
            <div className={"grid grid-rows-2"}>
              <div className={"text-base font-bold"}>
                {" "}
                Welcome{" "}
                {hrData && hrData.hr_voucher.length > 0
                  ? hrData.hr_voucher[0].firstName
                  : "not Registered"}
              </div>
              <div className={"pt-1 text-sm italic"}>
                {" "}
                We can end the war for talent by working together.
              </div>
            </div>
          </div>
          <div className="grid col-start-3 py-6 pr-6">
            <div className={"flex items-center justify-end"}>
              <VouchCTA hrData={hrData} />
            </div>
          </div>
        </div>
      </div>
      <div className={"pb-6 px-24 grid grid-cols-12 bg-gray-50 "}>
        <div
          className={
            "col-start-1 col-span-2 font-bold flex justify-center items-center"
          }
        >
          <div className={"flex flex-wrap pb-8"}>
            <div className={"pr-2"}>Filters Referrals by: </div>

            <InformationIconToolTip toolTipCopy="Filter through the referrals by candidate location, role and experience." />
          </div>
        </div>
        <div
          className={"flex flex-nowrap justify-between col-start-3 col-span-6"}
        >
          <div>
            <DashboardCategoryFilter
              backgroundColour="white"
              dropDownArray={stateProvinceDropdownList}
              value={candidateLocationFilterDropdown}
              onChange={(e) => filterChangeLocationDropdown(e)}
              copy="Candidate Location"
            />
            <div
              className={
                " pt-4 text-xs text-gray-500 cursor-pointer select-none hover:text-red-500  flex-nowrap "
              }
              onClick={clearFilters}
            >
              {clearFilter && (
                <div className="flex flex-nowrap">
                  {" "}
                  <span>
                    <FilterIcon className={"h-4 w-4 hover:text-red-500"} />
                  </span>
                  <span>&nbsp;</span>
                  <span>Clear All</span>
                  <span>&nbsp;</span>
                  <span>Filters</span>
                </div>
              )}
            </div>
          </div>

          <div>
            <DashboardCategoryFilter
              backgroundColour="white"
              dropDownArray={positionCategoryDropdownList}
              value={positionTypeFilterDropdown}
              onChange={(e) => filterChangePositionType(e)}
              copy="Position Interviewed For"
            />
          </div>

          <div>
            <DashboardCategoryFilter
              backgroundColour="white"
              dropDownArray={yearsOfExperienceDropdownList}
              value={yearsOfExperienceFilterDropdown}
              onChange={(e) => filterChangeYearsOfExperience(e)}
              copy="Required Years of Exp"
            />
          </div>
        </div>
        <div className={"col-start-10 col-span-3 grid content-start pb-8"}>
          <CandidateCount candidateCount={existingCandidates} />
        </div>
      </div>
      <div className={"bg-gray-50 px-24 "}>
        <div
          className={
            "grid grid-cols-3 grid-flow-col content-center py-1 text-gray-400 font-bold"
          }
        >
          <div className={"col-start-1"}>
            <div className={"grid grid-cols-2"}>
              <p className={"col-start-2 w-full pl-4"}>Interviewed By</p>
            </div>
          </div>
          <div className={"grid-start-2"}>
            <div className={"grid grid-cols-2"}>
              <p className={"w-full pl-4"}>Industry</p>
              <div className={"flex flex-wrap"}>
                <div className={"pr-2"}>Position Interviewed for</div>
                <InformationIconToolTip toolTipCopy="This is the position the candidate interviewed for, as well as the furthest interview stage completed." />
              </div>
            </div>
          </div>
          <div className={"grid-start-3"}>
            <div className={"grid grid-cols-2"}>
              <div className={"flex flex-wrap"}>
                <div className={"pl-4"}>Required Years of Exp</div>

                <InformationIconToolTip toolTipCopy="This is the salary range that was budgeted for the *Position Interviewed for* role (as disclosed by the referring recruiter) " />
              </div>
              <div className={"flex flex-wrap"}>
                <div className={"pl-4"}> Salary Range</div>

                <InformationIconToolTip toolTipCopy="Top 2 strengths noted by the recruiting team who interviewed the Candidate." />
              </div>
            </div>
          </div>
        </div>
        <DashCandidateTiles
          vouchData={data}
          refetchShortList={refetchShortList}
          candidateLocationFilterDropdown={candidateLocationFilterDropdown}
          yearsOfExperienceFilterDropdown={yearsOfExperienceFilterDropdown}
          positionTypeFilterDropdown={positionTypeFilterDropdown}
          existingCandidates={existingCandidates}
          setExistingCandidates={setExistingCandidates}
          hrData={hrData}
          anonData={anonData}
        />
      </div>
    </div>
  );
};
