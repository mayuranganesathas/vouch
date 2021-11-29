import React from "react";
import { CandidateTile } from "./CandidateTile";

export interface DashCandidateTilesProps {
  vouchData: any;
}

const DashCandidateTiles = ({ vouchData }: DashCandidateTilesProps) => {
  return (
    <div className="">
      {/* {JSON.stringify(vouchData)} */}
      {vouchData &&
        vouchData.hr_voucher_metadata.map((e, i) => (
          <CandidateTile
            userID={e.candidateId}
            positionTitle={e.positionTitle}
            salaryRange={e.salaryRange}
            jobLocation={vouchData.candidate_metadata[i].Location}
            companyLogo={e.Company_Data[0].companyLogoAddress}
            numEmployees={e.Company_Data[0].numberOfEmployees}
            companyName={e.Company_Data[0].corporateName}
            stageInterview={e.stageOfInterview}
            stageNumber="3/5"
            pastPosition1={vouchData.candidate_metadata[i].positionTitle1}
            pastIndustry1={vouchData.candidate_metadata[i].industry1}
            standOutSkill1={e.standOutSkill1}
            userLinkedinURL={vouchData.candidate_metadata[i].linkedIn}
            userEmailAction={vouchData.candidates[i].candidateEmail}
          />
        ))}
    </div>
  );
};

export default DashCandidateTiles;
