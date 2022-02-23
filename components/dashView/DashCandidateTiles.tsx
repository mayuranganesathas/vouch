import React from "react";
import { CandidateTile } from "./CandidateTile";

export interface DashCandidateTilesProps {
  vouchData: any;
  refetchShortList: () => void;
  candidateLocationFilterDropdown: any;
  yearsOfExperienceFilterDropdown: any;
  positionTypeFilterDropdown: any;
  existingCandidates: string;
  setExistingCandidates: (existingCandidates: any) => void;
  anonData: any;
  hrData: any;
  refetchAnonData: () => void;
}

const DashCandidateTiles = ({
  vouchData,
  refetchShortList,
  candidateLocationFilterDropdown,
  yearsOfExperienceFilterDropdown,
  positionTypeFilterDropdown,
  anonData,
  hrData,
  refetchAnonData,
  setExistingCandidates,
}: DashCandidateTilesProps) => {
  const filterManage = () => {
    let availableCandidates = vouchData.hr_voucher_metadata.filter(
      (e) => e.Vouchee.length > 0
    );
    if (
      candidateLocationFilterDropdown != "empty" &&
      positionTypeFilterDropdown != "empty"
    ) {
      // Candidate Location and Position Type Interviewed for are entered by user
      return availableCandidates.filter(
        (e) =>
          e.Vouchee[0].locationState == candidateLocationFilterDropdown &&
          e.positionType == positionTypeFilterDropdown
      );
    } else if (
      candidateLocationFilterDropdown != "empty" &&
      yearsOfExperienceFilterDropdown != "empty"
    ) {
      // Candidate Location and Years of Experience are entered by user

      return availableCandidates.filter(
        (e) =>
          e.Vouchee[0].locationState == candidateLocationFilterDropdown &&
          e.yearsOfExperience == yearsOfExperienceFilterDropdown
      );
    } else if (
      yearsOfExperienceFilterDropdown != "empty" &&
      positionTypeFilterDropdown != "empty"
    ) {
      // Position Type and Years of Experience are entered by user

      return availableCandidates.filter(
        (e) =>
          e.positionType == positionTypeFilterDropdown &&
          e.yearsOfExperience == yearsOfExperienceFilterDropdown
      );
    } else if (
      yearsOfExperienceFilterDropdown != "empty" &&
      positionTypeFilterDropdown != "empty" &&
      candidateLocationFilterDropdown != "empty"
    ) {
      // Position Type, Candidate Location and, Years of Experience are entered by user

      return availableCandidates.filter(
        (e) =>
          e.Vouchee[0].locationState == candidateLocationFilterDropdown &&
          e.yearsOfExperience == yearsOfExperienceFilterDropdown &&
          e.positionType == positionTypeFilterDropdown
      );
    } else if (
      yearsOfExperienceFilterDropdown != "empty" &&
      positionTypeFilterDropdown == "empty" &&
      candidateLocationFilterDropdown == "empty"
    ) {
      //Only Years of Experience are entered by user

      return availableCandidates.filter(
        (e) => e.yearsOfExperience == yearsOfExperienceFilterDropdown
      );
    } else if (
      yearsOfExperienceFilterDropdown == "empty" &&
      positionTypeFilterDropdown != "empty" &&
      candidateLocationFilterDropdown == "empty"
    ) {
      //Only Position Type are entered by user

      return availableCandidates.filter(
        (e) => e.positionType == positionTypeFilterDropdown
      );
    } else if (
      yearsOfExperienceFilterDropdown == "empty" &&
      positionTypeFilterDropdown == "empty" &&
      candidateLocationFilterDropdown != "empty"
    ) {
      //Only Candidate Location are entered by user

      return availableCandidates.filter(
        (e) => e.Vouchee[0].locationState == candidateLocationFilterDropdown
      );
    } else {
      // all candidates

      return availableCandidates;
    }
  };

  const shortListFilter = () => {
    const x = vouchData.shortlist.map((e) => e.candidateId);
    return filterManage().filter((e) => !x.includes(e.candidateId));
  };

  const candidateCounter = () => {
    setExistingCandidates(0);
    shortListFilter().map((e, i) => setExistingCandidates(i + 1));
  };

  return (
    <div className="grid grid-cols-12">
      {vouchData &&
        shortListFilter().map((e, i) => (
          <CandidateTile
            userID={e.candidateId}
            firstName={e.Candidate_Contact[0].candidateFirstName}
            positionTitle={e.positionTitle}
            salaryRange={e.salaryRange}
            canLocationState={e.Vouchee[0].locationState}
            canLocationCity={e.Vouchee[0].locationCity}
            hrLocationState={e.Hr_Account[0].locationState}
            hrLocationCity={e.Hr_Account[0].locationCity}
            numEmployees={e.Company_Data[0].rangeOfEmployees}
            companyName={e.Company_Data[0].corporateName}
            stageInterview={e.stageOfInterview}
            userLinkedinURL={e.Vouchee[0].linkedIn}
            userEmailAction={e.Candidate_Contact[0].candidateEmail}
            refetchShortList={refetchShortList}
            hrData={hrData}
            key={i}
            hrManagerIndustry={e.Hr_Account[0].industry}
            yearsOfExperience={e.yearsOfExperience}
            anonData={anonData}
            refetchAnonData={refetchAnonData}
          />
        ))}
      {vouchData && candidateCounter()}
    </div>
  );
};

export default DashCandidateTiles;
