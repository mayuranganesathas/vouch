import React, { useEffect } from "react";
import { useState } from "react";
import WelcomeComp from "../components/dashView/WelcomeComp";
import VouchCTA from "../components/dashView/VouchCTA";
import { CandidateCount } from "../components/dashView/CandidateCount";
import DashCandidateTiles from "../components/dashView/DashCandidateTiles";
import UserIdBar from "../components/dashView/UserIdBar";
import { GetServerSideProps } from "next";
import { ApolloClient, InMemoryCache, useQuery } from "@apollo/client";
import { QUERY_DASHBOARD_TILES } from "../graphql/QUERY_DASHBOARD_TILES";
import { DatabaseIcon } from "@heroicons/react/solid";
import { useAuth } from "../lib/authContext";
import { QUERY_HRID } from "../graphql/QUERY_HRID";
import router from "next/router";
import { DashboardCategoryFilter } from "../components/ui/DashboardCategoryFilter";
import InformationIconToolTip from "../components/ui/InformationIconToolTip";

import { QUERY_SHORT_LIST } from "../graphql/QUERY_SHORTLIST";
import DashCandidateTilesShortList from "../components/dashView/DashCandidateTilesShortList";
import { SearchFilterDash } from "../components/ui/searchFilterDash";
import { filterArgTypes } from "@storybook/client-api";
import {
  positionCategoryDropDownArray,
  SeniorityDropDownArray,
  stateProvince,
} from "./api/dropdownCategories";
import ReactTooltip from "react-tooltip";
export interface DashboardProps {}

