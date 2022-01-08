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
              firstName={
                e.hr_voucher_metadatum.Candidate_Contact[0].candidateFirstName
              }
              lastName={
                e.hr_voucher_metadatum.Candidate_Contact[0].candidateLastName
              }
              positionTitle={e.hr_voucher_metadatum.positionTitle}
              salaryRange={e.hr_voucher_metadatum.salaryRange}
              jobLocation={
                e.hr_voucher_metadatum.Vouchee[0].locationCity == "Yes"
                  ? "Remote"
                  : e.hr_voucher_metadatum.Vouchee[0].locationCity
              }
              numEmployees={
                e.hr_voucher_metadatum.Company_Data[0].rangeOfEmployees
              }
              companyName={e.hr_voucher_metadatum.Company_Data[0].corporateName}
              stageInterview={e.hr_voucher_metadatum.stageOfInterview}
              pastPosition1={e.hr_voucher_metadatum.Vouchee[0].positionTitle}
              pastIndustry1={e.hr_voucher_metadatum.Vouchee[0].industry}
              standOutSkill1={e.hr_voucher_metadatum.standOutSkill1}
              standOutSkill2={e.hr_voucher_metadatum.standOutSkill2}
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
