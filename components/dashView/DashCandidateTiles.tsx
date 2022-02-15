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
}

const DashCandidateTiles = ({
  vouchData,
  refetchShortList,
  candidateLocationFilterDropdown,
  yearsOfExperienceFilterDropdown,
  positionTypeFilterDropdown,
  anonData,
  hrData,
  setExistingCandidates,
}: DashCandidateTilesProps) => {
  const filterManage = () => {
    if (
      candidateLocationFilterDropdown != "empty" &&
      positionTypeFilterDropdown != "empty"
    ) {
      return vouchData.hr_voucher_metadata
        .filter((e) => e.Vouchee.length > 0)
        .filter(
          (e) => e.Vouchee[0].locationState == candidateLocationFilterDropdown
        )
        .filter((e) => e.positionType == positionTypeFilterDropdown);
    } else if (
      candidateLocationFilterDropdown != "empty" &&
      yearsOfExperienceFilterDropdown != "empty"
    ) {
      return vouchData.hr_voucher_metadata
        .filter((e) => e.Vouchee.length > 0)

        .filter(
          (e) => e.Vouchee[0].locationState == candidateLocationFilterDropdown
        )
        .filter((e) => e.yearsOfExperience == yearsOfExperienceFilterDropdown);
    } else if (
      yearsOfExperienceFilterDropdown != "empty" &&
      positionTypeFilterDropdown != "empty"
    ) {
      return vouchData.hr_voucher_metadata
        .filter((e) => e.Vouchee.length > 0)

        .filter((e) => e.positionType == positionTypeFilterDropdown)
        .filter((e) => e.yearsOfExperience == yearsOfExperienceFilterDropdown);
    } else if (
      yearsOfExperienceFilterDropdown != "empty" &&
      positionTypeFilterDropdown != "empty" &&
      candidateLocationFilterDropdown != "empty"
    ) {
      return vouchData.hr_voucher_metadata
        .filter((e) => e.Vouchee.length > 0)

        .filter((e) => e.positionType == positionTypeFilterDropdown)
        .filter((e) => e.yearsOfExperience == yearsOfExperienceFilterDropdown)
        .filter(
          (e) => e.Vouchee[0].locationState == candidateLocationFilterDropdown
        );
    } else if (
      yearsOfExperienceFilterDropdown != "empty" &&
      positionTypeFilterDropdown == "empty" &&
      candidateLocationFilterDropdown == "empty"
    ) {
      return vouchData.hr_voucher_metadata
        .filter((e) => e.Vouchee.length > 0)
        .filter((e) => e.yearsOfExperience == yearsOfExperienceFilterDropdown);
    } else if (
      yearsOfExperienceFilterDropdown == "empty" &&
      positionTypeFilterDropdown != "empty" &&
      candidateLocationFilterDropdown == "empty"
    ) {
      return vouchData.hr_voucher_metadata
        .filter((e) => e.Vouchee.length > 0)
        .filter((e) => e.positionType == positionTypeFilterDropdown);
    } else if (
      yearsOfExperienceFilterDropdown == "empty" &&
      positionTypeFilterDropdown == "empty" &&
      candidateLocationFilterDropdown != "empty"
    ) {
      return vouchData.hr_voucher_metadata
        .filter((e) => e.Vouchee.length > 0)
        .filter(
          (e) => e.Vouchee[0].locationState == candidateLocationFilterDropdown
        );
    } else {
      return vouchData.hr_voucher_metadata.filter((e) => e.Vouchee.length > 0);
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
          .map((e, i) => (
            <CandidateTile
              userID={e.candidateId}
              firstName={e.Candidate_Contact[0].candidateFirstName}
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
              userLinkedinURL={e.Vouchee[0].linkedIn}
              userEmailAction={e.Candidate_Contact[0].candidateEmail}
              refetchShortList={refetchShortList}
              hrData={hrData}
              key={i}
              hrManagerIndustry={e.Hr_Account[0].industry}
              yearsOfExperience={e.yearsOfExperience}
              anonData={anonData}
            />
          ))}
      {vouchData && candidateCounter()}
    </div>
  );
};

export default DashCandidateTiles;
