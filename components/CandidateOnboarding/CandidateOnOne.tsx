import React from "react";
import { ButtonVouch } from "../ui/ButtonVouch";

export interface CandidateOnOneProps {}

export const CandidateOnOne: React.FC<CandidateOnOneProps> = ({}) => {
  return (
    <div className={"flex justify-center items-center"}>
      <div className={"px-8 shadow-lg rounded-xl w-3/5 h-auto bg-white"}>
        <div className={"pt-8"}>Welcome to a Network of Premium Candidates</div>
        <div className={"pt-2 text-xs"}>
          To maximize your chances of being match wtih another similar company,
          let the HR Managers learn a little more about you.
        </div>
        <div className={"pb-4 border-b border-gray-200 "}></div>
      </div>
    </div>
  );
};