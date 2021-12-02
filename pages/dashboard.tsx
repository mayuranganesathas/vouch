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

export interface DashboardProps {}

const dashBoardTest = {
  newCandidateNumber: 14,
  userHrFirstName: "Vivian",
  moveToCandidate: () => {},
  numberReferred: 10,
  numberThanks: 4,
  candidateCount: [10],
  lastCandidateCount: 5,
  dropDownArray: ["software eng", "mayu's butthole", "brian's face"],

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

const DashBoard = (data) => {
  const [stage, setStage] = useState("Home");
  const [stageStatus, setStageStatus] = useState("Home");

  const { user } = useAuth();

  //create 3 queries based on thumbs up, thumbs down and contacted
  // get all cand id's , pass into second query and map through them based on the queries

  const getTileComponent = (stage) => {
    if (stageStatus == "Home") {
      return <DashCandidateTiles vouchData={data} />;
    } else if (stageStatus == "Favorites") {
      return <div>{/* <DashCandidateTiles vouchData={} /> */}</div>;
    } else if (stageStatus == "Unfit") {
      return <div>{/* <DashCandidateTiles vouchData={} /> */}</div>;
    } else if (stageStatus == "Contacted") {
      return <div>{/* <DashCandidateTiles vouchData={} /> */}</div>;
    }
  };

  const getWelcomeComponent = (stage) => {
    if (stageStatus == "Home") {
      return (
        <WelcomeComp
          newCandidateNumber={dashBoardTest.newCandidateNumber}
          userHrFirstName={user.displayName}
          moveToCandidates={dashBoardTest.moveToCandidate}
        />
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
          <div className={"px-2 grid grid-cols-2"}>
            <div className={"pl-24 pt-10"}>{getWelcomeComponent(stage)}</div>

            <div className="grid justify-items-end pr-40 pt-10">
              <VouchCTA
                numberReferred={dashBoardTest.numberReferred}
                numberThanks={dashBoardTest.numberThanks}
              />
            </div>
          </div>
          <div className={"grid grid-cols-2"}>
            <div className={"pl-20"}>
              <CandidateCount
                candidateCount={dashBoardTest.candidateCount}
                lastCandidateCount={dashBoardTest.lastCandidateCount}
              />
            </div>
            <div
              className={"grid justify-items-end col-start-2 pr-40 py-8"}
            ></div>
          </div>
          <div className={"bg-gray-50 px-20"}>
            <div className={"grid grid-cols-12 bg-gray-200 grid-flow-col"}>
              <div className={"col-start-1 pl-4"}>
                {" "}
                <p className={"w-full pl-4"}>Referral</p>
              </div>
              <div className={"grid-start-2 col-span-2"}>
                {" "}
                <p className={"w-full pl-6"}>Role Interviewed For</p>
              </div>
              <div className={"grid-start-4 col-span-2"}>
                <p className={"w-full"}>Referring By</p>
              </div>
              <div className={"grid-start-6 col-span-2"}>
                {" "}
                <p className={"w-full pl-8"}>Vetted To</p>
              </div>
              <div className={"grid-start-8 col-span-2"}>
                <p className={"w-full pl-4"}>Last Role</p>
              </div>
              <div className={"grid-start-10 col-span-1 "}>
                <p className={"w-full"}>Stand Out Skill</p>
              </div>
              <div className={"grid-start-11"}></div>
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
