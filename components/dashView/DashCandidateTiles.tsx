import React from "react";
import { CandidateTile } from "./CandidateTile";

export interface DashCandidateTilesProps {
  vouchData: any;
  refetchShortList: () => void;
  filterJobCategory: any;
  filterJobSeniority: any;
  filterLocation: any;
}

const DashCandidateTiles = ({
  vouchData,
  refetchShortList,
  filterJobCategory,
  filterJobSeniority,
  filterLocation,
}: DashCandidateTilesProps) => {
  return (
    <div className="grid grid-cols-12">
      {/* TODO: Highlight or Hide if they are short listed ,filter array for basic drop downs, Update DB to allow for basic logic to sort through job categories, */}
      {/* (currentOption === 'all' ? assets : assets.filter(asset => asset.type === currentOption))
    .map( asset => <img src={asset.url} /> )
    
        .filter(
            (e) => e.Company_Data[0].rangeOfEmployees == filterJobCompanySize
          )
*/}

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
            pastPosition1={vouchData.candidate_metadata[i].positionTitle1}
            pastIndustry1={vouchData.candidate_metadata[i].industry1}
            standOutSkill1={
              e.standOutSkill1
                ? e.standOutSkill1
                : "Information Missing." || e.standOutSkill2
                ? e.standOutSkill2
                : "Information Missing." || e.standOutSkill3
                ? e.standOutSkill3
                : "Information Missing." || e.standOutSkill4
                ? e.standOutSkill4
                : "Information Missing." || e.standOutSkill5
                ? e.standOutSkill5
                : "Information Missing."
            }
            userLinkedinURL={vouchData.candidate_metadata[i].linkedIn}
            userEmailAction={vouchData.candidates[i].candidateEmail}
            refetchShortList={refetchShortList}
          />
        ))}
    </div>
  );
};

export default DashCandidateTiles;
