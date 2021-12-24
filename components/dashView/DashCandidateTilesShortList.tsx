import React from "react";
import { CandidateTile } from "./CandidateTile";

export interface DashCandidateTilesShortListProps {
  vouchData: any;
  filter: string;
}

const DashCandidateTilesShortList = ({
  vouchData,
  filter,
}: DashCandidateTilesShortListProps) => {
  return (
    <div className="grid grid-cols-12">
      {vouchData &&
        vouchData.shortlist
          .filter((e) => e.status === filter)
          .map((e, i) => (
            <CandidateTile
              userID={e.candidateId}
              positionTitle={e.positionTitle}
              salaryRange={e.salaryRange}
              jobLocation="3/5"
              companyLogo="3/5"
              numEmployees="3/5"
              companyName="3/5"
              stageInterview={e.stageOfInterview}
              stageNumber="3/5"
              pastPosition1="3/5"
              pastIndustry1="3/5"
              standOutSkill1="3/5"
              userLinkedinURL="3/5"
              userEmailAction="3/5"
            />
          ))}
    </div>
  );
};

export default DashCandidateTilesShortList;
