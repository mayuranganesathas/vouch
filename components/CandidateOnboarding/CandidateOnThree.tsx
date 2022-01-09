import React from "react";
import { ButtonVouch } from "../ui/ButtonVouch";

export interface CandidateOnThreeProps {}

export const CandidateOnThree: React.FC<CandidateOnThreeProps> = ({}) => {
  return (
    <div className={"flex items-center justify-center"}>
      <div className={"px-8 shadow-lg rounded-xl w-3/5 h-auto bg-white"}>
        <div className={"pt-8"}>Thank you for your submisssion!</div>
        <div className={"pt-2 text-xs"}>
          Thank you for joining Vouch! Your profile is now live in the Vouch
          platform for companies to view. Recruitment teams or Hiring Managers
          may reach out to you directly to speak with you.
        </div>
        <div className={"pb-4 border-b border-gray-200 "}></div>
      </div>
    </div>
  );
};
