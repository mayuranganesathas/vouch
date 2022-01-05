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
import { InformationCircleIcon } from "@heroicons/react/solid";

import { QUERY_SHORT_LIST } from "../graphql/QUERY_SHORTLIST";
import DashCandidateTilesShortList from "../components/dashView/DashCandidateTilesShortList";
import { SearchFilterDash } from "../components/ui/searchFilterDash";
import { filterArgTypes } from "@storybook/client-api";
import {
  jobCategoryDropdownData,
  jobSeniorityDropdownData,
  stateProvince,
} from "./api/dropdownCategories";
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

const DashBoard = (data, {}: DashboardProps) => {
  const [stageStatus, setStageStatus] = useState("Home");

  const { user } = useAuth();
  const [locationStateDropdown, setLocationStateDropdown] = useState(
    "--CANADA--"
  );
  const [jobCategoryDropdown, setJobCategoryDropdown] = useState("Category");

  const [seniorityDropdown, setSeniorityDropdown] = useState("Seniority");

  let { loading, data: ShortList, refetch: refetchShortList } = useQuery(
    QUERY_SHORT_LIST,
    {
      variables: {
        hrId: user.uid,
      },
    }
  );

  const getTileComponent = () => {
    if (stageStatus == "Home") {
      return (
        <DashCandidateTiles
          vouchData={data}
          refetchShortList={refetchShortList}
          filterJobCategory={jobCategoryDropdown}
          filterJobSeniority={seniorityDropdown}
          filterStateLocation={locationStateDropdown}
        />
      );
    } else if (stageStatus == "Favorites") {
      return (
        <div>
          {
            <DashCandidateTilesShortList
              vouchData={ShortList}
              filter="thumbsUp"
              refetchShortList={refetchShortList}
            />
          }
        </div>
      );
    } else if (stageStatus == "Unfit") {
      return (
        <div>
          {
            <DashCandidateTilesShortList
              vouchData={ShortList}
              filter="thumbsDown"
              refetchShortList={refetchShortList}
            />
          }
        </div>
      );
    } else if (stageStatus == "Contacted") {
      return (
        <div>
          {
            <DashCandidateTilesShortList
              vouchData={ShortList}
              filter="contacted"
              refetchShortList={refetchShortList}
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
        <div>
          <div className={"pt-4 px-20"}>
            <UserIdBar
              hrData={hrData}
              stageStatus={stageStatus}
              setStageStatus={setStageStatus}
              queryUpdateOnClick={refetchShortList}
            />
          </div>
          <div className={"w-full border-gray-500 border-b"}></div>
          <div className={"grid grid-cols-3  pt-8 pb-8 px-24 bg-gray-50 "}>
            <div className={"col-start-1 col-span-2 bg-gray-200 py-6 pl-6"}>
              <div className={"grid grid-rows-2"}>
                <div className={"text-xl font-bold"}>
                  {" "}
                  Welcome {user.displayName}
                </div>
                <div className={"pt-1"}>
                  {" "}
                  To date, you have referred {
                    dashBoardTest.numberReferred
                  }, {dashBoardTest.numberThanks} of your vouchees have landed
                  new interviews
                </div>
              </div>
            </div>
            <div className="grid col-start-3 bg-gray-200 py-6 pr-6">
              <div className={"flex items-center justify-end"}>
                <VouchCTA
                  numberReferred={dashBoardTest.numberReferred}
                  numberThanks={dashBoardTest.numberThanks}
                />
              </div>
            </div>
          </div>
          <div className={"pb-4 px-24 grid grid-cols-12 bg-gray-50"}>
            <div
              className={
                "col-start-1 col-span-2 font-bold flex justify-center items-center"
              }
            >
              Candidate Filters
            </div>
            <div className={"col-start-3 flex items-center"}>
              <DashboardCategoryFilter
                backgroundColour="white"
                dropDownArray={jobCategoryDropdownData}
                value={jobCategoryDropdown}
                onChange={(e) => setJobCategoryDropdown(e.target.value)}
              />
            </div>
            <div className={"col-start-5 flex items-center"}>
              <DashboardCategoryFilter
                backgroundColour="white"
                dropDownArray={jobSeniorityDropdownData}
                value={seniorityDropdown}
                onChange={(e) => setSeniorityDropdown(e.target.value)}
              />
            </div>
            <div className={"col-start-7 flex items-center"}>
              <DashboardCategoryFilter
                backgroundColour="white"
                dropDownArray={stateProvince}
                value={locationStateDropdown}
                onChange={(e) => setLocationStateDropdown(e.target.value)}
              />
            </div>
            <div className={"col-start-11 col-span-2 flex items-start pb-12"}>
              <CandidateCount
                candidateCount={dashBoardTest.candidateCount}
                lastCandidateCount={dashBoardTest.lastCandidateCount}
              />
            </div>
          </div>
          <div className={"bg-gray-50 px-24"}>
            <div
              className={"grid grid-cols-3 grid-flow-col content-center py-1"}
            >
              <div className={"col-start-1"}>
                <div className={"grid grid-cols-2"}>
                  <p
                    className={
                      "col-start-2 w-full pl-4 font-bold text-sm text-gray-400"
                    }
                  >
                    Most recent position
                  </p>
                </div>
              </div>
              <div className={"grid-start-2"}>
                <div className={"grid grid-cols-2"}>
                  <p className={"w-full pl-12 font-bold text-sm text-gray-400"}>
                    Vouched by
                  </p>
                  <div
                    className={
                      "w-full pl-4 font-bold text-sm text-gray-400 grid grid-cols-10"
                    }
                  >
                    <div className={"col-span-8"}>
                      {" "}
                      Position Interviewed for
                    </div>
                    <div className={"col-start-9"}>
                      <InformationCircleIcon
                        className={
                          "h-4 w-4 text-gray-400 hover:text-yellow-200 cursor-pointer"
                        }
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className={"grid-start-3"}>
                <div className={"grid grid-cols-2"}>
                  <div
                    className={
                      "w-full pl-8 font-bold text-sm text-gray-400 grid grid-cols-12"
                    }
                  >
                    <div className={"col-span-5"}>Vouched by</div>
                    <div className={"col-start-6 pl-1"}>
                      <InformationCircleIcon
                        className={
                          "h-4 w-4 text-gray-400 hover:text-yellow-200 cursor-pointer"
                        }
                      />{" "}
                    </div>
                  </div>
                  <div
                    className={
                      "w-full font-bold text-sm text-gray-400 grid grid-cols-12"
                    }
                  >
                    <div className={"col-span-6"}>Standout Skills</div>
                    <div className={"col-start-7"}>
                      <InformationCircleIcon
                        className={
                          "h-4 w-4 text-gray-400 hover:text-yellow-200 cursor-pointer"
                        }
                      />{" "}
                    </div>
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

export async function getServerSideProps() {
  const client = new ApolloClient({
    uri: "https://zerglings-1.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
    headers: {
      "content-type": "application/json",
      "x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET,
    },
  });

  const { data } = await client.query({
    query: QUERY_DASHBOARD_TILES,
  });

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: data, // will be passed to the page component as props
  };
}

export default DashBoard;

DashBoard.auth = true;
