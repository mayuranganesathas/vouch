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

const dashBoardTest = {
  newCandidateNumber: 14,
  userHrFirstName: "Vivian",
  moveToCandidate: () => {},
  numberReferred: 10,
  numberThanks: 4,
  candidateCount: [10],
  lastCandidateCount: 5,

  starStatus: false,
  userID: 1234,
  positionTitle: "Sr. Backend Dev",
  salaryRange: "$110k-140k $/Yr",
  jobLocation: "Toronto | Ontario",
  companyLogo: "./images/Google-logo.png",
  numEmployees: "5000+",
  companyName: "Google Ltd",
  stageInterview: "Final Stage",
  stageNumber: "(5 of 5)",
  pastPosition1: "Director of Eng.",
  pastIndustry1: "Finance",
  standOutSkill1: "Strong Communication",
  userLinkedinURL: "https://ca.linkedin.com/in/mayuranganesathas",
};

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
        <DashCandidateTiles
          vouchData={data}
          refetchShortList={refetchShortList}
          filterJobCategory={jobCategoryDropdown}
          filterJobSeniority={seniorityDropdown}
          filterStateLocation={locationStateDropdown}
          existingCandidates={existingCandidates}
          setExistingCandidates={setExistingCandidates}
        />
      );
    } else if (stageStatus == "Favorites") {
      return (
        <div>
          <CandidateCount candidateCount={shortListExistingCandidates} />

          {
            <DashCandidateTilesShortList
              vouchData={ShortList}
              filter="thumbsUp"
              refetchShortList={refetchShortList}
              setExistingCandidates={setShortListExistingCandidates}
              existingCandidates={shortListExistingCandidates}
            />
          }
        </div>
      );
    } else if (stageStatus == "Unfit") {
      return (
        <div>
          <CandidateCount candidateCount={shortListExistingCandidates} />
          {
            <DashCandidateTilesShortList
              vouchData={ShortList}
              filter="thumbsDown"
              refetchShortList={refetchShortList}
              setExistingCandidates={setShortListExistingCandidates}
              existingCandidates={shortListExistingCandidates}
            />
          }
        </div>
      );
    } else if (stageStatus == "Contacted") {
      return (
        <div>
          <CandidateCount candidateCount={shortListExistingCandidates} />

          {
            <DashCandidateTilesShortList
              vouchData={ShortList}
              filter="contacted"
              refetchShortList={refetchShortList}
              setExistingCandidates={setShortListExistingCandidates}
              existingCandidates={shortListExistingCandidates}
            />
          }
        </div>
      );
    }
  };

  const { data: hrData } = useQuery(QUERY_HRID, {
    variables: { hrId: user.uid },
  });

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
            />
          </div>
          <div className={"w-full border-gray-500 border-b-2"}></div>
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
                <VouchCTA />
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
                onChange={(e) => setJobCategoryDropdown(e.target.value)}
                copy="Recent Position"
              />
            </div>
            <div className={"col-start-5 flex items-center"}>
              <DashboardCategoryFilter
                backgroundColour="white"
                dropDownArray={SeniorityDropDownArray}
                value={seniorityDropdown}
                onChange={(e) => setSeniorityDropdown(e.target.value)}
                copy="Seniority"
              />
            </div>
            <div className={"col-start-7 flex items-center"}>
              <DashboardCategoryFilter
                backgroundColour="white"
                dropDownArray={stateProvince}
                value={locationStateDropdown}
                onChange={(e) => setLocationStateDropdown(e.target.value)}
                copy="Location"
              />
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
            <div className={""}>{getTileComponent()}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashBoard;

DashBoard.auth = true;
