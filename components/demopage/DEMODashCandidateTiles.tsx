import React from "react";
import { CandidateTile } from "../dashView/CandidateTile";

export interface DashCandidateTilesProps {
  vouchData: any;
  refetchShortList: () => void;
  filterJobCategory: any;
  filterJobSeniority: any;
  filterStateLocation: any;
  existingCandidates: string;
  setExistingCandidates: (existingCandidates: any) => void;
  hrData: any;
  refetchAnonData: () => void;
}

const DashCandidateTiles = ({
  vouchData,
  refetchShortList,
  filterJobCategory,
  filterJobSeniority,
  filterStateLocation,
  hrData,
  refetchAnonData,
  setExistingCandidates,
}: DashCandidateTilesProps) => {
  const filterManage = () => {
    if (filterJobCategory != "empty" && filterJobSeniority != "empty") {
      return vouchData.hr_voucher_metadata
        .filter((e) => e.demoVouchee.length > 0)

        .filter((e) => e.demoVouchee[0].jobCategory == filterJobCategory)
        .filter((e) => e.demoVouchee[0].seniority == filterJobSeniority);
    } else if (filterJobCategory != "empty" && filterStateLocation != "empty") {
      return vouchData.hr_voucher_metadata
        .filter((e) => e.demoVouchee.length > 0)

        .filter((e) => e.demoVouchee[0].jobCategory == filterJobCategory)
        .filter((e) => e.demoVouchee[0].locationState == filterStateLocation);
    } else if (
      filterStateLocation != "empty" &&
      filterJobSeniority != "empty"
    ) {
      return vouchData.hr_voucher_metadata
        .filter((e) => e.demoVouchee.length > 0)

        .filter((e) => e.demoVouchee[0].seniority == filterJobSeniority)
        .filter((e) => e.demoVouchee[0].locationState == filterStateLocation);
    } else if (
      filterStateLocation != "empty" &&
      filterJobSeniority != "empty" &&
      filterJobCategory != "empty"
    ) {
      return vouchData.hr_voucher_metadata
        .filter((e) => e.demoVouchee.length > 0)

        .filter((e) => e.demoVouchee[0].seniority == filterJobSeniority)
        .filter((e) => e.demoVouchee[0].locationState == filterStateLocation)
        .filter((e) => e.demoVouchee[0].jobCategory == filterJobCategory);
    } else if (
      filterStateLocation != "empty" &&
      filterJobSeniority == "empty" &&
      filterJobCategory == "empty"
    ) {
      return vouchData.hr_voucher_metadata
        .filter((e) => e.demoVouchee.length > 0)
        .filter((e) => e.demoVouchee[0].locationState == filterStateLocation);
    } else if (
      filterStateLocation == "empty" &&
      filterJobSeniority != "empty" &&
      filterJobCategory == "empty"
    ) {
      return vouchData.hr_voucher_metadata
        .filter((e) => e.demoVouchee.length > 0)
        .filter((e) => e.demoVouchee[0].seniority == filterJobSeniority);
    } else if (
      filterStateLocation == "empty" &&
      filterJobSeniority == "empty" &&
      filterJobCategory != "empty"
    ) {
      return vouchData.hr_voucher_metadata
        .filter((e) => e.demoVouchee.length > 0)
        .filter((e) => e.demoVouchee[0].jobCategory == filterJobCategory);
    } else {
      return vouchData.hr_voucher_metadata.filter(
        (e) => e.demoVouchee.length > 0
      );
    }
  };

  const shortListFilter = () => {
    const x = vouchData.demo_dshortlist.map((e) => e.candidateId);
    return filterManage().filter((e) => !x.includes(e.candidateId));
  };

  const candidateCounter = () => {
    setExistingCandidates(0);
    shortListFilter()
      .filter((e) => e.demoVouchee.length > 0)
      .map((e, i) => setExistingCandidates(i + 1));
  };

  return (
    <div className="grid grid-cols-12">
      {vouchData &&
        shortListFilter()
          .filter((e) => e.demoVouchee.length > 0)
          // .filter(
          //   (e) => e.demoVouchee[0].companyWebsite == hrData[0].companyWebsite
          // )
          .map((e, i) => (
            <CandidateTile
              userID={e.candidateId}
              firstName={e.Candidate_Contact[0].candidateFirstName}
              positionTitle={e.positionTitle}
              salaryRange={e.salaryRange}
              jobLocation={
                e.demoVouchee[0].locationCity == "Yes"
                  ? "Remote"
                  : e.demoVouchee[0].locationCity
              }
              numEmployees={e.Company_Data[0].rangeOfEmployees}
              companyName={e.Company_Data[0].corporateName}
              stageInterview={e.stageOfInterview}
              userLinkedinURL={e.demoVouchee[0].linkedIn}
              userEmailAction={e.Candidate_Contact[0].candidateEmail}
              refetchShortList={refetchShortList}
              hrData={hrData}
              key={i}
              hrManagerIndustry={e.Hr_Account[0].industry}
              yearsOfExperience={e.yearsOfExperience}
              anonData={[]}
              refetchAnonData={refetchAnonData}
            />
          ))}
      {vouchData && candidateCounter()}
    </div>
  );
};

export default DashCandidateTiles;
