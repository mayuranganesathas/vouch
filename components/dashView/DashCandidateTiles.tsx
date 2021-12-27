import React from "react";
import { CandidateTile } from "./CandidateTile";

export interface DashCandidateTilesProps {
  vouchData: any;
  refetchShortList: () => void;
  filterJobCategory: any;
  filterJobSeniority: any;
  filterJobCompanySize: any;
  filterJobIndustry: any;
}

const DashCandidateTiles = ({
  vouchData,
  refetchShortList,
  filterJobCategory,
  filterJobCompanySize,
  filterJobIndustry,
  filterJobSeniority,
}: DashCandidateTilesProps) => {
  return (
    <div className="grid grid-cols-12">
      {/* {JSON.stringify(vouchData)} */}
      {vouchData &&
        vouchData.hr_voucher_metadata
          // .filter(
          //   (e) => e.Company_Data[0].numberOfEmployees === filterJobCategory
          // )
          // .filter(
          //   (e) => e.Company_Data[0].numberOfEmployees === filterJobCompanySize
          // )
          // )
          // .filter(
          //   (e) => e.Company_Data[0].numberOfEmployees === filterJobIndustry
          // )
          // .filter((e) => e.positionLevel === filterJobSeniority)

          .map((e, i) => (
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

//  {
//    vouchData &&
//      vouchData.shortlist
//        .filter((e) => e.status === filter)
//        .map((e, i) => (
//          <CandidateTile
//            userID={e.candidateId}
//            positionTitle={e.hr_voucher_metadatum.positionTitle}
//            salaryRange={e.hr_voucher_metadatum.salaryRange}
//            jobLocation={e.hr_voucher_metadatum.Company_Data[0].location}
//            companyLogo={
//              e.hr_voucher_metadatum.Company_Data[0].companyLogoAddress
//            }
//            numEmployees={
//              e.hr_voucher_metadatum.Company_Data[0].numberOfEmployees
//            }
//            companyName={e.hr_voucher_metadatum.Company_Data[0].corporateName}
//            stageInterview={e.hr_voucher_metadatum.stageOfInterview}
//            pastPosition1={e.hr_voucher_metadatum.Vouchee[0].positionTitle1}
//            pastIndustry1={e.hr_voucher_metadatum.Vouchee[0].industry1}
//            standOutSkill1={
//              e.hr_voucher_metadatum.standOutSkill1 ||
//              e.hr_voucher_metadatum.standOutSkill2 ||
//              e.hr_voucher_metadatum.standOutSkill3 ||
//              e.hr_voucher_metadatum.standOutSkill4 ||
//              e.hr_voucher_metadatum.standOutSkill5
//            }
//            userLinkedinURL={e.hr_voucher_metadatum.Vouchee[0].linkedIn}
//            userEmailAction={
//              e.hr_voucher_metadatum.Candidate_Contact[0].candidateEmail
//            }
//            refetchShortList={refetchShortList}
//          />
//        ));
//  }
