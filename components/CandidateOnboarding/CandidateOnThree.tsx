import React from "react";
import { ButtonVouch } from "../ui/ButtonVouch";

export interface CandidateOnThreeProps {}

export const CandidateOnThree: React.FC<CandidateOnThreeProps> = ({}) => {
  const nextState = () => {};
  return (
    <div>
      <div className={"px-8 shadow-lg rounded-xl w-3/5 h-auto bg-white"}>
        <div className={"pt-8"}>Thank you for your submisssion!</div>
        <div className={"pt-2 text-xs"}>
          Your profile is now accessible as a qualified lead for other hiring
          managers in our ecosystesm. As a premium referred candidate, HR
          managers may reach out to advance you into upcoming interview rounds.
        </div>
        <div className={"pb-4 border-b border-gray-200 "}></div>
      </div>
    </div>
  );
};
