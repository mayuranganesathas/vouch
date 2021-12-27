import React from "react";
import { CandidateTile } from "./CandidateTile";

export interface DashCandidateTilesShortListProps {
  vouchData: any;
  filter: string;
  refetchShortList: () => void;
}

const DashCandidateTilesShortList = ({
  vouchData,
  filter,
  refetchShortList,
}: DashCandidateTilesShortListProps) => {
  return (
    <div className="grid grid-cols-12">
      {vouchData &&
        vouchData.shortlist
          .filter((e) => e.status === filter)
          .map((e, i) => (
            //include job category
            <CandidateTile
              userID={e.candidateId}
              positionTitle={e.hr_voucher_metadatum.positionTitle}
              salaryRange={e.hr_voucher_metadatum.salaryRange}
              jobLocation={e.hr_voucher_metadatum.Company_Data[0].location}
              companyLogo={
                e.hr_voucher_metadatum.Company_Data[0].companyLogoAddress
              }
              numEmployees={
                e.hr_voucher_metadatum.Company_Data[0].numberOfEmployees
              }
              companyName={e.hr_voucher_metadatum.Company_Data[0].corporateName}
              stageInterview={e.hr_voucher_metadatum.stageOfInterview}
              pastPosition1={e.hr_voucher_metadatum.Vouchee[0].positionTitle1}
              pastIndustry1={e.hr_voucher_metadatum.Vouchee[0].industry1}
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
              userLinkedinURL={e.hr_voucher_metadatum.Vouchee[0].linkedIn}
              userEmailAction={
                e.hr_voucher_metadatum.Candidate_Contact[0].candidateEmail
              }
              refetchShortList={refetchShortList}
            />
          ))}
    </div>
  );
};

export default DashCandidateTilesShortList;
