import React from "react";
import { CandidateTile } from "../dashView/CandidateTile";

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

    vouchData.demo_dshortlist
      .filter((e) => e.datam.demoVouchee.length > 0)

      .filter((e) => e.status === filter)

      .map((_, i) => setExistingCandidates(i + 1));
  };

  const filterManage = () => {
    if (filterJobCategory != "empty" && filterJobSeniority != "empty") {
      return vouchData.demo_dshortlist
        .filter((e) => e.datam.demoVouchee.length > 0)

        .filter((e) => e.datam.demoVouchee[0].jobCategory == filterJobCategory)
        .filter((e) => e.datam.demoVouchee[0].seniority == filterJobSeniority);
    } else if (filterJobCategory != "empty" && filterStateLocation != "empty") {
      return vouchData.demo_dshortlist
        .filter((e) => e.datam.demoVouchee.length > 0)

        .filter((e) => e.datam.demoVouchee[0].jobCategory == filterJobCategory)
        .filter(
          (e) => e.datam.demoVouchee[0].locationState == filterStateLocation
        );
    } else if (
      filterStateLocation != "empty" &&
      filterJobSeniority != "empty"
    ) {
      return vouchData.demo_dshortlist
        .filter((e) => e.datam.demoVouchee.length > 0)

        .filter((e) => e.datam.demoVouchee[0].seniority == filterJobSeniority)
        .filter(
          (e) => e.datam.demoVouchee[0].locationState == filterStateLocation
        );
    } else if (
      filterStateLocation != "empty" &&
      filterJobSeniority != "empty" &&
      filterJobCategory != "empty"
    ) {
      return vouchData.demo_dshortlist
        .filter((e) => e.datam.demoVouchee.length > 0)

        .filter((e) => e.datam.demoVouchee[0].seniority == filterJobSeniority)
        .filter(
          (e) => e.datam.demoVouchee[0].locationState == filterStateLocation
        )
        .filter((e) => e.datam.demoVouchee[0].jobCategory == filterJobCategory);
    } else if (
      filterStateLocation != "empty" &&
      filterJobSeniority == "empty" &&
      filterJobCategory == "empty"
    ) {
      return vouchData.demo_dshortlist
        .filter((e) => e.datam.demoVouchee.length > 0)
        .filter(
          (e) => e.datam.demoVouchee[0].locationState == filterStateLocation
        );
    } else if (
      filterStateLocation == "empty" &&
      filterJobSeniority != "empty" &&
      filterJobCategory == "empty"
    ) {
      return vouchData.demo_dshortlist
        .filter((e) => e.datam.demoVouchee.length > 0)
        .filter((e) => e.datam.demoVouchee[0].seniority == filterJobSeniority);
    } else if (
      filterStateLocation == "empty" &&
      filterJobSeniority == "empty" &&
      filterJobCategory != "empty"
    ) {
      return vouchData.demo_dshortlist
        .filter((e) => e.datam.demoVouchee.length > 0)
        .filter((e) => e.datam.demoVouchee[0].jobCategory == filterJobCategory);
    } else {
      return vouchData.demo_dshortlist.filter(
        (e) => e.datam.demoVouchee.length > 0
      );
    }
  };

  return (
    <div className="grid grid-cols-12">
      {hrData &&
        vouchData &&
        filterManage()
          .filter((e) => e.status === filter)
          .filter((e) => e.datam.demoVouchee.length > 0)
          // .filter(
          //   (e) =>
          //     e.datam.demoVouchee[0].companyWebsite ==
          //     hrData[0].companyWebsite
          // )
          .map((e, i) => (
            <CandidateTile
              userID={e.candidateId}
              firstName={e.datam.Candidate_Contact[0].candidateFirstName}
              lastName={e.datam.Candidate_Contact[0].candidateLastName}
              positionTitle={e.datam.positionTitle}
              salaryRange={e.datam.salaryRange}
              jobLocation={
                e.datam.demoVouchee[0].locationCity == "Yes"
                  ? "Remote"
                  : e.datam.demoVouchee[0].locationCity
              }
              numEmployees={e.datam.Company_Data[0].rangeOfEmployees}
              companyName={e.datam.Company_Data[0].corporateName}
              stageInterview={e.datam.stageOfInterview}
              pastPosition1={e.datam.demoVouchee[0].positionTitle}
              pastCompanyName={e.datam.demoVouchee[0].companyName}
              standOutSkill1={e.datam.standOutSkill1}
              standOutSkill2={e.datam.standOutSkill2}
              userLinkedinURL={e.datam.demoVouchee[0].linkedIn}
              userEmailAction={e.datam.Candidate_Contact[0].candidateEmail}
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
