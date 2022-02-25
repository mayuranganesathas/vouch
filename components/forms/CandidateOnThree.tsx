import React from "react";
import { ButtonVouch } from "../ui/ButtonVouch";

export interface CandidateOnThreeProps {}

export const CandidateOnThree: React.FC<CandidateOnThreeProps> = ({}) => {
  return (
    <div className={"flex items-center justify-center"}>
      <div className={"px-8 shadow-lg rounded-xl w-3/5 h-auto bg-white"}>
        <div className={"pt-8 font-bold text-gray-700"}>
          Thank you for joining VOUCH!
        </div>
        <div className={"pt-2 text-xs text-gray-500"}>
          Companies may reach out to request access to your LinkedIn Profile or
          schedule a time to connect.
        </div>
        <div className="flex justify-center items-center py-8">
          <img
            src="./images/VouchLogo1.png"
            width="100"
            height="auto"
            className={"flex justify-center items-center py-2 px-2"}
          />
        </div>
      </div>
    </div>
  );
};
