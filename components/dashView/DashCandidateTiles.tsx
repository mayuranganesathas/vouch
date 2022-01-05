import React from "react";
import { CandidateTile } from "./CandidateTile";

export interface DashCandidateTilesProps {
  vouchData: any;
  refetchShortList: () => void;
  filterJobCategory: any;
  filterJobSeniority: any;
  filterStateLocation: any;
}

const DashCandidateTiles = ({
  vouchData,
  refetchShortList,
  filterJobCategory,
  filterJobSeniority,
  filterStateLocation,
}: DashCandidateTilesProps) => {
  const filterManage = () => {
    if (filterJobCategory != "Category" && filterJobSeniority != "Seniority") {
      return vouchData.hr_voucher_metadata
        .filter((e) => e.Vouchee[0].jobCategory == filterJobCategory)
        .filter((e) => e.Vouchee[0].seniority == filterJobSeniority);
    } else if (
      filterJobCategory != "Category" &&
      filterStateLocation != "--CANADA--"
    ) {
      return vouchData.hr_voucher_metadata
        .filter((e) => e.Vouchee[0].jobCategory == filterJobCategory)
        .filter((e) => e.Vouchee[0].locationState == filterStateLocation);
    } else if (
      filterStateLocation != "--CANADA--" &&
      filterJobSeniority != "Seniority"
    ) {
      return vouchData.hr_voucher_metadata
        .filter((e) => e.Vouchee[0].seniority == filterJobSeniority)
        .filter((e) => e.Vouchee[0].locationState == filterStateLocation);
    } else if (
      filterStateLocation != "--CANADA--" &&
      filterJobSeniority != "Seniority" &&
      filterJobCategory != "Category"
    ) {
      return vouchData.hr_voucher_metadata
        .filter((e) => e.Vouchee[0].seniority == filterJobSeniority)
        .filter((e) => e.Vouchee[0].locationState == filterStateLocation)
        .filter((e) => e.Vouchee[0].jobCategory == filterJobCategory);
    } else if (
      filterStateLocation != "--CANADA--" &&
      filterJobSeniority == "Seniority" &&
      filterJobCategory == "Category"
    ) {
      return vouchData.hr_voucher_metadata.filter(
        (e) => e.Vouchee[0].locationState == filterStateLocation
      );
    } else if (
      filterStateLocation == "--CANADA--" &&
      filterJobSeniority != "Seniority" &&
      filterJobCategory == "Category"
    ) {
      return vouchData.hr_voucher_metadata.filter(
        (e) => e.Vouchee[0].seniority == filterJobSeniority
      );
    } else if (
      filterStateLocation == "--CANADA--" &&
      filterJobSeniority == "Seniority" &&
      filterJobCategory != "Category"
    ) {
      return vouchData.hr_voucher_metadata.filter(
        (e) => e.Vouchee[0].jobCategory == filterJobCategory
      );
    } else {
      return vouchData.hr_voucher_metadata;
    }
  };

  const shortListFilter = () => {
    const x = vouchData.shortlist.map((e) => e.candidateId);
    return filterManage().filter((e) => !x.includes(e.candidateId));
  };

  return (
    <div className="grid grid-cols-12">
      {vouchData &&
        shortListFilter().map((e, i) => (
          <CandidateTile
            userID={e.candidateId}
            positionTitle={e.positionTitle}
            salaryRange={e.salaryRange}
            jobLocation={e.Vouchee[0].locationCity}
            companyLogo={e.Company_Data[0].companyLogoAddress}
            numEmployees={e.Company_Data[0].numberOfEmployees}
            companyName={e.Company_Data[0].corporateName}
            stageInterview={e.stageOfInterview}
            pastPosition1={e.Vouchee.positionTitle1}
            pastIndustry1={e.Vouchee.industry1}
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
            userLinkedinURL={e.Vouchee.linkedIn}
            userEmailAction={e.Candidate_Contact[0].candidateEmail}
            refetchShortList={refetchShortList}
          />
        ))}
    </div>
  );
};

export default DashCandidateTiles;

// vouchData.hr_voucher_metadata

// .filter(
//     (e) => e.Vouchee[0].locationState == filterStateLocation
//   )
//

// .filter(
//         (e) => e.Vouchee[0].jobCategory == filterJobCategory
//       )

// .filter(
// //         (e) => e.Vouchee[0].seniority == filterJobSeniority
// //       )
