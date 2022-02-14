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
}: DashCandidateTilesShortListProps) => {
  const candidateCounter = () => {
    setExistingCandidates(0);
    vouchData.shortlist
      .filter((e) => e.hr_voucher_metadatum.Vouchee.length > 0)
      .filter((e) => e.status === filter)
      .map((_, i) => setExistingCandidates(i + 1));
  };

  const filterManage = () => {
    if (
      candidateLocationFilterDropdown != "empty" &&
      positionTypeFilterDropdown != "empty"
    ) {
      return vouchData.shortlist
        .filter((e) => e.hr_voucher_metadatum.Vouchee.length > 0)

        .filter(
          (e) =>
            e.hr_voucher_metadatum.Vouchee[0].locationState ==
            candidateLocationFilterDropdown
        )
        .filter(
          (e) =>
            e.hr_voucher_metadatum.positionType == positionTypeFilterDropdown
        );
    } else if (
      candidateLocationFilterDropdown != "empty" &&
      yearsOfExperienceFilterDropdown != "empty"
    ) {
      return vouchData.shortlist
        .filter((e) => e.hr_voucher_metadatum.Vouchee.length > 0)

        .filter(
          (e) =>
            e.hr_voucher_metadatum.Vouchee[0].locationState ==
            candidateLocationFilterDropdown
        )
        .filter(
          (e) =>
            e.hr_voucher_metadatum.yearsOfExperience ==
            yearsOfExperienceFilterDropdown
        );
    } else if (
      yearsOfExperienceFilterDropdown != "empty" &&
      positionTypeFilterDropdown != "empty"
    ) {
      return vouchData.shortlist
        .filter((e) => e.hr_voucher_metadatum.Vouchee.length > 0)

        .filter(
          (e) =>
            e.hr_voucher_metadatum.positionType == positionTypeFilterDropdown
        )
        .filter(
          (e) =>
            e.hr_voucher_metadatum.yearsOfExperience ==
            yearsOfExperienceFilterDropdown
        );
    } else if (
      yearsOfExperienceFilterDropdown != "empty" &&
      positionTypeFilterDropdown != "empty" &&
      candidateLocationFilterDropdown != "empty"
    ) {
      return vouchData.shortlist
        .filter((e) => e.hr_voucher_metadatum.Vouchee.length > 0)

        .filter(
          (e) =>
            e.hr_voucher_metadatum.positionType == positionTypeFilterDropdown
        )
        .filter(
          (e) =>
            e.hr_voucher_metadatum.yearsOfExperience ==
            yearsOfExperienceFilterDropdown
        )
        .filter(
          (e) =>
            e.hr_voucher_metadatum.Vouchee[0].locationState ==
            candidateLocationFilterDropdown
        );
    } else if (
      yearsOfExperienceFilterDropdown != "empty" &&
      positionTypeFilterDropdown == "empty" &&
      candidateLocationFilterDropdown == "empty"
    ) {
      return vouchData.shortlist
        .filter((e) => e.hr_voucher_metadatum.Vouchee.length > 0)
        .filter(
          (e) =>
            e.hr_voucher_metadatum.yearsOfExperience ==
            yearsOfExperienceFilterDropdown
        );
    } else if (
      yearsOfExperienceFilterDropdown == "empty" &&
      positionTypeFilterDropdown != "empty" &&
      candidateLocationFilterDropdown == "empty"
    ) {
      return vouchData.shortlist
        .filter((e) => e.hr_voucher_metadatum.Vouchee.length > 0)
        .filter(
          (e) =>
            e.hr_voucher_metadatum.positionType == positionTypeFilterDropdown
        );
    } else if (
      yearsOfExperienceFilterDropdown == "empty" &&
      positionTypeFilterDropdown == "empty" &&
      candidateLocationFilterDropdown != "empty"
    ) {
      return vouchData.shortlist
        .filter((e) => e.hr_voucher_metadatum.Vouchee.length > 0)
        .filter(
          (e) =>
            e.hr_voucher_metadatum.Vouchee[0].locationState ==
            candidateLocationFilterDropdown
        );
    } else {
      return vouchData.shortlist.filter(
        (e) => e.hr_voucher_metadatum.Vouchee.length > 0
      );
    }
  };

  return (
    <div className="grid grid-cols-12">
      {hrData &&
        vouchData &&
        filterManage()
          .filter((e) => e.status === filter)
          .filter((e) => e.hr_voucher_metadatum.Vouchee.length > 0)
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
            />
          ))}
      {vouchData && candidateCounter()}
    </div>
  );
};

export default DashCandidateTilesShortList;
