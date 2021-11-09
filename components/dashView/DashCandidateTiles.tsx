import React from "react";
import { CandidateTile } from "./CandidateTile";

const DashCandidateTilesData = {
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
};

const DashCandidateTiles = () => {
  return (
    <div>
      <div className={"py-4"}>
        <CandidateTile
          starStatus={DashCandidateTilesData.starStatus}
          userID={DashCandidateTilesData.userID}
          positionTitle={DashCandidateTilesData.positionTitle}
          salaryRange={DashCandidateTilesData.salaryRange}
          jobLocation={DashCandidateTilesData.jobLocation}
          companyLogo={DashCandidateTilesData.companyLogo}
          numEmployees={DashCandidateTilesData.numEmployees}
          companyName={DashCandidateTilesData.companyName}
          stageInterview={DashCandidateTilesData.stageInterview}
          stageNumber={DashCandidateTilesData.stageNumber}
          pastPosition1={DashCandidateTilesData.pastIndustry1}
          pastIndustry1={DashCandidateTilesData.pastIndustry1}
          standOutSkill1={DashCandidateTilesData.standOutSkill1}
        />
      </div>
      <div className={"py-4"}>
        <CandidateTile
          starStatus={DashCandidateTilesData.starStatus}
          userID={DashCandidateTilesData.userID}
          positionTitle={DashCandidateTilesData.positionTitle}
          salaryRange={DashCandidateTilesData.salaryRange}
          jobLocation={DashCandidateTilesData.jobLocation}
          companyLogo={DashCandidateTilesData.companyLogo}
          numEmployees={DashCandidateTilesData.numEmployees}
          companyName={DashCandidateTilesData.companyName}
          stageInterview={DashCandidateTilesData.stageInterview}
          stageNumber={DashCandidateTilesData.stageNumber}
          pastPosition1={DashCandidateTilesData.pastIndustry1}
          pastIndustry1={DashCandidateTilesData.pastIndustry1}
          standOutSkill1={DashCandidateTilesData.standOutSkill1}
        />
      </div>
      <div className={"py-4"}>
        <CandidateTile
          starStatus={DashCandidateTilesData.starStatus}
          userID={DashCandidateTilesData.userID}
          positionTitle={DashCandidateTilesData.positionTitle}
          salaryRange={DashCandidateTilesData.salaryRange}
          jobLocation={DashCandidateTilesData.jobLocation}
          companyLogo={DashCandidateTilesData.companyLogo}
          numEmployees={DashCandidateTilesData.numEmployees}
          companyName={DashCandidateTilesData.companyName}
          stageInterview={DashCandidateTilesData.stageInterview}
          stageNumber={DashCandidateTilesData.stageNumber}
          pastPosition1={DashCandidateTilesData.pastIndustry1}
          pastIndustry1={DashCandidateTilesData.pastIndustry1}
          standOutSkill1={DashCandidateTilesData.standOutSkill1}
        />
      </div>
      <div className={"py-4"}>
        <CandidateTile
          starStatus={DashCandidateTilesData.starStatus}
          userID={DashCandidateTilesData.userID}
          positionTitle={DashCandidateTilesData.positionTitle}
          salaryRange={DashCandidateTilesData.salaryRange}
          jobLocation={DashCandidateTilesData.jobLocation}
          companyLogo={DashCandidateTilesData.companyLogo}
          numEmployees={DashCandidateTilesData.numEmployees}
          companyName={DashCandidateTilesData.companyName}
          stageInterview={DashCandidateTilesData.stageInterview}
          stageNumber={DashCandidateTilesData.stageNumber}
          pastPosition1={DashCandidateTilesData.pastIndustry1}
          pastIndustry1={DashCandidateTilesData.pastIndustry1}
          standOutSkill1={DashCandidateTilesData.standOutSkill1}
        />
      </div>
    </div>
  );
};

export default DashCandidateTiles;