const DashBoard = ({}: DashboardProps) => {
  const [stageStatus, setStageStatus] = useState("Home");

  const { user } = useAuth();
  const [locationStateDropdown, setLocationStateDropdown] = useState("empty");
  const [jobCategoryDropdown, setJobCategoryDropdown] = useState("empty");

  const [seniorityDropdown, setSeniorityDropdown] = useState("empty");
  const [existingCandidates, setExistingCandidates] = useState();
  const [
    shortListExistingCandidates,
    setShortListExistingCandidates,
  ] = useState(0);
  const [clearFilter, setClearFilter] = useState(false);

  let { loading, data: ShortList, refetch: refetchShortList } = useQuery(
    QUERY_SHORT_LIST,
    {
      variables: {
        hrId: user.uid,
      },
    }
  );
  const { data } = useQuery(QUERY_DASHBOARD_TILES, {
    variables: {
      hrId: user.uid,
    },
  });

  const getTileComponent = () => {
    if (stageStatus == "Home") {
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
                    {hrData &&
                      hrData.hr_voucher[0].firstName +
                        " " +
                        hrData.hr_voucher[0].lastName}
                  </div>
                  <div className={"pt-1 text-sm"}>
                    {" "}
                    At Vouch, we believe that we can win the war for talent by
                    working together.
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
                <div className={"pr-2"}>Filters Candidates By: </div>

                <InformationIconToolTip toolTipCopy="Filter by the candidate's background. Information is provided by the candidate directly." />
              </div>
            </div>
            <div className={"col-start-3 flex items-center"}>
              <DashboardCategoryFilter
                backgroundColour="white"
                dropDownArray={positionCategoryDropDownArray}
                value={jobCategoryDropdown}
                onChange={(e) => filterChangeCategory(e)}
                copy="Recent Position"
              />
            </div>
            <div className={"col-start-5 flex items-center"}>
              <DashboardCategoryFilter
                backgroundColour="white"
                dropDownArray={SeniorityDropDownArray}
                value={seniorityDropdown}
                onChange={(e) => filterChangeSeniority(e)}
                copy="Seniority"
              />
            </div>
            <div className={"col-start-7 flex items-center"}>
              <DashboardCategoryFilter
                backgroundColour="white"
                dropDownArray={stateProvince}
                value={locationStateDropdown}
                onChange={(e) => filterChangeLocation(e)}
                copy="Location"
              />
              <div
                className={
                  "px-4 text-xs  cursor-pointer select-none hover:text-red-500"
                }
                onClick={clearFilters}
              >
                {clearFilter && <div> X Clear </div>}
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
                  <p className={"col-start-2 w-full pl-4"}>
                    Most recent position
                  </p>
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
            <DashCandidateTiles
              vouchData={data}
              refetchShortList={refetchShortList}
              filterJobCategory={jobCategoryDropdown}
              filterJobSeniority={seniorityDropdown}
              filterStateLocation={locationStateDropdown}
              existingCandidates={existingCandidates}
              setExistingCandidates={setExistingCandidates}
            />
          </div>
        </div>
      );
    } else if (stageStatus == "Favorites") {
      return (
        <div>
          <div className={"grid grid-cols-3  pt-6 pb-6 px-24 bg-gray-50 "}>
            <div className={"col-start-1 col-span-2 bg-gray-200 py-4 pl-6"}>
              <div className={"grid grid-rows-2"}>
                <div className={"text-base font-bold"}>
                  {" "}
                  Welcome{" "}
                  {hrData &&
                    hrData.hr_voucher[0].firstName +
                      " " +
                      hrData.hr_voucher[0].lastName}
                </div>
                <div className={"pt-1 text-sm"}>
                  {" "}
                  At Vouch, we believe that we can win the war for talent by
                  working together.
                </div>
              </div>
            </div>
            <div className="grid col-start-3 bg-gray-200 py-6 pr-6">
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
              <div className={"flex flex-wrap"}>
                <div className={"pr-2"}>Filters Candidates By: </div>

                <InformationIconToolTip toolTipCopy="Filter by the candidate's background. Information is provided by the candidate directly." />
              </div>
            </div>
            <div className={"col-start-3 flex items-center"}>
              <DashboardCategoryFilter
                backgroundColour="white"
                dropDownArray={positionCategoryDropDownArray}
                value={jobCategoryDropdown}
                onChange={(e) => filterChangeCategory(e)}
                copy="Recent Position"
              />
            </div>
            <div className={"col-start-5 flex items-center"}>
              <DashboardCategoryFilter
                backgroundColour="white"
                dropDownArray={SeniorityDropDownArray}
                value={seniorityDropdown}
                onChange={(e) => filterChangeSeniority(e)}
                copy="Seniority"
              />
            </div>
            <div className={"col-start-7 flex items-center"}>
              <DashboardCategoryFilter
                backgroundColour="white"
                dropDownArray={stateProvince}
                value={locationStateDropdown}
                onChange={(e) => filterChangeLocation(e)}
                copy="Location"
              />
              <div
                className={
                  "px-4 text-xs  cursor-pointer select-none hover:text-red-500"
                }
                onClick={clearFilters}
              >
                {clearFilter && (
                  <div className=" flex flex-nowrap text-xs"> X Clear </div>
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
                  <p className={"col-start-2 w-full pl-4"}>
                    Most recent position
                  </p>
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
                vouchData={ShortList}
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
    } else if (stageStatus == "Unfit") {
      return (
        <div>
          <div className={"grid grid-cols-3  pt-6 pb-6 px-24 bg-gray-50 "}>
            <div className={"col-start-1 col-span-2 bg-gray-200 py-4 pl-6"}>
              <div className={"grid grid-rows-2"}>
                <div className={"text-base font-bold"}>
                  {" "}
                  Welcome{" "}
                  {hrData &&
                    hrData.hr_voucher[0].firstName +
                      " " +
                      hrData.hr_voucher[0].lastName}
                </div>
                <div className={"pt-1 text-sm"}>
                  {" "}
                  At Vouch, we believe that we can win the war for talent by
                  working together.
                </div>
              </div>
            </div>
            <div className="grid col-start-3 bg-gray-200 py-6 pr-6">
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
              <div className={"flex flex-wrap"}>
                <div className={"pr-2"}>Filters Candidates By: </div>

                <InformationIconToolTip toolTipCopy="Filter by the candidate's background. Information is provided by the candidate directly." />
              </div>
            </div>
            <div className={"col-start-3 flex items-center"}>
              <DashboardCategoryFilter
                backgroundColour="white"
                dropDownArray={positionCategoryDropDownArray}
                value={jobCategoryDropdown}
                onChange={(e) => filterChangeCategory(e)}
                copy="Recent Position"
              />
            </div>
            <div className={"col-start-5 flex items-center"}>
              <DashboardCategoryFilter
                backgroundColour="white"
                dropDownArray={SeniorityDropDownArray}
                value={seniorityDropdown}
                onChange={(e) => filterChangeSeniority(e)}
                copy="Seniority"
              />
            </div>
            <div className={"col-start-7 flex items-center"}>
              <DashboardCategoryFilter
                backgroundColour="white"
                dropDownArray={stateProvince}
                value={locationStateDropdown}
                onChange={(e) => filterChangeLocation(e)}
                copy="Location"
              />
              <div
                className={
                  "px-4 text-xs  cursor-pointer select-none hover:text-red-500"
                }
                onClick={clearFilters}
              >
                {clearFilter && <div> X Clear </div>}
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
                  <p className={"col-start-2 w-full pl-4"}>
                    Most recent position
                  </p>
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
                vouchData={ShortList}
                filter="thumbsDown"
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
    } else if (stageStatus == "Contacted") {
      return (
        <div>
          <div className={"grid grid-cols-3  pt-6 pb-6 px-24 bg-gray-50 "}>
            <div className={"col-start-1 col-span-2 bg-gray-200 py-4 pl-6"}>
              <div className={"grid grid-rows-2"}>
                <div className={"text-base font-bold"}>
                  {" "}
                  Welcome{" "}
                  {hrData &&
                    hrData.hr_voucher[0].firstName +
                      " " +
                      hrData.hr_voucher[0].lastName}
                </div>
                <div className={"pt-1 text-sm"}>
                  {" "}
                  At Vouch, we believe that we can win the war for talent by
                  working together.
                </div>
              </div>
            </div>
            <div className="grid col-start-3 bg-gray-200 py-6 pr-6">
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
              <div className={"flex flex-wrap"}>
                <div className={"pr-2"}>Filters Candidates By: </div>

                <InformationIconToolTip toolTipCopy="Filter by the candidate's background. Information is provided by the candidate directly." />
              </div>
            </div>
            <div className={"col-start-3 flex items-center"}>
              <DashboardCategoryFilter
                backgroundColour="white"
                dropDownArray={positionCategoryDropDownArray}
                value={jobCategoryDropdown}
                onChange={(e) => filterChangeCategory(e)}
                copy="Recent Position"
              />
            </div>
            <div className={"col-start-5 flex items-center"}>
              <DashboardCategoryFilter
                backgroundColour="white"
                dropDownArray={SeniorityDropDownArray}
                value={seniorityDropdown}
                onChange={(e) => filterChangeSeniority(e)}
                copy="Seniority"
              />
            </div>
            <div className={"col-start-7 flex items-center"}>
              <DashboardCategoryFilter
                backgroundColour="white"
                dropDownArray={stateProvince}
                value={locationStateDropdown}
                onChange={(e) => filterChangeLocation(e)}
                copy="Location"
              />
              <div
                className={
                  "px-4 text-xs  cursor-pointer select-none hover:text-red-500"
                }
                onClick={clearFilters}
              >
                {clearFilter && <div> X Clear </div>}
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
                  <p className={"col-start-2 w-full pl-4"}>
                    Most recent position
                  </p>
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
                vouchData={ShortList}
                filter="contacted"
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
    }
  };

  const { data: hrData } = useQuery(QUERY_HRID, {
    variables: { hrId: user.uid },
  });

  const clearFilters = () => {
    setSeniorityDropdown("empty");
    setJobCategoryDropdown("empty");
    setLocationStateDropdown("empty");
    setClearFilter(false);
  };

  const filterChangeLocation = (e) => {
    setLocationStateDropdown(e.target.value);
    setClearFilter(true);
  };
  const filterChangeCategory = (e) => {
    setJobCategoryDropdown(e.target.value);
    setClearFilter(true);
  };
  const filterChangeSeniority = (e) => {
    setSeniorityDropdown(e.target.value);
    setClearFilter(true);
  };

  useEffect(() => {
    const hrRegister = () => {
      if (hrData.hr_voucher.length <= 0) {
        router.push("/register");
      }
    };
    hrData && hrRegister();
  }, [hrData]);

  return (
    <div>
      {hrData && (
        <div className={"text-xs text-gray-700"}>
          <div className={"pt-4 px-20"}>
            <UserIdBar
              hrData={hrData}
              stageStatus={stageStatus}
              setStageStatus={setStageStatus}
              queryUpdateOnClick={refetchShortList}
              clearFilters={clearFilters}
            />
          </div>
          <div className={"w-full border-gray-500 border-b-2"}></div>

          <div className={""}>{getTileComponent()}</div>
        </div>
      )}
    </div>
  );
};

export default DashBoard;

DashBoard.auth = true;
