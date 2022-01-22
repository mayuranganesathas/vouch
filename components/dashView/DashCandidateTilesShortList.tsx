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
  filterJobCategory: string;
  filterJobSeniority: string;
  filterStateLocation: string;
}

const DashCandidateTilesShortList = ({
  vouchData,
  filter,
  refetchShortList,
  setExistingCandidates,
  hrData,
  stageStatus,
  filterJobCategory,
  filterJobSeniority,
  filterStateLocation,
}: DashCandidateTilesShortListProps) => {
  const candidateCounter = () => {
    setExistingCandidates(0);

    vouchData.shortlist
      .filter((e) => e.status === filter)
      .filter((e) => e.hr_voucher_metadatum.Vouchee.length > 0)

      .map((_, i) => setExistingCandidates(i + 1));
  };

  const filterManage = () => {
    if (filterJobCategory != "empty" && filterJobSeniority != "empty") {
      return vouchData.shortlist
        .filter(
          (e) =>
            e.hr_voucher_metadatum.Vouchee[0].jobCategory == filterJobCategory
        )
        .filter(
          (e) =>
            e.hr_voucher_metadatum.Vouchee[0].seniority == filterJobSeniority
        );
    } else if (filterJobCategory != "empty" && filterStateLocation != "empty") {
      return vouchData.shortlist
        .filter(
          (e) =>
            e.hr_voucher_metadatum.Vouchee[0].jobCategory == filterJobCategory
        )
        .filter(
          (e) =>
            e.hr_voucher_metadatum.Vouchee[0].locationState ==
            filterStateLocation
        );
    } else if (
      filterStateLocation != "empty" &&
      filterJobSeniority != "empty"
    ) {
      return vouchData.shortlist
        .filter(
          (e) =>
            e.hr_voucher_metadatum.Vouchee[0].seniority == filterJobSeniority
        )
        .filter(
          (e) =>
            e.hr_voucher_metadatum.Vouchee[0].locationState ==
            filterStateLocation
        );
    } else if (
      filterStateLocation != "empty" &&
      filterJobSeniority != "empty" &&
      filterJobCategory != "empty"
    ) {
      return vouchData.shortlist
        .filter(
          (e) =>
            e.hr_voucher_metadatum.Vouchee[0].seniority == filterJobSeniority
        )
        .filter(
          (e) =>
            e.hr_voucher_metadatum.Vouchee[0].locationState ==
            filterStateLocation
        )
        .filter(
          (e) =>
            e.hr_voucher_metadatum.Vouchee[0].jobCategory == filterJobCategory
        );
    } else if (
      filterStateLocation != "empty" &&
      filterJobSeniority == "empty" &&
      filterJobCategory == "empty"
    ) {
      return vouchData.shortlist.filter(
        (e) =>
          e.hr_voucher_metadatum.Vouchee[0].locationState == filterStateLocation
      );
    } else if (
      filterStateLocation == "empty" &&
      filterJobSeniority != "empty" &&
      filterJobCategory == "empty"
    ) {
      return vouchData.shortlist.filter(
        (e) => e.hr_voucher_metadatum.Vouchee[0].seniority == filterJobSeniority
      );
    } else if (
      filterStateLocation == "empty" &&
      filterJobSeniority == "empty" &&
      filterJobCategory != "empty"
    ) {
      return vouchData.shortlist.filter(
        (e) =>
          e.hr_voucher_metadatum.Vouchee[0].jobCategory == filterJobCategory
      );
    } else {
      return vouchData.shortlist;
    }
  };

  return (
    <div className="grid grid-cols-12">
      {hrData &&
        vouchData &&
        filterManage()
          .filter((e) => e.status === filter)
          .filter((e) => e.hr_voucher_metadatum.Vouchee.length > 0)
          // .filter(
          //   (e) =>
          //     e.hr_voucher_metadatum.Vouchee[0].companyWebsite ==
          //     hrData[0].companyWebsite
          // )
          .map((e, i) => (
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
              pastCompanyName={e.hr_voucher_metadatum.Vouchee[0].companyName}
              standOutSkill1={e.hr_voucher_metadatum.standOutSkill1}
              standOutSkill2={e.hr_voucher_metadatum.standOutSkill2}
              userLinkedinURL={e.hr_voucher_metadatum.Vouchee[0].linkedIn}
              userEmailAction={
                e.hr_voucher_metadatum.Candidate_Contact[0].candidateEmail
              }
              refetchShortList={refetchShortList}
              hrData={hrData}
              stageStatus={stageStatus}
              key={i}
            />
          ))}
      {vouchData && candidateCounter()}
    </div>
  );
};

export default DashCandidateTilesShortList;
