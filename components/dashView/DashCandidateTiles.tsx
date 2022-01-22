import React from "react";
import { CandidateTile } from "./CandidateTile";

export interface DashCandidateTilesProps {
  vouchData: any;
  refetchShortList: () => void;
  filterJobCategory: any;
  filterJobSeniority: any;
  filterStateLocation: any;
  existingCandidates: string;
  setExistingCandidates: (existingCandidates: any) => void;
  hrData: any;
}

const DashCandidateTiles = ({
  vouchData,
  refetchShortList,
  filterJobCategory,
  filterJobSeniority,
  filterStateLocation,
  hrData,
  setExistingCandidates,
}: DashCandidateTilesProps) => {
  const filterManage = () => {
    if (filterJobCategory != "empty" && filterJobSeniority != "empty") {
      return vouchData.hr_voucher_metadata
        .filter((e) => e.Vouchee[0].jobCategory == filterJobCategory)
        .filter((e) => e.Vouchee[0].seniority == filterJobSeniority);
    } else if (filterJobCategory != "empty" && filterStateLocation != "empty") {
      return vouchData.hr_voucher_metadata
        .filter((e) => e.Vouchee[0].jobCategory == filterJobCategory)
        .filter((e) => e.Vouchee[0].locationState == filterStateLocation);
    } else if (
      filterStateLocation != "empty" &&
      filterJobSeniority != "empty"
    ) {
      return vouchData.hr_voucher_metadata
        .filter((e) => e.Vouchee[0].seniority == filterJobSeniority)
        .filter((e) => e.Vouchee[0].locationState == filterStateLocation);
    } else if (
      filterStateLocation != "empty" &&
      filterJobSeniority != "empty" &&
      filterJobCategory != "empty"
    ) {
      return vouchData.hr_voucher_metadata
        .filter((e) => e.Vouchee[0].seniority == filterJobSeniority)
        .filter((e) => e.Vouchee[0].locationState == filterStateLocation)
        .filter((e) => e.Vouchee[0].jobCategory == filterJobCategory);
    } else if (
      filterStateLocation != "empty" &&
      filterJobSeniority == "empty" &&
      filterJobCategory == "empty"
    ) {
      return vouchData.hr_voucher_metadata.filter(
        (e) => e.Vouchee[0].locationState == filterStateLocation
      );
    } else if (
      filterStateLocation == "empty" &&
      filterJobSeniority != "empty" &&
      filterJobCategory == "empty"
    ) {
      return vouchData.hr_voucher_metadata.filter(
        (e) => e.Vouchee[0].seniority == filterJobSeniority
      );
    } else if (
      filterStateLocation == "empty" &&
      filterJobSeniority == "empty" &&
      filterJobCategory != "empty"
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

  const candidateCounter = () => {
    setExistingCandidates(0);
    shortListFilter()
      .filter((e) => e.Vouchee.length > 0)
      .map((e, i) => setExistingCandidates(i + 1));
  };

  return (
    <div className="grid grid-cols-12">
      {vouchData &&
        shortListFilter()
          .filter((e) => e.Vouchee.length > 0)
          // .filter(
          //   (e) => e.Vouchee[0].companyWebsite == hrData[0].companyWebsite
          // )
          .map((e, i) => (
            <CandidateTile
              userID={e.candidateId}
              firstName={e.Candidate_Contact[0].candidateFirstName}
              lastName={e.Candidate_Contact[0].candidateLastName}
              positionTitle={e.positionTitle}
              salaryRange={e.salaryRange}
              jobLocation={
                e.Vouchee[0].locationCity == "Yes"
                  ? "Remote"
                  : e.Vouchee[0].locationCity
              }
              numEmployees={e.Company_Data[0].rangeOfEmployees}
              companyName={e.Company_Data[0].corporateName}
              stageInterview={e.stageOfInterview}
              pastPosition1={e.Vouchee[0].positionTitle}
              pastCompanyName={e.Vouchee[0].companyName}
              standOutSkill1={e.standOutSkill1}
              standOutSkill2={e.standOutSkill2}
              userLinkedinURL={e.Vouchee[0].linkedIn}
              userEmailAction={e.Candidate_Contact[0].candidateEmail}
              refetchShortList={refetchShortList}
              hrData={hrData}
              key={i}
            />
          ))}
      {vouchData && candidateCounter()}
    </div>
  );
};

export default DashCandidateTiles;
