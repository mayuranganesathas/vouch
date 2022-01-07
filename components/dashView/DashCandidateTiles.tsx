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
        shortListFilter()
          .filter((e) => e.Vouchee[0].length > 0)
          .map((e) => (
            <CandidateTile
              userID={e.candidateId}
              firstName={e.Candidate_Contact[0].candidateFirstName}
              lastName={e.Candidate_Contact[0].candidateLastName}
              positionTitle={e.positionTitle}
              salaryRange={e.salaryRange}
              jobLocation={e.Vouchee[0].locationCity}
              numEmployees={e.Company_Data[0].rangeOfEmployees}
              companyName={e.Company_Data[0].corporateName}
              stageInterview={e.stageOfInterview}
              pastPosition1={e.Vouchee[0].positionTitle}
              pastIndustry1={e.Vouchee[0].industry}
              standOutSkill1={e.standOutSkill1}
              standOutSkill2={e.standOutSkill2}
              userLinkedinURL={e.Vouchee[0].linkedIn}
              userEmailAction={e.Candidate_Contact[0].candidateEmail}
              refetchShortList={refetchShortList}
            />
          ))}
    </div>
  );
};

export default DashCandidateTiles;
