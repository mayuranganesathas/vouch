import React from "react";
import { CandidateTile } from "./CandidateTile";

export interface DashCandidateTilesShortListProps {
  vouchData: any;
  filter: string;
  refetchShortList: () => void;
  setExistingCandidates: (existingCandidates: number) => void;
  existingCandidates: number;
  hrData: any;
  stageStatus: string;
  candidateLocationFilterDropdown: any;
  yearsOfExperienceFilterDropdown: any;
  positionTypeFilterDropdown: any;
  anonData: any;
  refetchAnonData: () => void;
}

const DashCandidateTilesShortList = ({
  vouchData,
  filter,
  refetchShortList,
  setExistingCandidates,
  hrData,
  stageStatus,
  candidateLocationFilterDropdown,
  yearsOfExperienceFilterDropdown,
  positionTypeFilterDropdown,
  anonData,
  refetchAnonData,
}: DashCandidateTilesShortListProps) => {
  const candidateCounter = () => {
    setExistingCandidates(0);
    filterManage()
      .filter((e) => e.status === filter)
      .map((_, i) => setExistingCandidates(i + 1));
  };

  const filterManage = () => {
    let availableCandidates = vouchData.shortlist.filter(
      (e) => e.hr_voucher_metadatum.Vouchee.length > 0
    );
    if (
      candidateLocationFilterDropdown != "empty" &&
      positionTypeFilterDropdown != "empty"
    ) {
      // Candidate Location and Position Type Interviewed for are entered by user

      return availableCandidates.filter(
        (e) =>
          e.hr_voucher_metadatum.Vouchee[0].locationState ==
            candidateLocationFilterDropdown &&
          e.hr_voucher_metadatum.positionType == positionTypeFilterDropdown
      );
    } else if (
      candidateLocationFilterDropdown != "empty" &&
      yearsOfExperienceFilterDropdown != "empty"
    ) {
      // Candidate Location and Years of Experience are entered by user
      return availableCandidates.filter(
        (e) =>
          e.hr_voucher_metadatum.Vouchee[0].locationState ==
            candidateLocationFilterDropdown &&
          e.hr_voucher_metadatum.yearsOfExperience ==
            yearsOfExperienceFilterDropdown
      );
    } else if (
      yearsOfExperienceFilterDropdown != "empty" &&
      positionTypeFilterDropdown != "empty"
    ) {
      // Position Type and Years of Experience are entered by user

      return availableCandidates.filter(
        (e) =>
          e.hr_voucher_metadatum.positionType == positionTypeFilterDropdown &&
          e.hr_voucher_metadatum.yearsOfExperience ==
            yearsOfExperienceFilterDropdown
      );
    } else if (
      yearsOfExperienceFilterDropdown != "empty" &&
      positionTypeFilterDropdown != "empty" &&
      candidateLocationFilterDropdown != "empty"
    ) {
      // Position Type, Candidate Location and, Years of Experience are entered by user

      return availableCandidates.filter(
        (e) =>
          e.hr_voucher_metadatum.positionType == positionTypeFilterDropdown &&
          e.hr_voucher_metadatum.Vouchee[0].locationState ==
            candidateLocationFilterDropdown &&
          e.hr_voucher_metadatum.yearsOfExperience ==
            yearsOfExperienceFilterDropdown
      );
    } else if (
      yearsOfExperienceFilterDropdown != "empty" &&
      positionTypeFilterDropdown == "empty" &&
      candidateLocationFilterDropdown == "empty"
    ) {
      //Only Years of Experience are entered by user

      return availableCandidates.filter(
        (e) =>
          e.hr_voucher_metadatum.yearsOfExperience ==
          yearsOfExperienceFilterDropdown
      );
    } else if (
      yearsOfExperienceFilterDropdown == "empty" &&
      positionTypeFilterDropdown != "empty" &&
      candidateLocationFilterDropdown == "empty"
    ) {
      //Only Position Type are entered by user

      return availableCandidates.filter(
        (e) => e.hr_voucher_metadatum.positionType == positionTypeFilterDropdown
      );
    } else if (
      yearsOfExperienceFilterDropdown == "empty" &&
      positionTypeFilterDropdown == "empty" &&
      candidateLocationFilterDropdown != "empty"
    ) {
      //Only Candidate Location are entered by user

      return availableCandidates.filter(
        (e) =>
          e.hr_voucher_metadatum.Vouchee[0].locationState ==
          candidateLocationFilterDropdown
      );
    } else {
      // all candidates
      return availableCandidates;
    }
  };

  return (
    <div className="grid grid-cols-12">
      {hrData &&
        vouchData &&
        filterManage()
          .filter((e) => e.status === filter)
          .map((e, i) => (
            <CandidateTile
              userID={e.candidateId}
              firstName={
                e.hr_voucher_metadatum.Candidate_Contact[0].candidateFirstName
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
              userLinkedinURL={e.hr_voucher_metadatum.Vouchee[0].linkedIn}
              userEmailAction={
                e.hr_voucher_metadatum.Candidate_Contact[0].candidateEmail
              }
              refetchShortList={refetchShortList}
              hrData={hrData}
              stageStatus={stageStatus}
              key={i}
              hrManagerIndustry={e.hr_voucher_metadatum.Hr_Account[0].industry}
              yearsOfExperience={e.hr_voucher_metadatum.yearsOfExperience}
              anonData={anonData}
              refetchAnonData={refetchAnonData}
            />
          ))}
      {vouchData && candidateCounter()}
    </div>
  );
};

export default DashCandidateTilesShortList;
