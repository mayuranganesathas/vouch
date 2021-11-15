import React from "react";
import { CandidateTile } from "./CandidateTile";

export interface DashCandidateTilesProps {
  vouchData: any;
}

const DashCandidateTiles = (vouchData) => {
  return (
    <div className="">
      {/* {JSON.stringify(vouchData)} */}
      {vouchData &&
        vouchData.vouchData.hr_voucher_metadata.map((e) => (
          <CandidateTile
            userID={e.candidateId}
            positionTitle={e.positionTitle}
            salaryRange={e.salaryRange}
            jobLocation={e.Vouchee[0].Location}
            companyLogo={e.Company_Data[0].companyLogoAddress}
            numEmployees={e.Company_Data[0].numberOfEmployees}
            companyName={e.Company_Data[0].corporateName}
            stageInterview={e.stageOfInterview}
            stageNumber="3/5"
            pastPosition1={e.Vouchee[0].positionTitle1}
            pastIndustry1={e.Vouchee[0].industry1}
            standOutSkill1={e.standOutSkill1}
          />
        ))}
    </div>
  );
};

export default DashCandidateTiles;
