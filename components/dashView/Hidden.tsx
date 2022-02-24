import React from "react";
import { DashboardCategoryFilter } from "../ui/DashboardCategoryFilter";
import InformationIconToolTip from "../ui/InformationIconToolTip";
import { CandidateCount } from "./CandidateCount";
import DashCandidateTilesShortList from "./DashCandidateTilesShortList";
import VouchCTA from "./VouchCTA";
import { FilterIcon } from "@heroicons/react/solid";

export interface HiddenDashboardProps {
  hrData: any;
  positionCategoryDropdownList: string[];
  yearsOfExperienceDropdownList: string[];
  stateProvinceDropdownList: string[];

  shortListExistingCandidates: any;
  setShortListExistingCandidates: (e) => void;

  clearFilter: any;
  clearFilters: () => void;
  candidateLocationFilterDropdown: any;
  filterChangeLocationDropdown: (e) => void;

  positionTypeFilterDropdown: any;
  filterChangePositionType: (e) => void;
  beacon: boolean;
  setBeacon: (beacon: boolean) => void;
  yearsOfExperienceFilterDropdown: any;
  filterChangeYearsOfExperience: (e) => void;
  anonData: any;
  shortListData: any;
  refetchShortList: () => void;
  refetchAnonData: () => void;

  stageStatus: string;
}

export const HiddenDashboard = ({
  hrData,
  positionCategoryDropdownList,
  yearsOfExperienceDropdownList,
  stateProvinceDropdownList,
  shortListExistingCandidates,
  setShortListExistingCandidates,
  clearFilter,
  clearFilters,
  candidateLocationFilterDropdown,
  filterChangeLocationDropdown,
  positionTypeFilterDropdown,
  filterChangePositionType,
  yearsOfExperienceFilterDropdown,
  filterChangeYearsOfExperience,
  anonData,
  stageStatus,
  shortListData,
  refetchShortList,
  refetchAnonData,
  beacon,
  setBeacon,
}: HiddenDashboardProps) => {
  return (
    <div>
      <div className={"grid grid-cols-3  pt-6 pb-6 px-24 bg-gray-50 "}>
        <div className={"col-start-1 col-span-2 bg-red-50 py-4 pl-6"}>
          <div className={"grid grid-rows-2"}>
            <div className={"text-base font-bold"}>
              {" "}
              Save these candidates for later.
            </div>
            <div className={"pt-1 text-sm italic"}>
              {" "}
              Your pipeline of candidates - ready when you are!
            </div>
          </div>
        </div>
        <div className="grid col-start-3 bg-red-50 py-6 pr-6">
          <div className={"flex items-center justify-end"}>
            <VouchCTA hrData={hrData} />
          </div>
        </div>
      </div>
      <div className={"pb-8 px-24 grid grid-cols-12 bg-gray-50"}>
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
          <CandidateCount candidateCount={shortListExistingCandidates} />
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
                <div className={"pr-1"}>Position Interviewed for</div>
                <InformationIconToolTip toolTipCopy="The position the candidate interviewed for and the furthest interview stage completed." />
              </div>
            </div>
          </div>
          <div className={"grid-start-3"}>
            <div className={"grid grid-cols-2"}>
              <div className={"flex flex-wrap"}>
                <div className={"pl-4 pr-1"}>Required Years of Exp</div>

                <InformationIconToolTip toolTipCopy="The required experience of the role the candidate interviewed for (disclosed by referring recruiter). " />
              </div>
              <div className={"flex flex-wrap"}>
                <div className={"pl-4 pr-1"}> Salary Range</div>

                <InformationIconToolTip toolTipCopy="The salary range budgeted for in the *Position Interviewed for* (disclosed by the referring recruiter). " />
              </div>
            </div>
          </div>
        </div>

        {
          <DashCandidateTilesShortList
            vouchData={shortListData}
            filter="thumbsDown"
            refetchShortList={refetchShortList}
            setExistingCandidates={setShortListExistingCandidates}
            existingCandidates={shortListExistingCandidates}
            hrData={hrData}
            stageStatus={stageStatus}
            candidateLocationFilterDropdown={candidateLocationFilterDropdown}
            yearsOfExperienceFilterDropdown={yearsOfExperienceFilterDropdown}
            positionTypeFilterDropdown={positionTypeFilterDropdown}
            anonData={anonData}
            refetchAnonData={refetchAnonData}
          />
        }
      </div>
    </div>
  );
};
