import React from "react";
import { ButtonVouch } from "../ui/ButtonVouch";

export interface CandidateOnOneProps {}

export const CandidateOnOne: React.FC<CandidateOnOneProps> = ({}) => {
  return (
    <div>
      <div className={"border-2 border-black rounded-xl w-3/5 h-auto"}>
        <div className={""}>Welcome to a Network of Premium Candidates</div>
        <div className={"text-xs"}>
          To maximize your chances of being match wtih another similar company,
          let the HR Managers learn a little more about you.
        </div>
        <div className={"border-b border-gray-200 "}></div>
      </div>
      <ButtonVouch
        backgroundColour={"VouchGreen"}
        buttonType={"rounded"}
        textColour={"white"}
        label={"Yes, Sign me up!"}
        disabled={false}
        onClick={}
      />
    </div>
  );
};
