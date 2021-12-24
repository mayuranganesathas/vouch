import React from "react";
import { CandidateTile } from "./CandidateTile";

export interface DashCandidateTilesShortListProps {
  vouchData: any;
  filter: string;
  refetchShortList: any;
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
                e.hr_voucher_metadatum.standOutSkill1 ||
                e.hr_voucher_metadatum.standOutSkill2 ||
                e.hr_voucher_metadatum.standOutSkill3 ||
                e.hr_voucher_metadatum.standOutSkill4 ||
                e.hr_voucher_metadatum.standOutSkill5
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
