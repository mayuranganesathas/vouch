import React from "react";
import { DashboardCategoryFilter } from "../ui/DashboardCategoryFilter";
import InformationIconToolTip from "../ui/InformationIconToolTip";
import { CandidateCount } from "./CandidateCount";
import DashCandidateTilesShortList from "./DashCandidateTilesShortList";
import VouchCTA from "./VouchCTA";

export interface FavoritesDashboardProps {
  hrData: any;
  positionCategoryDropdownArray: string[];

  seniorityDropdownArray: any;
  stateProvinceDropdownArray: any;

  shortListExistingCandidates: any;
  setShortListExistingCandidates: (e) => void;

  clearFilter: any;
  clearFilters: () => void;

  jobCategoryDropdown: any;
  filterChangeCategory: (e) => void;

  seniorityDropdown: any;
  filterChangeSeniority: (e) => void;

  locationStateDropdown: any;
  filterChangeLocation: (e) => void;

  shortListData: any;
  refetchShortList: any;
  stageStatus: string;
}

export const FavoritesDashboard = ({
  hrData,
  positionCategoryDropdownArray,
  shortListExistingCandidates,
  setShortListExistingCandidates,
  clearFilter,
  clearFilters,
  jobCategoryDropdown,
  filterChangeCategory,
  seniorityDropdown,
  filterChangeSeniority,
  locationStateDropdown,
  filterChangeLocation,
  stageStatus,
  shortListData,
  refetchShortList,
  seniorityDropdownArray,
  stateProvinceDropdownArray,
}: FavoritesDashboardProps) => {
  return (
    <div>
      <div className={"  pt-6 pb-6 px-24 bg-gray-50 "}>
        <div
          className={
            "grid grid-cols-3 bg-gradient-to-l from-yellow-50 to-VouchBg"
          }
        >
          <div className={"col-start-1 col-span-2  py-4 pl-6 "}>
            <div className={"grid grid-rows-2"}>
              <div className={"text-base font-bold"}>
                {" "}
                Check out your favorites!
              </div>
              <div className={"pt-1 text-sm italic"}>
                {" "}
                We share salaries, best practices and policies... and now
                candidates.
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
      <div className={"pb-8 px-24 grid grid-cols-12 bg-gray-50"}>
        <div
          className={
            "col-start-1 col-span-2 font-bold flex justify-center items-center"
          }
        >
          <div className={"flex flex-wrap"}>
            <div className={"pr-2"}>Filters Candidates by: </div>

            <InformationIconToolTip toolTipCopy="Filter by the candidate's background. Information is provided by the candidate directly." />
          </div>
        </div>
        <div className={"col-start-3 flex items-center"}>
          <DashboardCategoryFilter
            backgroundColour="white"
            dropDownArray={positionCategoryDropdownArray}
            value={jobCategoryDropdown}
            onChange={(e) => filterChangeCategory(e)}
            copy="Recent Job Category"
          />
        </div>
        <div className={"col-start-5 flex items-center"}>
          <DashboardCategoryFilter
            backgroundColour="white"
            dropDownArray={seniorityDropdownArray}
            value={seniorityDropdown}
            onChange={(e) => filterChangeSeniority(e)}
            copy="Seniority"
          />
        </div>
        <div className={"col-start-7 flex items-center"}>
          <DashboardCategoryFilter
            backgroundColour="white"
            dropDownArray={stateProvinceDropdownArray}
            value={locationStateDropdown}
            onChange={(e) => filterChangeLocation(e)}
            copy="Location"
          />
          <div
            className={
              "flex flex-nowrap px-4 text-xs text-gray-500 cursor-pointer select-none hover:text-red-500"
            }
            onClick={clearFilters}
          >
            {clearFilter && (
              <div className="flex flex-nowrap">
                {" "}
                <span>X</span>
                <span>&nbsp;</span>
                <span>Clear</span>
                <span>&nbsp;</span>
                <span>Filters</span>
              </div>
            )}
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
              <p className={"col-start-2 w-full pl-4"}>Most recent position</p>
            </div>
          </div>
          <div className={"grid-start-2"}>
            <div className={"grid grid-cols-2"}>
              <p className={"w-full pl-12"}>Vouched by</p>
              <div className={"flex flex-wrap"}>
                <div className={"pr-2"}>Position Interviewed for</div>
                <InformationIconToolTip toolTipCopy="This is the position the candidate interviewed for, as well as the furthest interview stage completed." />
              </div>
            </div>
          </div>
          <div className={"grid-start-3"}>
            <div className={"grid grid-cols-2"}>
              <div className={"flex flex-wrap"}>
                <div className={"pr-2"}>Salary Range (USD)</div>

                <InformationIconToolTip toolTipCopy="This is the salary range that was budgeted for the *Position Interviewed for* role (as disclosed by the referring recruiter) " />
              </div>
              <div className={"flex flex-wrap"}>
                <div className={"pr-2"}>Standout Skills</div>

                <InformationIconToolTip toolTipCopy="Top 2 strengths noted by the recruiting team who interviewed the Candidate." />
              </div>
            </div>
          </div>
        </div>

        {
          <DashCandidateTilesShortList
            vouchData={shortListData}
            filter="thumbsUp"
            refetchShortList={refetchShortList}
            setExistingCandidates={setShortListExistingCandidates}
            existingCandidates={shortListExistingCandidates}
            hrData={hrData}
            stageStatus={stageStatus}
            filterJobCategory={jobCategoryDropdown}
            filterJobSeniority={seniorityDropdown}
            filterStateLocation={locationStateDropdown}
          />
        }
      </div>
    </div>
  );
};
