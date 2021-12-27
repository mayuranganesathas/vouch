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

import { QUERY_SHORT_LIST } from "../graphql/QUERY_SHORTLIST";
import DashCandidateTilesShortList from "../components/dashView/DashCandidateTilesShortList";
import { SearchFilterDash } from "../components/ui/searchFilterDash";
import { filterArgTypes } from "@storybook/client-api";
import {
  jobIndustryDropdownData,
  jobCategoryDropdownData,
  jobCompanySizeDropdownData,
  jobSeniorityDropdownData,
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
  const [industryDropdown, setIndustryDropdown] = useState("Industry");
  const [jobCategoryDropdown, setJobCategoryDropdown] = useState("Sector");
  const [companySizeDropdown, setCompanySizeDropdown] = useState(
    "Company Size"
  );
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
          filterJobCompanySize={companySizeDropdown}
          filterJobIndustry={industryDropdown}
          filterJobSeniority={seniorityDropdown}
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
          <div
            className={
              "grid grid-cols-6 justify-items-center pt-8 pb-8 px-14 bg-gray-50"
            }
          >
            <div className={""}>
              <CandidateCount
                candidateCount={dashBoardTest.candidateCount}
                lastCandidateCount={dashBoardTest.lastCandidateCount}
              />
            </div>

            <div>
              <DashboardCategoryFilter
                backgroundColour="white"
                dropDownArray={jobCategoryDropdownData}
                value={jobCategoryDropdown}
                onChange={(e) => setJobCategoryDropdown(e.target.value)}
              />
            </div>
            <div>
              <DashboardCategoryFilter
                backgroundColour="white"
                dropDownArray={jobSeniorityDropdownData}
                value={seniorityDropdown}
                onChange={(e) => setSeniorityDropdown(e.target.value)}
              />
            </div>
            <div>
              <DashboardCategoryFilter
                backgroundColour="white"
                dropDownArray={jobCompanySizeDropdownData}
                value={companySizeDropdown}
                onChange={(e) => setCompanySizeDropdown(e.target.value)}
              />
            </div>
            <div>
              <DashboardCategoryFilter
                backgroundColour="white"
                dropDownArray={jobIndustryDropdownData}
                value={industryDropdown}
                onChange={(e) => setIndustryDropdown(e.target.value)}
              />
            </div>
            <div className="grid justify-items-end">
              <VouchCTA
                numberReferred={dashBoardTest.numberReferred}
                numberThanks={dashBoardTest.numberThanks}
              />
            </div>
          </div>
          <div className={"bg-gray-50 px-20"}>
            <div
              className={
                "grid grid-cols-5 bg-gray-200 grid-flow-col content-center py-3"
              }
            >
              <div className={"col-start-1 pl-4 col-span-2"}>
                {" "}
                <p className={"w-full pl-20 font-bold text-base text-gray-800"}>
                  About Candidate
                </p>
              </div>
              <div className={"grid-start-3 col-span-3"}>
                {" "}
                <p className={"w-full pl-10 font-bold text-base text-gray-800"}>
                  Referring Company
                </p>
              </div>
            </div>
            <div className={"py-4"}>{getTileComponent()}</div>
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
