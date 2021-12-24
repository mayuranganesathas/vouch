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
<<<<<<< HEAD
import { JobCategoryFilter } from "../components/ui/JobCategoryFilter";
import { SeniorityFilter } from "../components/ui/SeniorityFilter";
import { CompanySizeFilter } from "../components/ui/CompanySizeFilter";
import { IndustryFilter } from "../components/ui/IndustryFilter";
export interface DashboardProps {}
=======
import { QUERY_SHORT_LIST } from "../graphql/QUERY_SHORTLIST";
import DashCandidateTilesShortList from "../components/dashView/DashCandidateTilesShortList";
import { SearchFilterDash } from "../components/ui/searchFilterDash";
import { filterArgTypes } from "@storybook/client-api";

export interface DashboardProps {
  filter: string;
  setFilter: (filter: string) => void;
}
>>>>>>> main

const dashBoardTest = {
  newCandidateNumber: 14,
  userHrFirstName: "Vivian",
  moveToCandidate: () => {},
  numberReferred: 10,
  numberThanks: 4,
  candidateCount: [10],
  lastCandidateCount: 5,
  dropDownArrayJobCategory: [
    "Job Category",
    "software eng",
    "mayu's butthole",
    "brian's face",
  ],
  dropDownArraySeniority: [
    "Seniority Level",
    "Junior",
    "Intermeidate",
    "Senior",
    "Director",
    "VP",
  ],
  dropDownArrayCompanySize: [
    "Company Size",
    "<10",
    "11-50",
    "51-100",
    "101-200",
    "201-500",
    "500+",
  ],

  dropDownArrayIndustry: [
    "Industry",
    "Tech",
    "Gaming",
    "Saas",
    "something",
    "Blah",
    "Cool",
  ],

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

const DashBoard = (data, { filter, setFilter }: DashboardProps) => {
  const [stage, setStage] = useState("Home");
  const [stageStatus, setStageStatus] = useState("Home");

  const { user } = useAuth();

  let { loading, data: ShortList } = useQuery(QUERY_SHORT_LIST, {
    variables: {
      hrId: user.uid,
    },
  });

  //create 3 queries based on thumbs up, thumbs down and contacted
  // get all cand id's , pass into second query and map through them based on the queries

  const getTileComponent = (stage) => {
    if (stageStatus == "Home") {
      return <DashCandidateTiles vouchData={data} />;
    } else if (stageStatus == "Favorites") {
      return (
        <div>
          {
            <DashCandidateTilesShortList
              vouchData={ShortList}
              filter="thumbsUp"
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
            />
          }
        </div>
      );
    }
  };

  const getWelcomeComponent = (stage) => {
    if (stageStatus == "Home") {
      return (
        <div>
          <WelcomeComp
            newCandidateNumber={dashBoardTest.newCandidateNumber}
            userHrFirstName={user.displayName}
            moveToCandidates={dashBoardTest.moveToCandidate}
          />
        </div>
      );
    } else if (stageStatus == "Favorites") {
      return <div></div>;
    } else if (stageStatus == "Unfit") {
      return <div></div>;
    } else if (stageStatus == "Contacted") {
      return <div></div>;
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

  const value = () => {};

  const onChange = () => {};

  return (
    <div>
      {hrData && (
        <div>
          <div className={"pt-4 px-20"}>
            <UserIdBar
              hrData={hrData}
              stageStatus={stageStatus}
              setStageStatus={setStageStatus}
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
              <JobCategoryFilter
                backgroundColour="white"
                dropDownArrayJobCategory={
                  dashBoardTest.dropDownArrayJobCategory
                }
              />
            </div>
            <div>
              {" "}
              <SeniorityFilter
                backgroundColour="white"
                dropDownArraySeniority={dashBoardTest.dropDownArraySeniority}
              />
            </div>
            <div>
              {" "}
              <CompanySizeFilter
                backgroundColour="white"
                dropDownArrayCompanySize={
                  dashBoardTest.dropDownArrayCompanySize
                }
              />
            </div>
            <div>
              {" "}
              <IndustryFilter
                backgroundColour="white"
                dropDownArrayIndustry={dashBoardTest.dropDownArrayIndustry}
              />
            </div>

            <div className="grid justify-items-end">
              <VouchCTA
                numberReferred={dashBoardTest.numberReferred}
                numberThanks={dashBoardTest.numberThanks}
              />
            </div>
          </div>
<<<<<<< HEAD

=======
          <div className={"grid grid-cols-2"}>
            <div className={"pl-20"}>
              <CandidateCount
                candidateCount={dashBoardTest.candidateCount}
                lastCandidateCount={dashBoardTest.lastCandidateCount}
              />
            </div>
            <div className={"grid justify-items-end col-start-2 pr-40 py-8"}>
              <SearchFilterDash
                backgroundColour="white"
                dropDownArray={dashBoardTest.dropDownArray}
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </div>
          </div>
>>>>>>> main
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
            <div className={"py-4"}>{getTileComponent(stage)}</div>
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
